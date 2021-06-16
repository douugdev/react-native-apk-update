import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { installRemoteApk } from 'react-native-apk-update';

export default function App() {
  const [result, setResult] = React.useState<number>(0);

  React.useEffect(() => {
    installRemoteApk(
      'http://main.barroscasa.me:3434/jbkhlsfgzlkhjbvfbjhklgfdzhjklzgfsdhjkzfsrgdhkjfzgrsdjhkzgrfdjkdfzghjlkgfzdhjlkzfdsgjhulokpzfgdszhjfslkgd',
      'blabla.apk',
      (progress) => {
        setResult(progress.bytesWritten / progress.contentLength);
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
