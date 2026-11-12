
import "./Hero.css";

function Hero({ goToAnalysis }) {
  return (
    <main className="hero">
      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <div className="hero-badge">
            ✦ AI-POWERED BUSINESS INTELLIGENCE
          </div>

          <h1>
            Understand Your Business
            <span> Beyond Just Numbers.</span>
          </h1>

          <p className="hero-description">
            Analyse your revenue, expenses and profitability with intelligent
            insights designed for smarter business decisions.
          </p>

          <div className="hero-buttons">
           <button
  className="primary-btn"
  onClick={goToAnalysis}
>
  Analyse My Business <span>→</span>
</button>

            <button className="secondary-btn">
              See How It Works
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>📊</strong>
              <span>Smart Analytics</span>
            </div>

            <div>
              <strong>🤖</strong>
              <span>AI Insights</span>
            </div>

            <div>
              <strong>🔮</strong>
              <span>What-If Scenarios</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - DASHBOARD */}
        <div className="dashboard-preview">
          <div className="preview-header">
            <div>
              <p className="preview-label">
                BUSINESS OVERVIEW
              </p>

              <h3>Financial Performance</h3>
            </div>

            <span className="live-status">
              ● Live Analysis
            </span>
          </div>

          <div className="preview-cards">

            <div className="preview-card">
              <p>Revenue</p>
              <h3>₹5,00,000</h3>
              <span className="positive">↑ 12.5%</span>
            </div>

            <div className="preview-card">
              <p>Expenses</p>
              <h3>₹3,20,000</h3>
              <span>Monthly total</span>
            </div>

            <div className="preview-card profit-card">
              <p>Net Profit</p>
              <h3>₹1,80,000</h3>
              <span className="positive">
                ↑ Healthy Growth
              </span>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}

export default Hero;
