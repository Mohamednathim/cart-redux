import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Add_To_Cart, Delete_From_Cart } from "../slices/CartSlice";
import { Products } from "../data/Products";

const Home = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = (item) => {
    dispatch(Add_To_Cart(item));
    navigate("/cart");
  };

  const removeFromCart = (item) => {
    dispatch(Delete_From_Cart(item.id));
  };

  const isInCart = (itemId) => {
    return cart.items.some((item) => item.id === itemId);
  };

  return (
    <div className="d-flex flex-wrap w-100 justify-content-center align-items-center">
      {Products.map((item) => (
        <div
          key={item.id}
          className="card d-flex justify-content-center align-items-center text-center border-0 m-4 p-4"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            width="100%"
            height="300px"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">⭐{item.rating}</p>
            </div>
            <p className="card-text">{item.description}</p>
            <p className="card-text">
              <b>Price: ${item.price}</b>
            </p>
            {isInCart(item.id) ? (
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item)}
              >
                Remove From Cart
              </button>
            ) : (
              <button
                className="btn btn-warning"
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
