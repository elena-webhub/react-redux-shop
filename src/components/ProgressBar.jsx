import React, {Component, Fragment} from 'react';
import { Header, Icon, Progress} from 'semantic-ui-react';
import ModalCart from "./ModalCart";

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, ready: false };
        this.increase = this.increase.bind(this);
    }

    componentDidMount() {
        this.increase();
    }

    increase() {
        const { value } = this.state;
        const newValue = value + 10;
        if (newValue === 110) {
            clearTimeout(this.tm);
            this.setState((state) => {
                return {
                    ready: !state.ready,
                }});
        }
        this.setState({ value: newValue });
        this.tm = setTimeout(this.increase, 100);
    }

    render() {
        if (this.state.ready) {
            return <Fragment>
                    {this.props.cartItems.map((item) => (<ModalCart key={item.id} {...item}/>))}
                    <Header as='h4' icon textAlign='center'>
                        <Icon name='paper plane' color='blue' />
                        <Header.Content>Всего: {this.props.totalPrice}</Header.Content>
                        <Header.Content>Оплата прошла успешно!</Header.Content>
                    </Header>
                    </Fragment>
        } else {
            return (
                <Progress progress='percent' percent={this.state.value} color='blue' style={{ margin: 7+ 'px'}}/>
            );
        }

    }
}
export default ProgressBar;