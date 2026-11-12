import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.business
    ) {
      alert("Please fill in all fields!");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      business: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-content">
          <span className="contact-badge">
            ✦ LET'S GROW TOGETHER
          </span>

          <h2>
            Ready to Understand Your
            <span> Business Better?</span>
          </h2>

          <p>
            Request a free demo and discover how ProfitPilot AI can help you
            make smarter business decisions.
          </p>

          <div className="contact-points">
            <p>✦ AI-powered insights</p>
            <p>✦ Smart profit analysis</p>
            <p>✦ Better business decisions</p>
          </div>
        </div>

        <div className="contact-form-card">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>

              <h3>Demo Request Received!</h3>

              <p>
                Thank you! We'll get in touch with you soon.
              </p>

              <button onClick={() => setSubmitted(false)}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <>
              <h3>Request a Free Demo</h3>

              <form onSubmit={handleSubmit}>
              <input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  required
/>

              <input
  type="email"
  name="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={handleChange}
  required
/>
<input
  type="text"
  name="business"
  placeholder="Business Name"
  value={formData.business}
  onChange={handleChange}
  required
/>

                <button type="submit">
                  Request Demo →
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}

export default Contact;