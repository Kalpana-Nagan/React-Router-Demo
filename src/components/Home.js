import React from 'react';
import { Link } from 'react-router-dom';

import slack from './slack.png'
import twist from './twist.png'
import paymo from './paymo.png'

const Home = () => {
    return(
       <div className="container">
             <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <img className="card-img-top" src={slack} alt="Slack" />
                        <div className="card-body">
                            <p className="card-text">Slack is a new-age team communication and collaboration tool.</p>
                            <Link to="/product/slack" className="btn btn-sm btn-block btn-outline-secondary">View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <img className="card-img-top" src={twist} alt="Twist" />
                        <div className="card-body">
                            <p className="card-text">Teams have hundreds of conversations happening at once </p>
                            <Link to="/product/twist" className="btn btn-sm btn-block btn-outline-secondary">View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <img className="card-img-top" src={paymo} alt="Paymo" />
                        <div className="card-body">
                            <p className="card-text">Paymo acts as a single source of truth when it comes to managing...</p>
                            <Link to="/product/paymo" className="btn btn-sm btn-block btn-outline-secondary">View</Link>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Home;