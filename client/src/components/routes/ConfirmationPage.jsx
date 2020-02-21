import React from "react";
import "../../css/ConfirmationPage.css";


const ConfirmationPage = props => {

  return (
    <div>

      <div>
        <p id="confirmation-page-header">Review and Book</p>
      </div>



      <img className="Line-Copy-3" src={require('../../images/icons-assets/line-copy-3.png')} alt='line-copy-3.png' />

      

      <div>
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

      
      <div>
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


      <div>
        <span>
          <img className='icon-image' src={require('../../images/icons-assets/car-icon@2x.png')} alt='car-icon@2x.png' />
        </span>

        <span className="review-and-book-detail">Economy
          <span><img className='icon-image' src={require('../../images/icons-assets/secondClassPO@2x.png')} alt='secondClassPO@2x.png' />
          </span>
        </span>

        <p className="bold-black-print">San Francisco, CA (SFO Airport)</p>
        <p className="black-text">Tue, Jun 2 - Mon, Jun 8</p>
      </div>

      
      <img className="Line-Copy-3" src={require('../../images/icons-assets/line-copy-3.png')} alt='line-copy-3.png' />


      <div id="review-and-book-summary">
        <p className="left-text">
          <span id="left-text-line-1">Starting price</span>
          <span id="left-text-line-2">Bundled savings</span>
          <span id="left-text-line-3">Total due today</span>
          <span id="left-text-line-4">Due at hotel</span>
          <span id="left-text-line-5">Trip Total: </span>
        </p>

        <p className="right-text">
          <span id="right-text-line-1">-$602.42</span>
          <span id="right-text-line-2">$3,216.00</span>
          <span id="right-text-line-3">$2,613.58</span>
          <span id="right-text-line-4">$122.22</span>
          <span id="right-text-line-5">$2,735.80</span>
          <span id="right-text-line-6">(Average per person $683.95)</span>
        </p>
      </div>

      <footer id="confimation-page-footer">
        Rates are quoted in US Dollar. All taxes or fees collected by the hotel
        will be settled in the local currency.
      </footer>
    </div>
  );
};

export default ConfirmationPage;
