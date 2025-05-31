import type { FooterNavItem, MainNavItem, SidebarNavItem } from '@/types/nav'

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
        title: 'Working in components...',
        items: [],
      },
    ],
  },

  {
    title: 'Animations',
    items: [
      {
        title: 'Working in animations...',
        items: [],
      },
    ],
  },

  {
    title: 'Utils',
    items: [
      {
        title: 'Working in utils...',
        items: [],
      },
    ],
  },

  {
    title: 'Patterns',
    items: [
      {
        title: 'Working in patterns...',
        items: [],
      },
    ],
  },

  {
    title: 'Ideas',
    items: [
      {
        title: 'Working in ideas...',
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

/**
 * Footer navigation links grouped by section title.
 * Each link has a label and optional href.
 */
export const footerLinks: FooterNavItem[] = [
  {
    title: 'Explore',
    items: [
      { title: 'Components', href: '#' },
      { title: 'Animations', href: '#' },
      { title: 'Utils', href: '#' },
      { title: 'Patterns', href: '#' },
    ],
  },

  {
    title: 'Behind sketch.ig',
    items: [
      { title: 'About me', href: '#' },
      { title: 'What is this?', href: '#' },
      { title: 'GitHub', href: '#' },
      { title: 'Faq', href: '#' },
    ],
  },

  {
    title: 'Find me',
    items: [
      { title: 'Me', href: '#' },
      { title: 'Github', href: '#' },
      { title: 'Linkedin', href: '#' },
    ],
  },
]
