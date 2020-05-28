import React from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

import { Container, PriceContainer, Cart, CartText, Price } from './styles';

const FloatingCart: React.FC = () => {
  const { products } = useCart();
  const navigation = useNavigation();

  const length = React.useMemo(() => products.length, [products]);

  const total = formatValue(
    React.useMemo(
      () =>
        products.reduce((totalPrice, product) => {
          totalPrice += product.price * product.quantity;

          return totalPrice;
        }, 0),
      [products],
    ),
  );

  return (
    <Container>
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Feather name="shopping-cart" size={20} color="#fff" />
        <CartText>{length} itens</CartText>
      </Cart>

      <PriceContainer>
        <Price>{total}</Price>
      </PriceContainer>
    </Container>
  );
};

export default FloatingCart;
