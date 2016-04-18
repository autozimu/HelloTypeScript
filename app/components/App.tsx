import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ILane} from "../models/ILane";
import {Lanes} from "../components/Lanes";
import {INote} from "../models/INote";
import {IState} from "../models/IState";
import {createLane} from "../actions/laneActions";

interface IAppProps {
    lanes: Array<ILane>;
    notes: Array<INote>;
    dispatch?: Dispatch;
}

class AppComponent extends React.Component<IAppProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className="add-lane"
                        onClick={() => this.props.dispatch(createLane())}>
                    +
                </button>

                <Lanes lanes={this.props.lanes}
                       notes={this.props.notes}
                />
            </div>
        );
    }
}

export const App = connect(
    (state: IState) => state
)(AppComponent);
