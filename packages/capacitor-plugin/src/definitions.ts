export interface FileViewerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
