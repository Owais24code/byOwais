export function Experience() {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'AARFID Holding LLC',
      period: 'January 2025 – Present',
      highlights: [
        'Architected real-time RFID tracking applications with 99.9% uptime for 50+ concurrent users',
        'Engineered backend services reducing data sync time by 60% through optimized indexing',
        'Integrated third-party APIs (Salto, Kutuk) with OAuth 2.0 for 20+ enterprise clients',
        'Developed WebSocket video streaming solution reducing latency from 3s to <500ms',
        'Implemented CI/CD pipelines with Docker and Azure DevOps, 70% faster deployments',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Rancho Labs Private Limited',
      period: 'September 2024 – December 2024',
      highlights: [
        'Built LMS platform serving 1,000+ active students across 20+ schools',
        'Optimized PostgreSQL queries reducing response times by 45% for dashboards',
        'Deployed microservices on AWS ECS with auto-scaling and 99.5% availability',
        'Developed real-time notification system improving student engagement by 35%',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Section title */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Experience</h3>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>

          {/* Right side - Timeline */}
          <div className="lg:w-2/3">
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-accent pl-6 pb-8 relative">
                  <div className="absolute -left-3 top-0 w-4 h-4 bg-accent rounded-full"></div>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-base text-muted-foreground flex gap-3">
                        <span className="text-accent flex-shrink-0 mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
