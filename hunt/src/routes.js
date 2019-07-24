import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/main'

const AppNavigator = createStackNavigator({
   A: {
      screen: Main,
      navigationOptions: {
         headerStyle: {
            backgroundColor: '#DA552F'
         },
         headerTintColor: '#FFF'
      }
   }
});


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;