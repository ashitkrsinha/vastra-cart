import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const linkSections = [
        {
            title: "PRODUCTS",
            links: [
                { text: "Earphones", path: "/" },
                { text: "Headphones", path: "/" },
                { text: "Smartphones", path: "/" },
                { text: "Laptops", path: "/" },
            ],
        },
        {
            title: "WEBSITE",
            links: [
                { text: "Home", path: "/" },
                { text: "Privacy Policy", path: "/" },
                { text: "Become Plus Member", path: "/pricing" },
                { text: "Create Your Store", path: "/create-store" },
            ],
        },
        {
            title: "CONTACT",
            links: [
                {
                    text: "+1-212-456-7890",
                    path: "tel:+12124567890",
                    icon: Phone,
                },
                {
                    text: "contact@example.com",
                    path: "mailto:contact@example.com",
                    icon: Mail,
                },
                {
                    text: "794 Francisco, 94102",
                    path: "#",
                    icon: MapPin,
                },
            ],
        },
    ];

    const socialIcons = [
        {
            icon: "bi bi-facebook",
            link: "https://facebook.com",
        },
        {
            icon: "bi bi-instagram",
            link: "https://instagram.com",
        },
        {
            icon: "bi bi-twitter-x",
            link: "https://twitter.com",
        },
        {
            icon: "bi bi-linkedin",
            link: "https://linkedin.com",
        },
    ];

    return (
        <footer className="mx-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-slate-300 text-slate-500">
                    {/* Logo */}
                    <div>
                        <Link to="/" className="text-4xl font-semibold text-slate-700">
                            <span className="text-green-600">vastra</span>cart
                            <span className="text-green-600 text-5xl">.</span>
                        </Link>

                        <p className="max-w-[410px] mt-6 text-sm">
                            Welcome to vastracart, your ultimate destination for the latest and
                            smartest gadgets. From smartphones and smartwatches to essential
                            accessories, we bring you the best in innovation—all in one place.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-5">
                            {socialIcons.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-100 border border-transparent hover:border-green-300 hover:text-green-600 flex items-center justify-center transition hover:scale-105"
                                >
                                    <i className={item.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {/* <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-8 text-sm">
                        {linkSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-slate-700 mb-4">
                                    {section.title}
                                </h3>

                                <ul className="space-y-3">
                                    {section.links.map((link, i) => {
                                        const Icon = link.icon;

                                        return (
                                            <li key={i} className="flex items-center gap-2">
                                                {Icon && (
                                                    <Icon
                                                        size={16}
                                                        className="text-slate-400 flex-shrink-0"
                                                    />
                                                )}

                                                {link.path.startsWith("http") ||
                                                    link.path.startsWith("mailto") ||
                                                    link.path.startsWith("tel") ? (
                                                    <a
                                                        href={link.path}
                                                        className="hover:text-green-600 transition"
                                                    >
                                                        {link.text}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        to={link.path}
                                                        className="hover:text-green-600 transition"
                                                    >
                                                        {link.text}
                                                    </Link>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div> */}
                </div>

                {/* Bottom */}
                <p className="py-4 text-sm text-slate-500">
                    © {new Date().getFullYear()} vastracart. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;