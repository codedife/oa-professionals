
import {
  ArrowUpRight,
  Phone,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const phoneNumber = ""; // Add the firm's phone number
  const whatsappNumber = ""; // Add WhatsApp number with country code

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Accounting & Bookkeeping",
    "Tax Services",
  ];

  return (
    <footer className="bg-[#10271D] text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-2">
          <a
            href="#home"
            className="mb-5 inline-flex items-center gap-3"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/60 bg-white/5 text-xl font-bold text-[#D4AF37]">
              O&A
            </span>

            <span>
              <span className="block text-xl font-bold tracking-wide">
                O&A Professionals
              </span>
              <span className="mt-1 block text-xs tracking-widest text-[#D4AF37]">
                ACCOUNTING & TAX SERVICES
              </span>
            </span>
          </a>

          <p className="mb-6 max-w-md text-sm leading-7 text-white/70">
            Your Finances. Our Professional Commitment.
            Supporting individuals and businesses with accounting
            and tax services backed by 10 years of experience.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={
                phoneNumber
                  ? `tel:${phoneNumber}`
                  : "#contact"
              }
              className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#10271D] transition hover:bg-[#E7C96A]"
            >
              <Phone size={16} />
              Call Us
            </a>

            <a
              href={
                whatsappNumber
                  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
                  : "#contact"
              }
              target={whatsappNumber ? "_blank" : undefined}
              rel={
                whatsappNumber
                  ? "noopener noreferrer"
                  : undefined
              }
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-base font-bold text-[#D4AF37]">
            Quick Links
          </h3>

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[#D4AF37]"
                >
                  {link.name}
                  <ArrowUpRight size={13} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-6 text-base font-bold text-[#D4AF37]">
            Our Services
          </h3>

          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="text-sm text-white/70 transition hover:text-[#D4AF37]"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] transition hover:text-white"
          >
            Discuss Your Needs
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-white/60">
            © {currentYear} O&A Professionals. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 transition hover:text-[#D4AF37]"
          >
            Back to Top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
