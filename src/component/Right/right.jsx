import React from 'react'
import "./right.css"
import RadioButton from "../../Asset/Radio Button.png"
import RadioButton2 from "../../Asset/RadioButton2.png"
import Number1 from "../../Asset/11.png"
import Number2 from "../../Asset/22.png"
import Checkbox from "../../Asset/check_box.png"
import ClockIcon from "../../Asset/ClockIcon.png"
import Razorpay from "../../Asset/Razorpay Icon.png"

function Right() {
  return (
      <div className='right_container'>
          <div className='div1 right_div'>
              <img className="div1_img" src={Number1} alt="Number1" />
               <img className="div1_img" src={ Number2 } alt="Number2" />
          </div>
          <div className='div2 right_div'>
              <h6>Select your subcription plan</h6>
          </div>

          <div className='div3 right_div'>   
              <img className='div3_img' src={RadioButton} alt="Rd" />
              <p className='div3_sp1' >Offer expired</p>
              <p className='div3_para1'>12 Months Subscription </p>
              <p className='div3_para2' >Total <span className='d_span'> ₹99</span></p>
              <p className='div3_para3'>₹8  /mo</p>
          </div>

          <div className='div4 right_div'>
              <img className='div3_img' src={Checkbox} alt="checkbox" />
              <p className='div3_sp1 div4_pera1' >Recommended</p>
              <p className='div3_para1'>12 Months Subscription </p>
              <p className='div3_para2' >Total <span className='d4_span'> ₹179</span></p>
              <p className='div3_para3'>₹15 /mo</p>
          </div>
          <div className='div5 right_div'>
              <img className='div3_img' src={RadioButton2} alt="Rd" />
         <p className='div5_para1'>6 Months Subscription </p>
              <p className='div5_para2' >Total <span className='d4_span'> ₹149</span></p>
              <p className='div5_para3'>₹25  /mo</p>
          </div>
          <div className='div6 right_div'>
              <img className='div3_img' src={RadioButton2} alt="Rd" />
               <p className='div5_para1'>3 Months Subscription </p>
              <p className='div5_para2' >Total <span className='d4_span'> ₹99</span></p>
              <p className='div5_para3'>₹23  /mo</p>
          </div>
          <div className='div7 right_div'>
              <p>Subscription Fee</p>
              <p>₹18,500</p>
          </div>
          <div className='div8 right_div'>
              <p className='div8_para1'>Limited time offer</p>
              <img className='div8_img' src={ClockIcon} alt=" ClockIcon" />
              <p className='div8_para2' >Offer valid till 25th March 2023 </p>
              <p className='div8_para3'>- ₹18,401</p>
          </div>
          <div className='div9 right_div'>
              <p>Total (Incl. of 18% GST)</p>
              <h3>₹149</h3>
          </div>
          <div className='div10 right_div'>
              <button className='button button1'>Cancel</button>
              <button  className='button button2'>PROCEED TO PAY</button>
          </div>
          <div className="div11 right_div">
              <img src={ Razorpay} alt="Rozarpay" />
          </div>
    </div>
  )
}

export default Right