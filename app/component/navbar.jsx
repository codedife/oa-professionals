import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-brand-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-display text-2xl font-bold text-brand-green">
            O&A
          </span>

          <span className="text-xs font-medium tracking-[0.2em] text-brand-charcoal">
            PROFESSIONALS
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-brand-charcoal transition hover:text-brand-green"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-brand-charcoal transition hover:text-brand-green"
          >
            About Us
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-brand-charcoal transition hover:text-brand-green"
          >
            Services
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-brand-charcoal transition hover:text-brand-green"
          >
            Contact
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-900"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}