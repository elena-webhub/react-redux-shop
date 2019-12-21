import React, { Component } from 'react';
import MenuComponent from '../containers/Menu';
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Responsive,
    Segment,
    Statistic,
    Popup
} from 'semantic-ui-react';
import NumberPicker from "./NumberPicker";

class ItemInfoApp extends Component {
    state = {
        width : Responsive.onlyLargeScreen.minWidth,
        itemAdapt: document.documentElement.clientWidth < Responsive.onlyTablet.minWidth,
    };

    updateDimensions = () => {
        this.setState({width: document.documentElement.clientWidth, itemAdapt: this.state.width < Responsive.onlyTablet.minWidth});
    };
    componentWillMount = () => {
        this.updateDimensions();
    };

    componentDidMount = () => {
        this.setState({width: document.documentElement.clientWidth, itemAdapt: this.state.width < Responsive.onlyTablet.minWidth});
        window.addEventListener("resize", this.updateDimensions);
    };
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
    };

    render() {
        const { itemInfo, setCount, addItem } = this.props;
        itemInfo.count = 1;
        let checkForMenu = this.state.width > 526;
        return (
            <Container>
                <MenuComponent title={itemInfo.title} check = {checkForMenu}/>
                {this.state.itemAdapt
                    ? <Segment style={{ padding: '8em 0em' }} vertical textAlign='center'>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        {itemInfo.title}
                                    </Header>
                                    <p style={{ fontSize: '1.33em' }}>
                                        Тут может быть какое-то описание.
                                        Но думаю и так все понятно.
                                        Я очень надеюсь.
                                    </p>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        <Icon name='ruble sign' />{itemInfo.price}
                                    </Header>
                                </Grid.Column>
                                <Grid.Column floated='right' width={6}>
                                    <Statistic color='blue'>
                                        <Statistic.Label>Осталось</Statistic.Label>
                                        <Statistic.Value>{itemInfo.quantity}</Statistic.Value>
                                        <Statistic.Label>шт.</Statistic.Label>
                                        <NumberPicker itemCount={setCount} item={itemInfo}/>
                                    </Statistic>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column >
                                    <Popup
                                        mouseLeaveDelay={1000}
                                        content='Добавлено в корзину'
                                        on='click'
                                        trigger={<Button basic fluid size='large' color='blue' onClick={() => addItem(itemInfo)}>Купить</Button>}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    :<Segment style={{ padding: '8em 0em' }} vertical>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        {itemInfo.title}
                                    </Header>
                                    <p style={{ fontSize: '1.33em' }}>
                                        Тут может быть какое-то описание.
                                        Но думаю и так все понятно.
                                        Я очень надеюсь.
                                    </p>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        <Icon name='ruble sign' />{itemInfo.price}
                                    </Header>
                                </Grid.Column>
                                <Grid.Column floated='right' width={6}>
                                    <Statistic color='blue'>
                                        <Statistic.Label>Осталось</Statistic.Label>
                                        <Statistic.Value>{itemInfo.quantity}</Statistic.Value>
                                        <Statistic.Label>шт.</Statistic.Label>
                                        <NumberPicker itemCount={setCount} item={itemInfo}/>
                                    </Statistic>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column >
                                    <Popup
                                        content='Добавлено в корзину'
                                        mouseLeaveDelay={1000}
                                        on='click'
                                        trigger={<Button basic color='blue' onClick={() => addItem(itemInfo)}>Купить</Button>}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                }
            </Container>
        );
    }
}
export default ItemInfoApp;