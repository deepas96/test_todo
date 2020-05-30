import React, { Component } from 'react';
import { Dimensions, Animated, View, FlatList, Text, StyleSheet, Image, ScrollView, SafeAreaView, Platform, TouchableOpacity, RefreshControl, SectionList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'


const { width, height } = Dimensions.get('screen')


class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [1, 2, 3, 4],
        }
    }

    componentDidMount() {
    }

    renderFooter = () => {
         return (
        //    <ActivityIndicator
        //      style={{ color: '#000' }}
        //    />
        <View></View>
         );
       };

       handleLoadMore = () => {
        // if (!this.state.loading) {
        //   this.page = this.page + 1; // increase page by 1
        //   this.loadMore(this.page); // method for API call 
        // }
this.forceUpdate()
      };
    
     

    renderFlatlistItem = (item) => {
        return (
            <View>
                <View style={{ flexDirection:'row', height: 40, width, alignItems: 'center', justifyContent: 'space-between', padding:10, paddingHorizontal:20 }}>
                    <Text>{item}</Text>
                    <View style = {{flexDirection:'row'}}>
                    <TouchableOpacity style = {{ width:44, alignSelf:'flex-end', alignItems: 'center', marginHorizontal: 5}}>
                        <Icon name = 'plus' size = {16}/>
                    </TouchableOpacity>

                    <TouchableOpacity style = {{ width:44, alignSelf:'flex-end', alignItems: 'center'}}>
                        <Icon name = 'delete' size = {16}/>
                    </TouchableOpacity>

                    </View>
                </View>
                <View style={{ height: 0.5, width, backgroundColor: "#ccc" }}></View>
            </View>
        )
    }

    render() {
        const { list } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity style = {styles.button} onPress={() => this.props.navigation.navigate('AddTodo')}>
                        <Text style={{fontSize: 18 }}>Add TODO</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 20, textAlign: 'center', fontSize: 18, }}>TODO List</Text>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 40, backgroundColor: 'white' }}
                        bounces={true}
                        data={this.props.todos}
                        renderItem={({ item }) =>
                            this.renderFlatlistItem(item)
                        }
                        keyExtractor={index => index.id}
                        ListFooterComponent={this.renderFooter.bind(this)}
                        onEndReachedThreshold={0.4}
                        onEndReached={this.handleLoadMore.bind(this)}
              
                    />
                </View>
            </SafeAreaView>
        )
    }

}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, null)(List)


const styles = StyleSheet.create({
    button:{
        width: width-40, height: 50, margin:10, backgroundColor: "#abc", justifyContent:'center', alignItems:'center', alignSelf:'center'
    }
})
