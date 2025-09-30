"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaSection() {
	const openWhatsApp = () => {
		const message = encodeURIComponent(
			"Olá! Gostaria de solicitar um orçamento para os serviços da O2D Tech."
		);
		window.open(`https://wa.me/5535997515595?text=${message}`, "_blank");
	};

	return (
		<section id="contato" className="py-20 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
			<div className="absolute inset-0 geometric-pattern opacity-30" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
						Pronto para <span className="text-gradient">transformar</span> sua
						tecnologia?
					</h2>
					<p className="text-xl text-muted-foreground mb-8 text-pretty">
						Entre em contato conosco e descubra como podemos ajudar você ou sua
						empresa a alcançar o próximo nível tecnológico.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Button
							onClick={openWhatsApp}
							size="lg"
							className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-pulse-glow group"
						>
							<MessageCircle className="mr-2 w-5 h-5" />
							Falar no WhatsApp
							<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Button>

						<div className="text-center sm:text-left">
							<p className="text-sm text-muted-foreground">
								Ou ligue para:{" "}
								<span className="text-primary font-semibold">
									(35) 99751-5595
								</span>
							</p>
							<p className="text-sm text-muted-foreground">
								Email:{" "}
								<span className="text-primary font-semibold">
									deh.hgl@gmail.com
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
