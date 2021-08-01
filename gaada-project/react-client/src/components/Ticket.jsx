import React from "react";

export default class Ticket extends React.Component {
  render() {
    return (
      <div>
        <div id="showScroll" className="container">
          <div className="receipt">
            <h1 className="logo1">Gaada-Commerce</h1>
            <div className="address">666 Lincoln St. Santa Monica, CA</div>
            <div className="transactionDetails">
              <div className="detail">Reg#17</div>
              <div className="detail">TRN#1313</div>
              <div className="detail">CSHR#00097655</div>
            </div>
            <div className="transactionDetails">Helped by: Garrett</div>
            <div className="centerItem bold">
              <div className="item">ExtraCare Card #: *********1875</div>
            </div>
            <div className="transactionDetails">
              <div className="detail">1</div>
              <div className="detail">OB Glide 3CT</div>
              <div className="detail">3.99</div>
            </div>
            <div className="survey bold">
              <p>Survey ID #</p>
              <p className="surveyID">6588 4755 3256 544 21</p>
            </div>
            <div className="paymentDetails bold">
              <div className="detail">TOTAL</div>
              <div className="detail">3.99</div>
            </div>
            <div className="paymentDetails">
              <div className="detail">CHARGE</div>
              <div className="detail">3.99</div>
            </div>
            <div className="paymentDetails">
              <div className="detail">************4023</div>
              <div className="detail">CH</div>
            </div>
            <div className="creditDetails">
              <p>VISA CREDIT &nbsp;&nbsp;&nbsp;&nbsp; ****************</p>
              <p>approved# 09773B</p>
              <p>ref# 013589</p>
              <p>tran type: SALE</p>
              <p>AID: 30000000090755</p>
              <p>TC: B7A2A4044AEE380A4</p>
              <p>terminal: 69010003</p>
              <p>no signature required</p>
              <p>CVM: 1e0300</p>
              <p>TMR(95): 0080081111</p>
              <p>TS(9B): E900</p>
            </div>

            <div className="paymentDetails">
              <div className="detail">CHANGE</div>
              <div className="detail">.00</div>
            </div>
            <div className="receiptBarcode">
              <div className="barcode">HelloCVSScript</div>
              2003 0998 9000 8730 21
            </div>
            <div className="returnPolicy bold">
              Returns with receipt, subject to CVS Return Policy, thru
              12/04/2018
            </div>
            <div className="returnPolicy">
              <div className="detail">October 5, 2018</div>
              <div className="detail">10:16 AM</div>
            </div>
            <div className="tripSummary">
              <div className="bold">Trip Summary:</div>
              <div className="item">
                <div>Today You Saved:</div>
                <div>.00</div>
              </div>
              <div className="item">
                <div>Savings Value</div>
                <div>0%</div>
              </div>
            </div>
            <div className="feedback">
              <div className="break">******************</div>
              <p className="center">
                We would love to hear your feedback on your recent experience
                with us. This survey will only take 1 minute to complete.
              </p>
              <h3 className="clickBait">Share Your Feedback</h3>
              <h4 className="web">www.CVSHealthSurvey.com</h4>
              <p className="center">Hablamos español</p>
              <div className="break">******************</div>
            </div>
            <div id="coupons" className="coupons">
              {/* <!--       start coupon --> */}
              <div className="couponContainer">
                <h1 className="logo">CVS/pharmacy</h1>
                <div className="barcode">
                  <h3>Ko77 : </h3>
                  {this.props.basket.reduce(
                    (acc, elm, i) => acc + elm.price,
                    0
                  )}
                  $
                </div>

                <div className="break">******************</div>
                <div className="barcode">HelloCVSMate1</div>
                <div className="barcodeID center">9007 9876 9087 7665 62</div>
                <div className="legal center">
                  ExtraCare card required. Excludes lottery, money orders,
                  postage stamps, milk, prescriptions, pre-paid cards, gift
                  cards, pseudoephedrine products, other fees, deposits, taxes,
                  alcohol and local exclusions. No cash back. Tax charged on
                  pre-coupon price where required. Limit of one purchase-based
                  coupon, i.e., $4 off $20 purchase, per transaction. Not valid
                  in specialty centers within CVS.
                </div>
                <div className="couponBottom">
                  <p>ExtraCare Card #: *7140 00130030598777</p>
                  <p>CPN#: 85887</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button onClick={()=>this.props.changeView('home')} >Print</button>
          </div>
      </div>
    );
  }
}
