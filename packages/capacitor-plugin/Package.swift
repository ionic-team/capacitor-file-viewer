// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorFileViewer",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorFileViewer",
            targets: ["FileViewerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "7.0.0")
    ],
    targets: [
        .target(
            name: "FileViewerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/FileViewerPlugin"),
        .testTarget(
            name: "FileViewerPluginTests",
            dependencies: ["FileViewerPlugin"],
            path: "ios/Tests/FileViewerPluginTests")
    ]
)
