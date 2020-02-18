import React, { Component } from 'react'

export default class ConfirmationPage extends Component {




    render() {
        return (
            <div>
                
                <h2 id="confirmation-page-header">Review and Book</h2>
                <div className="flight-hotel-car-confirmation-detail">
                    <h5>Roundtrip Flight</h5>
                    <h6>Newark (EWR) to San Francisco (SFO)</h6>
                    <p>Tue, Jun 2 - Tue, Jun 9</p>
                    <p>4 tickets: 2 adults, 2 children</p>
                </div>

                <div>HOTEL INFO HERE</div>

                <div className="flight-hotel-car-confirmation-detail">
                    <h5>Economy</h5>
                    <h6>San Francisco, CA (SFO Airport)</h6>
                    <p>Tue, Jun 2 - Mon, Jun 8</p>
                </div>

                <div id="confirmation-page-summary">
                    <p>
                        <span className="left-text-confirmation-page">Starting price</span>
                        <span className="right-text-confirmation-page">$3,216.00</span>
                    </p>
                    <p>
                        <span className="left-text-confirmation-page">Bundled savings</span>
                        <span className="right-text-confirmation-page">-$602.42</span>
                    </p>
                    <p>
                        <span className="left-text-confirmation-page">Total due today</span>
                        <span className="right-text-confirmation-page">$2,613.58</span>
                    </p>
                    <p>
                        <span className="left-text-confirmation-page">Due at hotel</span>
                        <span className="right-text-confirmation-page">$122.22</span>
                    </p>
                    <p>
                        <span className="left-text-confirmation-page">Trip Total:  </span>
                        <span className="right-text-confirmation-page">$2,735.80</span>

                    </p>
                    <p>
                        <span className="right-text-confirmation-page">(Average per person $683.95)</span>
                    </p>
                </div>

                <footer id="confimation-page-footer">Rates are quoted in US Dollar.
                All taxes or fees collected by the hotel will be settled in the local
                currency.</footer>
                
            </div>
        )
    }
}
