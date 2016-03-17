import React = require('react');
import Note = require('./Note.tsx');

class App extends React.Component<any, any> {
    render() {
        return <Note />;
    }
}

export = App;