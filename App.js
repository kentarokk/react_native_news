import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { HomeScreen } from './screens/HomeScreen';
import { ArticleScreen } from './screens/ArticleScreen';
import { ClipScreen } from './screens/ClipScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'home') {
      return <FontAwesome name="home" size={size} color={color} />;
    } else if (route.name === 'clip') {
      return <FontAwesome name="bookmark" size={size} color={color} />;
    }
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
});

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ headerShown: false, title: 'Home' }}
        />
        <Tab.Screen
          name="clip"
          component={ClipScreen}
          options={{ headerShown: false, title: 'Clip' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
