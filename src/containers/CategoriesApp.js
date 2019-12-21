import { connect } from 'react-redux';
import { selectCategory } from '../actions/categories';
import CategoriesApp from '../components/CategoriesApp';

const mapStateToProps = ({ categories }) => ({
    categories: categories.categories,
    categoryId: categories.categoryId,
});

const mapDispatchToProps = dispatch => ({
    selectCategory: categoryId => dispatch(selectCategory(categoryId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesApp);