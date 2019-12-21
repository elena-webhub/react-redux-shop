import React, { Fragment } from 'react'
import { Modal, List, Icon} from 'semantic-ui-react'


const ModalCart = ({ title, price, count }) => (
    <Fragment>
        <Modal.Content>
            <Modal.Description>
                <List divided relaxed>
                    <List.Item>
                        <List.Content floated='right'>
                            <List.Header as='a'>Итого</List.Header>
                            <List.Description as='a'><Icon name='ruble sign' />{price*count}</List.Description>
                        </List.Content>
                        <List.Icon name='angle double right' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>{title}</List.Header>
                            <List.Description as='a'>{count}</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            </Modal.Description>
        </Modal.Content>
    </Fragment>
);

export default ModalCart;
