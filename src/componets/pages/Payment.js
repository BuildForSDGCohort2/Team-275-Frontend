import React, { Component } from 'react';
// Import the Library
import Rave from 'react-flutterwave-rave';

class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
          key: "FLWPUBK-1d0e06abd822af8c480d24ca71df8a20-X", // RavePay PUBLIC KEY
          phone: "0000000000000",
          amount: 50,
          firstname: "Oluwole",
          lastname: "Adebiyi",
          email: "test@test.com",
          doctor_name: "franck banda",
          payment_number: 3,
        }
        this.callback = this.callback.bind(this);
        this.close = this.close.bind(this);
    }
     
     
    callback = (response) => {
        
        console.log(response);  
    }
     
     
    close = () => {
        console.log("Payment closed");
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="payment-body">
                <section className="payment grey darken-3">
                    <div>
                        <p>Home / Checkout</p>
                        <h2>Checkout</h2>
                    </div>
                </section>

                <section className="summary">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12">
                                <h5>Booking Summary</h5>
                                <div className="data-doctor">
                                    <div className="left-side">
                                        <img src={require('../images/D2.png')} alt="pic here"/>
                                    </div>
                                    <div className="right-side">
                                        <h5>Frank Leopard</h5>
                                        <div className="rating">
                                            <i className="small material-icons">star</i>
                                            <i className="small material-icons">star</i>
                                            <i className="small material-icons">star</i>
                                            <i className="small material-icons">star_half</i>
                                            <i className="small material-icons">star_border</i>
                                            <p>(4.5)</p>
                                        </div>
                                        <div className="rating-timer">
                                            <i className="small material-icons">timer</i>
                                            <p>Avaliable Sat, 24 April</p>
                                        </div>
                                        <div className="rating-timer">
                                            <i className="small material-icons">location_on</i>
                                            <p>Lagos, Nigeria</p>
                                        </div>
                                        <div className="rating-timer">
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
                                    
                                    <p>
                                        <label>
                                            <input type="checkbox" />
                                            <span>I read and accepted all the T's of the Online Health Therapy Platform.</span>
                                        </label>
                                    </p>

                                    <Rave
                                        pay_button_text="Procced to payment"
                                        type="button"
                                        class="waves-effect waves-light btn"
                                        metadata={[
                                          { metaname: 'PaymentID', metavalue: this.state.payment_number },
                                          { metaname: 'Doctor', metavalue: this.state.doctor_name }
                                        ]}
                                        payment_method="card"
                                        customer_email={this.state.email}
                                        customer_phone={this.state.phone}
                                        amount={"" + this.state.amount * this.state.payment_number + ""}
                                        ravePubKey={this.state.key}
                                        callback={this.callback}
                                        onclose={this.close}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="modal" className="modal">
                    <div className="modal-content">
                        <i className="large material-icons">check_circle</i>
                        <h5>Appointment booked successfully!!</h5>
                        <p>Appointment book with <span>Frank Leopard</span> on <span>14, April 2020 12:00PM</span> to <span>13:00PM</span>.</p>
                        <div className="confrim-btn">
                            <a class="waves-effect waves-light btn" href="/receipts">View Receipt</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment