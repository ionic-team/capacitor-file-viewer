export interface OpenFromLocalPathOptions {
  /**
   * The full absolute path to the file to open
   * @since 1.0.0
   */
  path: string;
}

export interface OpenFromResourcesOptions {
  /**
   * The relative path to the resource file to open
   * @since 1.0.0
   */
  path: string;
}

export interface OpenFromUrlOptions {
  /**
   * The remote url pointing to the file to open
   * @since 1.0.0
   */
  url: string;
}

export type PreviewMediaFromLocalPathOptions = OpenFromLocalPathOptions;

export type PreviewMediaFromResourcesOptions = OpenFromResourcesOptions;

export type PreviewMediaFromUrlOptions = OpenFromUrlOptions;

/**
 * File Viewer API
 *
 * Only available in Native Android and iOS; not available for Web / PWAs.
 */
export interface FileViewerPlugin {
  /**
   * Open a file stored in the local file system
   *
   * @since 1.0.0
   */
  openDocumentFromLocalPath(options: OpenFromLocalPathOptions): Promise<void>;

  /**
   * Open an app resource file
   *
   * @since 1.0.0
   */
  openDocumentFromResources(options: OpenFromResourcesOptions): Promise<void>;

  /**
   * Open a file from a remote url
   *
   * @since 1.0.0
   */
  openDocumentFromUrl(options: OpenFromUrlOptions): Promise<void>;

  /**
   * Preview a media file (namely, video) stored in the local file system.
   * Only implemented in iOS. Android defaults to `openDocumentFromLocalPath`.
   *
   * @since 1.0.0
   */
  previewMediaContentFromLocalPath(
    options: PreviewMediaFromLocalPathOptions,
  ): Promise<void>;

  /**
   * Preview a media file (namely, video) from the app's resources.
   * Only implemented in iOS. Android defaults to `openDocumentFromResources`.
   *
   * @since 1.0.0
   */
  previewMediaContentFromResources(
    options: PreviewMediaFromResourcesOptions,
  ): Promise<void>;

  /**
   * Preview a media file (namely, video) from a remote url.
   * Only implemented in iOS. Android defaults to `openDocumentFromUrl`.
   *
   * @since 1.0.0
   */
  previewMediaContentFromUrl(
    options: PreviewMediaFromUrlOptions,
  ): Promise<void>;
}

export type PluginError = {
  code: string;
  message: string;
};
