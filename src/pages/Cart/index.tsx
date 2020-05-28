import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  CartContainer,
  CartItem,
  CartImage,
  CartContent,
  CartProductTitle,
  CartProductSubPrice,
  CartAmountPrice,
  CartActions,
  CartButton,
} from './styles';

const Cart: React.FC = () => {
  const { decrement, increment, products } = useCart();

  return (
    <Container>
      <CartContainer>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          style={{ flex: 1, paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CartItem>
              <CartImage
                resizeMode="stretch"
                source={{ uri: item.image_url }}
              />
              <CartContent>
                <CartProductTitle>{item.title}</CartProductTitle>
                <CartProductSubPrice>
                  {formatValue(item.price)}
                </CartProductSubPrice>
                <CartAmountPrice>
                  {item.quantity}x {formatValue(item.quantity * item.price)}
                </CartAmountPrice>
              </CartContent>
              <CartActions>
                <CartButton onPress={() => increment(item.id)}>
                  <AntDesign
                    name="plus"
                    color="#e83f5f"
                    style={{ fontWeight: 'bold' }}
                  />
                </CartButton>
                <CartButton onPress={() => decrement(item.id)}>
                  <AntDesign
                    name="minus"
                    color="#e83f5f"
                    style={{ fontWeight: 'bold' }}
                  />
                </CartButton>
              </CartActions>
            </CartItem>
          )}
        />
      </CartContainer>
      <FloatingCart />
    </Container>
  );
};

export default Cart;
