import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ILane} from "../models/ILane";
import {Lanes} from "../components/Lanes";
import {createLane} from "../actions/laneActions";
import {IState} from "../models/IState";

interface Props {
    lanes?: ILane[];
    dispatch?: Dispatch;
}

class AppComponent extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const lanes = this.props.lanes!;
        const dispatch = this.props.dispatch!;
        
        return (
            <div>
                <button className="add-lane"
                        onClick={() => dispatch(createLane())}>
                    +
                </button>

                <Lanes lanes={lanes} />
            </div>
        );
    }
}

export const App = connect(
    function (state: IState, ownProps: Props): Props {
        return {
            lanes: state.lanes
        };
    }
)(AppComponent);
