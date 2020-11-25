import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity  } from 'react-native';




import Display from './display';
import Input from './input';
import HeaderArea from './header';

export default function Home(props){

    const {navigation} = props;
    const handlePress=()=>{
        navigation.navigate("Input_Page");
    }

    return (
        
            <View style={styles.container}>
                <View style={styles.statusBar} ></View>
                <HeaderArea/>
                <View style={styles.center}>
                  <TouchableOpacity
                      style = {styles.addButton}
                      onPress={handlePress}
                  >
                      <Text style ={styles.buttonText}>Add New</Text>
                  </TouchableOpacity>
                </View>
                <Display/>
            </View>
    );
    }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'yellow'
        },
        statusBar:{
          backgroundColor:"yellow",
          height:35
        },
        addButton:{
          backgroundColor:"green",
          justifyContent:"center",
          alignItems:"center",
          marginTop:10,
          height: 40,
          width:120,
          borderRadius:20
        },
        buttonText:{
          fontSize:20,
          fontWeight:"700"
        },
        center:{
          alignItems:"center",
          justifyContent:"center"
        }
      });