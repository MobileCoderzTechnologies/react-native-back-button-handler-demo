import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import NextScreen from './Screens/NextScreen';

const StackNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Next: { screen: NextScreen }
});

export default StackNavigator;
