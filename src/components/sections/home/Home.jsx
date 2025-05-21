"use client"

import { useEffect, useRef } from "react"
import "./Home.css"

// ICON
import { IoIosArrowForward } from "react-icons/io"

const Home = () => {
  // REFS FOR ANIMATION ELEMENTS
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)
  const featuresRef = useRef(null)

  useEffect(() => {
    // ANIMATE ELEMENTS ON LOAD WITH STAGGERED TIMING
    const elements = [headingRef.current, paragraphRef.current, ctaRef.current, imageRef.current, featuresRef.current]
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

  return (
    <div className="home-container">
      {/* DECORATIVE ENERGY PULSE BUBBLES */}
      <div className="bubbles-container">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>

      <div className="content-wrapper">
        <div className="content-text">
          <div className="text-content-inner">
            {/* MAIN HEADING WITH HIGHLIGHT */}
            <h1 ref={headingRef}>
              <span className="highlight">Powering</span> Tomorrow,
              <br />
              Today
            </h1>
            {/* SUBHEADING TEXT */}
            <p ref={paragraphRef}>
              Smart electrical solutions for a sustainable future.
              <br />
              Reduce costs, increase efficiency, and embrace clean energy.
            </p>

            {/* CALL TO ACTION BUTTONS */}
            <div className="cta-wrapper" ref={ctaRef}>
              <button className="cta-button primary">
                <span>ENERGY AUDIT</span>
                <div className="circle-icon">
                  <div className="arrow">
                    <IoIosArrowForward size={20} />
                  </div>
                </div>
              </button>

              <button className="cta-button secondary">
                <span>OUR SOLUTIONS</span>
              </button>
            </div>

            {/* FEATURE HIGHLIGHTS */}
            <div className="features-section" ref={featuresRef}>
              <div className="feature">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* LIGHTNING BOLT ICON */}
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <h3>Efficient</h3>
                  <h6 className="p-tag">Reduce energy waste</h6>
                </div>
              </div>

              <div className="feature feature-two">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* LEAF/RENEWABLE ICON */}
                    <path d="M2 22l1-1h18l1 1"></path>
                    <path d="M6 12a10 10 0 0 1 10-10v10"></path>
                    <path d="M6 12v10h10"></path>
                  </svg>
                </div>
                <div className="feature-text">
                  <h3>Renewable</h3>
                  <h6 className="p-tag">Clean energy solutions</h6>
                </div>
              </div>

              <div className="feature feature-three">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
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
                <div className="feature-text">
                  <h3>Smart</h3>
                  <h6 className="p-tag">Intelligent monitoring</h6>
                </div>
              </div>
            </div>
          </div>

          {/* BACKGROUND PATTERN ELEMENT */}
          <div className="background-pattern"></div>
        </div>

        {/* MAIN IMAGE CONTAINER */}
        <div className="image-container" ref={imageRef}>
          <div className="tech-image">
            <div className="overlay"></div>
          </div>
          <div className="image-accent"></div>
          <div className="image-accent-2"></div>

          {/* TECHNOLOGY INDICATOR POINTS */}
          <div className="tech-indicators">
            <div className="tech-indicator">
              <div className="pulse-circle"></div>
              <div className="indicator-line"></div>
              <div className="indicator-text">Smart Grid</div>
            </div>
            <div className="tech-indicator indicator-2">
              <div className="pulse-circle"></div>
              <div className="indicator-line"></div>
              <div className="indicator-text">Solar Integration</div>
            </div>
            <div className="tech-indicator indicator-3">
              <div className="pulse-circle"></div>
              <div className="indicator-line"></div>
              <div className="indicator-text">Energy Storage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
