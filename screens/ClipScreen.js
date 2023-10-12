import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export const ClipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is clip screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
