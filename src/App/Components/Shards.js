import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import mapStateToProps from "../utils/mapState";
import { IDR_SHARDS } from "../utils/constant";

class ShardsIdr extends PureComponent {
    render(){
        const {
            base:{
                value
            }
        } = this.props;
        let tmp = parseInt(value) ? value : 0;
        let val = IDR_SHARDS.map((e) => {
            let mod = Math.floor(tmp / e);
            if(mod > 0) tmp = tmp % e;
            return {shard: e, count: mod}
        });
        if(tmp !==0 ) val.push({shard:'Difference', count: tmp});
        return (
            <div>
                <div className="row">
                    {val.map(obj =>
                        <div key={obj.shard} className={"col-md-3 shard__" + obj.shard}>
                            <label>{obj.shard}</label>
                            <div className="one__hundred">
                                {obj.count}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
const mapState = mapStateToProps('app', ['base']);
export default connect(mapState) (ShardsIdr)