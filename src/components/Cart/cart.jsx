import { useEffect, useState } from "react";
import { Wrapper } from "./cartCss";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("IkeaCart")) || []
  );

  const navigate = useNavigate();

  const Razorpay = useRazorpay();
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(0);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    totalprice();
    handleQuantity();
  }, [cart]);

  const handleQuantity = () => {
    let temp = cart;
    for (let i = 0; i < temp.length; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        if (temp[i]._id === temp[j]._id) {
          temp[i].quantity = Number(temp[i].quantity) + 1;
          temp.splice(j, 1);
          j--;
        }
      }
    }

    localStorage.setItem("IkeaCart", JSON.stringify(temp));
    setCart(temp);
  };

  const totalprice = () => {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity * cart[i].price;
    }

    setTotal(sum);
    setPay(sum * 100);
  };

  const handleChange = (i, v) => {
    let temp = [...cart];
    if (temp[i].quantity === 1 && v === -1) {
      handelDelete(i);
      return;
    }
    temp[i].quantity = temp[i].quantity + v;

    setCart(temp);
  };

  const handelDelete = (i) => {
    console.log(i);
    let temp = [...cart];

    temp.splice(i, 1);

    setCart(temp);
  };

  //Generate Order

  const handlePayEvent = () => {
    async function generateOrderId() {
      try {
        const res = await fetch(
          "https://steve-madden.herokuapp.com/create/orderId",
          {
            method: "POST",
            body: JSON.stringify({ amount: setTotal(pay) }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        let response = await res.json();
        // console.log(response);
        setOrderId(response.orderId);
        console.log(orderId);
        // document.getElementById("button").style.display = "block";
        // $("button").show();
      } catch (e) {
        console.log("generateOrderId" + e);
      }
    }

    generateOrderId();

    //endof Pay Event
    const saveFn = function (e) {
      var options = {
        key: "rzp_test_VsoO9BEK2erzgZ", // Enter the Key ID generated from the Dashboard
        amount: pay, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Ikea Clone Project Masai",
        description: "Test Transaction",
        image:
          "https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the previous step
        handler: function (response) {
          // response = JSON.stringify(response);
          console.log("hello response" + response);
          // alert(response.razorpay_payment_id);
          navigate(`/success`);

          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          async function saveOrder(response) {
            try {
              const res = await fetch(
                "https://steve-madden.herokuapp.com/saveOrderDetails",
                {
                  method: "POST",
                  body: JSON.stringify(response),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              let saveDetail = await res.json();
              console.log(saveDetail);
              // window.location.href = "success.html";
            } catch (e) {
              console.log("saveOrderErr" + e);
            }
          }
          saveOrder();

          // var settings = {
          //   url: "http://localhost:7896/api/payment/verify",
          //   method: "POST",
          //   timeout: 0,
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   data: JSON.stringify({ response }),
          // };

          // $.ajax(settings).done(function (response) {
          //   console.log(JSON.stringify(response));
          // });
          const settings = async (response) => {
            try {
              const res = await fetch(
                "https://steve-madden.herokuapp.com/api/payment/verify",
                {
                  method: "POST",
                  body: JSON.stringify(response),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              let verifyDetail = await res.json();
              console.log(verifyDetail);
              // $.ajax(settings).done(function (response) {
              //     console.log(JSON.stringify(response));
              //   });
            } catch (e) {
              console.log("saveOrderErr" + e);
            }
          };
          settings();
        },

        theme: {
          color: "#343434",
        },
      };

      var rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
      // e.preventDefault();
    };

    saveFn();
  };

  return (
    <Wrapper>
      <div>
        <h2>Shopping cart</h2>
      </div>
      {cart.length === 0 ? (
        <>
          <img
            src="https://order.ikea.com/in/en/checkout/static/media/ill-alien.cb42647f.svg"
            alt=""
            width={"20%"}
          />
          <p className="ptag">Your cart is empty!</p>
          <div className="empty">
            <div className="class502">Browse our products</div>
            <div className="class502">Login in</div>
          </div>
        </>
      ) : (
        <>
          <div className="allCart">
            {cart.map((el, i) => {
              return (
                <div key={i} className="cartItem">
                  <div
                    className="imgDiv"
                    onClick={() => {
                      navigate(`/products/${el._id}`);
                    }}
                  >
                    <img src={el.img1} alt="" width={"100%"} heigth="80%" />
                  </div>
                  <div
                    className="cartTitle"
                    onClick={() => {
                      navigate(`/products/${el._id}`);
                    }}
                  >
                    <h3>{el.title}</h3>
                    <p>{el.package}</p>
                  </div>
                  <div className="cartPrice">
                    <h3>Rs.{el.price}</h3>
                    <div className="quantity">
                      <div className="delete">
                        <DeleteIcon
                          onClick={() => {
                            handelDelete(i);
                          }}
                        />
                      </div>
                      <div className="inquantity">
                        <div>
                          <RemoveIcon
                            onClick={() => {
                              handleChange(i, -1);
                            }}
                          />
                        </div>
                        <p>{el.quantity}</p>
                        <div>
                          <AddIcon
                            onClick={() => {
                              handleChange(i, 1);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="subTotal">
            <h4>Subtotal</h4>
            <h4>Rs.{total}</h4>
          </div>
          <div>
            <h3>How would you like to receive your order?</h3>
          </div>
          <div className="type">
            <div onClick={() => handlePayEvent()}>
              <LocalShippingIcon />
              <p>Home delivery</p>
            </div>
            <div onClick={() => handlePayEvent()}>
              <StoreIcon />
              <p>Click & collect</p>
            </div>
          </div>
        </>
      )}
      <div id="policy">
        <div className="policyterms">
          <div className="policyIcons">
            <LocalShippingIcon />
          </div>
          <div className="terms">
            <h4>Our Delivery Service</h4>
            <p>
              Safe & contact-less delivery according to government permission.
            </p>
            <div>
              <a href="/cart">More info</a>
            </div>
          </div>
        </div>
        <div className="policyterms">
          <div className="policyIcons">
            <SettingsBackupRestoreIcon />
          </div>
          <div className="terms">
            <h4>Our Return Policy</h4>
            <p>
              We have made some updates to our return policy due to the COVID 19
              situation.
            </p>
            <div>
              <a href="/cart">More info</a>
            </div>
          </div>
        </div>
        <div className="policyterms">
          <div className="policyIcons">
            <PrecisionManufacturingIcon />
          </div>
          <div className="terms">
            <h4>Our Assembly Service</h4>
            <p>
              Sometimes it is nice to have someone else assemble it for you.
            </p>
            <div>
              <a href="/cart">More info</a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
