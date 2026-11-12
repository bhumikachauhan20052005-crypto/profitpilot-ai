import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
         <h2>
  <span className="footer-star">✦</span>
  ProfitPilot<span>AI</span>
</h2>

          <p>
            Turn your business numbers into smarter decisions with
            AI-powered insights.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
<a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#features">Analytics</a>
            <a href="#features">AI Insights</a>
            <a href="#features">Scenarios</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ProfitPilot AI. All rights reserved.</p>

        <p>Built for smarter business decisions ✦</p>
      </div>
    </footer>
  );
}

export default Footer;