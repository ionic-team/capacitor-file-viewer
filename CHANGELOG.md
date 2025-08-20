## [1.0.3](https://github.com/ionic-team/capacitor-file-viewer/compare/v1.0.2...v1.0.3) (2025-08-20)


### Bug Fixes

* **ios:** Use capacitor-swift-pm from 7.0.0 instead of specific version ([#8](https://github.com/ionic-team/capacitor-file-viewer/issues/8)) ([4d6e8e4](https://github.com/ionic-team/capacitor-file-viewer/commit/4d6e8e4cd678a9d8a556ed3e05031182a368ecb7))
* set capacitor peerDependency to >= 7.0.0 ([#10](https://github.com/ionic-team/capacitor-file-viewer/issues/10)) ([64ac69d](https://github.com/ionic-team/capacitor-file-viewer/commit/64ac69ddea1af3d96b7ded4efed4d436200896a7))

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.2](https://github.com/ionic-team/capacitor-file-viewer/compare/v1.0.1...v1.0.2)

- Set dependency on @capacitor/synapse to 1.0.3 to fix ssr environments

# [1.0.1](https://github.com/ionic-team/capacitor-file-viewer/compare/v1.0.0...v1.0.1)

- Fix(ios): Remove duplicate path separators that could cause files to not be found.
- Fix(android): Opening local files with special characters.

# [1.0.0](https://github.com/ionic-team/capacitor-file-viewer/tree/v1.0.0)

- Feat: Implement plugin methods: `openDocumentFromLocalPath`, `openDocumentFromResources`, `openDocumentFromUrl`, `previewMediaContentFromLocalPath`, `previewMediaContentFromResources`, `previewMediaContentFromUrl`.
