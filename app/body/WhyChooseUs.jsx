
import {
  ShieldCheck,
  BriefcaseBusiness,
  Handshake,
  Clock,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Professional Approach",
    description:
      "We approach accounting and tax-related responsibilities with care, attention, and a commitment to professional service.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Services for Individuals and Businesses",
    description:
      "Our services are designed to support the financial needs of both individual clients and businesses.",
  },
  {
    icon: Handshake,
    title: "Client-Focused Service",
    description:
      "We aim to understand each client's needs and provide relevant support for their accounting and tax concerns.",
  },
  {
    icon: Clock,
    title: "10 Years of Experience",
    description:
      "Our decade of experience provides an established foundation for serving clients with accounting and tax-related needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#F8FAFC] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0F5132]">
            Why Choose Us
          </p>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-[#1F2937] md:text-5xl">
            A Professional Partner for Your Financial Needs
          </h2>

          <p className="text-base leading-7 text-gray-600 md:text-lg">
            We combine experience with a professional approach to
            accounting and tax services for individuals and businesses.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F5132]/10 text-[#0F5132] transition duration-300 group-hover:bg-[#0F5132] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.7} />
                </div>

                <h3 className="mb-3 text-lg font-bold text-[#1F2937]">
                  {reason.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#0F5132] p-8 text-center md:flex-row md:p-10 md:text-left">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
              Looking for Accounting or Tax Support?
            </h3>

            <p className="max-w-2xl leading-7 text-white/80">
              Get in touch with O&A Professionals to discuss your needs.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#D4AF37] px-6 py-3.5 font-semibold text-[#1F2937] transition hover:bg-[#E7C96A]"
          >
            Contact Us
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
