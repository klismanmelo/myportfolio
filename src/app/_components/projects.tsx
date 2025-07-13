import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "Gerenciador de Tarefas com Autenticação",
      description: "App web para organizar tarefas com login seguro usando Flask-Login e Django REST.",
      tech: ["Flask", "Django", "React", "SQLite"],
    },
    {
      title: "PlayParty — Ingressos com Blockchain",
      description: "Plataforma de festas com painel web e app mobile. Ingressos em NFT com blockchain.",
      tech: ["Django", "Next.js", "Swift", "Polygon"],
    },
    {
      title: "Jogo 2048 com IA",
      description: "Versão jogável do 2048 com inteligência artificial via algoritmo MaxMin.",
      tech: ["Python", "PyGame", "IA"],
    },
    {
      title: "Chatbot com Auth Google",
      description: "Chatbot IA com login via Google, construído com Firebase, Next.js e ShadCN UI.",
      tech: ["Next.js", "Firebase", "ShadCN", "Auth.js"],
    },
    {
      title: "Painel Administrativo de Eventos",
      description: "Dashboard moderno para criadores de eventos. Controle e estatísticas com UI elegante.",
      tech: ["Next.js", "Tailwind", "ShadCN", "API Django"],
    },
  ]

  return (
    <section className="container mx-auto px-6 py-16 space-y-12">
      <h2 className="text-4xl font-extrabold mb-12">
        Projects<span className="text-purple-600">.</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="border-purple-600">
            <CardHeader>
              <CardTitle className="text-purple-600">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-700 px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
