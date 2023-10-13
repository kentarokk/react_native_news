import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { WebView } from 'react-native-webview';
import { ListItem } from '../components/ListItem';

export const ClipScreen = ({ navigation }) => {
  const clips = useSelector((state) => state.user.clips);
  console.log(clips);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            author={item.author}
            imageUrl={item.urlToImage}
            title={item.title}
            onPress={() => {
              navigation.navigate('Article', { article: item });
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
