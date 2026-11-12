import "./Dashboard.css";

function Dashboard({ businessData, goHome, goBack }) {
  const {
    businessName,
    revenue,
    expenses,
    profit,
    profitMargin,
  } = businessData;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="dashboard-page">
      <section className="dashboard-container">

        <div className="dashboard-top">
          <button className="back-btn" onClick={goBack}>
            ← Edit Details
          </button>

          <button className="home-btn" onClick={goHome}>
            ⌂ Home
          </button>
        </div>

        <div className="dashboard-header">
          <span className="analysis-badge">
            ✦ ANALYSIS COMPLETE
          </span>

          <h1>
            Your Business <span>Insights.</span>
          </h1>

          <p>
            Here's what we discovered about{" "}
            <strong>{businessName}</strong>.
          </p>
        </div>

        <div className="dashboard-grid">

          <div className="metric-card">
            <span className="metric-icon">💰</span>
            <p>Monthly Revenue</p>
            <h2>{formatCurrency(revenue)}</h2>
          </div>

          <div className="metric-card">
            <span className="metric-icon">💸</span>
            <p>Monthly Expenses</p>
            <h2>{formatCurrency(expenses)}</h2>
          </div>

          <div className="metric-card profit-metric">
            <span className="metric-icon">📈</span>
            <p>Net Profit</p>
            <h2>{formatCurrency(profit)}</h2>
          </div>

          <div className="metric-card">
            <span className="metric-icon">📊</span>
            <p>Profit Margin</p>
            <h2>{profitMargin}%</h2>
          </div>

        </div>

      </section>
    </main>
  );
}

export default Dashboard;