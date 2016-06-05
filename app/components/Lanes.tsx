import * as React from "react";
import {ILane} from "../models/ILane";
import {Lane} from "./Lane";

interface Props {
    lanes: ILane[];
}

export class Lanes extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="lanes">{this.props.lanes.map(lane => {
                return (
                    <Lane key={lane.id}
                          lane={lane}
                    />
                )}
            )}</div>
        );
    }
}
