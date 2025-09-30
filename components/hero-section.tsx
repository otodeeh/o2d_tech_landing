"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center geometric-pattern pt-24 pb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-float">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Tecnologia Inovadora</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance">
              <span className="text-gradient">Tecnologia sob medida</span>
              <br />
              <span className="text-foreground">para você e sua empresa</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty">
              Da manutenção ao desenvolvimento de sistemas completos, tudo em um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-pulse-glow group w-full sm:w-auto"
              >
                Solicitar Orçamento<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 text-lg border-primary/30 hover:border-primary hover:bg-primary/10 w-full sm:w-auto"
              >
                Conhecer Serviços
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative border frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-xl animate-pulse-glow" />

              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl animate-float">
                <Image
                  src="/images/profile-photo.png"
                  alt="O2D Tech Professional"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Geometric accent elements - hidden on mobile to reduce clutter */}
              <div
                className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/40 rotate-45 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating geometric elements - hidden on mobile */}
      <div
        className="hidden lg:block absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45 animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="hidden lg:block absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rotate-12 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="hidden lg:block absolute top-1/2 left-20 w-12 h-12 border border-primary/40 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  )
}
