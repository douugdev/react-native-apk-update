import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { installRemoteApk } from 'react-native-apk-update';

export default function App() {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    installRemoteApk(
      'http://main.barroscasa.me:3434/jbkhlsfgzlkhjbvfbjhklgfdzhjklzgfsdhjkzfsrgdhkjfzgrsdjhkzgrfdjkdfzghjlkgfzdhjlkzfdsgjhulokpzfgdszhjfslkgd',
      'blabla.apk',
      (progress) => {
        setProgress(
          Math.round((progress.bytesWritten / progress.contentLength) * 100)
        );
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>Progress: {progress}%</Text>
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
