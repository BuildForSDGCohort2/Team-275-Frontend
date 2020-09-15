import React, { Component } from 'react'

class Category extends Component {
    render() {
        return (
            <div className="Category">
                <section className="category-header">
                    <div className="welcome container">
                        <div>
                            <h1>Category</h1>
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
                                        <div className="card">
                                            <div className="overflow">
                                                <div className="card-image">
                                                    <img src={require('../images/cat.jpg')} alt="pic here"/>
                                                    <span className="card-title">Category Name</span>
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.
                                                I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                            <div className="card-action">
                                                <a href="/item">View More</a>
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

export default Category