import React, { Component } from 'react';
import {Container, Card, Responsive} from 'semantic-ui-react';
import MenuComponent from '../containers/Menu';
import CategoryCard from './CategoryCard';

class CategoriesApp extends Component {

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
        const { categories, selectCategory } = this.props;
        let checkForMenu = this.state.width > 526;
        return (
            <Container>
                <MenuComponent check = {checkForMenu}/>
                <Card.Group itemsPerRow={this.state.itemsPerRow}>
                    {categories.map((category) => (<CategoryCard key={category.id} {...category} selectCategory={selectCategory} category={category}/>))}
                </Card.Group>
            </Container>
        );
    }
}
export default CategoriesApp;
