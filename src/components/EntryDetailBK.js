import React from 'react'
import { ScrollView, Text, Linking , StyleSheet, WebView, View } from 'react-native'
import HTMLView from 'react-native-htmlview'
import Colors from '../constants/Colors'

const EntryDetail = (props) => {
    const {entry} = props
    console.log('ENTRY DETAIL',entry)
    const onLoad = (e) =>{
        console.log('Event', e)
    }
    return (   
        <ScrollView style={styles.container}>
        <Text style={styles.title}>
            {entry.title}
        </Text>
        <Text style={styles.author}>
            {entry.author}
        </Text>
        <HTMLView
            value={entry.content}
            stylesheet={styles}
            onLinkPress={ url => Linking.openURL(url)}
        />
        </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor :'#FFF',
        marginBottom: 5,
        padding: 7,
    },
    title : {
        color :'#555',
        fontSize : 16,
        fontWeight: '600',
    },
    author : {
        color :'#AAA',
        fontSize : 9,
        fontWeight :'500',
        paddingTop :7
    },
    a: {
        color : Colors.blue
    }

})
export default EntryDetail