
import React, { Component } from 'react';
import { Dimensions, View, FlatList, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import {connect} from 'react-redux'



const { width, height } = Dimensions.get('screen')


class AddTodo extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Add TODO",
            headerTintColor: AppColors.white,

        };
    };


    constructor(props) {
        super(props)

        this.state = {
            title: 'Swimming',
            desc: 'Go for swimming classes at 8'
        }
    }

    componentDidMount() {

    }

    onAddAction = () => {
        this.props.reducer("New Todo")
        console.log("props", this.props.todos)
        this.props.navigation.goBack()
    }

    render(){
        const { title, desc } = this.state
        return(
            <SafeAreaView style = {{flex:1}}>
                <View style = {{justifyContent:'center', padding: 20}}>
                    <TextInput
                        allowFontScaling={false}
                        value = {title}
                        style={styles.input}
                        onChangeText={(text) => this.setState({title: text})}
                        autoCapitalize = {true}
                        returnKeyType = 'next'
                        keyboardType = 'default'
                        
                    />
                                        <TextInput
                        allowFontScaling={false}
                        value = {desc}
                        style={styles.input}
                        onChangeText={(text) => this.setState({desc: text})}
                        autoCapitalize = {true}
                        returnKeyType = 'next'
                        keyboardType = 'default'
                        
                    ></TextInput>

                    <TouchableOpacity style = {styles.button} onPress={() => this.onAddAction()}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
    
}

function mapStateToProps(state) {
      return {
        todos : state.todos,
      }
  }

  function mapDispatchToProps(dispatch) {
    return {
        reducer: (item) => { dispatch({ type: "ADD", item }) },
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(AddTodo)


const styles = StyleSheet.create({
    input:{
        alignSelf:'center', alignItems:'center', padding:10, width: width-20, height:50, margin:10,
        borderWidth:1, borderRadius:5, borderColor:'#ccc'
    },
    button:{
        width: width-40, height: 50, margin:10, backgroundColor: "#abc", justifyContent:'center', alignItems:'center', alignSelf:'center'
    }
})
