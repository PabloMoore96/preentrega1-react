import Cart from "../../../../assets/img/cart.svg";
import "./styles.css";

function CartWidget() {
  return (
    <div className="cart">
      <img src={Cart} alt="cart" className="cart-icon" />
      <p className="carrito">2</p>
    </div>
  );
}

export default CartWidget;