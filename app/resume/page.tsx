import { ResumeView } from "@/components/resume-view"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Resume - Pooja Thatikonda",
  description:
    "Professional resume of Pooja Thatikonda, Full-Stack Developer with expertise in React, TypeScript, and NestJS.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-secondary py-3">
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>
      <div className="pt-16">
        <ResumeView />
      </div>
    </div>
  )
}
