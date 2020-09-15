import React, { Component } from 'react'

class CartModule extends Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }

    render() {
        return (
            <div>
                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Add To Cart</a>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="/item" className="modal-close waves-effect waves-green btn-flat">Shop More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartModule