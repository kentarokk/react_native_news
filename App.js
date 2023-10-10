import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ListItem } from './components/ListItem';



export default function App() {
  return (
    <View style={styles.container}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: { fontSize: 12, color: 'gray' },
});
