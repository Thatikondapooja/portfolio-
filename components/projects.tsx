import { ExternalLink, Github } from "lucide-react"

const projects = [

  {
    title: "Trello Clone",
    category: "Full-Stack Development",
    description: "A full-stack, responsive Trello clone built with React and TypeScript, featuring complex drag-and-drop workflows, secure authentication, and real-time activity tracking.",
    tags: ["Nest.js", "TypeScript", "Tailwind CSS", "React Js", "postgraSQL", "State Management: Redux Toolkit", "Lucide React, React Toastify", "Authentication: JWT, Bcrypt"],
    image: "/trello-clone.png",
    links: {
      github: "https://github.com/Thatikondapooja",
      live: "https://trello-clone-pooja.vercel.app",
    },
  },

  {
    title: "Car Social Network",
    category: "Full-Stack Development",
    description:
      "A machine learning-based social networking platform for car enthusiasts featuring real-time interactions and personalised recommendations.",
    tags: [],
    image: "/car-social-network-dashboard.jpg",
    links: {
      github: "https://github.com/Thatikondapooja",
      live: "https://car-social-network-project.onrender.com",
    },
  },

]

export function Projects() {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              A selection of my recent work, ranging from academic capstone projects to personal experiments.
            </p>
          </div>
          <a
            href="https://github.com/Thatikondapooja"
            target="_blank"
            className="text-primary font-semibold hover:underline flex items-center gap-2"
            rel="noreferrer"
          >
            See all on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-border bg-white hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="p-3 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-white transition-all"
                    rel="noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.links.live}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-xl font-semibold hover:bg-primary transition-all"
                  >
                    Live Preview
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
