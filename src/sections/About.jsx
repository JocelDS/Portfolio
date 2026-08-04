import {
  Code2,
  BrainCircuit,
  MonitorSmartphone,
  GraduationCap,
} from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building modern, responsive, and scalable web applications using current technologies and best practices.",
  },
  {
    icon: BrainCircuit,
    title: "Problem Solving",
    description:
      "Finding efficient and practical solutions through logical thinking, analysis, and continuous experimentation.",
  },
  {
    icon: MonitorSmartphone,
    title: "UI & User Experience",
    description:
      "Designing clean, intuitive, and accessible interfaces that enhance usability across different devices.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Growth",
    description:
      "Continuously learning new technologies, frameworks, and development practices to become a better software engineer.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Crafting digital experiences,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one line of code at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Bachelor of Science in Information Technology student
                specializing in the Business Analytics track, with a strong
                passion for software engineering and modern web development. I
                enjoy turning ideas into functional, user-friendly applications
                that combine clean design, efficient functionality, and
                meaningful user experiences.
              </p>
              <p>
                Through academic projects, I've gained hands-on experience with
                C++, C#, Java, PHP, MySQL, Flutter, and Firebase. These projects
                have strengthened my programming fundamentals, problem-solving
                abilities, and understanding of software development principles.
                Outside the classroom, I continue expanding my skills by
                building personal web projects and exploring modern development
                technologies.
              </p>
              <p>
                I believe that continuous learning is the key to becoming a
                great software engineer. I'm always eager to explore new
                technologies, improve my technical skills, and take on new
                challenges that help me grow as a developer. My goal is to build
                reliable, scalable, and impactful software that creates value
                for both users and businesses.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build innovative, reliable, and user-centered
                software solutions while continuously learning, growing, and
                using technology to create meaningful impact."
              </p>
            </div>
          </div>

          {/* right column */}
          
        </div>
      </div>
    </section>
  );
  
};
