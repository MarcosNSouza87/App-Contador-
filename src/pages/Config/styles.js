import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background: #0082c9;
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
export const TitleConfig = styled.Text`
    padding:25px 20px 5px 20px;
    text-align:left;
    font-size:23px;
    color:#333333;
    font-weight:bold;
`;
export const CounterOptions = styled.View`
    height:50px;
    align-items:center;
    flex-direction:row;
    margin-top:20px;
`;



export const CounterOptionsButton = styled.TouchableOpacity`
    background-color:#d8d8d8;
    width:170px;
    height:60px;
    margin:24px 10px 24px 20px;
    border-radius:5px;

`;
export const CounterOptionsButtonText = styled.Text`
    text-align:center;
    padding:5px 40px;
    font-size:20px;
    font-weight:bold;
    color:#14437b;

`;

export const CounterEdit = styled.View`
margin-top:200px;
`;

export const CounterControls = styled.View`
    margin:10px 20px;

    align-items:center;
    flex-direction:row;
`;
export const CtrlButton = styled.TouchableOpacity`
    width:100px;
    height:60px;
    background-color:#d8d8d8;
    border-radius:5px;
    margin:10px;
`;
export const TextButton = styled.Text`
    text-align:center;
    padding-top:20px;
    font-size:15px;
    font-weight:bold;
    color:#14437b;
    
`;