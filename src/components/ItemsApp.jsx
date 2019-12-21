import React, { Component } from 'react';
import {Container, Card, Responsive} from 'semantic-ui-react';
import MenuComponent from '../containers/Menu';
import ItemCard from "./ItemCard";

class ItemsApp extends Component {


    state = {
        width : Responsive.onlyLargeScreen.minWidth,
        itemsPerRow: document.documentElement.clientWidth < Responsive.onlyTablet.minWidth ? 2 : 3,
    };

    updateDimensions = () => {
        this.setState({width: document.documentElement.clientWidth, itemsPerRow: this.state.width < Responsive.onlyTablet.minWidth ? 2 : 3});
    };
    componentWillMount = () => {
        this.updateDimensions();
    };

    componentDidMount = () => {
        this.setState({width: document.documentElement.clientWidth, itemsPerRow: this.state.width < Responsive.onlyTablet.minWidth ? 2 : 3});
        window.addEventListener("resize", this.updateDimensions);
    };
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
    };

    render() {
        const { items, category, selectItem } = this.props;
        let itemByCategory = items.filter(item => item.category_id === category.id);
        let checkForMenu = this.state.width > 526;

        return (
            <Container>
                <MenuComponent title={category.title} check = {checkForMenu}/>
                <Card.Group itemsPerRow={this.state.itemsPerRow} >
                    {itemByCategory.map((item) => (<ItemCard key={item.id} {...item} selectItem={selectItem} itemInfo={item}/>))}
                </Card.Group>
            </Container>
        );
    }
}
export default ItemsApp;
