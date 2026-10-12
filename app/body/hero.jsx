import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-background"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2 lg:px-10">
        {/* Left Content */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-brand-gold"></span>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              Accounting & Tax Services
            </p>
          </div>

          <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-brand-charcoal sm:text-5xl lg:text-6xl">
            Financial Clarity.
            <span className="mt-2 block text-brand-green">
              Professional Confidence.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
            Helping individuals and businesses manage their accounting
            records and tax responsibilities with professional care.
          </p>

          <p className="mt-4 text-sm font-medium text-gray-500">
            10 years of experience serving individuals and businesses.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-4 font-semibold text-white transition hover:bg-green-900"
            >
              Contact Us
              <ArrowRight size={18} />
            </a>

            <Link
              href="#services"
              className="rounded-full border border-brand-green px-6 py-4 font-semibold text-brand-green transition hover:bg-green-50"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-green" />
              Accounting & Bookkeeping
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-green" />
              Tax Services
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full border border-brand-gold/60"></div>

          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-brand-gold/15"></div>

          <div className="relative rounded-[2rem] bg-brand-green p-8 text-white shadow-2xl sm:p-12">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/70">
                  O&A Professionals
                </p>

                <h2 className="mt-2 font-display text-3xl font-bold">
                  Your Finances.
                </h2>

                <p className="mt-1 text-lg text-white/80">
                  Our Commitment.
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold text-brand-green">
                <CheckCircle2 size={30} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm text-white/70">
                  Accounting & Bookkeeping
                </p>

                <p className="mt-2 font-semibold">
                  Organised Financial Records
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm text-white/70">
                  Tax Services
                </p>

                <p className="mt-2 font-semibold">
                  Professional Tax Support
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-brand-gold"></div>

              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                Professional Commitment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}