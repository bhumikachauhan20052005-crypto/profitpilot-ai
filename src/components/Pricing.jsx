import "./Pricing.css";

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹499",
      description: "Perfect for small businesses getting started.",
      features: [
        "Basic Business Analytics",
        "Profit & Expense Tracking",
        "Monthly Reports",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹999",
      description: "For businesses that want deeper insights.",
      features: [
        "Advanced AI Insights",
        "What-If Scenarios",
        "Smart Business Analytics",
        "Priority Support",
      ],
      popular: true,
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="section-heading">
          <span className="section-badge">✦ SIMPLE PRICING</span>

          <h2>
            Choose the Plan That
            <span> Fits Your Business</span>
          </h2>

          <p>
            Get powerful business insights and make smarter decisions with
            ProfitPilot AI.
          </p>
        </div>

        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              key={index}
            >
              {plan.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <h3>{plan.name}</h3>

              <p className="plan-description">
                {plan.description}
              </p>

              <div className="price">
                {plan.price}
                <span>/month</span>
              </div>

              <button className="pricing-btn">
                Get Started →
              </button>

              <div className="features-list">
                {plan.features.map((feature, i) => (
                  <p key={i}>✓ {feature}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;