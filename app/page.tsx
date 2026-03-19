import Image from "next/image";
import {
  Mic,
  FileText,
  BarChart3,
  Zap,
  ArrowRight,
  Quote,
  Send,
  Layers,
  CheckCircle,
  Palette,
  Users,
} from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.quotd.sh";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-gray-900 noise">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="Quotd" width={28} height={30} />
            <span className="text-lg tracking-tight font-semibold">Quotd</span>
          </a>
          <div className="flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block"
            >
              How it works
            </a>
            <a
              href="#features"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block"
            >
              Features
            </a>
            <a
              href="#compare"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block"
            >
              Compare
            </a>
            <a
              href={`${APP_URL}/login`}
              className="text-sm font-medium bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="h-px bg-gray-100" />
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-6 animate-fade-in">
            Customer stories, automated
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight leading-[1.1] text-balance animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Turn conversations into
            <br />
            <span className="italic">case studies</span>
          </h1>
          <p
            className="mt-8 text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "250ms" }}
          >
            Quotd conducts AI-powered voice interviews with your customers and
            transforms them into polished, publish-ready case studies.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href={`${APP_URL}/login`}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
            >
              Start for free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-base text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-lg transition-colors px-6 py-3.5"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
          <div>
            <p className="text-3xl font-serif">6+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              Output formats per interview
            </p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-gray-200" />
          <div>
            <p className="text-3xl font-serif">~8 min</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              Average completion
            </p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-gray-200" />
          <div>
            <p className="text-3xl font-serif">Voice-first</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              Natural conversation
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-28 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <p className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight">
              Three steps. One case study.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <Send className="w-5 h-5 text-gray-300 mb-5" />
              <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                01
              </p>
              <h3 className="text-xl font-medium mb-2">Share a link</h3>
              <p className="text-base text-gray-500 leading-relaxed">
                Create an interview for your customer. They get a simple link —
                no signup, no app, no friction.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <Mic className="w-5 h-5 text-gray-300 mb-5" />
              <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                02
              </p>
              <h3 className="text-xl font-medium mb-2">They talk</h3>
              <p className="text-base text-gray-500 leading-relaxed">
                Our AI conducts a natural voice interview — asking smart
                follow-ups, extracting metrics, capturing their exact words.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <FileText className="w-5 h-5 text-gray-300 mb-5" />
              <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                03
              </p>
              <h3 className="text-xl font-medium mb-2">Review &amp; repurpose</h3>
              <p className="text-base text-gray-500 leading-relaxed">
                Your customer reviews the draft, you approve — then export as
                PDF or Word, or repurpose into LinkedIn posts, one-pagers, and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-gray-100" />
      </div>

      {/* Features */}
      <section id="features" className="py-28 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <p className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight">
              Everything extracted. Nothing missed.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-5 p-6">
              <Mic className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium mb-1.5">Voice-first interviews</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Customers speak naturally. Real-time transcription with
                  Deepgram. Text fallback always available.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6">
              <Zap className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium mb-1.5">Customizable AI interviews</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Every question builds on the last answer. Set the tone, focus
                  area, target audience, and question count to match your goals.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6">
              <BarChart3 className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium mb-1.5">Metric extraction</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Hard numbers pulled automatically — revenue impact, time
                  saved, efficiency gains — with before-and-after context.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6">
              <Quote className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium mb-1.5">Quote capture</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  The most powerful moments from the conversation, tagged and
                  ready for your marketing team.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6">
              <Layers className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium mb-1.5">Six formats, one interview</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Generate a one-pager, LinkedIn post, Twitter thread, sales
                  slide, quote cards, and email blurb — all from one
                  conversation.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6">
              <CheckCircle className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium mb-1.5">Customer review built in</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Customers review each section, flag edits, and approve before
                  you publish. No back-and-forth emails.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6">
              <Palette className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium mb-1.5">Your brand, their experience</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Add your logo, brand color, and a welcome message. Every
                  interview page looks like it came from you.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6">
              <Users className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium mb-1.5">Teams &amp; scale</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Invite your team with role-based access. Create interviews in
                  bulk via CSV. Built for teams running dozens of case studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-gray-100" />
      </div>

      {/* Compare */}
      <section id="compare" className="py-28 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <p className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
              Quotd vs. the rest
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight">
              Same goal. <span className="italic">Different game.</span>
            </h2>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 pr-4 font-normal text-gray-400 w-[200px]" />
                  <th className="py-4 px-4 font-semibold text-gray-900 text-center">Quotd</th>
                  <th className="py-4 px-4 font-normal text-gray-700 text-center">
                    <span className="block">Agencies</span>
                    <span className="text-xs text-gray-400">Testimonial Hero, Case Study Buddy</span>
                  </th>
                  <th className="py-4 px-4 font-normal text-gray-700 text-center">
                    <span className="block">Evidence platforms</span>
                    <span className="text-xs text-gray-400">UserEvidence, Deeto, Peerbound</span>
                  </th>
                  <th className="py-4 px-4 font-normal text-gray-700 text-center">
                    <span className="block">Free generators</span>
                    <span className="text-xs text-gray-400">HubSpot, QuillBot, Writer</span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  { feature: "AI voice interviews", quotd: true, agencies: false, evidence: false, free: false },
                  { feature: "Adaptive follow-up questions", quotd: true, agencies: false, evidence: false, free: false },
                  { feature: "Real customer involvement", quotd: true, agencies: true, evidence: true, free: false },
                  { feature: "Metric extraction", quotd: true, agencies: false, evidence: "partial", free: false },
                  { feature: "6+ output formats", quotd: true, agencies: "partial", evidence: false, free: false },
                  { feature: "Customer review & approval", quotd: true, agencies: false, evidence: false, free: false },
                  { feature: "White-label branding", quotd: true, agencies: false, evidence: false, free: false },
                  { feature: "Team collaboration", quotd: true, agencies: false, evidence: true, free: false },
                  { feature: "Self-serve (no agency)", quotd: true, agencies: false, evidence: true, free: true },
                  { feature: "Zero friction for customers", quotd: true, agencies: false, evidence: false, free: false },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="text-left py-3.5 pr-4 text-gray-700">{row.feature}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block w-5 h-5 rounded-full bg-gray-900 text-white text-xs leading-5 font-medium">&#10003;</span>
                    </td>
                    {[row.agencies, row.evidence, row.free].map((val, j) => (
                      <td key={j} className="py-3.5 px-4">
                        {val === true ? (
                          <span className="text-gray-500 font-medium">&#10003;</span>
                        ) : val === "partial" ? (
                          <span className="text-gray-400 text-xs tracking-wider">Partial</span>
                        ) : (
                          <span className="text-gray-300">&mdash;</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Summary row */}
                <tr>
                  <td className="text-left py-5 pr-4 text-gray-400 italic text-xs">The bottom line</td>
                  <td className="py-5 px-4 text-gray-900 text-xs leading-relaxed">
                    Voice interviews, multi-format output, customer approval — self-serve.
                  </td>
                  <td className="py-5 px-4 text-gray-500 text-xs leading-relaxed">
                    $5K+ per study. 4-week timelines. Scheduling headaches.
                  </td>
                  <td className="py-5 px-4 text-gray-500 text-xs leading-relaxed">
                    Surveys get data points, not stories. No voice, no nuance.
                  </td>
                  <td className="py-5 px-4 text-gray-500 text-xs leading-relaxed">
                    No real customer input. AI fiction, not customer proof.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-gray-100" />
      </div>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight mb-4">
            Your next case study is one
            <br />
            <span className="italic">conversation</span> away.
          </h2>
          <p className="text-lg text-gray-500 mb-10">
            Free to start. No credit card required.
          </p>
          <a
            href={`${APP_URL}/login`}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Quotd" width={20} height={21} />
            <span className="text-sm text-gray-500">Quotd</span>
          </div>
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Quotd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
