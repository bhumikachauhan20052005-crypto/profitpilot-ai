import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      
      <div className="how-heading">
        <span className="section-tag">
          ✦ HOW IT WORKS
        </span>

        <h2>
          From Numbers To <span>Smart Decisions.</span>
        </h2>

        <p>
          Transform your business data into powerful insights in just
          three simple steps.
        </p>
      </div>

      <div className="steps-container">

        <div className="step-card">
          <div className="step-number">01</div>
          <div className="step-icon">📊</div>

          <h3>Enter Your Business Data</h3>

          <p>
            Add your revenue, expenses and other important business
            information securely.
          </p>
        </div>
         <div className="step-arrow">→</div>

        <div className="step-card">
          <div className="step-number">02</div>
          <div className="step-icon">🤖</div>

          <h3>AI Analyses Your Business</h3>

          <p>
            Our intelligent system processes your data and identifies
            important patterns and opportunities.
          </p>
        </div>

         <div className="step-arrow">→</div>

        <div className="step-card">
          <div className="step-number">03</div>
          <div className="step-icon">💡</div>

          <h3>Get Smart Insights</h3>

          <p>
            Receive clear insights and recommendations to make smarter
            business decisions.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;