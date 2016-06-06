import * as React from 'react';

interface Props {
    children?: any;
}

export class Note extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    
    render() {
        const {children} = this.props; 
        
        return (
            <div className="note">
                {children}
            </div>
        );
    }
}
