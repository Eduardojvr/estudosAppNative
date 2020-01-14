import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert } from 'react-native';

export default class App extends Component{
  render() {
    return (
      

      <View style={styles.container}>
        <View style={styles.tamanho} >
          <View style={styles.inicio} >
            <Text style={styles.fonte}>Início</Text>
          </View>
        </View>

        <View style={styles.tamanho2} >
          <View style={styles.meio}>
            <Text style={styles.fonte}>Meio</Text>
          </View>
        </View>


      </View>
    );  
  }
}


const styles = StyleSheet.create({
  fonte:{
    color: "white",
    fontSize: 30

  },
  tamanho2: {
    flex:2,
    alignItems: "center",
    justifyContent: "center"


  },
  tamanho: {
    height: 150,
  
  },
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: "blue",
    width: "100%"
  },
  inicio: {
    flex: 1,
    width:"100%",
    backgroundColor: "green",
    alignContent: "flex-start",
    alignItems:"center",
    justifyContent:"center"
  },
  meio : {
    flex:1,
    maxHeight: "20%",
    backgroundColor: "red",
    width: "100%",
    alignItems:"center"
  }

});
