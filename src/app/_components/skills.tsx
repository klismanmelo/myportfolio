
export default function Skills() {
  const skills = {
    "Web Design": [
      "UI/UX Design",
      "Responsive Design",
      "Wireframing",
      "User Research",
    ],
    Frontend: ["JavaScript", "ReactJS", "NextJS", "CSS3"],
    Backend: ["NodeJS", "MongoDB", "ExpressJS", "Vercel"],
    "Soft Skills": [
      "Effective communication",
      "Collaboration",
      "Commitment",
      "Leadership",
    ],
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold mb-12">
        Skills<span className="text-purple-600">.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4">{category}</h3>
            <ul className="space-y-2 text-muted-foreground">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
