# [2.0.0-development.4](https://github.com/ionic-team/capacitor-file-viewer/compare/v2.0.0-development.3...v2.0.0-development.4) (2025-10-22)


### Bug Fixes

* Use node 24 for CI ([4544e7a](https://github.com/ionic-team/capacitor-file-viewer/commit/4544e7afd72b727546a9c7a49ec186d5c8d6c615))

# [2.0.0-development.3](https://github.com/ionic-team/capacitor-file-viewer/compare/v2.0.0-development.2...v2.0.0-development.3) (2025-10-22)


### Bug Fixes

* Use node 22 in CI ([92d3864](https://github.com/ionic-team/capacitor-file-viewer/commit/92d38645172c54dd384fbec25b92a527111b9d1c))

# [2.0.0-development.2](https://github.com/ionic-team/capacitor-file-viewer/compare/v2.0.0-development.1...v2.0.0-development.2) (2025-10-22)


### Bug Fixes

* minor README change ([a99a82e](https://github.com/ionic-team/capacitor-file-viewer/commit/a99a82efbc3b50dd2c6deffa66ec2fca7b911a0e))

# [2.0.0-development.1](https://github.com/ionic-team/capacitor-file-viewer/compare/v1.0.5...v2.0.0-development.1) (2025-10-22)


### Features

* Capacitor 8 support ([47720e8](https://github.com/ionic-team/capacitor-file-viewer/commit/47720e873525a1a12e10c743ac378ccd3f852d4d))
* Support trusted publishing ([4b40f75](https://github.com/ionic-team/capacitor-file-viewer/commit/4b40f758a789b2ef2a6a615192a7ecbe19547f3e))


### BREAKING CHANGES

* Capacitor major version update requires major version update on the plugin.

# [2.0.0-next.2](https://github.com/ionic-team/capacitor-file-viewer/compare/v2.0.0-next.1...v2.0.0-next.2) (2025-10-08)


### Bug Fixes

* **ios:** Opening local files without file:// ([#14](https://github.com/ionic-team/capacitor-file-viewer/issues/14)) ([ea3cab2](https://github.com/ionic-team/capacitor-file-viewer/commit/ea3cab2a3f92fe739d3009bbcaa27cb41209f759))
* **ios:** Simplify SPM usage for native library ([#13](https://github.com/ionic-team/capacitor-file-viewer/issues/13)) ([d4f3d78](https://github.com/ionic-team/capacitor-file-viewer/commit/d4f3d7860ee4ecedaf23bd702426ba543f2407af))

## [1.0.5](https://github.com/ionic-team/capacitor-file-viewer/compare/v1.0.4...v1.0.5) (2025-10-08)


### Bug Fixes

* **ios:** Opening local files without file:// ([#14](https://github.com/ionic-team/capacitor-file-viewer/issues/14)) ([ea3cab2](https://github.com/ionic-team/capacitor-file-viewer/commit/ea3cab2a3f92fe739d3009bbcaa27cb41209f759))
* **ios:** Simplify SPM usage for native library ([#13](https://github.com/ionic-team/capacitor-file-viewer/issues/13)) ([d4f3d78](https://github.com/ionic-team/capacitor-file-viewer/commit/d4f3d7860ee4ecedaf23bd702426ba543f2407af))

# [2.0.0-next.1](https://github.com/ionic-team/capacitor-file-viewer/compare/v1.0.4...v2.0.0-next.1) (2025-09-09)


### Features

* Capacitor 8 support ([47720e8](https://github.com/ionic-team/capacitor-file-viewer/commit/47720e873525a1a12e10c743ac378ccd3f852d4d))


### BREAKING CHANGES

* Capacitor major version update requires major version update on the plugin.

## [1.0.4](https://github.com/ionic-team/capacitor-file-viewer/compare/v1.0.3...v1.0.4) (2025-08-22)


### Bug Fixes

* export package.json to fix cap sync issues ([#11](https://github.com/ionic-team/capacitor-file-viewer/issues/11)) ([bb9b222](https://github.com/ionic-team/capacitor-file-viewer/commit/bb9b2221abaaa3ea9aee8e81ce913df45146967b))

## [1.0.3](https://github.com/ionic-team/capacitor-file-viewer/compare/v1.0.2...v1.0.3) (2025-08-20)


### Bug Fixes

* **ios:** Use capacitor-swift-pm from 7.0.0 instead of specific version ([#8](https://github.com/ionic-team/capacitor-file-viewer/issues/8)) ([4d6e8e4](https://github.com/ionic-team/capacitor-file-viewer/commit/4d6e8e4cd678a9d8a556ed3e05031182a368ecb7))
* set capacitor peerDependency to >= 7.0.0 ([#10](https://github.com/ionic-team/capacitor-file-viewer/issues/10)) ([64ac69d](https://github.com/ionic-team/capacitor-file-viewer/commit/64ac69ddea1af3d96b7ded4efed4d436200896a7))

## [1.0.2](https://github.com/ionic-team/capacitor-file-viewer/compare/v1.0.1...v1.0.2) (2025-07-02)


### Bug Fixes

* Set dependency on @capacitor/synapse to 1.0.3 to fix ssr environments

## [1.0.1](https://github.com/ionic-team/capacitor-file-viewer/compare/v1.0.0...v1.0.1) (2025-05-30)


### Bug Fixes

- **ios** Remove duplicate path separators that could cause files to not be found.
- **android** Opening local files with special characters.

## [1.0.0](https://github.com/ionic-team/capacitor-file-viewer/tree/v1.0.0) (2025-04-10)


### Features

- Implement plugin methods: `openDocumentFromLocalPath`, `openDocumentFromResources`, `openDocumentFromUrl`, `previewMediaContentFromLocalPath`, `previewMediaContentFromResources`, `previewMediaContentFromUrl`.
