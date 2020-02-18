import React from 'react'

export const ConfirmationPage = (props) => {

    return (

        <div>

            <h2 id="confirmation-page-header">Review and Book</h2>

            <div className="review-and-book-detail">
                <h5>Roundtrip Flight</h5>
                <h6>Newark (EWR) to San Francisco (SFO)</h6>
                <p>Tue, Jun 2 - Tue, Jun 9</p>
                <p>4 tickets: 2 adults, 2 children</p>
            </div>

            <div className="review-and-book-detail">
                <h5>Dummy Data (HOTEL NAME)</h5>
                <h6>Dummy Data (CITY, STATE)</h6>
                <p>Tue, Jun 2 - Mon, Jun 8</p>
            </div>

            <div className="review-and-book-detail">
                <h5>Economy</h5>
                <h6>San Francisco, CA (SFO Airport)</h6>
                <p>Tue, Jun 2 - Mon, Jun 8</p>
            </div>

            <div id="review-and-book-summary">

                <p className="left-text">

                    <span id="left-text-line-1">Starting price</span>
                    <span id="left-text-line-2">Bundled savings</span>
                    <span id="left-text-line-3">Total due today</span>
                    <span id="left-text-line-4">Due at hotel</span>
                    <span id="left-text-line-5">Trip Total:  </span>

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

            <footer id="confimation-page-footer">Rates are quoted in US Dollar.
            All taxes or fees collected by the hotel will be settled in the local
                currency.</footer>

        </div>
    )
}
