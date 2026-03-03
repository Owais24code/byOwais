export function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C/C++', 'Python', 'JavaScript/TypeScript', 'C#', 'SQL'],
    },
    {
      category: 'Backend & APIs',
      skills: ['ASP.NET Core', 'Node.js', 'Entity Framework Core', 'RESTful APIs', 'gRPC', 'WebSocket', 'SignalR'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Angular 17+', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Neon', 'SQL Server'],
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Docker', 'Azure DevOps', 'AWS (ECS, S3, Lambda, SQS)', 'GCP', 'GitHub Actions', 'Nginx'],
    },
    {
      category: 'Tools',
      skills: ['Git/GitHub', 'VS Code', 'Postman', 'Jira', 'Slack', 'Linux/Unix', 'Worker Threads'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Section title */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Skills</h3>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>

          {/* Right side - Skills grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, idx) => (
                <div key={idx}>
                  <h4 className="font-bold mb-3 text-primary">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1.5 bg-secondary text-secondary-foreground rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
