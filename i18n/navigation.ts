import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

// Locale-aware navigation APIs. Link/router here take a locale-agnostic
// pathname and add the correct prefix automatically.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
