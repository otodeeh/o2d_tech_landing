import { CtaSection } from "@/components/cta-section";
import { DifferentialsSection } from "@/components/differentials-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			<Header />
			<main>
				<HeroSection />
				<ServicesSection />
				<DifferentialsSection />
				<PortfolioSection />
				{/* <TestimonialsSection /> */}
				<CtaSection />
			</main>
			<Footer />
		</div>
	);
}
