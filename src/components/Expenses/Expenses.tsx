import { Balance } from "../Balance";
import { Chart } from "../Chart";
import { ChartDetails } from "../ChartDetails";
import "./styles.css";

export const Expenses = () => {
  return (
    <div className="expenses-container">
      <Balance />
      <div className="chart-container">
        <div className="chart-title">Spending - Last 7 days</div>
        <Chart />
        <ChartDetails />
      </div>
    </div>
  );
};
