import { useRef, useEffect, useState } from "react";
import "./css/Aboutme.css";
import image from "../../assets/image.png";
import { motion as Motion, useInView } from "framer-motion";
import { Code2, Database, Layout, Terminal } from "lucide-react";

const stats = [
  {
    label: "Years Experience",
    value: "2+",
    icon: Terminal,
  },
  {
    label: "Projects Completed",
    value: "6+",
    icon: Layout,
  },
  {
    label: "Technologies",
    value: "12+",
    icon: Code2,
  }
];

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericVal = parseInt(value, 10) || 0;
  const suffix = value.replace(numericVal.toString(), "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericVal;
      if (start === end) return;

      const duration = 1200; // 1.2s
      const steps = 60;
      const stepTime = duration / steps;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericVal]);

  return <span ref={ref}>{isInView ? `${count}${suffix}` : `0${suffix}`}</span>;
}

export function Aboutme() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="aboutmesection" id="about">
      <div className="aboutmecontent">
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeCurve }}
          className="about-heading"
        >
          <span
            style={{
              background: "linear-gradient(#10A4E8, #50E6FC, #10A4E8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginTop: "-30px",
            }}
          >
            About Me
          </span>
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCurve }}
          className="about-description"
        >
          Passionate developer dedicated to building impactful digital solutions
          and deriving deep insights from data.
        </Motion.p>
      </div>

      <div className="aboutmecontainer">
        <Motion.img
          src={image}
          alt="About Me"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCurve }}
          className="about-img"
        />

        <Motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCurve }}
          className="about-description2"
        >
          <h4>Bridging the gap between engineering and analytics.</h4>
          <p>
            I'm Peddaboina Hemanth kumar, a Full Stack Developer & Data Analyst with over
            5 years of experience building scalable web applications and complex
            data pipelines. My dual background allows me to architect robust
            backend systems while surfacing actionable insights.
          </p>
          <p>
            Whether it's designing a high-performance REST API, crafting a
            beautiful interactive UI, or training machine learning models to
            predict market trends, I bring a detail-oriented and holistic
            approach to every project I touch.
          </p>
          <div className="stats">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.1,
                    ease: easeCurve
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(13, 162, 231, 0.15)",
                    borderColor: "rgba(13, 162, 231, 0.4)",
                  }}
                  className="stats-card"
                  style={{ transition: "box-shadow 0.3s ease, border-color 0.3s ease" }}
                >
                  <Icon className="statsicon" />
                  <span className="statsvalue">
                    <AnimatedCounter value={stat.value} />
                  </span>
                  <span className="statslabel">{stat.label}</span>
                </Motion.div>
              );
            })}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
