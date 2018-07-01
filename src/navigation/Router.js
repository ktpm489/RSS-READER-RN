import RssListScreen from '../screen/RssListScreen'
import FeedScreen from '../screen/FeedScreen'
import EntryScreen from '../screen/EntryScreen'
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
        navigationOptions: {
            title: 'Feed Reader',
            visible: true,
            backgroundColor: Colors.red,
            tintColor: '#FFF',
            headerBackTitle: null,
            left: null
          //  headerLeft: null
        }
    },
    entry : {
        screen : EntryScreen,
        navigationOptions: {
            title: 'Item Reader',
            visible: true,
            backgroundColor: Colors.red,
            tintColor: '#FFF',
            headerBackTitle: null,
           // headerLeft: null
        }
    }
})

 