import styled from 'styled-components/native';

export interface ProductDTO {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex: 1;
  margin-top: 60px;
  flex-direction: row;
  padding-bottom: 30px;
`;

export const ProductItem = styled.View`
  flex: 1;
  background: #fff;
  margin: 8px;
  padding: 16px 16px;

  border-radius: 5px;
`;

export const ProductImg = styled.Image`
  width: 122px;
  height: 122px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #3d3d4d;
  margin-top: 16px;
`;

export const ProductFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 10px;
`;

export const ProductPrice = styled.Text`
  color: #e83f5b;
  font-size: 16px;
  font-weight: bold;
`;
