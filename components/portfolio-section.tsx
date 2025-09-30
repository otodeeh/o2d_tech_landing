import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-commerce Moderno",
    category: "Desenvolvimento Web",
    description: "Loja virtual completa com sistema de pagamento integrado e painel administrativo.",
    image: "/modern-ecommerce-dark.png",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "App de Delivery",
    category: "Aplicativo Mobile",
    description: "Aplicativo para delivery com geolocalização e sistema de pedidos em tempo real.",
    image: "/delivery-mobile-app-interface.jpg",
    tech: ["React Native", "Firebase", "Maps API"],
  },
  {
    title: "PC Gamer High-End",
    category: "Montagem de PC",
    description: "Setup gamer completo com RTX 4080, processador i7 e sistema de refrigeração líquida.",
    image: "/high-end-gaming-pc-setup-rgb-lighting.jpg",
    tech: ["RTX 4080", "Intel i7", "RGB Lighting"],
  },
  {
    title: "Sistema de Gestão",
    category: "Sistema Web",
    description: "Plataforma completa para gestão empresarial com relatórios e dashboard analítico.",
    image: "/business-management-dashboard-dark-theme.jpg",
    tech: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    title: "Setup Streaming",
    category: "Montagem Especializada",
    description: "Configuração completa para streaming com múltiplas câmeras e áudio profissional.",
    image: "/professional-streaming-setup-multiple-monitors.jpg",
    tech: ["OBS Studio", "Audio Interface", "Multi-cam"],
  },
  {
    title: "Landing Page Corporativa",
    category: "Desenvolvimento Web",
    description: "Site institucional responsivo com animações e otimização para SEO.",
    image: "/corporate-landing-page-modern-design.jpg",
    tech: ["Next.js", "Tailwind", "SEO"],
  },
]

export function PortfolioSection() {
  return (
    <section id="projetos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Nossos <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça alguns dos trabalhos que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
