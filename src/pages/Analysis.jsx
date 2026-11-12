import { useState } from "react";
import "./Analysis.css";

function Analysis({ goHome , showDashboard })  {
  const [businessName, setBusinessName] = useState("");
  const [revenue, setRevenue] = useState("");
  const [expenses, setExpenses] = useState("");
  const handleAnalysis = () => {
  if (!businessName || !revenue || !expenses) {
    alert("Please fill all the details!");
    return;
  }

  const revenueNumber = Number(revenue);
  const expensesNumber = Number(expenses);

  const profit = revenueNumber - expensesNumber;

  const profitMargin =
    revenueNumber > 0
      ? ((profit / revenueNumber) * 100).toFixed(2)
      : 0;

  showDashboard({
    businessName,
    revenue: revenueNumber,
    expenses: expensesNumber,
    profit,
    profitMargin,
  });
};

  return (

    
    <main className="analysis-page">
      <section className="analysis-container">

        <button className="back-btn" onClick={goHome}>
  ← Back to Home
</button>

        <div className="analysis-header">
          <span className="analysis-badge">
            ✦ BUSINESS ANALYSIS
          </span>

          <h1>
            Let's Understand Your
            <span> Business.</span>
          </h1>

          <p>
            Enter your business details and let ProfitPilot AI
            transform your numbers into meaningful insights.
          </p>
        </div>

        <div className="analysis-card">
          <h2>Tell Us About Your Business</h2>

          <div className="form-group">
            <label>Business Name</label>

            <input
              type="text"
              placeholder="e.g. Ajay Enterprises"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Monthly Revenue (₹)</label>

              <input
                type="number"
                placeholder="e.g. 500000"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Monthly Expenses (₹)</label>

              <input
                type="number"
                placeholder="e.g. 320000"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
              />
            </div>
          </div>

      <button
  className="analyse-btn"
  onClick={handleAnalysis}
>
  Analyse My Business <span>→</span>
</button>
        </div>

      </section>
    </main>
  );
}

export default Analysis;