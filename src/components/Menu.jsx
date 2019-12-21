import React from 'react';
import {Link} from "react-router-dom";
import {
    Menu,
    Button,
    Icon,
    Label,
    Header,
    Segment,
    Modal,
} from 'semantic-ui-react'
import NumberPicker from "./NumberPicker";
import ProgressBar from "./ProgressBar";

const CartComponent = ({ title, item, setNewCount, removeItem, check }) => (
    <Segment.Group horizontal >
        <Segment>{title}</Segment>
        <Segment><NumberPicker item={item} itemCount={setNewCount}/></Segment>
        {check
            ? <Segment onClick={() => removeItem(item.id)}>
                <Icon circular color='blue' name='remove' size='large' />
            </Segment>
            :  <Segment onClick={() => removeItem(item.id)} style={{padding: 0, paddingTop: 20 + 'px'}}>
            <Icon color='blue' name='remove' size='large' />
            </Segment>
        }

    </Segment.Group>
);

const MenuComponent = ({ title, totalPrice, totalCount, cartItems, setNewCount, removeItem, check }) => (
    <Menu>
        <Menu.Item>
            <h1><Link to="/categories">ShopTest</Link></h1>
        </Menu.Item>
        <Menu.Item name='Категории'>
            {title}
        </Menu.Item>
        {check
            ? <Menu.Menu position='right'>
                <Menu.Item>
                    <Button as='div' labelPosition='right'>
                        <Button color='blue'>
                            <Icon name='rub' />
                        </Button>
                        <Label as='a' basic color='blue' pointing='left'>
                            {totalPrice}
                        </Label>
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Modal size='tiny' trigger=
                        {<Button as='div' labelPosition='left'>
                            <Label as='a' basic color='blue' pointing='right'>{totalCount}</Label>
                            <Button color='blue'>
                                <Icon name='shop' />
                            </Button>
                        </Button>}
                           style={{padding: 20+ 'px'}}>
                        {cartItems.map((item) => (<CartComponent key={item.id} {...item} item={item} setNewCount={setNewCount} removeItem={removeItem} check={check}/>))}
                        {cartItems.length
                            ? <div style={{textAlign: "center", width: 350 + 'px', margin: "auto"}}>
                                <Label as='a' style={{marginBottom: 7 + 'px'}}>
                                    <Icon name='ruble sign' />
                                    {totalPrice}
                                </Label>
                                <Label as='a'>
                                    <Icon name='shop' />
                                    {totalCount}
                                </Label>
                                <Modal size='mini' trigger={<Button fluid basic color='blue'>Оплатить</Button>}>
                                    <Modal.Header>Процесс оплаты</Modal.Header>
                                    <ProgressBar cartItems={cartItems} totalPrice={totalPrice}/>
                                </Modal>
                            </div>

                            : <Header as='h2' icon textAlign='center'>
                                <Icon name='shop' color='blue' circular />
                                <Header.Content>Корзина пустая</Header.Content>
                            </Header>
                        }
                    </Modal>
                </Menu.Item>
            </Menu.Menu>
            : <Menu.Item position='right' style={{padding: 8 + 'px'}}>
                <Modal size='tiny' trigger=
                    {<Button color='blue' style={{padding: 7 + 'px'}}>
                            <Icon name='shop' style={{margin: "auto"}}/>
                        </Button>}
                       style={{padding: 20+ 'px'}}>
                    {cartItems.map((item) => (<CartComponent key={item.id} {...item} item={item} setNewCount={setNewCount} removeItem={removeItem} check={check}/>))}
                    {cartItems.length
                        ? <div style={{textAlign: "center", maxWidth: 350 + 'px', margin: "auto"}}>
                            <Label as='a' style={{marginBottom: 7 + 'px'}}>
                                <Icon name='ruble sign' />
                                {totalPrice}
                            </Label>
                            <Label as='a'>
                                <Icon name='shop' />
                                {totalCount}
                            </Label>
                            <Modal size='mini' trigger={<Button fluid basic color='blue'>Оплатить</Button>}>
                                <Modal.Header>Процесс оплаты</Modal.Header>
                                <ProgressBar cartItems={cartItems} totalPrice={totalPrice}/>
                            </Modal>
                        </div>

                        : <Header as='h2' icon textAlign='center'>
                            <Icon name='shop' color='blue' circular />
                            <Header.Content>Корзина пустая</Header.Content>
                        </Header>
                    }
                </Modal>
            </Menu.Item>
        }
      </Menu>
);

export default MenuComponent;