import { connect } from 'react-redux';
import Menu from '../components/Menu';
import {setCount} from "../actions/itemInfo";
import {removeItem} from "../actions/cart";

const mapStateToProps = ({ cart }) => ({
    totalPrice: cart.items.reduce((total, item) => total + item.price * item.count, 0),
    totalCount: cart.items.reduce((total, item) => total + item.count, 0),
    cartItems: cart.items,

});

const mapDispatchToProps = dispatch => ({
    setNewCount: (item, count) => dispatch(setCount(item, count)),
    removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);