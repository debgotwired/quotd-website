import Image from "next/image";
import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.quotd.sh";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1a1a1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 flex items-center justify-between h-[72px]">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Quotd" width={26} height={28} />
            <span className="text-[19px] tracking-[-0.02em] font-semibold">
              Quotd
            </span>
          </a>
          <div className="flex items-center gap-8">
            <a
              href="#process"
              className="text-[13px] text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors hidden sm:block"
            >
              Process
            </a>
            <a
              href="#output"
              className="text-[13px] text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors hidden sm:block"
            >
              Output
            </a>
            <a
              href={`${APP_URL}/login`}
              className="text-[13px] font-medium bg-[#1a1a1a] text-[#fafaf9] px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ Hero ═══ */}
      <section className="pt-[160px] pb-20 sm:pt-[180px] sm:pb-28 px-6 sm:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[720px]">
            <h1 className="text-[clamp(2.8rem,6vw,4.5rem)] font-serif font-normal tracking-[-0.025em] leading-[1.08] animate-fade-in-up">
              Turn conversations
              <br />
              into <em>case studies</em>
            </h1>
            <p
              className="mt-7 text-[clamp(1.05rem,1.8vw,1.2rem)] text-[#1a1a1a]/50 leading-[1.65] max-w-[520px] animate-fade-in-up"
              style={{ animationDelay: "150ms" }}
            >
              Quotd conducts AI voice interviews with your customers and
              transforms them into publish-ready case studies with metrics,
              quotes, and narrative.
            </p>
            <div
              className="mt-10 flex items-center gap-6 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href={`${APP_URL}/login`}
                className="inline-flex items-center gap-2.5 bg-[#1a1a1a] text-[#fafaf9] pl-7 pr-6 py-3.5 rounded-full text-[14px] font-medium hover:bg-[#333] transition-colors"
              >
                Start for free
                <ArrowRight className="w-[15px] h-[15px]" />
              </a>
              <a
                href="#process"
                className="text-[14px] text-[#1a1a1a]/35 hover:text-[#1a1a1a]/70 transition-colors underline underline-offset-4 decoration-[#1a1a1a]/15"
              >
                How it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Process — left-aligned, numbered, no cards ═══ */}
      <section id="process" className="py-24 sm:py-32 px-6 sm:px-10 bg-white">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#1a1a1a]/30 mb-14">
            Process
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-14">
            <div>
              <p className="font-serif text-[3.5rem] leading-none text-[#1a1a1a]/10 mb-4">
                1
              </p>
              <h3 className="text-[17px] font-medium tracking-[-0.01em] mb-2.5">
                Share a link
              </h3>
              <p className="text-[14.5px] text-[#1a1a1a]/45 leading-[1.7]">
                Create an interview for your customer. They get a simple
                link&mdash;no signup, no app to download, no scheduling.
              </p>
            </div>

            <div>
              <p className="font-serif text-[3.5rem] leading-none text-[#1a1a1a]/10 mb-4">
                2
              </p>
              <h3 className="text-[17px] font-medium tracking-[-0.01em] mb-2.5">
                They talk
              </h3>
              <p className="text-[14.5px] text-[#1a1a1a]/45 leading-[1.7]">
                Our AI conducts a natural voice conversation, asking smart
                follow-ups and capturing their exact words. Under 10 minutes.
              </p>
            </div>

            <div>
              <p className="font-serif text-[3.5rem] leading-none text-[#1a1a1a]/10 mb-4">
                3
              </p>
              <h3 className="text-[17px] font-medium tracking-[-0.01em] mb-2.5">
                You publish
              </h3>
              <p className="text-[14.5px] text-[#1a1a1a]/45 leading-[1.7]">
                Get a complete case study with extracted metrics, direct quotes,
                and structured narrative. Export as PDF, Word, or HTML.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Product mockup — the anchor ═══ */}
      <section id="output" className="py-24 sm:py-32 px-6 sm:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[520px] mb-16">
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#1a1a1a]/30 mb-5">
              Output
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-serif tracking-[-0.02em] leading-[1.15]">
              What you get
            </h2>
          </div>

          {/* Mockup container */}
          <div className="bg-white rounded-[20px] border border-[#1a1a1a]/[0.06] overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#1a1a1a]/[0.05]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
              </div>
              <div className="ml-3 flex-1 max-w-[280px] h-6 bg-[#1a1a1a]/[0.03] rounded-md flex items-center px-3">
                <span className="text-[11px] text-[#1a1a1a]/25">
                  app.quotd.sh/dashboard/cs-001
                </span>
              </div>
            </div>

            {/* Case study content */}
            <div className="p-8 sm:p-12 md:p-16">
              {/* Header area */}
              <div className="mb-12">
                <p className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#1a1a1a]/25 mb-3">
                  Case Study
                </p>
                <h3 className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.2] mb-3">
                  How Acme Corp reduced onboarding
                  <br className="hidden sm:block" /> time by 60% with Beacon
                </h3>
                <p className="text-[14px] text-[#1a1a1a]/35">
                  Acme Corp &middot; B2B SaaS &middot; 200 employees
                </p>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-6 sm:gap-10 mb-14 pb-14 border-b border-[#1a1a1a]/[0.06]">
                <div>
                  <p className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.02em] leading-none">
                    60%
                  </p>
                  <p className="text-[13px] text-[#1a1a1a]/35 mt-2">
                    Faster onboarding
                  </p>
                </div>
                <div>
                  <p className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.02em] leading-none">
                    3x
                  </p>
                  <p className="text-[13px] text-[#1a1a1a]/35 mt-2">
                    Team productivity
                  </p>
                </div>
                <div>
                  <p className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.02em] leading-none">
                    $240k
                  </p>
                  <p className="text-[13px] text-[#1a1a1a]/35 mt-2">
                    Annual savings
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="mb-14">
                <p className="font-serif text-[clamp(1.1rem,2vw,1.5rem)] leading-[1.55] tracking-[-0.01em] text-[#1a1a1a]/70 max-w-[640px]">
                  &ldquo;We went from spending two weeks onboarding each new
                  hire to having them productive in three days. The impact on our
                  growth trajectory has been enormous.&rdquo;
                </p>
                <p className="mt-5 text-[13.5px] text-[#1a1a1a]/35">
                  Sarah Chen, VP of Operations
                </p>
              </div>

              {/* Body preview — faded to suggest continuation */}
              <div className="space-y-3 max-w-[580px]">
                <div className="h-[14px] bg-[#1a1a1a]/[0.04] rounded-sm w-full" />
                <div className="h-[14px] bg-[#1a1a1a]/[0.04] rounded-sm w-[92%]" />
                <div className="h-[14px] bg-[#1a1a1a]/[0.03] rounded-sm w-[97%]" />
                <div className="h-[14px] bg-[#1a1a1a]/[0.025] rounded-sm w-[68%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Capabilities — asymmetric two-column ═══ */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
            {/* Left — sticky heading */}
            <div className="lg:sticky lg:top-[120px] lg:self-start">
              <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#1a1a1a]/30 mb-5">
                Capabilities
              </p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-serif tracking-[-0.02em] leading-[1.15]">
                Everything extracted.
                <br />
                Nothing missed.
              </h2>
            </div>

            {/* Right — stacked items, no icons */}
            <div className="space-y-0">
              <div className="py-7 border-b border-[#1a1a1a]/[0.06]">
                <h3 className="text-[16px] font-medium tracking-[-0.01em] mb-1.5">
                  Voice-first interviews
                </h3>
                <p className="text-[14.5px] text-[#1a1a1a]/40 leading-[1.7] max-w-[480px]">
                  Customers speak naturally into their browser. Real-time
                  transcription. Text fallback always available.
                </p>
              </div>

              <div className="py-7 border-b border-[#1a1a1a]/[0.06]">
                <h3 className="text-[16px] font-medium tracking-[-0.01em] mb-1.5">
                  Adaptive questions
                </h3>
                <p className="text-[14.5px] text-[#1a1a1a]/40 leading-[1.7] max-w-[480px]">
                  Every question builds on the last answer. The AI pursues the
                  most compelling threads automatically.
                </p>
              </div>

              <div className="py-7 border-b border-[#1a1a1a]/[0.06]">
                <h3 className="text-[16px] font-medium tracking-[-0.01em] mb-1.5">
                  Metric extraction
                </h3>
                <p className="text-[14.5px] text-[#1a1a1a]/40 leading-[1.7] max-w-[480px]">
                  Revenue impact, time saved, efficiency gains&mdash;pulled
                  automatically with before-and-after context.
                </p>
              </div>

              <div className="py-7 border-b border-[#1a1a1a]/[0.06]">
                <h3 className="text-[16px] font-medium tracking-[-0.01em] mb-1.5">
                  Quote capture
                </h3>
                <p className="text-[14.5px] text-[#1a1a1a]/40 leading-[1.7] max-w-[480px]">
                  The most powerful moments from the conversation, tagged and
                  ready for your marketing team.
                </p>
              </div>

              <div className="py-7 border-b border-[#1a1a1a]/[0.06]">
                <h3 className="text-[16px] font-medium tracking-[-0.01em] mb-1.5">
                  Draft generation
                </h3>
                <p className="text-[14.5px] text-[#1a1a1a]/40 leading-[1.7] max-w-[480px]">
                  A structured case study in seconds. Challenge, solution,
                  impact&mdash;written from the customer&apos;s perspective.
                </p>
              </div>

              <div className="py-7">
                <h3 className="text-[16px] font-medium tracking-[-0.01em] mb-1.5">
                  Zero customer friction
                </h3>
                <p className="text-[14.5px] text-[#1a1a1a]/40 leading-[1.7] max-w-[480px]">
                  No logins, no scheduling, no apps. One link, one conversation,
                  done in under 10 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA — dark, contrasting ═══ */}
      <section className="mx-6 sm:mx-10 my-8 rounded-[24px] bg-[#1a1a1a] px-6 sm:px-10 py-24 sm:py-32">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-serif tracking-[-0.02em] leading-[1.15] text-[#fafaf9]">
            Your next case study is one
            <br />
            <em>conversation</em> away
          </h2>
          <p className="mt-5 text-[15px] text-[#fafaf9]/40">
            Free to start. No credit card required.
          </p>
          <a
            href={`${APP_URL}/login`}
            className="inline-flex items-center gap-2.5 mt-10 bg-[#fafaf9] text-[#1a1a1a] pl-7 pr-6 py-3.5 rounded-full text-[14px] font-medium hover:bg-white transition-colors"
          >
            Get started
            <ArrowRight className="w-[15px] h-[15px]" />
          </a>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 sm:px-10 py-10">
        <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="Quotd" width={18} height={19} />
            <span className="text-[14px] text-[#1a1a1a]/30">Quotd</span>
          </div>
          <p className="text-[12px] text-[#1a1a1a]/20">
            &copy; {new Date().getFullYear()} Quotd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
