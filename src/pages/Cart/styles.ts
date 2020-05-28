import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const CartContainer = styled.View`
  display: flex;
  margin-top: 60px;
  flex-direction: row;
  padding-bottom: 57px;
`;

export const CartItem = styled.View`
  flex: 1;
  background: #fff;
  margin: 8px;
  padding: 14px 14px;
  flex-direction: row;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const CartImage = styled.Image`
  height: 70px;
  width: 70px;
`;

export const CartContent = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const CartProductTitle = styled.Text`
  font-size: 14px;
  color: #3d3d4d;
  margin-top: auto;
`;

export const CartProductSubPrice = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #a0a0b3;
`;

export const CartAmountPrice = styled.Text`
  color: #e83f5b;
  font-size: 16px;
  font-weight: bold;
  margin-top: auto;
`;

export const CartActions = styled.View``;

export const CartButton = styled.TouchableOpacity`
  padding: 10px;
  background: #e5e5e5;
  margin-top: 8px;
  border-radius: 5px;
`;
