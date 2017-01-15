import * as React from 'react';
import {compose} from 'redux';
import {DragSource, DropTarget} from 'react-dnd';

import {ItemTypes} from "../constants/ItemTypes";

interface Props {
    children: any;
    connectDragSource: any;
    connectDropTarget: any;
    id: string;
    isDragging: boolean;
    isOver: boolean;
    onMove(sourceId, targetId);
}

class NoteComponent extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        const {connectDragSource, connectDropTarget, isDragging, isOver} = this.props;

        return compose(connectDragSource, connectDropTarget)(
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


export const Note = compose(
    DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    })),
    DropTarget(ItemTypes.NOTE, noteTarget, (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }))
)(NoteComponent) as React.ComponentClass<Props>;
