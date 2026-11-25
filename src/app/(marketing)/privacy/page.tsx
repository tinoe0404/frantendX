import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, Server, RefreshCw } from "lucide-react";
import { buildPageMetadata, buildBreadcrumbs } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy policy",
  description:
    "Privacy Policy for Frantiva Technologies. Learn how we handle client data, project communications, technical telemetry, and privacy commitments under applicable law.",
  path: "/privacy",
  ogTitle: "Privacy Policy — Frantiva Technologies",
});

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
]);

export default function PrivacyPage() {
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
            <span>01 · LEGAL &amp; COMPLIANCE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
            Privacy policy.
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
                1. Overview and data controller
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  Frantiva Technologies (Private) Limited (&quot;Frantiva&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a software engineering and artificial intelligence studio based in Harare, Zimbabwe.
                </p>
                <p>
                  This Privacy Policy details how we collect, process, store, and protect information when you visit our website (frantiva.co.zw), interact with our technical team, submit project inquiries, or engage us for software development and AI engineering services.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                2. Information we collect
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  We only gather information necessary to provide commercial proposals, communicate architectural specifications, and deliver software services:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-[#141210] dark:text-[#FAF7F4]">Inquiry information:</strong> Name, business email, telephone/WhatsApp number, organization name, project requirements, and estimated budget ranges submitted via our contact portal.
                  </li>
                  <li>
                    <strong className="text-[#141210] dark:text-[#FAF7F4]">Technical telemetry:</strong> IP addresses, browser user-agents, device viewport dimensions, and referrer headers automatically captured by server logs and Cloudflare edge proxies to maintain platform availability, mitigate malicious requests, and prevent denial-of-service attempts.
                  </li>
                  <li>
                    <strong className="text-[#141210] dark:text-[#FAF7F4]">Preferences:</strong> Local browser storage preferences (such as your chosen light or dark visual theme).
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                3. Purpose and legal basis for processing
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  We process data under the following legal frameworks:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-[#141210] dark:text-[#FAF7F4]">Contractual preparation:</strong> Evaluating technical project scopes, preparing feasibility studies, and negotiating commercial agreements.
                  </li>
                  <li>
                    <strong className="text-[#141210] dark:text-[#FAF7F4]">Legitimate interest:</strong> Securing our infrastructure, monitoring application health, diagnosing server anomalies, and defending against fraud or abusive traffic.
                  </li>
                  <li>
                    <strong className="text-[#141210] dark:text-[#FAF7F4]">Legal obligations:</strong> Complying with accounting, tax, and statutory record-keeping requirements in the Republic of Zimbabwe.
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                4. Data storage and defensive security
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  Security is central to our engineering practice. We employ defensive architecture measures including:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Strict TLS/HTTPS encryption across all public endpoints and API interfaces.</li>
                  <li>Database encryption at rest and isolated VPC networking for persistence layers.</li>
                  <li>Role-based access control (RBAC) ensuring only authorized technical directors review customer inquiry data.</li>
                  <li>Continuous automated vulnerability scanning and dependency patching.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                5. Third-party disclosures
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  Frantiva does not sell, rent, or trade your personal data. Data is shared exclusively with verified infrastructure providers essential to our operations (such as managed cloud hosting providers and transactional email relays) under strict confidentiality agreements.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4]">
                6. Your data rights
              </h2>
              <div className="font-sans text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed space-y-3 [text-wrap:pretty]">
                <p>
                  You have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request complete erasure of your information, subject to ongoing legal or regulatory compliance obligations.
                </p>
                <p>
                  To exercise any of these rights, contact our engineering management office at{" "}
                  <a href="mailto:info@frantendxsolutions.co.zw" className="text-[#D4693A] hover:underline">
                    info@frantendxsolutions.co.zw
                  </a>.
                </p>
              </div>
            </section>

          </div>

          {/* Side Highlights Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] flex items-center justify-center text-[#D4693A]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-headline font-bold text-lg text-[#141210] dark:text-[#FAF7F4]">
                  Key commitments
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#5F5A55] dark:text-[#A09A93]">
                <div className="flex items-start gap-3">
                  <Lock className="h-4 w-4 text-[#D4693A] mt-0.5 shrink-0" />
                  <span>Defensive SSL encryption enforced across every protocol.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="h-4 w-4 text-[#D4693A] mt-0.5 shrink-0" />
                  <span>Zero sale or commercial monetization of customer inquiry data.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Server className="h-4 w-4 text-[#D4693A] mt-0.5 shrink-0" />
                  <span>Harare-based data stewardship with global remote compliance.</span>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="h-4 w-4 text-[#D4693A] mt-0.5 shrink-0" />
                  <span>Instant data deletion support upon verified client request.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE4DE] dark:border-[#2B2724]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.1em] text-[#D4693A] hover:underline"
                >
                  <span>Have questions? Contact us</span>
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
