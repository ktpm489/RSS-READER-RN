import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class EntryItem extends Component {
 
    constructor(props){
        super(props)
    }
    handlePress = () =>{
       // this.props.navigator.push('entry', { entry : this.props.entry })
        this.props.param('entry',
            {
                entry: this.props.entry 
            }
        )

    }

  render() {
      const {entry} = this.props
    return (
     <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.rssContainer}>
        <Text style={styles.title} numberOfLines={2}>
            {entry.title}
        </Text>
        <Text style={styles.footer}>
            {entry.author}
        </Text>
        </View>
     </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    rssContainer :{
        flexDirection: 'column',
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: '#DDD',
        marginBottom: 5,
        padding: 7
    },
    title : {
        color :'#555',
        fontSize: 16,
        fontWeight: '600',
    },
    body : {
        color :'#777',
        fontSize :12,
        paddingTop: 7,
    },
    footer : {
        color: '#AAA',
        fontSize : 9,
        fontWeight :'500',
        paddingTop: 7,
    }
})

export default EntryItem;
