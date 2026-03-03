import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  interface ProjectLink {
    label: string
    href: string
    icon: React.ComponentType<{ size: number }>
  }

  interface Project {
    title: string
    description: string
    tech: string[]
    highlights: string[]
    links: ProjectLink[]
  }

  const projects: Project[] = [
    {
      title: 'Certify - Certificate Generation Platform',
      description: 'Automated certificate generation platform with template customization, bulk processing, and email delivery serving 500+ requests with 99% success rate.',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS S3', 'Resend API'],
      highlights: [
        'Serverless architecture using AWS Lambda reducing costs by 80%',
        'Automated email distribution with 95% open rate',
        'Bulk certificate processing with progress tracking',
      ],
      links: [
        // { label: 'Live Demo', href: '#', icon: ExternalLink },
        // { label: 'GitHub', href: '#', icon: Github },
      ],
    },
    {
      title: 'Sky Track - Flight Status Monitor',
      description: 'Real-time flight tracking application integrating multiple aviation data sources with optimized API usage and sub-200ms latency.',
      tech: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'Docker', 'REST APIs'],
      highlights: [
        'Multi-source aviation data integration with rate limiting',
        'Docker containerization reducing image size by 60%',
        'Automated database cleanup jobs for performance',
      ],
      links: [
        // { label: 'Live Demo', href: '#', icon: ExternalLink },
        // { label: 'GitHub', href: '#', icon: Github },
      ],
    },
    {
      title: 'Invoice Management System',
      description: 'Full-stack invoicing application with type-safe database operations, Stripe payment processing, and automated email notifications.',
      tech: ['Next.js', 'Neon Postgres', 'Drizzle ORM', 'Resend API', 'Stripe', 'TypeScript'],
      highlights: [
        'Drizzle ORM for type-safe database operations',
        'Stripe integration with webhook handling for payments',
        'Automated invoice reminders reducing follow-up time by 90%',
      ],
      links: [
        // { label: 'Live Demo', href: '#', icon: ExternalLink },
        // { label: 'GitHub', href: '#', icon: Github },
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 lg:px-12 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Section title */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Projects</h3>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>

          {/* Right side - Projects grid */}
          <div className="lg:w-2/3">
            <div className="space-y-12">
              {projects.map((project, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 hover:border-accent transition-colors">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent shrink-0">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  {project.links.length > 0 && (
                    <div className="flex gap-4 pt-4">
                      {project.links.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          className="text-sm text-accent hover:text-primary transition-colors flex items-center gap-2"
                        >
                          {link.icon && <link.icon size={16} />}
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
