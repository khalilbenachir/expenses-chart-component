import "./styles.css";

export const ChartDetails = () => {
  return (
    <div className="chart-details-container">
      <div className="total-container">
        <div>Total this month</div>
        <div className="total-infos">$478.33</div>
      </div>
      <div className="chart-details">
        <div className="statistic">+2.4%</div>
        <div>from last month</div>
      </div>
    </div>
  );
};
