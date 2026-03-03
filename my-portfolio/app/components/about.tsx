export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 lg:px-12 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Section title */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold tracking-tight mb-4">About</h3>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-2/3">
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                I'm a results-driven Software Engineer with a passion for building efficient, scalable systems. Currently pursuing my B.Tech in Computer Science at Dr. A.P.J. Abdul Kalam Technical University, I've gained hands-on experience architecting real-time applications and cloud infrastructure.
              </p>
              <p>
                As an Associate Software Engineer at AARFID, I've architected and deployed RFID tracking applications serving 50+ concurrent users with 99.9% uptime. I specialize in ASP.NET Core, Node.js, and modern DevOps practices, with proven expertise in API integration, database optimization, and CI/CD automation.
              </p>
              <p>
                I'm fascinated by the intersection of scalability, performance, and elegance in software design. When I'm not coding, you can find me competing on LeetCode, exploring new technologies, or contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
