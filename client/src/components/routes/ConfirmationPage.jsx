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
      
      <p className="review-and-book-detail">Roundtrip Flight</p>        
      <p className="bold-black-print">Newark (EWR) to San Francisco (SFO)</p>

      <p>Tue, Jun 2 - Tue, Jun 9</p>
      <p>4 tickets: 2 adults, 2 children</p>

      <div>
        <p className="review-and-book-detail">{props.location.state.component_props.name}</p>
      </div>

      <h6>{props.location.state.component_props.address}</h6>
      <p>Tue, Jun 2 - Mon, Jun 8</p>

      <div> 
        <p className="review-and-book-detail">Economy</p>
      </div>

      <h6>San Francisco, CA (SFO Airport)</h6>
      <p>Tue, Jun 2 - Mon, Jun 8</p>

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
