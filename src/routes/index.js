import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./TabRoutes";

export function Routes() {
    return (
        <NavigationContainer>
            <TabRoutes/>
        </NavigationContainer>
    )
}