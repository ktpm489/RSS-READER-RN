import React , {Component} from 'react'
import { Platform, StatusBar, View, StyleSheet } from 'react-native'
import {RssStack} from './src/navigation/Router'
import Colors from './src/constants/Colors'
class App extends Component {
    render(){
        return (
            <View style={styles.container}>
                <RssStack/>
                  {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
                  {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                 </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: Colors.dark,
    },
    statusBarUnderlay :{
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
})

export default App