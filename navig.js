import React from 'react'
import Main from './screens/Main.js'
import Doc from './screens/doc.js'
import Doc2 from './screens/doc2.js'
import Doc3 from './screens/doc3.js'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

export default function Navigate() {
    return( <>
    
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Main"
            component={Main}
            options={{title:"Главная страница"}}
            />
            <Stack.Screen
            name="Doc"
            component={Doc}
            options={{title:"1 страница"}}
            />
            <Stack.Screen
            name="Doc2"
            component={Doc2}
            options={{title:"2 страница"}}
            />
            <Stack.Screen
            name="Doc3"
            component={Doc3}
            options={{title:"3 страница"}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    </>)
}