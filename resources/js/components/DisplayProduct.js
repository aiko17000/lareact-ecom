import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Product from './Product';
import MyGlobleSetting from './MyGlobleSetting';

class DisplayProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', products: ''};
    }
    componentDidMount(){
        axios.get(MyGlobleSetting.url + '/api/products')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    products(){

        if(this.state.products instanceof Array){
            return this.state.products.map(function(object, i){
                return <Product key={object.id} obj={object} />;

            })
        }
    }


    render(){
        return (
            <div>
                <h1>Products</h1>
                <div className="row">
                    {this.products()}
                </div>lol
            </div>
        )
    }
}
export default DisplayProduct;