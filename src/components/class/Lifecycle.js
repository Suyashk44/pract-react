import React from 'react';

export default class LifecyleMethods extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log("Constructor\n");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    buttonOnClickHandler = () => {
        console.log("buttonOnClickHandler");
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        console.log("render")
        return <div>
            <div>{this.state.count}</div>
            <button onClick={this.buttonOnClickHandler}>Increase count</button>
        </div>
    }
}