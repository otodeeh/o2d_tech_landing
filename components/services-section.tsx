import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Wifi, Code, Gamepad2, Headphones, Wrench } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Manutenção e Formatação",
    description: "Manutenção completa de PCs e notebooks, formatação e otimização de sistemas.",
    features: ["Limpeza de hardware", "Formatação completa", "Otimização de performance"],
  },
  {
    icon: Wifi,
    title: "Instalação de Softwares e Redes",
    description: "Instalação de softwares essenciais e configuração de redes Wi-Fi seguras.",
    features: ["Instalação de programas", "Configuração de rede", "Segurança digital"],
  },
  {
    icon: Code,
    title: "Desenvolvimento Personalizado",
    description: "Sites e aplicativos 100% personalizados para sua empresa ou projeto.",
    features: ["Sites responsivos", "Aplicativos mobile", "Sistemas web"],
  },
  {
    icon: Gamepad2,
    title: "PCs Gamer",
    description: "Montagem e consultoria especializada em computadores para jogos.",
    features: ["Montagem completa", "Consultoria técnica", "Otimização para games"],
  },
  {
    icon: Headphones,
    title: "Suporte Remoto",
    description: "Atendimento técnico à distância para resolver problemas rapidamente.",
    features: ["Acesso remoto", "Diagnóstico online", "Suporte em tempo real"],
  },
  {
    icon: Wrench,
    title: "Suporte Presencial",
    description: "Atendimento técnico no local para problemas mais complexos.",
    features: ["Visita técnica", "Reparo no local", "Consultoria presencial"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluções completas em tecnologia para atender todas as suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
