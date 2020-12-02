import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    item: {
      flex:1,
      marginVertical: 15,
      marginHorizontal: 20,
      borderWidth:1,
      borderStyle:'solid',
      borderRadius:5,
      height:180,
    },
    title: {
      padding:8,
      fontSize: 23,
      fontWeight:'bold',
      color:"#00000055",
    },
    subTitle:{
        fontSize:70,
        fontWeight:'bold',
        paddingHorizontal:20,
        paddingTop:25,
        textAlign:'right'
    }
  });