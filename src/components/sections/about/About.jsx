"use client"

import { useEffect, useRef } from "react"
import "./About.css"

const About = () => {
  // REFS FOR ANIMATION ELEMENTS
  const headingRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const teamSectionRef = useRef(null)

  // ENERGY TEAM MEMBERS DATA
  const teamMembers = [
    {
      name: "Alex Johnson",
      position: "CEO & Energy Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Sarah Williams",
      position: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Michael Chen",
      position: "Electrical Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Emily Rodriguez",
      position: "Sustainability Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "David Kim",
      position: "Smart Grid Specialist",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Jessica Patel",
      position: "Energy Consultant",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Robert Wilson",
      position: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Olivia Martinez",
      position: "Renewable Energy Analyst",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "James Taylor",
      position: "Energy Systems Engineer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Sophia Lee",
      position: "Energy Efficiency Specialist",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Daniel Brown",
      position: "Energy Data Scientist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  ]

  useEffect(() => {
    // ANIMATE ELEMENTS ON LOAD WITH STAGGERED TIMING
    const elements = [headingRef.current, contentRef.current, imageRef.current, teamSectionRef.current]
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
  }, [])

  // TEAM CAROUSEL SCROLL FUNCTION
  const scrollTeam = (direction) => {
    const container = document.querySelector(".team-cards-container")
    const scrollAmount = 320 // Approximate card width + gap
    if (container) {
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <div className="about-container">
      {/* DECORATIVE ENERGY PULSE BUBBLES */}
      <div className="bubbles-container">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>

      <div className="about-content-wrapper">
        {/* ABOUT HEADER SECTION */}
        <div className="about-header" ref={headingRef}>
          <h1>
            About <span className="highlight">Us</span>
          </h1>
          <div className="accent-line"></div>
        </div>

        <div className="about-main-content">
          {/* ABOUT TEXT CONTENT */}
          <div className="about-text" ref={contentRef}>
            <p className="about-intro">
              We are a forward-thinking energy solutions company dedicated to transforming how businesses and homes
              manage electricity through innovative technology and sustainable practices.
            </p>

            <div className="about-details">
              <div className="about-detail-item">
                <div className="detail-icon">
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
                    {/* LIGHTNING BOLT ICON */}
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <div className="detail-content">
                  <h3>Our Mission</h3>
                  <p>
                    To empower organizations to optimize energy consumption, reduce costs, and enhance sustainability
                    through innovative energy management solutions.
                  </p>
                </div>
              </div>

              <div className="about-detail-item">
                <div className="detail-icon">
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
                    {/* LEAF/RENEWABLE ICON */}
                    <path d="M2 22l1-1h18l1 1"></path>
                    <path d="M6 12a10 10 0 0 1 10-10v10"></path>
                    <path d="M6 12v10h10"></path>
                  </svg>
                </div>
                <div className="detail-content">
                  <h3>Our Vision</h3>
                  <p>
                    To lead the transition to a sustainable energy future by providing cutting-edge solutions that
                    balance efficiency, reliability, and environmental responsibility.
                  </p>
                </div>
              </div>

              <div className="about-detail-item">
                <div className="detail-icon">
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
                    {/* SMART HOME/MONITORING ICON */}
                    <path d="M22 12.5l-10-9-10 9"></path>
                    <path d="M2.5 12.5V20a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-7.5"></path>
                    <path d="M9 22v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5"></path>
                    <rect x="10" y="2" width="4" height="4"></rect>
                  </svg>
                </div>
                <div className="detail-content">
                  <h3>Our Values</h3>
                  <p>
                    We are committed to innovation, sustainability, and excellence in everything we do. Our team
                    approaches each project with integrity, expertise, and a passion for creating a cleaner energy
                    future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT IMAGE SECTION */}
          <div className="about-image-container" ref={imageRef}>
            <div className="about-image">
              <div className="overlay"></div>
            </div>
            <div className="image-accent"></div>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="team-section" ref={teamSectionRef}>
          <div className="team-header">
            <h2>
              Meet Our <span className="highlight">Team</span>
            </h2>
            <div className="team-nav">
              <button className="team-nav-button" onClick={() => scrollTeam("left")} aria-label="Scroll left">
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
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="team-nav-button" onClick={() => scrollTeam("right")} aria-label="Scroll right">
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
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* TEAM CARDS CAROUSEL */}
          <div className="team-cards-wrapper">
            <div className="team-cards-container">
              {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  <div className="team-card-image">
                    <img src={member.image || "/placeholder.svg"} alt={member.name} />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="team-card-content">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
