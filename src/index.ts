import { registerPlugin } from '@capacitor/core';

import type { FileViewerPlugin } from './definitions';

const FileViewer = registerPlugin<FileViewerPlugin>('FileViewer', {
  web: () => import('./web').then((m) => new m.FileViewerWeb()),
});

export * from './definitions';
export { FileViewer };
