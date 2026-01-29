import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
	{
		name: "Carlos Silva",
		company: "Silva Advocacia",
		content:
			"A O2D Tech desenvolveu nosso site institucional e sistema de agendamento. Ficou perfeito! Atendimento excepcional e entrega no prazo.",
		rating: 5,
		avatar: "/professional-man-avatar.png"
	},
	{
		name: "Marina Santos",
		company: "Boutique Elegance",
		content:
			"Montaram meu PC gamer dos sonhos! Explicaram cada componente e o resultado superou minhas expectativas. Recomendo demais!",
		rating: 5,
		avatar: "/professional-woman-avatar.png"
	},
	{
		name: "João Oliveira",
		company: "Restaurante Sabor & Arte",
		content:
			"O app de delivery que criaram revolucionou nosso negócio. Vendas aumentaram 300% no primeiro mês. Equipe muito competente!",
		rating: 5,
		avatar: "/chef-avatar.png"
	},
	{
		name: "Ana Costa",
		company: "Clínica Vida Saudável",
		content:
			"Suporte técnico impecável! Sempre que precisamos, eles resolvem rapidamente. Nossos computadores nunca funcionaram tão bem.",
		rating: 5,
		avatar: "/doctor-woman-avatar.jpg"
	}
];

export function TestimonialsSection() {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
						O que nossos <span className="text-gradient">clientes dizem</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
						Depoimentos reais de quem confia na O2D Tech
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
						>
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 fill-primary text-primary"
										/>
									))}
								</div>
								<p className="text-muted-foreground mb-6 text-pretty">
									"{testimonial.content}"
								</p>
								<div className="flex items-center">
									<img
										src={testimonial.avatar || "/placeholder.svg"}
										alt={testimonial.name}
										className="w-12 h-12 rounded-full mr-4"
									/>
									<div>
										<div className="font-semibold text-foreground">
											{testimonial.name}
										</div>
										<div className="text-sm text-muted-foreground">
											{testimonial.company}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
