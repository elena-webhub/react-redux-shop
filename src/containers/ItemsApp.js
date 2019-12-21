import { connect } from 'react-redux';
import { selectItem } from "../actions/items.js";
import ItemsApp from '../components/ItemsApp'

const mapStateToProps = ({ items, categories }) => ({
    items: items.items,
    category: categories.category,
    itemId: items.itemId,
});

const mapDispatchToProps = dispatch => ({
   selectItem: item => dispatch(selectItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsApp);