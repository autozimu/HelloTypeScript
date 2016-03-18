import * as React from 'react';

interface INoteProps {
    task: string
}

export class Note extends React.Component<INoteProps, {}> {
    constructor(props: INoteProps) {
        super(props);
    }

    render() {
        return <div>{this.props.task}</div>;
    }
}
