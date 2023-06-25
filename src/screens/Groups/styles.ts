import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Containerdois = styled.View`

  flex: 1;
  background-color: #CCFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 56;
 
`;

export const Title = styled.Text`
   background-color: ${({ theme }) => theme.COLORS.RED};
  padding: 24px;
  
`;
