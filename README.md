# capacitor-file-viewer

<div align="center">
  <a href="https://github.com/ionic-team/capacitor-file-viewer">
    <img src=".github/assets/logo.png" alt="Logo" width="auto" height="100">
  </a>

<h3 align="center">@capacitor/file-viewer</h3>

  <p align="center">
    The FileViewer API provides mechanisms for opening files and previewing media. Not available on web.
    <br />
    <a href="https://github.com/ionic-team/cordova-outsystems-file-viewer">🔌 Cordova Plugin</a>
    ·
    <a href="https://github.com/ionic-team/ion-android-fileviewer">🤖 Android Library</a>
    ·
    <a href="https://github.com/ionic-team/ion-ios-fileviewer">🍏 iOS Library</a>
  </p>
  <p align="center">
    <a href="https://github.com/ionic-team/capacitor-file-viewer/issues/new?labels=bug&template=bug-report.md">🐛 Report Bug</a>
    ·
    <a href="https://github.com/ionic-team/capacitor-file-viewer/issues/new?labels=enhancement&template=feature-request.md">   💡 Request Feature</a>
  </p>
</div>

## Install

```bash
npm install @capacitor/file-viewer
npx cap sync
```

## Example

```typescript
import { FileViewer } from "@capacitor/file-viewer";

// can use a plugin like @capacitor/filesystem to get the full path to the file
const openDocument = async () => {
  await FileViewer.openDocumentFromLocalPath({
    path: "path/to/file.pdf"
  });
};

// ios-specific
const previewMedia = async () => {
  await FileViewer.previewMediaContentFromUrl({
    path: "https://url_hosting_media/file.mp4"
  });
}
```

## API

Check the plugin's api [here](packages/capacitor-plugin/README.md).

