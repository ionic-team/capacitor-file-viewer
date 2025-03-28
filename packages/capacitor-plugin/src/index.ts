import { registerPlugin } from "@capacitor/core";
import { exposeSynapse } from "@capacitor/synapse";

import type { FileViewerPlugin } from "./definitions";

const FileViewer = registerPlugin<FileViewerPlugin>("FileViewer", {
  web: () => import("./web").then((m) => new m.FileViewerWeb()),
});

exposeSynapse();

export * from "./definitions";
export { FileViewer };
