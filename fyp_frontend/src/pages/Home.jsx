import { useState, useEffect, useRef } from "react";
import pokhara from "../assets/pokhara.jpeg";
import tilicho from "../assets/tilicho.jpeg";
import mustang from "../assets/mustang.jpeg";
import chitwan from "../assets/chitwan.jpeg";
import manang from "../assets/manang.jpeg";
import rara from "../assets/rara.jpeg";
import "./Home.css";

const places = [
  {
    name: "Pokhara",
    img: pokhara,
    short: "Pokhara is a scenic city famous for Phewa Lake.",
    full:
      "Pokhara is a scenic city famous for Phewa Lake, Annapurna views, paragliding and peace.",
    package: {
      location: "Pokhara, Nepal",
      reach: "Flight or tourist bus from Kathmandu",
      time: "3–5 Days",
      expense: "NPR 20,000 – 40,000",
      take: "Light jacket, camera, walking shoes",
      description:
        "Pokhara is Nepal’s tourism capital with lakes, mountains, adventure sports and peaceful vibes."
    }
  },
  {
    name: "Tilicho Lake",
    img: tilicho,
    short: "One of the highest lakes in the world.",
    full:
      "Tilicho Lake lies at 4,919 meters and is among the highest lakes in the world.",
    package: {
      location: "Manang, Nepal",
      reach: "Jeep + Trek from Besisahar",
      time: "7–10 Days",
      expense: "NPR 45,000 – 70,000",
      take: "Warm clothes, trekking gear, sunscreen",
      description:
        "Tilicho Lake is a high-altitude trekking destination offering breathtaking Himalayan scenery."
    }
  },
  {
    name: "Upper Mustang",
    img: mustang,
    short: "Desert-like region with ancient culture.",
    full:
      "Upper Mustang offers trans-Himalayan landscapes and Tibetan culture.",
    package: {
      location: "Mustang, Nepal",
      reach: "Flight to Jomsom + Jeep",
      time: "7–9 Days",
      expense: "NPR 60,000 – 90,000",
      take: "ID permit, warm clothes, sunglasses",
      description:
        "Upper Mustang is a restricted area with ancient monasteries, caves and unique landscapes."
    }
  },
  {
    name: "Chitwan National Park",
    img: chitwan,
    short: "Wildlife and jungle safaris.",
    full:
      "Chitwan National Park is home to rhinos, tigers, elephants and birdlife.",
    package: {
      location: "Chitwan, Nepal",
      reach: "Tourist bus or private vehicle",
      time: "2–3 Days",
      expense: "NPR 15,000 – 30,000",
      take: "Light clothes, mosquito repellent",
      description:
        "Chitwan offers jungle safaris, wildlife spotting and cultural experiences."
    }
  },
  {
    name: "Manang",
    img: manang,
    short: "Himalayan valley on Annapurna Circuit.",
    full:
      "Manang is known for trekking, monasteries and glacier views.",
    package: {
      location: "Manang, Nepal",
      reach: "Jeep from Besisahar",
      time: "6–8 Days",
      expense: "NPR 35,000 – 55,000",
      take: "Warm clothes, trekking shoes",
      description:
        "Manang is a high-altitude valley popular among trekkers and nature lovers."
    }
  },
  {
    name: "Rara Lake",
    img: rara,
    short: "Largest lake in Nepal.",
    full:
      "Rara Lake is Nepal’s largest lake surrounded by forests and hills.",
    package: {
      location: "Mugu, Nepal",
      reach: "Flight to Talcha + Trek",
      time: "7–9 Days",
      expense: "NPR 50,000 – 80,000",
      take: "Warm jacket, camera, trekking shoes",
      description:
        "Rara Lake offers untouched beauty, serenity and alpine landscapes."
    }
  }
];

const leftMenus = {
  honeymoon: ["Pokhara", "Nagarkot", "Chandragiri", "Mustang"],
  family: ["Chitwan", "Lumbini", "Kathmandu", "Pokhara"],
  solo: ["Manang", "Rara", "Langtang", "Upper Mustang"],
  holiday: ["Bandipur", "Ilam", "Gosaikunda"],
};

