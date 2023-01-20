import { NavigationContainer } from '@react-navigation/native';
import { Userroute } from './routes/userroute';

export function Routes() {
    return (
        <NavigationContainer>
            <Userroute />
        </NavigationContainer>
    )
}