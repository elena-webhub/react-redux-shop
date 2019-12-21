import { connect } from 'react-redux';
import { setCount } from '../actions/itemInfo';
import { addItem } from '../actions/cart';
import ItemInfoApp from '../components/ItemInfoApp';

const mapStateToProps = ({ items }) => ({
    itemInfo: items.itemInfo,
    count: 1,
});

const mapDispatchToProps = dispatch => ({
    setCount: (item, count) => dispatch(setCount(item, count)),
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfoApp);