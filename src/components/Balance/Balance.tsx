import { Logo } from "../Logo";
import "./styles.css";

export const Balance = () => {
  return (
    <div className="balance-container">
      <div className="balance">
        <div className="balance-header">My balance</div>
        <div className="balance-details">$921.48</div>
      </div>
      <div className="logo">
        <Logo />
      </div>
    </div>
  );
};
