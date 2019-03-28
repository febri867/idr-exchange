import React, { Component } from 'react';
import NominalIdr from './Components/NominalIdr';
import ShardsIdr from './Components/ShardsIdr';

class App extends Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 card p-3 mt-5 mb-5">
                        <NominalIdr/>
                        <hr/>
                        <ShardsIdr/>
                    </div>
                </div>
            </div>
        )
    }
}

export default (App)