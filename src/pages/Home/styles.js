import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background: #0082c9;
flex:1;
`;

export const Scroller = styled.ScrollView`
    flex:1;
`;

export const Header = styled.View`
height:60px;
padding: 10px 16px;
background: #001c47;
`;
export const HeaderText = styled.Text`
font-size:30px;
font-weight:bold;
color:#fff;
`;

export const EmptyState = styled.View`
padding:50px 10px;

`;
export const EmptyText = styled.Text`
font-size:23px;
color:#333333;
text-align:center;
`;