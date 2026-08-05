
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
  },

  {
    title: "The Cyber Cafe 1025",
    description: "Cyber Cafe Management System.",
    images: [
      "/projects/TheCyberCafe1025/thecybercafe1025-login-page.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-dashboardpage.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-customerpage.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-manage-staffpage.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-pc-stationpage.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-paymentspage.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-reportspage.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-sessions-trackingpage.png",
      "/projects/TheCyberCafe1025/thecybercafe1025-admin-my-profilepage.png",
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
      "/projects/BakedbytheCreater/baked-by-the-crater-admin-products.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-admin-orders.png",
      "/projects/BakedbytheCreater/baked-by-the-crater-admin-customers.png",
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
      "/projects/ClicknCart/Clickn'Cart–Promotional-Discount-Banner.png",
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
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animaite-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5x font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Project that
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
        {/* project grid */}
        <div className="grig md:grid-cols-2 gap-8">
          {projects.map((projects, idx) => (
            <div>
              {/* image */}
              <div>
                <img
                  src={projects.images}
                  alt="{projects.title}"
                  className="w-full h-full object-cover transition"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
