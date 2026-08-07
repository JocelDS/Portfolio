const education = [
  {
    level: "College",
    period: "2022 – Present",
    school: "Batangas State University – The National Engineering University",
    location: "JLPC Malvar Campus",
    program: "Bachelor of Science in Information Technology",
    current: true,
  },
  {
    level: "Senior High School",
    period: "2020 – 2022",
    school: "Malvar Senior High School",
    location: "Malvar, Batangas",
    program: "Technical-Vocational-Livelihood (TVL) – ICT",
    current: false,
  },
  {
    level: "Junior High School",
    period: "2016 – 2020",
    school: "His Care Christian Institute",
    location: "Darasa, Tanauan City, Batangas",
    program: "Junior High School",
    current: false,
  },
  {
    level: "Elementary",
    period: "2013 – 2016",
    school: "San Pedro Elementary School",
    location: "Malvar, Batangas",
    program: "Elementary Education",
    current: false,
  },
  {
    level: "Elementary",
    period: "2010 – 2013",
    school: "His Care Christian Institute",
    location: "Darasa, Tanauan City, Batangas",
    program: "Elementary Education",
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My academic{" "}
            <span className="font-serif italic font-normal text-white">
              journey.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my educational journey, from elementary school through
            my current studies in Information Technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(23,178,166,0.8)]" />

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Container */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  {/* FIXED: Inalis ang curly braces sa className */}
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {edu.level}
                    </h3>

                    <span className="text-xs text-primary font-medium mt-1 block">
                      {edu.period}
                    </span>

                    <p className="text-base md:text-lg font-medium text-foreground mt-2">
                      {edu.school}
                    </p>

                    <p className="text-xs md:text-sm text-muted-foreground">
                      {edu.location}
                    </p>

                    <div className="text-xs md:text-sm text-muted-foreground mt-2">
                      {edu.program}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
