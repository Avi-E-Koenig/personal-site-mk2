/**
 * Section heading marker component that displays a colored arrow
 * pointing right (>) for LTR languages and left (<) for RTL languages.
 * Used to create visual hierarchy and structure in section headings.
 */
export default function SectionHeadingMarker() {
  return (
    <span className="text-accent-500 font-bold" aria-hidden="true">
      {'>'}
    </span>
  )
}

