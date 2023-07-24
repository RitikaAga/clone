import React, { useState } from 'react';
import "./right.css";
import RadioButton from "../../Asset/Radio Button.png";
import RadioButton2 from "../../Asset/RadioButton2.png";
import Number1 from "../../Asset/11.png";
import Number2 from "../../Asset/22.png";
// import Checkbox from "../../Asset/check_box.png";
import ClockIcon from "../../Asset/ClockIcon.png";
import Razorpay from "../../Asset/Razorpay Icon.png";

function Right() {
  const [selectedOption, setSelectedOption] = useState("option2"); 
 
  const subscriptionOptions = [
    { id: "option1", months: 12, price: 99 },
    { id: "option2", months: 12, price: 179 },
    { id: "option3", months: 6, price: 149 },
    { id: "option4", months: 3, price: 99 },
  ];

 
  const selectedSubscription = subscriptionOptions.find(option => option.id === selectedOption);
  const subscriptionFee = selectedSubscription ? selectedSubscription.price : 0;

  const handleOptionChange = (optionId) => {
    if (optionId !== "option1") { 
      setSelectedOption(optionId);
    }
  };

  return (
    <div className='right_container'>
      <div className='div1 right_div'>
        <img className="div1_img" src={Number1} alt="Number1" />
        <img className="div1_img" src={Number2} alt="Number2" />
      </div>
      <div className='div2 right_div'>
        <h6>Select your subscription plan</h6>
      </div>

      {subscriptionOptions.map((option) => (
        <div
          key={option.id}
          className={`div${option.months} right_div ${selectedOption === option.id ? 'selected' : ''} ${option.id === 'option1' ? 'first_option' : ''}`}
          onClick={() => handleOptionChange(option.id)}
          style={
            option.id === 'option1'
              ? { border: '1px solid #d9d9d9', backgroundColor: '#d9d9d9' }
              : selectedOption === option.id
                ? { border: '2px solid green' }
                : {}
          }
        >
          <img className='div3_img' src={selectedOption === option.id ? RadioButton : RadioButton2} alt="Rd" />
          {option.id === "option1" ? (
            <React.Fragment>
              <p className='div3_sp1'>Offer expired</p>
              <p className={`div3_para1`} style={{ color: '#666' }}>{option.months} Months Subscription</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {selectedOption === option.id && <p className='div3_sp1' style={{ backgroundColor: 'green', color: '#fff' }}>Recommended</p>}
              <p className={`div3_para1 ${selectedOption === option.id ? 'selected_text' : ''}`}>{option.months} Months Subscription</p>
            </React.Fragment>
          )}
          <p className='div3_para2'>Total <span className={selectedOption === option.id ? 'd_span' : 'd4_span'}>₹{option.price}</span></p>
          <p className='div3_para3'>₹{Math.round(option.price / option.months)} /mo</p>
        </div>
      ))}

      <div className='div7 right_div'>
        <p>Subscription Fee</p>
        <p>₹ 18,500</p>
      </div>
      <div className='div8 right_div'>
        <p className='div8_para1'>Limited time offer</p>
        <img className='div8_img' src={ClockIcon} alt="ClockIcon" />
        <p className='div8_para2'>Offer valid till 25th March 2023</p>
        <p className='div8_para3'>- ₹{18500 - subscriptionFee}</p>
      </div>
      <div className='div9 right_div'>
        <p>Total (Incl. of 18% GST)</p>
        <h3>₹{subscriptionFee}</h3>
      </div>
      <div className='div10 right_div'>
        <button className='button button1'>Cancel</button>
        <button className='button button2'>PROCEED TO PAY</button>
      </div>
      <div className="div11 right_div">
        <img src={Razorpay} alt="Rozarpay" />
      </div>
    </div>
  );
}

export default Right;