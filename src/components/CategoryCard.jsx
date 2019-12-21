import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const CategoryCard = ({ title, selectCategory, category }) => (
	<Card>
		<Card.Content>
			<Card.Header><Link to="/items" onClick={() => selectCategory(category)}>{title}</Link></Card.Header>
		</Card.Content>
	</Card>
);

export default CategoryCard;