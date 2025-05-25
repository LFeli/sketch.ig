import type { LucideIcon } from 'lucide-react'

/**
 * Represents a navigation item.
 */
export interface NavItem {
  /** Display title of the item */
  title: string
  /** Optional label for badges or extra info */
  label?: string
  /** Optional link URL */
  href?: string
  /** Optional icon component */
  icon?: LucideIcon
  /** Marks if the link is external */
  external?: boolean
  /** Marks if the item is disabled */
  disabled?: boolean
}

/**
 * Represents a navigation item with children.
 * Extends the NavItem interface to include child items.
 */
export interface NavItemWithChildren extends NavItem {
  /** Optional children items */
  items?: NavItemWithChildren[]
}

/**
 * Represents a main navigation item.
 * Extends the NavItem interface.
 */
export interface MainNavItem extends NavItem {}

/**
 * Represents a sidebar navigation item.
 * Extends the NavItem interface.
 */
export interface SidebarNavItem extends NavItemWithChildren {}

/**
 * Footer-specific navigation item.
 * Inherits all properties from NavItemWithChildren.
 */
export interface FooterNavItem extends NavItemWithChildren {}
