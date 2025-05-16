import type { MainNavItem, SidebarNavItem } from '@/types/nav'

export interface NavSite {
  main: MainNavItem[]
  sidebar: SidebarNavItem[]
}

/**
 * Primary navigation items displayed in the main menu.
 */
export const mainNav: MainNavItem[] = [
  {
    title: 'Home',
    href: '/',
  },

  {
    title: 'Features',
    href: '/features',
  },

  {
    title: 'Docs',
    href: '/docs',
  },
]

/**
 * Sidebar navigation structure for documentation pages.
 */
export const sidebarNav: SidebarNavItem[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        href: '/docs',
        items: [],
      },

      {
        title: 'Why I created this?',
        href: '/why-i-created-this',
        items: [],
      },

      {
        title: 'Project structure',
        href: '/project-structure',
        items: [],
      },

      {
        title: 'How to Use Playground?',
        href: '/how-to-use-playground',
        items: [],
      },
    ],
  },

  {
    title: 'Components',
    items: [
      {
        title: 'Working...',
        items: [],
      },
    ],
  },

  {
    title: 'Animations',
    items: [
      {
        title: 'Working...',
        items: [],
      },
    ],
  },

  {
    title: 'Utils',
    items: [
      {
        title: 'Working...',
        items: [],
      },
    ],
  },

  {
    title: 'Patterns',
    items: [
      {
        title: 'Working...',
        items: [],
      },
    ],
  },

  {
    title: 'Ideas',
    items: [
      {
        title: 'Working...',
        items: [],
      },
    ],
  },
]

/**
 * The navSite object contains the main and sidebar navigation items for the application.
 * It is structured to provide easy access to both navigation types.
 *
 * @type {NavSite}
 * @property {MainNavItem[]} main - The main navigation items.
 * @property {SidebarNavItem[]} sidebar - The sidebar navigation items.
 */
export const navSite: NavSite = {
  main: mainNav,
  sidebar: sidebarNav,
}
