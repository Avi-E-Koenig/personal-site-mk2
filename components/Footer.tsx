'use client'

import ContactLinks from './ContactLinks'

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 border-t border-border-default bg-background-paper mt-auto">
      <div className="container-content">
        <div className="py-6">
          <ContactLinks variant="footer" />
        </div>
      </div>
    </footer>
  )
}

