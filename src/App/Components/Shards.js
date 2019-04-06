import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import mapStateToProps from "../utils/mapState"
import mapShards from "../utils/mapShards"

class ShardsIdr extends PureComponent {
    render() {
        const mappedShards = mapShards(this.props)

        return (
            <div>
                <div className="row">
                    {mappedShards.map(shard =>
                        <div key={shard.shard} className="col-md-3">
                            <label>{shard.shard}</label>
                            <div className="one__hundred">
                                {shard.count}
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
