import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

class NumberPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {numberValue: this.props.item.count };
    }

    handleClickPlus = () => {
        if(this.state.numberValue < this.props.item.quantity) {
            this.props.itemCount( this.props.item, this.state.numberValue + 1);
            this.setState((state) => {
                return {
                    numberValue: state.numberValue + 1
                }
            });
        } else return this.state.numberValue;

    };

    handleClickMinus = () => {
        if(this.state.numberValue > 1) {
            this.setState((state) => {
                this.props.itemCount(this.props.item, this.state.numberValue - 1);
                return {
                    numberValue: state.numberValue - 1
                }
            });
        } else return this.state.numberValue;
    };

    render() {
        return (
                <Input type='text' placeholder='1'>
                    <Button basic color='blue' icon='plus' onClick={this.handleClickPlus} style={{ marginRight: 7 + 'px' }}/>
                    <input value={this.state.numberValue} style={{ marginRight: 7 + 'px', width: 40 + 'px'}}/>
                    <Button basic color='blue' icon='minus' onClick={this.handleClickMinus}/>
                </Input>
        )
    }
}

export default NumberPicker;
