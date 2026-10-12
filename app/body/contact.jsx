
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const phoneNumber = "08028195732";
  const whatsappNumber = "2348028195732";
  const emailAddress = "Oyinloye2390@gmail.com"; // Add the firm's Gmail address

  return (
    <section
      id="contact"
      className="bg-white px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0F5132]">
            Contact Us
          </p>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-[#1F2937] md:text-5xl">
            Let's Discuss Your Financial Needs
          </h2>

          <p className="text-base leading-7 text-gray-600 md:text-lg">
            Have a question about our accounting or tax services?
            Reach out to O&A Professionals to discuss how we can help.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Side */}
          <div className="rounded-2xl bg-[#0F5132] p-8 text-white md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#E7C96A]">
              Get in Touch
            </p>

            <h3 className="mb-5 text-2xl font-bold md:text-3xl">
              We're Ready to Hear From You
            </h3>

            <p className="mb-10 leading-7 text-white/80">
              Contact us by phone, WhatsApp, or email to make an enquiry
              about our services.
            </p>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E7C96A]">
                  <Phone size={23} />
                </div>

                <div>
                  <h4 className="mb-1 font-semibold">Call Us</h4>
                  <p className="text-sm leading-6 text-white/70">
                    Speak with us about your enquiry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E7C96A]">
                  <MessageCircle size={23} />
                </div>

                <div>
                  <h4 className="mb-1 font-semibold">WhatsApp</h4>
                  <p className="text-sm leading-6 text-white/70">
                    Send us a message about the services you need.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E7C96A]">
                  <MapPin size={23} />
                </div>

                <div>
                  <h4 className="mb-1 font-semibold">Our Office</h4>
                  <p className="text-sm leading-6 text-white/70">
                    Contact us to confirm our office location.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-2xl font-bold text-[#1F2937] md:text-3xl">
              Start a Conversation
            </h3>

            <p className="mb-8 leading-7 text-gray-600">
              Whether you're an individual or a business, we'd be
              glad to hear about your accounting or tax needs.
            </p>

            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 p-5 transition hover:border-[#0F5132] hover:bg-[#F8FAFC]"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F5132]/10 text-[#0F5132]">
                    <Phone size={22} />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-semibold text-[#1F2937]">
                      Call O&A Professionals
                    </span>
                    <span className="mt-1 block break-words text-sm text-gray-500">
                      {phoneNumber}
                    </span>
                  </span>
                </span>

                <ArrowUpRight size={20} className="shrink-0 text-[#0F5132]" />
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 p-5 transition hover:border-[#0F5132] hover:bg-[#F8FAFC]"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#0F5132]">
                    <MessageCircle size={22} />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-semibold text-[#1F2937]">
                      Chat on WhatsApp
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                      Send us a message
                    </span>
                  </span>
                </span>

                <ArrowUpRight size={20} className="shrink-0 text-[#0F5132]" />
              </a>

              {/* Gmail Card */}
              <a
                href={
                  emailAddress
                    ? `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(emailAddress)}`
                    : undefined
                }
                target={emailAddress ? "_blank" : undefined}
                rel={emailAddress ? "noopener noreferrer" : undefined}
                aria-disabled={!emailAddress}
                className={`flex items-center justify-between gap-3 rounded-xl border border-gray-200 p-5 transition ${
                  emailAddress
                    ? "hover:border-[#0F5132] hover:bg-[#F8FAFC]"
                    : "cursor-not-allowed opacity-60"
                }`}
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F5132]/10 text-[#0F5132]">
                    <Mail size={22} />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-semibold text-[#1F2937]">
                      Email O&A Professionals
                    </span>
                    <span className="mt-1 block break-all text-sm text-gray-500">
                      {emailAddress || "Business email to be added"}
                    </span>
                  </span>
                </span>

                <ArrowUpRight size={20} className="shrink-0 text-[#0F5132]" />
              </a>
            </div>

            <p className="mt-6 text-sm leading-6 text-gray-500">
              We look forward to discussing your needs and helping
              you identify the right service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
