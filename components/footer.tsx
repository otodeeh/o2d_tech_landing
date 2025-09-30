import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone
} from "lucide-react";
import Image from "next/image";

export function Footer() {
	return (
		<footer className="bg-secondary/30 border-t border-border">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo and Description */}
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center mb-4">
							<Image
								src="/images/o2d-tech-logo.png"
								alt="O2D Tech"
								width={120}
								height={60}
								className="h-12 w-auto"
							/>
						</div>
						<p className="text-muted-foreground mb-6 max-w-md text-pretty">
							Sua parceira em tecnologia. Da manutenção ao desenvolvimento de
							sistemas completos, oferecemos soluções inovadoras para pessoas e
							empresas.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Serviços</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Manutenção de PCs
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Desenvolvimento Web
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Aplicativos Mobile
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									PCs Gamer
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Suporte Técnico
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Contato</h3>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li className="flex items-center">
								<Phone className="w-4 h-4 mr-2 text-primary" />
								(35) 99751-5595
							</li>
							<li className="flex items-center">
								<Mail className="w-4 h-4 mr-2 text-primary" />
								deh.hgl@gmail.com
							</li>
							<li className="flex items-start">
								<MapPin className="w-4 h-4 mr-2 text-primary mt-0.5" />
								Pouso Alegre, MG
								<br />
								Brasil
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
					<p>&copy; 2025 O2D Tech. Todos os direitos reservados.</p>
				</div>
			</div>
		</footer>
	);
}
