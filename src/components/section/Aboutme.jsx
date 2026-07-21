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
          <span>
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
          DevOps-driven engineer focused on automating infrastructure, improving reliability, and enabling fast, repeatable delivery.
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
          <h4>Bridging infrastructure and application delivery.</h4>
          <p>
            I'm Peddaboina Hemanth Kumar, a DevOps engineer with a strong secondary focus in Full Stack development. I specialize in building reliable automation, scalable infrastructure, and efficient deployment pipelines.
          </p>
          <p>
            From provisioning cloud environments and orchestrating containers to developing responsive web applications, I bring a practical, end-to-end approach to software delivery.
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
