import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

/**
 * Proxies Avi's résumé from its Google Doc source (single source of truth —
 * edits in Drive go live without a redeploy), falling back to a bundled
 * last-known-good copy if Drive is ever unreachable. See docs/adr/0003.
 */
const DRIVE_FILE_ID = '1A1Zofx_sQu0cIhby_yQjElr3sw2W7i3H'
const EXPORT_URL = `https://docs.google.com/document/d/${DRIVE_FILE_ID}/export?format=pdf`
const CONTENT_DISPOSITION = 'inline; filename="Avi-Koenig-Resume.pdf"'

export async function GET() {
  try {
    const res = await fetch(EXPORT_URL, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error(`Drive export failed: ${res.status}`)

    const buffer = await res.arrayBuffer()
    if (buffer.byteLength < 1000) throw new Error('Drive export unexpectedly small')

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': CONTENT_DISPOSITION,
        'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch {
    const fallback = await readFile(path.join(process.cwd(), 'public', 'resume-fallback.pdf'))
    return new NextResponse(fallback, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': CONTENT_DISPOSITION,
        // Short cache on the fallback so we retry Drive again soon.
        'Cache-Control': 'public, max-age=0, s-maxage=300',
      },
    })
  }
}
