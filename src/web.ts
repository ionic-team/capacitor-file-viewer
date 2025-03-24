/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { WebPlugin } from '@capacitor/core';

import type { FileViewerPlugin } from './definitions';

export class FileViewerWeb extends WebPlugin implements FileViewerPlugin {
  //@ts-ignore
  echo(value: string): Promise<{ value: string }> {
    return Promise.resolve({ value });
  }
}
