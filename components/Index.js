import React from 'react';
import{
    View,
    Text,
    ImageBackground,
}from 'react-native';
import StyleButton from './StyledButton';
import styles from './Style';

const CarItem=(props)=>{
return(

    <View style={styles.Carcontainer}>

    <ImageBackground source={require('../src/images/tesla.jpg')}
      style={styles.image}
    />
     <View style={styles.titles}>
       <Text style={styles.title}>Model S</Text>
       <Text style={styles.subtitles}>Starting at $98.89</Text>
     </View>

     <StyleButton type="primary" content={"Custom Order"} 
     onPress={()=>{
        console.warn("custom order button pressed")
     }
     } />

     <StyleButton type="secondary" content={"Existing Inventary"} 
     onPress={()=>{
        console.warn("Existing Inventary button pressed")
     }
     } />
   </View>
)};

export default CarItem;