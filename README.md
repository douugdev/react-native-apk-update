# react-native-apk-update

A JS/TS Library to download and install a new apk version of mobile apps. Wrapper of [react-native-apk-installer-n](https://github.com/nodece/react-native-apk-installer-n) with support to legacy android versions. Design to update existing applications e.g.: if you have app A and needs to update it from inside itself, you should create a update Alert that will use this lib to download and install the respective apk from your http server/api.

## Installation

```sh
npm install react-native-apk-update
```

Dependencies (in case of errors):

```sh
npm install react-native-device-info
npm install react-native-fs
```

## Basic Usage

```js
import { installRemoteApk } from 'react-native-apk-update';
import { useState } from 'react';

// ...

const [downloadProgress, setDownloadProgress] = useState < number > 0;
installRemoteApk(
  'https://example.com/example.apk',
  'myapk.apk',
  (downloadInfo) => {
    setDownloadProgress(downloadInfo.bytesWritten / downloadInfo.contentLength);
  }
);
```

## Docs

#### _installRemoteApk(remoteUrl: string, filename: string, callback?: (downloadInfo: RNFS.DownloadProgressCallbackResult) => void)_

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Special Thanks

- [Zixuan Liu](https://github.com/nodece) and RNApkInstallerN contributors for the android base.
- [Guilherme Tramontano](https://github.com/TramontaG) for the legacy support code.

## License

MIT
