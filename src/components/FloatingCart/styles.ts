import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0;

  background: #e83f5b;
  flex-direction: row;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`;

export const PriceContainer = styled.View`
  padding: 15px;
`;

export const Cart = styled.TouchableOpacity`
  flex: 1;
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const CartText = styled.Text`
  color: #fff;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
