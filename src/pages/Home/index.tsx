import React, { useState, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';
import { FlatList, TouchableOpacity, View } from 'react-native';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import { ProductDTO, useCart } from '../../hooks/cart';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  ProductContainer,
  ProductItem,
  ProductImg,
  ProductTitle,
  ProductFooter,
  ProductPrice,
} from './styles';

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    (async () => {
      const response = await api.get<ProductDTO[]>('/products');

      setProducts(response.data);
    })();
  }, []);

  return (
    <Container>
      <ProductContainer>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          data={products}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            paddingVertical: 0,
            paddingHorizontal: 10,
          }}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 30,
          }}
          renderItem={({ item }) => (
            <ProductItem>
              <ProductImg source={{ uri: item.image_url }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductFooter>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <TouchableOpacity
                  onPress={() => {
                    addToCart(item);
                  }}
                >
                  <Feather name="plus" size={25} color="#D7D7E6" />
                </TouchableOpacity>
              </ProductFooter>
            </ProductItem>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Home;
