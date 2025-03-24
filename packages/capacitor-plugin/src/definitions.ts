import type { PluginListenerHandle } from '@capacitor/core';

export interface FileViewerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
