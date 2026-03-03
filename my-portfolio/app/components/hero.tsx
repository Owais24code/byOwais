import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-20 pb-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          {/* Left side - Navigation */}
          <nav className="hidden lg:flex flex-col gap-8">
            <a href="#about" className="text-sm font-mono text-accent hover:text-primary transition-colors underline">
              ABOUT
            </a>
            <a href="#experience" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
              EXPERIENCE
            </a>
            <a href="#projects" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
              PROJECTS
            </a>
            <a href="#contact" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Right side - Hero content */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
                Owais Salauddin Khan
              </h1>
              <h2 className="text-xl sm:text-2xl text-accent font-medium mb-6">
                Software Engineer
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Building scalable systems and real-time applications with expertise in backend development, DevOps, and cloud technologies. Currently architecting enterprise solutions at{' '}
                <span className="text-primary font-medium">AARFID</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
              <Link
                href="#contact"
                className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
              <Link
                href="https://github.com/owais24code"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-accent text-accent font-medium rounded hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social links - bottom */}
      <div className="flex gap-6 justify-center lg:justify-start mt-12 lg:mt-0">
        <Link
          href="https://github.com/owais24code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </Link>
        <Link
          href="https://linkedin.com/in/owais#owaissalauddinkhan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </Link>
        <Link
          href="https://leetcode.com/owais24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LeetCode"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.51 4.434a1.372 1.372 0 00.364 2.176h.003l9.007-5.030.983-.595a1.374 1.374 0 00-.023-2.384L13.483 0zm-11.020 9.494c-.3 0-.573.254-.573.707v10.099c0 .453.273.707.573.707H1.927a.718.718 0 00.704-.707V10.201c0-.453-.272-.707-.704-.707H2.463zm14.4 5.209h-.003a.571.571 0 00-.545.55v5.35c0 .3.244.550.544.550h1.659a.571.571 0 00.545-.55v-5.35a.571.571 0 00-.546-.55h-1.654z" />
          </svg>
        </Link>
        <Link
          href="mailto:owaissalauddinkhan@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </Link>
      </div>
    </section>
  )
}
