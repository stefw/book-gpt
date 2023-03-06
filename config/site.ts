import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "heaven IA",
  description: "heaven IA",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Credentials",
      href: "/credentials",
    },
  ],
  links: {
    twitter: "https://twitter.com/fraserxu",
    github: "https://github.com/fraserxu/book-gpt",
  },
}
