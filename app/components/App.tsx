import * as React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {DragDropContext} from 'react-dnd';
import * as HTML5Backend from 'react-dnd-html5-backend';


import {dispatch} from '../store';
import {ILane} from "../models/ILane";
import {Lanes} from "../components/Lanes";
import {createLane} from "../actions/laneActions";
import {IState} from "../models/IState";
import {INote} from "../models/INote";

interface Props {
    lanes?: ILane[];
    notes?: INote[];
}

class AppComponent extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const lanes = this.props.lanes!;
        const notes = this.props.notes!;

        return (
            <div>
                <button className="add-lane"
                        onClick={() => dispatch(createLane())}>
                    +
                </button>

                <Lanes lanes={lanes} notes={notes} />
            </div>
        );
    }
}

export const App = compose(
    DragDropContext(HTML5Backend),
    connect(
        function (state: IState): Props {
            return {
                lanes: state.lanes,
                notes: state.notes
            };
        }
    )
)(AppComponent);
