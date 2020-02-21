import React from "react";
import "../../css/ConfirmationPage.css";
import LogoNav from "../shared/LogoNav";


const ConfirmationPage = props => {
  console.log("What do I get?", props)

  return (
    <div>

      <div>
        <h2 id="confirmation-page-header">Review and Book</h2>
      </div>



      <img className="Line-Copy-3" src={require('../../images/icons-assets/line-copy-3.png')} alt='line-copy-3.png' />



      <div className="main-content">
        <span>
          <img className='icon-image' src={require('../../images/icons-assets/airplane-icon@2x.png')} alt='airplane-icon@2x.png' />
        </span>

        <span className="review-and-book-detail">Roundtrip Flight
          <span><img className='icon-image' src={require('../../images/icons-assets/secondClassPO@2x.png')} alt='secondClassPO@2x.png' />
          </span>
        </span>

        <p className="bold-black-print">Newark (EWR) to San Francisco (SFO)</p>
        <p className="black-text">Tue, Jun 2 - Tue, Jun 9</p>
        <p className="black-text">4 tickets: 2 adults, 2 children</p>
      </div>


      <img className="Line-Copy-3" src={require('../../images/icons-assets/line-copy-3.png')} alt='line-copy-3.png' />


      <div className="main-content">
        <span>
          <img className='icon-image' src={require('../../images/icons-assets/hotel-icon@2x.png')} alt='hotel-icon@2x.png' />
        </span>

        <span className="review-and-book-detail">{props.location.state.component_props.name}
          <span><img className='icon-image' src={require('../../images/icons-assets/secondClassPO@2x.png')} alt='secondClassPO@2x.png' />
          </span>
        </span>

        <p className="bold-black-print">{props.location.state.component_props.address}</p>
        <p className="black-text">Tue, Jun 2 - Mon, Jun 8</p>
      </div>


      <img className="Line-Copy-3" src={require('../../images/icons-assets/line-copy-3.png')} alt='line-copy-3.png' />


      <div className="main-content">

        <span>
          <img className='icon-image' src={require('../../images/icons-assets/car-icon@2x.png')} alt='car-icon@2x.png' />
        </span>

        <span className="review-and-book-detail">Economy
          <span><img className='icon-image' src={require('../../images/icons-assets/secondClassPO@2x.png')} alt='secondClassPO@2x.png' />
          </span>
        </span>

        <p className="bold-black-print">San Francisco, CA (SFO Airport)</p>
        <p className="black-text">Tue, Jun 2 - Mon, Jun 8</p>
        <div>
          <span className="confirmation-icons"><img className="multi-icon" src={require('../../images/icons-assets/user-account.png')} alt='user-account@2x.png' />4</span>
          <span className="confirmation-icons"><img className="multi-icon" src={require('../../images/icons-assets/more.png')} alt='user-more@2x.png' />4</span>
          <span className="confirmation-icons"><img className="multi-icon" src={require('../../images/icons-assets/airconditioner.png')} alt='airconditioner@2x.png' />A/C</span>
          <span className="confirmation-icons"><img className="multi-icon" src={require('../../images/icons-assets/fan.png')} alt='fan@2x.png' />Automatic</span>
        </div>
      </div>


      <img className="Line-Copy-3" src={require('../../images/icons-assets/line-copy-3.png')} alt='line-copy-3.png' />


      <div id="review-and-book-summary">

        <div className="confirmation-detail">
          <span id="left-text-line-1">Starting price</span>
          <span id="right-text-line-1">$3,216.00</span>
        </div>

        <div className="confirmation-detail green-text">
          <span id="left-text-line-2">Bundled savings</span>
          <span id="right-text-line-2">-$602.42</span>
        </div>

        <hr/>

        <div className="confirmation-detail">
          <span className="blue-text">Total due today</span>
          <span className="bold">$2,613.58</span>
        </div>

        <hr/>

        <div className="confirmation-detail">
          <span className="blue-text">Due at hotel</span>
          <span className="bold">$122.22</span>
        </div>

        <hr/>

        <div className="go-to-the-right bigger-text">
          Trip Total:<span className="bold">$2,735.80</span>
        </div>

        <div className="go-to-the-right">
          (Average per person $683.95)
        </div>

      </div>

      <footer className="bold" id="confimation-page-footer">
        Rates are quoted in US Dollar. All taxes or fees collected by the hotel
        will be settled in the local currency.
      </footer>
    </div>
  );
};

export default ConfirmationPage;
