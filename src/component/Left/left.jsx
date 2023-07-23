import React from 'react'
import './left.css';
import Icon from "../../Asset/Icon.png";
import Clock2 from "../../Asset/Clock2.png"
import Live_Icon from "../../Asset/live_Icon.png"
import Degree from "../../Asset/degree.png"
import Ads from "../../Asset/ads.png"
import Right from '../Right/right';

function Left() {
  return (
      <div className="main_container">
          <div className='left_container'>
          <h2 className='heading'>Access curated courses worth ₹ <span className='sp'>18,500</span> at just <span>₹ 99</span> per year!</h2>
          <ul className='list'>
              <li><img className='image' src={ Icon } alt="Icon"/><span>100+ </span>Job relevant courses </li>
              <li><img className='image' src={ Clock2 } alt="Clock2"/> <span>20,000+ </span>Hours of content</li>
              <li><img className="image" src={Live_Icon } alt="LIve_Icon"/> <span>Exclusive </span> webinar access</li>
              <li><img className="image" src={Degree} alt="Degree"/>Scholarship worth <span> ₹94,500</span> </li>
              <li><img className="image"  src={ Ads }  alt="Ads"/> <span>Ad Free </span> learning experience</li>
          </ul>
          </div>

          <Right/>
      </div>
  )
}

export default Left