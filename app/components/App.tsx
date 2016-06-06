import * as React from "react";
import {Dispatch, compose} from "redux";
import {connect} from "react-redux";
import {DragDropContext} from 'react-dnd';
import * as HTML5Backend from 'react-dnd-html5-backend';


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

export const App = compose(
    DragDropContext(HTML5Backend),
    connect(
        function (state: IState, ownProps: Props): Props {
            return {
                lanes: state.lanes
            };
        }
    )
)(AppComponent);
