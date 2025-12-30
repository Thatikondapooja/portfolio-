import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-12 border-t bg-secondary/30">
        <div className="container mx-auto px-6 text-center text-muted text-sm">
          <p>© {new Date().getFullYear()} Pooja Thatikonda. Built with React, Next.js, and NestJS.</p>
        </div>
      </footer>
    </div>
  )
}
