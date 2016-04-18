import * as React from "react";
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
            <div className="lanes">{this.props.lanes.map(lane => {
                const notes = this.props.notes.filter(note => lane.noteIds.indexOf(note.id) > -1);
                return (
                    <Lane key={lane.id}
                          id={lane.id}
                          name={lane.name}
                          notes={notes}
                    />
                )}
            )}</div>
        );
    }
}
