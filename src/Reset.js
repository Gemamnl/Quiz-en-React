import React from 'react';

export default class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
    }
    reset() {
        this.props.onReset();
    }
    render() {
        return (
            <Button onClick={this.reset}>
                Reset
            </Button>
        );
    }
}

const Button = styled.button;