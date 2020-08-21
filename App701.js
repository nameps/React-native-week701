
import React from 'react';
import { View,Text,Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>I Love You</Text>
     
     <Image 
     style={styles.image}
     source={{uri:'https://www.daradaily.com/module/ckfinder/userfiles/images/1498099_684513501580520_753778654_o.jpg'}}
     />
     <Image
     style={{width:200,height:200}}
     source={require('./assets/15.jpg')}
     />
    </View>
  );
}
 const styles=StyleSheet.create({
    container:{alignItems:'center',
    alignContent:'center',
    flex:1,

    },
  text:{

       fontSize:30,
        fontWeight:'bold',
        color:'#F08080',
        backgroundColor:'#00FFFF',
        padding:150,
        margin:90,
        

  },
  image:{
    width:200,
    height:200,
    
  }


 })
