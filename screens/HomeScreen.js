import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from '../components/ListItem';
import axios from 'axios';
import Constants from 'expo-constants';

export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.expoConfig.extra.newsApiKey}`;

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
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
    backgroundColor: '#dfdfdf',
    // alignItems: 'center',
    // justifyContent: 'center',
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
