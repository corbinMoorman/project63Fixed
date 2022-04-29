import *as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    getWord = (word) => {
        var searchKeyWord = word.toLowerCase()
        var url = "https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json" + searchKeyWord+ ".json"
        //console.log(url)
        return fetch(url)
        .then((data)=>{
            if(data.status === 200){
                return data.json()
            }else{
                return null
            }
        })
        .then((response) => {
            var responseObject = response
            var word = responseObject.word
            var lexicalCategory = responseObject.results[0].lexicalCategory[0].lexicalCategory.text
            if(responseObject){
                var wordData = responseObject.definitions[0]
                console.log(responseObject.definitions[0])
                var definition = wordData.description
                var lexicalCategory = wordData.wordtype
                console.log(lexicalCategory)
                this.setState({
                    "word" : this.state.text,
                    "definition" : definition,
                    "lexicalCategory" : lexicalCategory
                })
            }else{
                this.setState({
                    "word" : this.state.text,
                    "definition" : "Not Found"             
                })
            }
        })
    }   

    render() {
        return (
            <View> 
                <TextInput style ={styles.inputBox}
                onChangeText = {text => {
                this.setState({
                    text: text,
                    isSearchPressed : false,
                    word : "Loading...",
                    lexicalCategory : '',
                    examples : [],
                    definiton : ""
                });
            }}
            value = {this.state.text}
            />
            <TouchableOpacity style = {styles.searchButton}onPress = {()=>{
                this.setState({isSearchPressed: true});
                this.getWord(this.state.text)
            }}>

            </TouchableOpacity>
</View>
           
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputBoxContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        marginTop: 20,
        width: '80%',
        alignSelf: 'center', 
        height: 40,
        textAlign: 'center', 
        borderWidth: 4, 
        outline: 'none',
    },
    searchButton: { 
        width: '50%', 
        height: 55, 
        alignSelf: 'center', 
        padding: 10, 
        margin: 10, },
})