const rightMenus = {
  hotels: ["Kathmandu Hotels", "Pokhara Hotels", "Chitwan Resorts"],
  guide: ["Best Time to Visit", "Top Trekking Routes", "Cultural Tours"],
  theme: ["Adventure", "Luxury", "Spiritual"],
  plan: ["Customize Trip", "Budget Planner"],
};

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showPackage, setShowPackage] = useState(null);
  const carouselRef = useRef(null);

  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? null : key);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % places.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const prevSlide = () => {
    setPaused(true);
    setCurrent((prev) => (prev - 1 + places.length) % places.length);
  };

  const nextSlide = () => {
    setPaused(true);
    setCurrent((prev) => (prev + 1) % places.length);
  };

  useEffect(() => {
    const resume = (e) => {
      if (carouselRef.current && !carouselRef.current.contains(e.target)) {
        setPaused(false);
      }
    };
    document.addEventListener("click", resume);
    return () => document.removeEventListener("click", resume);
  }, []);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <section className="top-bar">
        <div className="top-bar-inner">
          <div className="top-left">
            {[
              ["honeymoon", "Honeymoon Package"],
              ["family", "Family Package"],
              ["solo", "Solo Tour"],
              ["holiday", "Holiday Deal"],
            ].map(([key, label]) => (
              <div className="dropdown" key={key}>
                <div className="drop-header" onClick={() => toggleMenu(key)}>
                  {label}
                  <span>{openMenu === key ? " ▲" : " ▼"}</span>
                </div>
                {openMenu === key && (
                  <ul className="drop-menu">
                    {leftMenus[key].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="top-right">
            {[
              ["hotels", "Hotels"],
              ["guide", "Destination Guide"],
              ["theme", "Holiday Theme"],
              ["plan", "Plan My Holiday"],
            ].map(([key, label]) => (
              <div className="dropdown" key={key}>
                <div className="drop-header" onClick={() => toggleMenu(key)}>
                  {label}
                  <span>{openMenu === key ? " ▲" : " ▼"}</span>
                </div>
                {openMenu === key && (
                  <ul className="drop-menu">
                    {rightMenus[key].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HERO ================= */}
      <section className="hero">
        <h1>Customize & Plan Your Dream Trip</h1>
        <p>Explore Nepal with curated travel experiences</p>

        <div className="search-box">
          <input type="text" placeholder="Enter destination" />
          <select>
            <option>Select duration</option>
            <option>3–5 Days</option>
            <option>5–7 Days</option>
          </select>
          <select>
            <option>Select month</option>
            {[
              "January","February","March","April","May","June",
              "July","August","September","October","November","December"
            ].map(m => <option key={m}>{m}</option>)}
          </select>
          <button>Explore</button>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="card-grid">
          {places.map((place, index) => (
            <div className="place-card" key={index}>
              <img src={place.img} alt={place.name} />
              <div className="overlay">
                <h3>{place.name}</h3>
                <p>{openIndex === index ? place.full : place.short}</p>
                <span
                  className="more"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {openIndex === index ? "show less" : "more"}
                </span>

                {/* ✅ ONLY ADDITION */}
                <button
                  className="package-btn"
                  onClick={() => {
                    setShowPackage(place);
                    setPaused(true);
                  }}
                >
                  View Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= YOU MAY ALSO BE INTERESTED ================= */}
      <section className="interested">
        <h2>You may be also interested</h2>

        <div className="carousel" ref={carouselRef}>
          <button className="nav left" onClick={prevSlide}>❮</button>

          <div className="carousel-track">
            {places.map((place, index) => {
              let cls = "slide";
              if (index === current) cls += " active";
              else if (index === (current - 1 + places.length) % places.length)
                cls += " prev";
              else if (index === (current + 1) % places.length)
                cls += " next";
              else cls += " hidden";

              return (
                <div key={index} className={cls}>
                  <img src={place.img} alt={place.name} />

                  {index === current && (
                    <div className="slide-info">
                      <h3>{place.name}</h3>
                      <p>{place.short}</p>
                      <button
                        className="package-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowPackage(place);
                          setPaused(true);
                        }}
                      >
                        View Package
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button className="nav right" onClick={nextSlide}>❯</button>
        </div>
      </section>

      {/* ================= PACKAGE DETAILS ================= */}
      {showPackage && (
        <section className="package-details">
          <h2>{showPackage.name} Package</h2>
          <ul>
            <li><strong>📍 Location:</strong> {showPackage.package.location}</li>
            <li><strong>🚗 How to reach:</strong> {showPackage.package.reach}</li>
            <li><strong>⏱ Time:</strong> {showPackage.package.time}</li>
            <li><strong>💰 Expense:</strong> {showPackage.package.expense}</li>
            <li><strong>🎒 What to take:</strong> {showPackage.package.take}</li>
          </ul>
          <p>{showPackage.package.description}</p>
          <button
            className="close-package"
            onClick={() => {
              setShowPackage(null);
              setPaused(false);
            }}
          >
            Close
          </button>
        </section>
      )}
    </>
  );
}
