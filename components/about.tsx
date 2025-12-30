import { GraduationCap, BookOpen, User } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-secondary relative z-10">
              <img src="/pooja pic.jpeg" alt="Pooja Thatikonda" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-3xl -z-10 opacity-20" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary rounded-3xl -z-10" />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <User className="text-primary w-8 h-8" />
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I am a passionate Web Developer with a strong foundation in both front-end and back-end technologies. As a
              recent <span className="text-foreground font-semibold">Master of Computer Applications (MCA)</span>
              graduate from Aurora's PG College (2025), I've dedicated myself to mastering the modern web ecosystem.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Academic Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    MCA Graduate Class of 2025 with a focus on advanced computing, software engineering, and database
                    management.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Actively building strong fundamentals in  JavaScript, and modern web development using React and NestJS, with hands-on experience in RESTful APIs, database design, and cloud-ready applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-secondary/50 border border-secondary">
              <p className="text-sm italic text-muted-foreground">
                "My goal is to build digital solutions that are not only functionally robust but also intuitively
                designed for the end user."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
