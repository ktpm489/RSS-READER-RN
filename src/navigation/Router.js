import RssListScreen from '../screen/RssListScreen'
import FeedScreen from '../screen/FeedScreen'
import EntryScreen from '../screen/EntryScreen'
import WebViewScreen from '../screen/WebViewScreen'
import Colors from '../constants/Colors'
import { StackNavigator } from 'react-navigation'

export const RssStack = StackNavigator({
    rssList : {
        screen : RssListScreen,
        navigationOptions: {
             title: 'RSS Reader',
            visible: true,
            backgroundColor: Colors.red,
            tintColor: '#FFF',
            headerBackTitle: null,
            headerLeft: null
        }
    },
    feed : {
        screen : FeedScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title,
            visible: true,
            backgroundColor: Colors.red,
            tintColor: '#FFF',
            headerBackTitle: null,
            left: null
          //  headerLeft: null
            })
    },
    entry : {
        screen : EntryScreen,
        navigationOptions: ({ navigation })  => ({
            title: navigation.state.params.title,
            visible: true,
            backgroundColor: Colors.red,
            tintColor: '#FFF',
            headerBackTitle: null,
           // headerLeft: null
        })
    },
    webview: {
        screen: WebViewScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title,
            visible: true,
            backgroundColor: Colors.red,
            tintColor: '#FFF',
            headerBackTitle: null,
            // headerLeft: null
        })
    },

})

 // khong dung webview tu entrydetail ,call truc tiep webview