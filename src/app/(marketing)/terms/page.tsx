import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, Scale, Shield, Terminal } from "lucide-react";
import { buildPageMetadata, buildBreadcrumbs } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms of service",
  description:
    "Terms of Service for Frantiva Technologies. Read our commercial engagement policies, intellectual property rights, asset ownership guarantees, and engineering delivery standards.",
  path: "/terms",
  ogTitle: "Terms of Service — Frantiva Technologies",
});

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Terms of Service", path: "/terms" },
]);

export default function TermsPage() {
  const lastUpdated = "November 25, 2026";

  return (
    <div className="py-24 md:py-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="mx-auto max-w-[1200px] px-6">
        
        {/* Header Strip */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.1em] text-[#5F5A55] dark:text-[#A09A93] hover:text-[#141210] dark:hover:text-[#FAF7F4] transition-colors mb-6 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to home</span>
          </Link>

          <div className="flex items-center gap-2 mb-4 font-mono text-[12px] font-normal uppercase tracking-[0.1em] text-[#5F5A55] dark:text-[#A09A93]">
            <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
            <span>02 · COMMERCIAL AGREEMENTS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
            Terms of service.
          </h1>

          <p className="font-sans text-sm text-[#5F5A55] dark:text-[#A09A93]">
            Last updated: {lastUpdated} · Frantiva Technologies (Private) Limited
          </p>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Prose */}
          <div className="lg:col-span-8 space-y-12">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                1. Acceptance of terms
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  By accessing the website frantiva.co.zw, requesting architectural consultations, or commissioning software engineering services from Frantiva Technologies (Private) Limited, you agree to be bound by these Terms of Service.
                </p>
                <p>
                  Specific engineering engagements, bespoke application builds, and retained maintenance contracts may be supplemented by a dedicated Statement of Work (SOW) or Service Level Agreement (SLA).
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                2. Scope of services and engineering delivery
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  Frantiva provides professional digital engineering services including, but not limited to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Autonomous AI agent development and workflow integration.</li>
                  <li>Bespoke web application and enterprise portal engineering.</li>
                  <li>Mobile application development (iOS, Android, cross-platform).</li>
                  <li>E-commerce systems with local and international payment gateway integration (EcoCash, Paynow, Stripe).</li>
                  <li>Cloud architecture, DevOps automation, and security hardening.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                3. Intellectual property and 100% asset ownership guarantee
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  We operate on a strict <strong className="text-[#141210] dark:text-[#FAF7F4]">Zero Vendor Lock-In</strong> principle:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-[#141210] dark:text-[#FAF7F4]">Custom deliverables:</strong> Upon final milestone settlement, all custom source code, proprietary algorithms, database schemas, and visual assets developed specifically for your project become your exclusive intellectual property.
                  </li>
                  <li>
                    <strong className="text-[#141210] dark:text-[#FAF7F4]">Infrastructure &amp; domains:</strong> Domains, hosting accounts, cloud infrastructure (AWS, Google Cloud, Cloudflare), and third-party API accounts are provisioned in your organization&apos;s name to guarantee perpetual control.
                  </li>
                  <li>
                    <strong className="text-[#141210] dark:text-[#FAF7F4]">Core libraries:</strong> Open-source frameworks, standard utility libraries, and pre-existing Frantiva tooling remain licensed under standard open-source or permissive terms.
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                4. Pricing, milestone tranches, and payments
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  All project quotes are provided in USD or local equivalent as agreed in writing. For bespoke software builds, project billing is structured across milestone tranches (e.g. initial architectural deposit, midpoint review, and final production sign-off).
                </p>
                <p>
                  Ongoing maintenance, cloud hosting renewals, and domain registrations are billed separately to protect client independence and asset ownership.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                5. Warranties and post-launch support
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  We stand behind our engineering quality. Standard bespoke builds include a dedicated post-launch stabilization warranty (typically 30 days) to rectify bugs, regressions, or system anomalies identified within the agreed functional specification without additional cost.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                6. Governing law
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  These terms are governed by and construed in accordance with the laws of the Republic of Zimbabwe. Any disputes arising from commercial engagements shall be subject to the jurisdiction of the courts of Harare, Zimbabwe, unless an alternative dispute resolution forum is specified in a bilateral contract.
                </p>
              </div>
            </section>

          </div>

          {/* Side Highlights Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] flex items-center justify-center text-[#D4693A]">
                  <Scale className="h-5 w-5" />
                </div>
                <h3 className="font-headline font-bold text-lg text-[#141210] dark:text-[#FAF7F4]">
                  Commercial terms
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#5F5A55] dark:text-[#A09A93]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#D4693A] mt-0.5 shrink-0" />
                  <span>100% intellectual property ownership transferred upon final settlement.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Terminal className="h-4 w-4 text-[#D4693A] mt-0.5 shrink-0" />
                  <span>Transparent milestone structures with predictable project pricing.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-4 w-4 text-[#D4693A] mt-0.5 shrink-0" />
                  <span>Post-deployment bug warranty included with bespoke software builds.</span>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-4 w-4 text-[#D4693A] mt-0.5 shrink-0" />
                  <span>Zero hidden vendor lock-in on infrastructure, domains, or code.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE4DE] dark:border-[#2B2724]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.1em] text-[#D4693A] hover:underline"
                >
                  <span>Request a project quote</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
