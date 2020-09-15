import React, { Component } from 'react'

class Item extends Component {
    render() {
        return (
            <div className="Category">
                <section className="category-header">
                    <div className="container">
                        <div>
                            <h1>Item Name</h1>
                            <p>Home / Category / Item Name</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="category-main">
                        <div className="row">
                            <div className="col m12 s12">
                                <div className="category-sorting">
                                    <a href="/">All</a>
                                    <a href="/">New Arrivals</a>
                                    <a href="/">Hot Sales</a>
                                    <a href="/">Popular</a>
                                </div>
                                <div className="category-item-list">
                                    <div className="col m3">
                                        <div className="category-item">
                                            <div className="category-image">
                                                <img src={require('../images/cat.jpg')} className="responsive-img" alt="pic here"/>
                                                <div className="category-action">
                                                    <a href="/" className="watch"><i className="small material-icons">remove_red_eye</i></a>
                                                    <a href="/"><i className="small material-icons text-right">favorite_border</i></a>
                                                </div>
                                            </div>
                                            <div className="category-infor">
                                                <h1>Item Name</h1>
                                                <p>Supplier Name</p>
                                            </div>
                                            <div className="category-amount">
                                                <p><span>K237</span></p>
                                                <a href="/item" className="waves-effect waves-light btn">Shop More</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col m3">
                                        <div className="category-item">
                                            <div className="category-image">
                                                <img src={require('../images/cat.jpg')} className="responsive-img" alt="pic here"/>
                                                <div className="category-action">
                                                    <a href="/" className="watch"><i className="small material-icons">remove_red_eye</i></a>
                                                    <a href="/"><i className="small material-icons text-right">favorite_border</i></a>
                                                </div>
                                            </div>
                                            <div className="category-infor">
                                                <h1>Item Name</h1>
                                                <p>Supplier Name</p>
                                            </div>
                                            <div className="category-amount">
                                                <p><span>K237</span></p>
                                                <a href="/item" className="waves-effect waves-light btn">Shop More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col m3">
                                        <div className="category-item">
                                            <div className="category-image">
                                                <img src={require('../images/cat.jpg')} className="responsive-img" alt="pic here"/>
                                                <div className="category-action">
                                                    <a href="/" className="watch"><i className="small material-icons">remove_red_eye</i></a>
                                                    <a href="/"><i className="small material-icons text-right">favorite_border</i></a>
                                                </div>
                                            </div>
                                            <div className="category-infor">
                                                <h1>Item Name</h1>
                                                <p>Supplier Name</p>
                                            </div>
                                            <div className="category-amount">
                                                <p><span>K237</span></p>
                                                <a href="/item" className="waves-effect waves-light btn">Shop More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col m3">
                                        <div className="category-item">
                                            <div className="category-image">
                                                <img src={require('../images/cat.jpg')} className="responsive-img" alt="pic here"/>
                                                <div className="category-action">
                                                    <a href="/" className="watch"><i className="small material-icons">remove_red_eye</i></a>
                                                    <a href="/"><i className="small material-icons text-right">favorite_border</i></a>
                                                </div>
                                            </div>
                                            <div className="category-infor">
                                                <h1>Item Name</h1>
                                                <p>Supplier Name</p>
                                            </div>
                                            <div className="category-amount">
                                                <p><span>K237</span></p>
                                                <a href="/item" className="waves-effect waves-light btn">Shop More</a>
                                            </div>
                                        </div>
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

export default Item