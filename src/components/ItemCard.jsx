import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const ItemCard = ({ title, quantity, price, selectItem, itemInfo }) => (
	<Card>
        <Card.Content>
          <Card.Header><Link to="/info" onClick={() => selectItem(itemInfo)}>{title}</Link></Card.Header>
          <Card.Meta>
            <span className='date'>Количество: {quantity}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon name='ruble sign' />
          {price}
        </Card.Content>
  </Card>
);

export default ItemCard;