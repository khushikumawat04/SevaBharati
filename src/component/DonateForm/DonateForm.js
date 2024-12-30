import React, { useState, useEffect } from "react";
import "./DonateForm.css";
import { toast } from "react-toastify";
// import "dotenv/config";

export default function DonationForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length >= 10 && /^[0-9]+$/.test(phone);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, amount } = formData;

    if (name === "" || name.length < 2) {
      toast("Name must be at least 2 characters long.");
    }
    //  else if (!validateEmail(email)) {
    //   toast("Please enter a valid email address.");
    // }
     else if (!validatePhone(phone)) {
      toast("Please enter a valid phone number.");
    } else if (address === "") {
      toast("Address cannot be empty.");
    } else if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
      toast("Please enter a valid amount.");
    } else {
      const options = {
        key: "rzp_test_PaieSXxOGy6SNE", // Use the environment variable
        amount: formData.amount * 100, // Amount in paise
        currency: "INR",
        name: "Your Company Name",
        description: "Test Transaction",
        handler: function (response) {
          toast("Payment Successful");
          storePaymentDetails(response, formData);
          setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            amount: "",
          }); // Clear the form data
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#3399cc",
        },
        method: {
          upi: true, // Enable UPI payment option
          upi_intent: true, // Enable UPI Intent option
          qr: true, // Enable UPI QR Code option
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  };

  const storePaymentDetails = (response, formData) => {
    const paymentDetails = {
      ...formData,
      paymentId: response.razorpay_payment_id,
      orderId: response.razorpay_order_id,
    };

    // Store payment details in Google Sheets
    storeInGoogleSheets(paymentDetails);
  };

  const storeInGoogleSheets = async (paymentDetails) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz6-m4Kskw3YeD8lHo6rrwctjC1DyhODBdCPBlQMdO2-LX6kz3NP0hrWAzVLdCChu99Hg/exec";
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentDetails),
    });
  };

  return (
    <div>
      <div className="D-main-box">
        <div className="D-left-box">
          <div className="text-image">
            <p className="donate-heading">Donate Now</p>
            <img
              className="seva-logo-image"
              src="/images/homelogo.gif"
              alt="Logo"
            />
          </div>
          <div className="seva-bharti-heading">
            <p>
              Seva Bharti <br />
              Khargone
            </p>
          </div>
        </div>

        <div className="D-right-box">
          <p className="donate-heading">Payments Details</p>
          <div className="form-details">
            <form>
              <div className="name-email">
                <p className="customer-details">
                  Customer
                  <br /> Name:
                </p>
                <input
                  className="Cus-name"
                  required
                  type="text"
                  placeholder="Enter Customer Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <p className="customer-details">
                  Customer
                  <br /> Email:
                </p>
                <input
                  className="Cus-name"
                  required
                  type="email"
                  placeholder="Enter Customer Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="phone-pay">
                <p className="customer-details">
                  Customer <br /> Phone:
                </p>
                <input
                  className="Cus-pay"
                  required
                  type="number"
                  placeholder="Enter Customer Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <p className="customer-details">
                  Amount
                  <br /> Payable:
                </p>
                <input
                  className="Cus-pay"
                  required
                  type="number"
                  placeholder="Enter Amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>
              <div className="phone-pay">
                <p className="customer-details">
                  Customer <br /> Address:
                </p>
                <input
                  className="Cus-pay"
                  required
                  type="text"
                  placeholder="Enter your Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <button className="D-Donatenow" onClick={handlePayment}>
                Donate Now
              </button>
            </form>
            <div>
              <img
                className="payment-image"
                src="images/02_-_ApprovedLogo-removebg-preview.png.png"
                alt="Payment Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
