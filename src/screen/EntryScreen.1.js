import React from 'react'
import {View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import EntryDetail from '../components/EntryDetail'

const EntryScreen = (props) => {

    const { entry } = props.navigation.state.params
    const { navigate } = props.navigation;
    console.log('Entry', entry)
    return(
    <View style={styles.container}>
            <EntryDetail entry={entry} param={navigate}/>
    </View>
)}

// configurations route
// EntryScreen.route = {
//     navigationBar: {
//         visible: true,
//         title(params) {
//             return params.entry.title;
//         },
//         backgroundColor: Colors.dark,
//         tintColor: '#FFF'
//     }
// };

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#EEE',
    }
})

export default EntryScreen