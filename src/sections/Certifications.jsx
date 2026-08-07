import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Power BI",
    theme: '"Business Analytics Training Course"',
    issuer: "FIT Academy / BatStateU - Malvar",
    date: "December 8, 2025",
    image: "/certificate/cert3.png",
  },
  {
    title: "DATABIZ 2025",
    theme: '"Future-Proof Skills: Empowering Students with Data, AI, and Analytics"',
    issuer: "Batangas Information Technology Society",
    date: "October 25, 2025",
    image: "/certificate/cert4.png",
  },
  {
    title: "Batangas IT Conference (BITCON) 2025",
    theme: '"Building a Connected Tomorrow: IoT Innovations and Beyond"',
    issuer: "Batangas Information Technology Society",
    date: "April 26, 2025",
    image: "/certificate/cert2.jpg",
  },
  {
    title: "Databiz 2024",
    theme:
      '"Equipping Tomorrow\'s Innovators with Data Science, AI, and Business Analytics"',
    issuer: "Batangas Information Technology Society",
    date: "November 9, 2024",
    image: "/certificate/cert1.jpg",
  },
];

export const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Learning that{" "}
            <span className="font-serif italic font-normal text-white">
              keeps growing.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Conferences, events, and learning experiences that have contributed
            to my growth in technology, data science, and business analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((certificate, idx) => (
            <div
              key={certificate.title}
              className="group glass rounded-3xl p-6 overflow-hidden border border-white/10 bg-slate-900/60 animate-fade-in text-center flex flex-col items-center justify-between shadow-xl"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* Certificate Image Preview Card */}
              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="relative block w-full rounded-2xl overflow-hidden cursor-pointer text-left mb-6 border-2 border-primary/40 shadow-[0_0_20px_rgba(23,178,166,0.35)] hover:shadow-[0_0_30px_rgba(23,178,166,0.6)] transition-all duration-500"
                aria-label={`View ${certificate.title} certificate`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* View Icon Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
                    <div className="p-3.5 rounded-full glass border border-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-100 scale-90 shadow-lg">
                      <Maximize2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </button>

              {/* Certificate Details */}
              <div className="space-y-3 w-full flex flex-col items-center">
                <h3 className="text-2xl font-bold text-primary tracking-wide">
                  {certificate.title}
                </h3>

                <p className="text-sm italic text-slate-300 max-w-md font-serif leading-relaxed">
                  {certificate.theme}
                </p>

                <div className="pt-2 text-sm space-y-1 text-slate-300/90 font-medium">
                  <p>
                    Issued by:{" "}
                    <span className="text-white">{certificate.issuer}</span>
                  </p>
                  <p>
                    Date: <span className="text-white">{certificate.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 animate-fade-in"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-5 right-5 md:top-8 md:right-8 z-20 p-2 rounded-full text-white bg-white/10 hover:bg-primary hover:text-black transition-all duration-300"
            aria-label="Close certificate"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Certificate Image inside Modal */}
          <div
            className="relative max-w-4xl max-h-[90vh] flex items-center justify-center border-2 border-primary/50 rounded-2xl shadow-[0_0_35px_rgba(23,178,166,0.5)] overflow-hidden bg-slate-950"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
