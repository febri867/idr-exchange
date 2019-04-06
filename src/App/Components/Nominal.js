import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeNominal } from "../store/actions"
import mapStateToProps from '../utils/mapState'

class NominalIdr extends PureComponent {
    render() {
        const {
            base: {
                value
            },
            changeNominal
        } = this.props

        return (
            <div>
                <label>
                    <i>IDR Exchange</i>
                </label>

                <input
                    type="number"
                    className="form-control"
                    min="0"
                    value={value}
                    onChange={changeNominal}
                />
            </div>
        )
    }
}

const mapState = mapStateToProps('app', ['base'])
const mapActions = { changeNominal }

export default connect(mapState, mapActions) (NominalIdr)
