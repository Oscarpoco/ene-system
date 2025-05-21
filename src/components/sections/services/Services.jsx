"use client"

import { useEffect, useRef, useState } from "react"
import "./Services.css"

const Services = () => {
  // REFS FOR ANIMATION ELEMENTS
  const headingRef = useRef(null)
  const introRef = useRef(null)
  const servicesRef = useRef(null)
  const [activeService, setActiveService] = useState(0)

  // ENERGY SERVICES DATA
  const services = [
    {
      id: 1,
      title: "Energy Audits",
      description:
        "Our comprehensive energy audits identify inefficiencies and provide actionable recommendations to reduce consumption. We analyze your electrical systems, equipment, and usage patterns to create a customized energy optimization plan.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      features: [
        "Thermal Imaging Analysis",
        "Load Profiling",
        "Energy Consumption Tracking",
        "Cost-Saving Recommendations",
      ],
    },
    {
      id: 2,
      title: "Solar Installation",
      description:
        "Harness the power of the sun with our custom solar panel installations. We design and implement solar energy systems tailored to your specific needs, helping you reduce electricity costs and your carbon footprint.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ),
      features: [
        "Residential & Commercial Systems",
        "Battery Storage Solutions",
        "Grid-Tied & Off-Grid Options",
        "Monitoring & Maintenance",
      ],
    },
    {
      id: 3,
      title: "Smart Grid Solutions",
      description:
        "Modernize your electrical infrastructure with our smart grid technologies. Our solutions enable real-time monitoring, automated load management, and improved reliability while reducing operational costs and energy waste.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
          <polyline points="17 2 12 7 7 2"></polyline>
        </svg>
      ),
      features: [
        "Advanced Metering Infrastructure",
        "Demand Response Systems",
        "Distribution Automation",
        "Outage Management",
      ],
    },
    {
      id: 4,
      title: "Energy Efficiency Upgrades",
      description:
        "Reduce energy consumption with our efficiency upgrade services. We replace outdated systems with energy-efficient alternatives, from LED lighting to HVAC optimization, helping you save money while reducing environmental impact.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
      features: [
        "LED Lighting Retrofits",
        "HVAC Optimization",
        "Building Envelope Improvements",
        "Energy-Efficient Appliances",
      ],
    },
    {
      id: 5,
      title: "Smart Home Integration",
      description:
        "Transform your home with intelligent energy management systems. Our smart home solutions integrate with your electrical systems to automate energy usage, enhance comfort, and provide real-time monitoring and control.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12.5l-10-9-10 9"></path>
          <path d="M2.5 12.5V20a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-7.5"></path>
          <path d="M9 22v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5"></path>
        </svg>
      ),
      features: [
        "Smart Thermostats",
        "Automated Lighting Control",
        "Energy Monitoring Systems",
        "Voice-Controlled Devices",
      ],
    },
    {
      id: 6,
      title: "EV Charging Stations",
      description:
        "Support the transition to electric vehicles with our charging station installation services. We provide residential and commercial EV charging solutions that are efficient, reliable, and tailored to your specific requirements.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 7h2v10h-2z"></path>
          <path d="M5 7v10a2 2 0 0 0 2 2h9.5"></path>
          <path d="M13 5V3h4v2"></path>
          <path d="M13 14v-4"></path>
          <path d="M13 10h-2.5a1.5 1.5 0 0 0 0 3h2.5"></path>
        </svg>
      ),
      features: [
        "Level 2 & DC Fast Chargers",
        "Residential Installation",
        "Commercial Charging Stations",
        "Smart Charging Technology",
      ],
    },
  ]

  useEffect(() => {
    // ANIMATE ELEMENTS ON LOAD WITH STAGGERED TIMING
    const elements = [headingRef.current, introRef.current, servicesRef.current]
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add("animate-in")
        }, 100 * index)
      }
    })

    // ANIMATE ENERGY PULSE BUBBLES
    const bubbles = document.querySelectorAll(".bubble")
    bubbles.forEach((bubble) => {
      setInterval(() => {
        const xPos = Math.random() * 20 - 10
        const yPos = Math.random() * 20 - 10
        bubble.style.transform = `translate(${xPos}px, ${yPos}px)`
      }, 3000)
    })

    // AUTO-ROTATE SERVICES TABS
    const interval = setInterval(() => {
      setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="services-container">
      {/* DECORATIVE ENERGY PULSE BUBBLES */}
      <div className="bubbles-container">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>

      <div className="services-content-wrapper">
        {/* SERVICES HEADER SECTION */}
        <div className="services-header" ref={headingRef}>
          <h1>
            Our <span className="highlight">Services</span>
          </h1>
          <div className="accent-line"></div>
        </div>

        {/* SERVICES INTRO SECTION */}
        <div className="services-intro" ref={introRef}>
          <p>
            We offer comprehensive energy solutions tailored to your specific needs. Our expert team delivers
            cutting-edge services that optimize efficiency, reduce costs, and promote sustainability.
          </p>
        </div>

        {/* SERVICES MAIN CONTENT */}
        <div className="services-main" ref={servicesRef}>
          {/* SERVICES TABS NAVIGATION */}
          <div className="services-tabs">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-tab ${activeService === index ? "active" : ""}`}
                onClick={() => setActiveService(index)}
              >
                <div className="tab-icon">{service.icon}</div>
                <span>{service.title}</span>
              </div>
            ))}
          </div>

          {/* SERVICES DETAILED CONTENT */}
          <div className="services-content">
            {services.map((service, index) => (
              <div key={service.id} className={`service-content ${activeService === index ? "active" : ""}`}>
                <div className="service-details">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>

                  <div className="service-features">
                    {service.features.map((feature, i) => (
                      <div className="feature-item" key={i}>
                        <div className="feature-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="service-cta">
                    <span>Get a Quote</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

                {/* SERVICE IMAGE */}
                <div className="service-image">
                  <div className="image-shape"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES GRID CARDS */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description.substring(0, 100)}...</p>
              <button className="card-cta">
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION SECTION */}
        <div className="services-cta-section">
          <h2>Ready to optimize your energy usage?</h2>
          <p>Let's discuss how our services can help you save money and reduce your environmental impact.</p>
          <button className="main-cta-button">
            <span>Schedule a Consultation</span>
            <div className="circle-icon">
              <span className="arrow">→</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services
