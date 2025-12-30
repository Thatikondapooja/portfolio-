import { Layout, Database, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3"],
  },
  {
    title: "Backend Development",
    icon: <Database className="w-5 h-5" />,
    skills: ["NestJS", "Node.js", "RESTful APIs", "SQL", "PostgreSQL"],
  },
  {
    title: "Core Fundamentals",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Data Structures", "Algorithms", "DBMS", "Computer Networks"],
  },
]

export function Skills() {
  if (!skillCategories || skillCategories.length === 0) {
    return null
  }

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit developed through academic rigor and hands-on project experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
