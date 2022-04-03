import React from "react";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Cart(e) {
  const { selectedBookList } = useContext(AuthContext);
  return (
    <div>
      <div className="shopping-cart">
        <h1 className="title">Shopping Dashboard</h1>

        {selectedBookList.length !== 0 ? (
          selectedBookList.map((book, index) => {
            return (
              <div className="item" key={index}>
                <div className="buttons">
                  <DeleteOutlined style={{ fontSize: 25 }} />
                </div>
                <div className="image">
                  <img src={book.image} alt="" />
                </div>
                <div className="description">
                  <span>{book.bookName}</span>

                  <span>White</span>
                </div>
                <div className="quantity">
                  <button className="minus-btn" type="button" name="button">
                    <MinusCircleOutlined />
                  </button>
                  <p>{book.count}</p>
                  <button className="plus-btn" type="button" name="button">
                    <PlusCircleOutlined />
                  </button>
                </div>
                <div className="total-price">{`$${book.price}`}</div>
              </div>
            );
          })
        ) : (
          <h1 className="title">Choose some books</h1>
        )}
        <StripeCheckout
          stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
          token={() => toast("OK")}
          name="Pay with Stripe"
          //  billingAddress
          //  shippingAddress
          panelLabel="Pay" // prepended to the amount in the bottom pay button
          amount={75} // cents
          currency="USD"
        />
      </div>
    </div>
  );
}
