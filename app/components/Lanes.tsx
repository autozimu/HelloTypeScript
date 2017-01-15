import * as React from "react";
import {ILane} from "../models/ILane";
import {Lane} from "./Lane";
import {INote} from "../models/INote";

interface Props {
    lanes: ILane[];
    notes: INote[]
}

export class Lanes extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {lanes, notes} = this.props;

        return (
            <div className="lanes">
                {lanes.map(lane => {
                    let laneNotes: INote[] = [];
                    lane.noteIds.forEach(id => {
                        laneNotes = laneNotes.concat(notes.filter(note => note.id === id))
                    });

                    return (
                        <Lane key={lane.id}
                              lane={lane}
                              notes={laneNotes}
                        />
                    )}
                )}
            </div>
        );
    }
}
