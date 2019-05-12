import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import mapStateToProps from "../utils/mapState"
import mapShards from "../utils/mapShards"
import { formatNumber } from "../utils/formatNumber";

class ShardsIdr extends PureComponent {
    render() {
        const mappedShards = mapShards(this.props)

        return (
            <div>
                <div className="row">
                    {mappedShards.map(shard =>
                        <div key={shard.shard} className="col-md-4">
                            <div className="box">
                                <label>Rp {formatNumber(shard.shard)}</label>
                                <h3><sup>x</sup>{formatNumber(shard.count)}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapState = mapStateToProps('app', ['base', 'shards'])

export default connect(mapState) (ShardsIdr)
