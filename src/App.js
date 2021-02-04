import React from 'react'
import {NavigationContainer} from '@react-nativion/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './view/UserList'
import UserForm from './view/UserForm'

const stack = createStackNavigator()


export default props => {

    return(

     <NavigationContainer>

            <Stack.Navigator
                initialRouteName="Userlist">
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                />

                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                />

            </Stack.Navigator>

    </NavigationContainer> 
    )

}