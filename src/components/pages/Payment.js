import React, { Component } from 'react'

class Payment extends Component {
    render() {
        return (
            <div>
                <section className="payment grey darken-3">
                    <div>
                        <p>Home / Checkout</p>
                        <h2>Checkout</h2>
                    </div>
                </section>

                <section className="summary">
                    <div className="container">
                        <div className="row">
                            <div className="col s7 m7">
                                <h5 className="payment-heading">Payment Method</h5>
                                <from action="#">
                                    <p>
                                        <label>
                                            <input type="checkbox" />
                                            <span>Credit Card</span>
                                        </label>
                                    </p>
                                    
                                    <div class="row">
                                        <div className="input-field col s6">
                                            <input id="holder_name" type="text" className="validate" />
                                            <label for="holder_name">Holder's Name</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="card_name" type="text" className="validate" />
                                            <label for="card_name">Card Number</label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div className="input-field col s4">
                                            <input id="expiry_month" type="text" className="validate" />
                                            <label for="expiry_month">Expiry Month</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <input id="expiry_year" type="text" className="validate" />
                                            <label for="expiry_year">Expiry Year</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <input id="CVV" type="text" className="validate" />
                                            <label for="CVV">CVV</label>
                                        </div>
                                    </div>

                                    <p>
                                        <label>
                                            <input type="checkbox" />
                                            <span>Paypal</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input type="checkbox" />
                                            <span>I read and accepted all the T's of the Online Health Therapy Platform.</span>
                                        </label>
                                    </p>
                                    <div className="confrim-btn">
                                        <a href="/signin" className="waves-effect waves-light btn">Confirm & Pay</a>
                                    </div>
                                </from>
                            </div>
                            <div className="col s5 m5">
                                <h5>Booking Summary</h5>
                                <div className="data-doctor">
                                    <div className="left-side">
                                        <img src={require('../images/D2.png')} alt="pic here"/>
                                    </div>
                                    <div className="right-side">
                                        <h5>Frank Leopard</h5>
                                        <div className="rating">
                                            <i className="small material-icons">star_border</i>
                                            <i className="small material-icons">star_border</i>
                                            <i className="small material-icons">star_border</i>
                                            <i className="small material-icons">star_border</i>
                                            <i className="small material-icons">star_border</i>
                                            <p>(4.5)</p>
                                        </div>
                                        <div className="rating">
                                            <i className="small material-icons">timer</i>
                                            <p>Avaliable Sat, 24 April</p>
                                        </div>
                                        <div className="rating">
                                            <i className="small material-icons">location_on</i>
                                            <p>Lagos, Nigeria</p>
                                        </div>
                                        <div className="rating">
                                            <i className="small material-icons">local_atm</i>
                                            <p>K23.00 - K45.00</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="payment-details">
                                    <div className="payment-date">
                                        <p>Date</p>
                                        <p>14, April 2020</p>
                                    </div>
                                    <div className="payment-time">
                                        <p>Time</p>
                                        <p>12PM</p>
                                    </div>
                                    <div className="payment-time">
                                        <p>Consulting Fee</p>
                                        <p>$100</p>
                                    </div>
                                    <div className="payment-booking">
                                        <p>Booking Fee</p>
                                        <p>$50</p>
                                    </div>
                                    <div className="payment-total">
                                        <p>Total</p>
                                        <p>$150</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Payment