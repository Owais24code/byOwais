import Link from 'next/link'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-8 lg:px-12 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Section title */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Contact</h3>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>

          {/* Right side - Contact info */}
          <div className="lg:w-2/3">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, innovative ideas, and opportunities. Feel free to reach out!
            </p>

            {/* Email */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <Link
                href="mailto:owaissalauddinkhan@gmail.com"
                className="text-lg text-accent hover:text-primary transition-colors font-medium"
              >
                owaissalauddinkhan@gmail.com
              </Link>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://github.com/owais24code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-primary transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/owais#owaissalauddinkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </Link>
                <Link
                  href="https://leetcode.com/owais24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>LeetCode</span>
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="mailto:owaissalauddinkhan@gmail.com"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground font-medium rounded hover:opacity-90 transition-opacity"
            >
              Send me an Email
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
