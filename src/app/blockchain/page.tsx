export default function Education() {
    const education = [
        {
            degree: "B.Tech., Computer and Communication Engineering",
            institution: "The LNM Institute of Information Technology",
            location: "Jaipur, India",
            year: "July 2024 - Present",
            grade: "JEE Mains Score: 96.24 Percentile"
        },
        {
            degree: "Class XII (HSC Board)",
            institution: "Pace Science Junior College",
            location: "Maharashtra, India",
            year: "February 2024",
            grade: "Percentage: 75.14%"
        },
        {
            degree: "Class X (SSC Board)",
            institution: "Lok Kalyan Public School",
            location: "Maharashtra, India",
            year: "February 2022",
            grade: "Percentage: 91.22%"
        }
    ]

    return (
        <div className="min-h-screen pt-32 px-6 bg-saisei-light text-saisei-dark">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl font-serif mb-8">Education</h1>
                <p className="max-w-2xl text-lg opacity-80 font-sans mb-24">
                    Academic foundation in computer science and blockchain technology.
                </p>

                {/* Education Timeline */}
                <div className="space-y-12">
                    {education.map((edu, i) => (
                        <div key={i} className="border-l-2 border-saisei-accent pl-8 pb-12">
                            <span className="text-sm font-mono opacity-50">{edu.year}</span>
                            <h2 className="text-3xl font-serif mt-2 mb-3">{edu.degree}</h2>
                            <h3 className="text-xl font-sans font-medium mb-2">{edu.institution}</h3>
                            <p className="text-sm opacity-60 mb-2">{edu.location}</p>
                            <p className="text-sm font-mono opacity-70">{edu.grade}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
