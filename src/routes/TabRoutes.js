import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

// Routes 
import { Home } from '../Views/home/home';
import { Public } from '../Views/Public/public';
import { Settings } from '../Views/settings/settings';


export function TabRoutes() {
    return (
        <Navigator >          
           <Screen name='Public' component={Public}/>
           <Screen name='Home' component={Home}/>
           <Screen name='Settings' component={Settings}/>
        </Navigator>
    )
}