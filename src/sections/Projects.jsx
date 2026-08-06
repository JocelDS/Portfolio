import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Carousel } from "../components/Carousel"; // Adjust path if needed

const projects = [
  {
    title: "TriConnect",
    description: "Smart Tricycle Booking System.",
    images: [
      "/projects/TriConnect/triconnect-login.png",
      "/projects/TriConnect/triconnect-register.png",
      "/projects/TriConnect/triconnect-customer-home.png",
      "/projects/TriConnect/triconnect-customer-ride-history.png",
      "/projects/TriConnect/triconnect-customer-profile.png",
      "/projects/TriConnect/triconnect-driver-dashboard.png",
      "/projects/TriConnect/triconnect-driver-earnings-cashout.png",
      "/projects/TriConnect/triconnect-driver-profile.png",
    ],
    tags: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/JocelDS/TriConnect",
    isMobile: true,
  },

  {
    title: "The Cyber Cafe 1025",
    description: "Cyber Cafe Management System.",
    images: [
      "/projects/TheCyberCafe1025/thecybercafe1025-login-page.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-dashboard.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-customers-logs.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-manage-staff.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-pc-station-map.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-payments.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-reports.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-sessions-terminal.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-my-profile.png",
    ],
    tags: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/JocelDS/thecybercafe1025",
  },

  {
    title: "Baked by the Crater",
    description: "Bakery Ordering System.",
    images: [
      "/projects/BakedbytheCreater/baked-by-the-crater-cover.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-about.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-shop.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-contact.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-login.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-signup.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-best-sellers.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-admin-login.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-admin-dashboard.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-admin-order-details.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-admin-order.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-admin-customers-users.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-admin-settings.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-admin-chat.png",
    ],
    tags: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/JocelDS/Baked_by_the_Crater",
  },

  {
    title: "Bat Cave Cafe",
    description: "Cafe Ordering and Reservation System.",
    images: [
      "/projects/BatCaveCafe/bat-cave-cafe-homepage.png",
      "/projects/BatCaveCafe/bat-cave-cafe-menupage.png",
      "/projects/BatCaveCafe/bat-cave-cafe-bookingpage.png",
      "/projects/BatCaveCafe/bat-cave-cafe-admin-loginpage.png",
      "/projects/BatCaveCafe/bat-cave-cafe-admin-dashboardpage.png",
      "/projects/BatCaveCafe/bat-cave-cafe-admin-bookingpage.png",
      "/projects/BatCaveCafe/bat-cave-cafe-admin-menupage.png",
      "/projects/BatCaveCafe/bat-cave-cafe-admin-bestsellerpage.png",
      "/projects/BatCaveCafe/bat-cave-cafe-admin-adminprofilepage.png",
    ],
    tags: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/JocelDS/Bat_Cave_Cafe",
  },

  {
    title: "Click n' Cart",
    description: "Online Grocery Shopping and Delivery System.",
    images: [
      "/projects/ClicknCart/Clickn'Cart–Homepage-Banner-Design.png",
      "/projects/ClicknCart/Clickn'Cart–Featured-Categories-Section.png",
      "/projects/ClicknCart/Clickn'Cart–Latest-Products-Grid-View.png",
      "/projects/ClicknCart/Clickn'Cart-Promotional-Discount-Banner.png",
      "/projects/ClicknCart/Clickn'Cart–Contact-Us-Form-UI.png",
    ],
    tags: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/JocelDS/Click-n-Cart",
  },

  {
    title: "Jem Rental",
    description: "Vehicle Rental Management System.",
    images: [
      "/projects/JemRental/jem-rental-splash-screen.png",
      "/projects/JemRental/jem-rental-login.png",
      "/projects/JemRental/jem-rental-dashboard.png",
      "/projects/JemRental/jem-rental-booking-management.png",
      "/projects/JemRental/jem-rental-driver-management.png",
      "/projects/JemRental/jem-rental-vehicle-management.png",
      "/projects/JemRental/jem-rental-car-return.png",
    ],
    tags: ["Java", "MySQL"],
    github: "https://github.com/JocelDS/JEM-Car-Rental-System",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from responsive web applications and
            cross-platform mobile applications to innovative software solutions
            that solve real-world problems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              id={`project-${idx}`}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 border border-white/5 bg-slate-900/40 flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image Carousel */}
              <Carousel
                images={project.images}
                title={project.title}
                isMobile={project.isMobile}
              />

              {/* Content Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:text-primary transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground hover:text-primary hover:translate-x-0.5 hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
