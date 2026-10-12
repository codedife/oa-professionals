
import { Award, BriefcaseBusiness, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "10 Years of Experience",
      description:
        "A decade of experience serving clients with accounting and tax-related needs.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Business & Individual Support",
      description:
        "Services designed for both businesses and individuals.",
    },
    {
      icon: Users,
      title: "Professional Commitment",
      description:
        "A commitment to professional service and understanding each client's needs.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white px-6 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left Side */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0F5132]">
            About O&A Professionals
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1F2937] md:text-5xl">
            Experience You Can Trust.
            <span className="text-[#0F5132]">
              {" "}Service You Can Rely On.
            </span>
          </h2>

          <p className="mb-5 leading-8 text-gray-600">
            O&A Professionals is an established firm with 10 years
            of experience providing services to individuals and
            businesses.
          </p>

          <p className="mb-8 leading-8 text-gray-600">
            We understand that managing financial records and tax
            responsibilities requires care and attention. Our aim
            is to provide professional support that helps clients
            manage these responsibilities with greater confidence.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-lg bg-[#0F5132] px-6 py-3.5 font-semibold text-white transition hover:bg-[#0B3D26]"
          >
            Talk to Our Team
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="relative">
          <div className="absolute -right-3 -top-3 h-32 w-32 rounded-tr-3xl border-r-4 border-t-4 border-[#D4AF37] md:-right-5 md:-top-5" />

          <div className="relative rounded-2xl bg-[#0F5132] p-8 text-white shadow-xl md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#E7C96A]">
              O&A Professionals
            </p>

            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              Your Finances.
              <br />
              Our Professional Commitment.
            </h3>

            <p className="mb-8 leading-7 text-white/80">
              Supporting individuals and businesses with accounting
              and tax services, built around professional commitment.
            </p>

            <div className="mb-8 h-px bg-white/20" />

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold text-[#E7C96A]">
                  10+
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Years of Experience
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-[#E7C96A]">
                  2
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Core Service Areas
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-bl-3xl border-b-4 border-l-4 border-[#D4AF37] md:-bottom-5 md:-left-5" />
        </div>
      </div>

      {/* Highlights */}
      <div className="mx-auto mt-20 grid max-w-6xl gap-8 border-t border-gray-200 pt-12 md:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F5132]/10 text-[#0F5132]">
                <Icon size={24} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="mb-2 font-bold text-[#1F2937]">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
