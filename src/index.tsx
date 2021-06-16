import { NativeModules } from 'react-native';
import RNFS from 'react-native-fs';
import DeviceInfo from 'react-native-device-info';

interface IApkUpdate {
  installApk(filePath: string): Promise<string>;
  installApkLegacy(filePath: string): Promise<string>;
}

const { ApkUpdate } = NativeModules;

const installRemoteApk = async (
  remoteUrl: string,
  fileName: string,
  progressFunction?: (res: RNFS.DownloadProgressCallbackResult) => void
) => {
  const filePath = RNFS.DocumentDirectoryPath + '/' + fileName;
  let download = await RNFS.downloadFile({
    fromUrl: remoteUrl,
    toFile: filePath,

    //Progress Bar animation
    progress:
      progressFunction ||
      ((res) => {
        res;
      }),
    progressDivider: 1,
  });

  //when download succed, install apk;
  download.promise.then((result) => {
    if (result.statusCode == 200) {
      installApp(filePath);
    }
  });
};

const installApp = async (filePath: string) => {
  // Método legado para android 6 ou menor NÃO é incluido na dependência ApkUpdate
  // Esta função foi extraída de outra dependência chamada AppUpdate, utilizada no Biju
  // Para mais informações, verifique o arquivo Notas sobre o App.txt na raíz do projeto

  let systemVersion = Number.parseInt(DeviceInfo.getSystemVersion());
  if (systemVersion >= 7) {
    return (ApkUpdate as IApkUpdate).installApk(filePath);
  } else {
    return (ApkUpdate as IApkUpdate).installApkLegacy(filePath);
  }
};

export { installRemoteApk };
