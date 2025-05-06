import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Paginas/Home";
import Detalhes from "../Paginas/Detalhes";


export default function Rotas(){
    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <stack.Navigator>
                    <stack.Screen name="Home" component={Home}/>
                    <stack.Screen name="Detalhes"n component={Detalhes}/>
                    
            </stack.Navigator>

        </NavigationContainer>
    )
}