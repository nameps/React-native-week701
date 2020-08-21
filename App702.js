
import React from 'react';
import { View,Text,Image, StyleSheet, Button } from 'react-native';

export default class App extends React.Component{
  /*state*/  
state={
      headline:'Wellcome Home Hibara',
     
    }
  updateState=()=>{
    this.setState({
      headline:'Wellcome Home Hibara',
     

    })
  
  }

  countUP=()=>{

  }
  /*parent*/
  render(){

    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.headline}</Text>
        
        <Image 
        style={styles.joy}
        source={{uri:'https://i.pinimg.com/originals/7f/21/dc/7f21dcb8e539ac503d50fb6636ef8c54.jpg'}}
       

        />
        <Image
        style={styles.joy}
        source={{uri:'https://pbs.twimg.com/media/EYmogucUMAAmiQr.jpg'}}
        />
        <Button 
        onPress= {this.state.updateState}
        title="HI!"
        color="#000000"
        
        
        />
        
        <Button
        onPress={this.count}
        title="Hi HiBaRa"
        color="#000000"
        
        />



        
      </View>

    )
  }
  
}
const  styles=StyleSheet.create({
  container:{alignItems:'center',
  justifyContent:'center',
  flex:1,
  backgroundColor:'#00FFFF',
  },
  text:{ 
    fontSize:15,
    fontWeight:'bold',
    color:'#FA8072',
    backgroundColor:'#FF00FF',
    margin:20,

  },
  joy:{
    width:200,
    height:150,
    margin:20,
    

  }
  

})
