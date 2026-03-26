import CTABookACall from "@/components/CTABookACall";
import PortfolioCapabilities from "@/components/portfolio/PortfolioCapabilities";
import PortfolioClients from "@/components/portfolio/PortfolioClients";
import PortfolioFeatured from "@/components/portfolio/PortfolioFeatured";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioProcess from "@/components/portfolio/PortfolioProcess";
import PortfolioSeoResults from "@/components/portfolio/PortfolioSeoResults";
import PortfolioStats from "@/components/portfolio/PortfolioStats";
import PortfolioTestimonials from "@/components/portfolio/PortfolioTestimonials";

export default function PortfolioPage() {
  return (
    <main className="bg-[var(--background)]">
      {/* 1. Hero — grab attention, set context */}
      <PortfolioHero />

      {/* 2. Stats — instant credibility with numbers */}
      {/* <PortfolioStats /> */}

      {/* 3. Trust bar — client names before they see the work */}
      {/* <PortfolioClients /> */}

      {/* 4. Featured Work — best proof pieces up front */}
      {/* <PortfolioFeatured /> */}
      <PortfolioGallery />
      {/* 5. SEO Results — dedicated performance proof section */}
      <PortfolioSeoResults />

      {/* 6. Testimonials — social proof while work is fresh in mind */}
      <PortfolioTestimonials />

      {/* 7. Capabilities — why they're the right choice */}
      <PortfolioCapabilities />

      {/* 8. Process — how it gets done */}
      <PortfolioProcess />

      {/* 9. Full Gallery — browse everything */}

      {/* 10. CTA — convert */}
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
