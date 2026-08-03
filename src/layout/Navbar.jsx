const navLinks =[
    {href: "#about", Label: "About"},
    {href: "#skills", Label: "Skills"},
    {href: "#projects", Label: "Projects"},
    {href: "#education", Label: "Education"},
    {href: "#certifications", Label: "Certifications"},
    {href: "#contact", Label: "Contact"}
]

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hver:text-primary">
                JDS<span className="text-primary">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="flexitems-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a href={link.href}>{link.Label}</a>
                    ))}
                </div>
            </div>
        </nav>
    </header>
);
};
