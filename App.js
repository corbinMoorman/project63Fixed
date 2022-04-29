import *as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import {HomeScreen} from "./homeScreen"

export default class App extends React.Component {
  render(){
    return(
      <View style = {styles.detailsContainer}>
        <Text style = {styles.detailsTitle}> Word : {" "}</Text>
        <Text style = {{fontSize: 18}}>
          {this.state.word}
        </Text>
        <View style = {styles.detailsContainer}>
        <Text style = {styles.detailsTitle}>Type: {" "}</Text>
        <Text style = {{fontSize: 18}}>
          {this.state.lexicalCategory}
        </Text>
      </View>
      <View style = {{flexDirection: 'row',flexWrap: 'wrap'}}>
        <Text style = {styles.detailsTitle}>Definition: {" "}</Text>
        <Text style = {{fontSize: 18}}>
          {this.state.definition}
        </Text>
      </View>

    </View>
      

     
    )
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',


  }, detailsTitle: {
    textAlign: 'center', 
    fontSize: 30, 
  }

});
