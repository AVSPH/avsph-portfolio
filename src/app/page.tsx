import CTABookACall from "@/components/CTABookACall";
import PortfolioCapabilities from "@/components/portfolio/PortfolioCapabilities";
import PortfolioClients from "@/components/portfolio/PortfolioClients";
import PortfolioFeatured from "@/components/portfolio/PortfolioFeatured";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioProcess from "@/components/portfolio/PortfolioProcess";
import PortfolioStats from "@/components/portfolio/PortfolioStats";
import PortfolioTestimonials from "@/components/portfolio/PortfolioTestimonials";

export default function PortfolioPage() {
  return (
    <main className="bg-[var(--background)]">
      {/* 1. Hero — grab attention, set context */}
      <PortfolioHero />

      {/* 2. Stats — instant credibility with numbers */}
      <PortfolioStats />

      {/* 3. Trust bar — client names before they see the work */}
      <PortfolioClients />

      {/* 4. Featured Work — best proof pieces up front */}
      <PortfolioFeatured />

      {/* 5. Testimonials — social proof while work is fresh in mind */}
      <PortfolioTestimonials />

      {/* 6. Capabilities — why they're the right choice */}
      <PortfolioCapabilities />

      {/* 7. Process — how it gets done */}
      <PortfolioProcess />

      {/* 8. Full Gallery — browse everything */}
      <PortfolioGallery />

      {/* 9. CTA — convert */}
      <section className="section bg-white">
        <div className="container">
          <CTABookACall
            title="Ready to launch your next high-converting page?"
            subtitle="Let's map the page, assign the right VA, and build a system that turns every visitor into revenue."
          />
        </div>
      </section>
    </main>
  );
}
