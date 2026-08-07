const education = [
  {
    level: "College",
    period: "2022 – Present",
    school: "Batangas State University – The National Engineering University",
    location: "JLPC Malvar Campus",
    program: "Bachelor of Science in Information Technology",
  },

  {
    level: "Senior High School",
    period: "2020 – 2022",
    school: "Malvar Senior High School",
    location: "Malvar, Batangas",
    program: "Technical-Vocational-Livelihood (TVL) – ICT",
  },
  
  {
    level: "Junior High School",
    period: "2016 – 2020",
    school: "His Care Christian Institute",
    location: "Darasa, Tanauan City, Batangas",
    program: "Junior High School",
  },

  {
    level: "Elementary",
    period: "2013 – 2016",
    school: "San Pedro Elementary School",
    location: "Malvar, Batangas",
    program: "Elementary Education",
  },

  {
    level: "Elementary",
    period: "2010 – 2013",
    school: "His Care Christian Institute",
    location: "Darasa, Tanauan City, Batangas",
    program: "Elementary Education",
  },
];
export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My academic{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              journey.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-20">
            A timeline of my educational journey, from elementary school through my current studies in Information Technology.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          <div className="timeline-glow"/>
        </div>
      </div>
    </section>
  );
};
