import { Zap, Settings, DollarSign } from "lucide-react"

const differentials = [
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Resposta em até 2 horas e soluções ágeis para seus problemas tecnológicos.",
    emoji: "⚡",
  },
  {
    icon: Settings,
    title: "Projetos Personalizados",
    description: "Cada solução é desenvolvida especificamente para suas necessidades.",
    emoji: "🛠️",
  },
  {
    icon: DollarSign,
    title: "Preço Justo",
    description: "Valores transparentes e competitivos sem comprometer a qualidade.",
    emoji: "💰",
  },
]

export function DifferentialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            O que nos torna únicos no mercado de tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <span className="text-3xl">{differential.emoji}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{differential.title}</h3>
              <p className="text-muted-foreground text-lg text-pretty">{differential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
