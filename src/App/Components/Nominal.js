import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { changeNominal } from "../store/actions";
import mapStateToProps from '../utils/mapState'

class NominalIdr extends PureComponent{
    render(){
        const {
            base: {
                value
            },
            changeNominal
        } = this.props;
        return (
            <div>
                <label className=""><i>IDR Exchange</i></label>
                <input
                    type="number"
                    value={value}
                    min="0"
                    onChange={(e) => changeNominal(e.target.value)}
                    className="form-control" />
            </div> 
        )
    }
}

const mapState = mapStateToProps('app', ['base']);
const mapActions = {changeNominal};

export default connect(mapState, mapActions) (NominalIdr)
