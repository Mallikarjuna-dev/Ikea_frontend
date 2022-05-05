import { useNavigate } from "react-router-dom";
import { SuccessWrapper } from "./SuccessWrapper";
import { useEffect } from "react";

export const Success = () => {
  const navigate = useNavigate();

  const clearCart = () => {
    localStorage.removeItem("IkeaCart");
  };

  useEffect(() => {
    clearCart();
  }, []);
  return (
    <SuccessWrapper>
      <div className="successImg">
        <h1>Your Payment has been captured.</h1>
        <p>Your order will be delivered ASAP.</p>
        <img
          src="https://cdn.dribbble.com/users/2071065/screenshots/10968979/media/043a68cb533f0708ef545637e783022f.png"
          alt=""
        />
      </div>
      <div className="btn">
        <button onClick={() => navigate(`/products`)}>Continue Shopping</button>
      </div>
    </SuccessWrapper>
  );
};
