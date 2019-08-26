import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';


class Master extends Component {
    render(){
        return (
            <div className="container">
                <nav className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                    <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link className="p-2 text-dark" to="display-item">Products</Link>
                        <a className="p-2 text-dark" href="#">Features</a>
                        <a className="p-2 text-dark" href="#">Enterprise</a>
                        <a className="p-2 text-dark" href="#">Support</a>
                        <a className="p-2 text-dark" href="#">Pricing</a>
                    </nav>
                    <Link className="btn btn-outline-primary" to="/cart">Cart</Link>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Master;