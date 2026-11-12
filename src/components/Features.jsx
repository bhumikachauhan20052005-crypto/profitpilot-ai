import FeatureCard from "./FeatureCard.jsx";
import "./Features.css";

function Features() {
  return (
    <section className="features" id="features">
      
      <div className="features-heading">
        <span className="section-tag">
          ✦ POWERFUL FEATURES
        </span>

        <h2>
          Everything You Need To
          <span> Understand Your Business.</span>
        </h2>

        <p>
          Powerful tools designed to transform your business data into
          meaningful insights and smarter decisions.
        </p>
      </div>

      <div className="features-grid">
        <FeatureCard
          icon="📊"
          title="Smart Analytics"
          description="Track your revenue, expenses and profitability with clear and actionable analytics."
        />

        <FeatureCard
          icon="🤖"
          title="AI-Powered Insights"
          description="Get intelligent recommendations and discover patterns hidden inside your business data."
        />

        <FeatureCard
          icon="🔮"
          title="What-If Scenarios"
          description="Explore different business possibilities and understand the impact before making decisions."
        />
      </div>

    </section>
  );
}

export default Features;