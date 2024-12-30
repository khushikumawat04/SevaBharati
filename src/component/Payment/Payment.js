// PaymentComponent.js
import React from 'react';
import { useState} from 'react';

const Payment = () => {
 
    const [amount, setamount] = useState('');

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(amount === ""){
      alert("please enter amount");
      }else{
        var options = {
          key: "rzp_test_w0IlZQGSxLU5Mr",
          key_secret:"N7dwlXWgLnjmovfetoP4fqTI",
          amount: amount *100,
          currency:"INR",
          name:"STARTUP_PROJECTS",
          description:"for testing purpose",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"Khushi Kumawat",
            email:"kkhushikumawat04@gmail.com",
            contact:"7828479207"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    }
    return (
      <div className="App">
       <h2>Razorpay Payment Integration Using React</h2>
       <br/>
       <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
       <br/><br/>
       <button onClick={handleSubmit}>submit</button>
      </div>
    );
};

export default Payment;
