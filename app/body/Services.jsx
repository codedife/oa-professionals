
import { Calculator, FileText, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: "Accounting & Bookkeeping",
      description:
        "Professional accounting and bookkeeping support to help individuals and businesses organize their financial records and understand their finances.",
    },
    {
      icon: FileText,
      title: "Tax Services",
      description:
        "Tax-related support for individuals and businesses to help them manage their tax responsibilities and financial documentation.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#F8FAFC] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0F5132]">
            Our Services
          </p>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-[#1F2937] md:text-5xl">
            Professional Financial Support for Your Needs
          </h2>

          <p className="text-base leading-7 text-gray-600 md:text-lg">
            We provide accounting and tax services designed to
            support individuals and businesses in managing their
            financial responsibilities.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-xl md:p-10"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F5132]/10 text-[#0F5132] transition group-hover:bg-[#0F5132] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-[#1F2937] md:text-2xl">
                  {service.title}
                </h3>

                <p className="mb-8 leading-7 text-gray-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-semibold text-[#0F5132] transition hover:text-[#9A7614]"
                >
                  Discuss Your Needs
                  <ArrowUpRight size={18} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Need professional accounting or tax support? Get in
            touch with O&A Professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
