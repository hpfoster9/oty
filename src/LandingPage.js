import React, { Component } from 'react';
import squareLogo from './img/squareLogo.jpg';
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      text1: "After nearly two decades of conflict and millions of deployments, the wars in Iraq and Afghanistan are winding down and the service-members who courageously answered the call to duty are returning home.  Operation Tango Yankee is a pending 501(c)(3) nonprofit organization dedicated to advancing Veteran businesses by connecting consumers with Veteran brands.  Each week we will be featuring a different Veteran owned business across our social media accounts where we’ll share the story behind the business, promote their products, and introduce the founder.  We aim to connect consumers with the incredible Veteran brands that sell exceptional products.",
      text2: "One mission ended, but the next is just beginning",
      text3: "Follow us on Instagram to see a different Veteran owned businesses each week as well as to discover the promo codes that unlock special deals and gifts.  Be sure to check back soon for our completed website!"
    	
    }
  }
  render(){
    const {text1, text2, text3} = this.state;
  	return(
        <div className="landingContent">
          <img src={squareLogo} className="squareLogo" alt="Logo" />;
          <h4 className="t1 text-center">{text1}</h4>
          <h3 className="t2 text-center">{text2}</h3>
          <div className="footer">
            <p className="t3 text-center">{text3}</p>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-linkedin"></a>
            
          </div>
        </div>
  	);
  }
}
export default LandingPage;