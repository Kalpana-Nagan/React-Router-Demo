import React from 'react';
import {Link} from 'react-router-dom';
import slack from './slack.png';
import twist from './twist.png';
import paymo from './paymo.png';

const Product = ({ match }) => {
    let img = paymo;
    console.log(match); 
    switch(match.params.product){
       case 'slack':
       img = slack
       break 
       case 'twist': img = twist
       break
       default:
       img= paymo
       break;
    }
    return(
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-3">
                <div className="card mb-4 shadow-sm">
                    <img className="card-img-top" src={img} alt="Slack" />
                    <h4 className="text-center p-2">{ match.params.product }</h4>
                    <div className="card-body">
                        <Link to="/" className="btn btn-sm btn-block btn-outline-secondary">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Product;