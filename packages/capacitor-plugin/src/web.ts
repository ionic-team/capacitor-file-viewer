import { WebPlugin } from "@capacitor/core";

import type {
  FileViewerPlugin,
  OpenFromLocalPathOptions,
  OpenFromResourcesOptions,
  OpenFromUrlOptions,
  PreviewMediaFromLocalPathOptions,
  PreviewMediaFromResourcesOptions,
  PreviewMediaFromUrlOptions,
} from "./definitions";

export class FileViewerWeb extends WebPlugin implements FileViewerPlugin {
  openDocumentFromLocalPath(_options: OpenFromLocalPathOptions): Promise<void> {
    return Promise.reject("Not implemented in web");
  }

  openDocumentFromResources(_options: OpenFromResourcesOptions): Promise<void> {
    return Promise.reject("Not implemented in web");
  }

  openDocumentFromUrl(_options: OpenFromUrlOptions): Promise<void> {
    return Promise.reject("Not implemented in web");
  }

  previewMediaContentFromLocalPath(
    _options: PreviewMediaFromLocalPathOptions,
  ): Promise<void> {
    return Promise.reject("Not implemented in web");
  }

  previewMediaContentFromResources(
    _options: PreviewMediaFromResourcesOptions,
  ): Promise<void> {
    return Promise.reject("Not implemented in web");
  }

  previewMediaContentFromUrl(
    _options: PreviewMediaFromUrlOptions,
  ): Promise<void> {
    return Promise.reject("Not implemented in web");
  }
}
