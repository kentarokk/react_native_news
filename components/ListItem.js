import { StyleSheet, Text, View, Image } from 'react-native';

/**
 *
 * @param {
 *   imageUrl: 画像URL(string)
 *   title: タイトル(string)
 *   author: ニュース提供元(string)
 * } props
 * @returns
 */

export const ListItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://picsum.photos/id/10/300/300/' }}
        ></Image>
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          Lorem
        </Text>
        <Text style={styles.subText}>React News</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 5,
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
