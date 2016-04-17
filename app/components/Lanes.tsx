import * as React from "react";
import {connect} from "react-redux";
import {ILane} from "../models/ILane";
import {Lane} from "./Lane";
import {INote} from "../models/INote";

interface ILanesProps {
    lanes: Array<ILane>;
    notes: Array<INote>;
}

export class Lanes extends React.Component<ILanesProps, {}> {
    constructor(props: ILanesProps) {
        super(props);
    }
    
    render() {
        return (
            <div className="lanes">{this.props.lanes.map(lane =>
                <Lane key={lane.id}
                      id={lane.id}
                      name={lane.name}
                      noteIds={lane.noteIds}
                      notes={this.props.notes}
                />
            )}</div>
        );
    }
}
