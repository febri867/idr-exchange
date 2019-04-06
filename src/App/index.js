import React, { Component } from 'react';
import Nominal from './Components/Nominal';
import Shards from './Components/Shards';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 card p-3 mt-5 mb-5">
                        <Nominal />
                        <hr />
                        <Shards />
                    </div>
                </div>
            </div>
        )
    }
}

export default (App)