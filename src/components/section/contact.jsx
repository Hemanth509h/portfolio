import "./css/contact.css";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export function ContactSection() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);

  function onSubmit(data) {
    setLoading(true);

    emailjs
      .send(
        "service_v573mxk",     // 🔴 replace
        "template_4xehrtb",    // 🔴 replace
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "u7T_9mDN6lzVcXe5E"      // 🔴 replace
      )
      .then(() => {
        alert("Message sent successfully ✅");
        form.reset();
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send ❌");
        setLoading(false);
      });
  }

  /* ================= ANIMATIONS ================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="contact">
      <div className="container">

        {/* HEADING */}
        <Motion.div
          className="contact-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>
            Looking for a developer to join your team or build your next project?
            Let's talk.
          </p>
        </Motion.div>

        <Motion.div
          className="contact-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {/* LEFT SIDE */}
          <Motion.div className="glass-panel contact-info" variants={fadeUp}>
            <div>
              <h3>Contact Information</h3>

              <div className="info-item">
                <Mail />
                <div>
                  <p className="info-label">Email</p>
                  <p className="info-value">phemanthkumar509@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <MapPin />
                <div>
                  <p className="info-label">Location</p>
                  <p className="info-value">Kphd , Hyderabad</p>
                </div>
              </div>
            </div>

            <div className="social">
              <p>Follow Me</p>
              <a href="https://github.com/Hemanth509h" target="_blank" rel="noopener noreferrer">
      <Github />
    </a>

    <a href="https://www.linkedin.com/in/peddaboinahemanthkumar/" target="_blank" rel="noopener noreferrer">
      <Linkedin />
    </a>
                <a href="https://www.instagram.com/hemanth_kumar_509/" target="_blank" rel="noopener noreferrer">
      <Instagram />
    </a>
            </div>
          </Motion.div>

          {/* RIGHT SIDE */}
          <Motion.div className="glass-panel contact-form" variants={fadeUp}>

            <form onSubmit={form.handleSubmit(onSubmit)}>

              <div className="form-row">

                {/* NAME */}
                <Motion.div variants={fadeUp}>
                  <label>Name</label>
                  <input
                    {...form.register("name", {
                      required: "Name is required",
                    })}
                    placeholder="John Doe"
                  />
                  <AnimatePresence>
                    {form.formState.errors.name && (
                      <Motion.p
                        className="error"
                        initial={{ opacity: 0, height: 0, y: -5 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {form.formState.errors.name.message}
                      </Motion.p>
                    )}
                  </AnimatePresence>
                </Motion.div>

                {/* EMAIL */}
                <Motion.div variants={fadeUp}>
                  <label>Email</label>
                  <input
                    type="email"
                    {...form.register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    })}
                    placeholder="john@example.com"
                  />
                  <AnimatePresence>
                    {form.formState.errors.email && (
                      <Motion.p
                        className="error"
                        initial={{ opacity: 0, height: 0, y: -5 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {form.formState.errors.email.message}
                      </Motion.p>
                    )}
                  </AnimatePresence>
                </Motion.div>

              </div>

              {/* MESSAGE */}
              <Motion.div variants={fadeUp}>
                <label>Message</label>
                <textarea
                  {...form.register("message", {
                    required: "Message is required",
                  })}
                  placeholder="How can I help you?"
                />
                <AnimatePresence>
                  {form.formState.errors.message && (
                    <Motion.p
                      className="error"
                      initial={{ opacity: 0, height: 0, y: -5 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {form.formState.errors.message.message}
                    </Motion.p>
                  )}
                </AnimatePresence>
              </Motion.div>

              {/* BUTTON */}
              <Motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                layout
                style={{ position: "relative", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <Motion.span
                      key="loading"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <Motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        style={{
                          width: "14px",
                          height: "14px",
                          border: "2px solid #020617",
                          borderTopColor: "transparent",
                          borderRadius: "50%",
                          display: "inline-block"
                        }}
                      />
                      Sending...
                    </Motion.span>
                  ) : (
                    <Motion.span
                      key="send"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <Send size={16} />
                      Send Message
                    </Motion.span>
                  )}
                </AnimatePresence>
              </Motion.button>

            </form>

          </Motion.div>

        </Motion.div>
      </div>
    </section>
  );
}
