export function Footer() {
  return (
    <footer className="bg-secondary py-12 border-t">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-serif font-bold text-2xl mb-4">Pooja Thatikonda</h3>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Full Stack Developer & MCA Graduate passionate about building scalable web applications.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/thatikonda-pooja-76b2132ba"
            className="text-muted hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a href="https://github.com/Thatikondapooja" className="text-muted hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="mailto:thatikondapooja888@gmail.com" className="text-muted hover:text-primary transition-colors">
            Email
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pooja Thatikonda. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
