import React, { Component } from 'react'

class Receipts extends Component {
    render() {
        return (
            <div className="payment-body">
                <section className="payment grey darken-3">
                    <div>
                        <p>Home / Receipts</p>
                        <h2>Receipts</h2>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col s6 m6">
                                <div className="sender">
                                    <h1>From</h1>
                                    <p>Dr Frank Leopard,</p>
                                    <p>402, James Lane, Old Road</p>
                                    <p>Lagos, Nigreia</p>
                                </div>
                                <div className="payment-method">
                                    <h1>Payment Method</h1>
                                    <p>Credit Card</p>
                                    <p>XXXXXXXXXXXX - 4153</p>
                                    <p>Best Bank</p>
                                </div>
                            </div>
                            <div className="col s6 m6">
                                <div className="receiver">
                                    <p><span>Order: </span> #00154</p>
                                    <p><span>Issued Date: </span> 24/04/2020</p>
                                </div>
                                <div className="address">
                                    <h1>To</h1>
                                    <p>Ms. Jane Banda,</p>
                                    <p>Plot 321, 6 miles,</p>
                                    <p>Lusaka, Zambia</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 receipt-data">
                                <table className="striped border-bottom">
                                    <thead>
                                      <tr>
                                          <th>Description</th>
                                          <th>Quantiy</th>
                                          <th>VAT</th>
                                          <th className="right">Total</th>
                                      </tr>
                                    </thead>

                                    <tbody>
                                      <tr>
                                        <td>General Consultion</td>
                                        <td>1</td>
                                        <td>$0</td>
                                        <td className="right">$100</td>
                                      </tr>
                                      <tr>
                                        <td>Video Call Booking</td>
                                        <td>1</td>
                                        <td>$0</td>
                                        <td className="right">$0</td>
                                      </tr>
                                      <tr>
                                        <td>Other Booking</td>
                                        <td>1</td>
                                        <td>$0</td>
                                        <td className="right">$50</td>
                                      </tr>
                                    </tbody>
                                </table>
                                <div className="row">
                                    <div className="col s8 m8"></div>
                                    <div className="col s4 m4">
                                        <div className="payment-details">
                                            <div className="payment-date">
                                                <p>Sub total:</p>
                                                <p>$150</p>
                                            </div>
                                            <div className="payment-time">
                                                <p>Discount: </p>
                                                <p>-5%</p>
                                            </div>
                                            <div className="payment-total">
                                                <p>Total Amount: </p>
                                                <p>$140</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12">
                                <h6>Other Information</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit illo fuga commodi aspernatur ducimus? Rerum placeat eveniet sint vitae, 
                                    consectetur debitis doloremque recusandae nostrum, nobis neque voluptate ducimus, porro distinctio.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Receipts