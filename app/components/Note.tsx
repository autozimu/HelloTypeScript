import * as React from 'react';
import { compose } from 'redux';
import { DragSource, DropTarget } from 'react-dnd';

import { ItemTypes } from "../constants/ItemTypes";

interface Props {
    id: string;
    onMove(sourceId, targetId);

    // DnD
    connectDragSource?: any;
    connectDropTarget?: any;
    isDragging?: boolean;
    isOver?: boolean;
}

class NoteComponent extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        const {connectDragSource, connectDropTarget, isDragging, isOver} = this.props;

        return connectDragSource(
            <div className="note"
                style={{
                    opacity: isDragging || isOver ? 0.5 : 1
                }}>
                {children}
            </div>
        );
    }
}

interface DnDItem {
    id: string;
}

const noteSource = {
    beginDrag(props: Props): DnDItem {
        return {
            id: props.id
        };
    }
};

function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

const noteTarget = {
    hover(targetProps: Props, monitor) {
        const targetId = targetProps.id;
        const sourceProps = (monitor.getItem() as DnDItem);
        const sourceId = sourceProps.id;

        if (sourceId !== targetId) {
            targetProps.onMove(sourceId, targetId);
        }
    }
};


export const Note = DragSource(ItemTypes.NOTE, noteSource, collectSource)(NoteComponent) as React.ComponentClass<Props>;
