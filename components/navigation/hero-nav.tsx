"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/blog-posts",
    label: "Blog",
    children: [
      { href: "/blog-posts/tech-articles", label: "Tech Articles" },
      { href: "/blog-posts/video-content", label: "Video Content" },
      { href: "/blog-posts/book-reviews", label: "Book Reviews" },
    ],
  },
  { href: "/my-projects", label: "My Projects" },
  { href: "/contact-me", label: "Contact Me" },
];

function NavItem({ href, label, children }: NavItem) {
  let pathname = usePathname();
  let isActive = pathname === href || (children && pathname.startsWith(href));
  let isChildActive = children?.some((child) => pathname === child.href);

  return (
    <li className={children ? "dropdown dropdown-hover" : ""}>
      <Link
        href={href}
        className={clsx(
          "block px-3 py-2 transition",
          isActive || isChildActive
            ? "text-primary dark:text-primary"
            : "hover:text-primary font-semibold dark:hover:text-primary"
        )}
      >
        {label}
      </Link>
      {children && (
        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={clsx(
                  pathname === child.href
                    ? "text-primary dark:text-primary"
                    : "hover:text-primary font-semibold dark:hover:text-primary"
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {(isActive || isChildActive) && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
      )}
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="flex justify-center mt-4 top-6 z-50">
      <ul className="flex flex-wrap rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
}
