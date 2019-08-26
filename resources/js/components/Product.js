import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class Product extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let uri = MyGlobleSetting.url + `/api/products/${this.props.obj.id}`;
        axios.delete(uri);
        browserHistory.push('/display-item');
    }
    render() {
        return (

            <div className="col-3">
                {this.props.obj.name}
                <br/>
                    {this.props.obj.description}
                    <br/>
                        <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                    </div>
        );
    }
}


export default Product;