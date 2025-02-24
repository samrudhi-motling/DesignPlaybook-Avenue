import React, { useEffect, useRef } from "react";
import "../../css/SubsidiariesGrid.css"; // Ensure correct path

const subsidiaries = [
  { name: "Avenue Packs", logo: "/images/logos/avenue-packs.png", link: "#" },
  { name: "Avenue Buildcon", logo: "https://www.avenuegroup.co/avenue.png", link: "#" },
  { name: "Agrovan India", logo: "https://cdn.prod.website-files.com/67933d6f2b27add338fbd0e6/67933d6f2b27add338fbd27d_agrovan%2520(1)-p-500.png", link: "#" },
  { name: "Agrovan Farm Producing Company", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyO64iQKddwJYGkFyC4iVubxHiiROz2CcDrQ&s", link: "#" },
  { name: "Avenue Corporation", logo: "https://avenuepacks.com/_next/image?url=%2Fpixels%2Flogo%2Fblue-bg.png&w=1920&q=75", link: "#" },
  { name: "Sarvesh Petroleum", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADh...", link: "#" },
  { name: "La Ruche Food Stuffs", logo: "/images/logos/la-ruche.png", link: "#" },
  { name: "Avenue Foundation", logo: "/images/logos/avenue-foundation.png", link: "#" },
];

export default function SubsidiariesGrid() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null); // Reference for the title

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = section.querySelectorAll(".subsidiary-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(title); // Observe the title
    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.unobserve(title);
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section ref={sectionRef} className="subsidiaries-container">
      <h3 ref={titleRef} className="section-title">Our Subsidiaries</h3>
      <div className="profiles">
        {subsidiaries.map((company, index) => (
          <div key={index} className="subsidiary-card">
            <a href={company.link} target="_blank" rel="noopener noreferrer" className="subsidiary-logo overflow-hidden">
              <img src={company.logo} alt={company.name} />
            </a>
            <span className="subsidiary-name">{company.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}