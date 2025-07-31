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
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .binaryTarget(
            name: "IONFileViewerLib",
            url: "https://github.com/ionic-team/ion-ios-fileviewer/releases/download/1.0.1/IONFileViewerLib.zip",
            checksum: "2dcd0291e664ffbb5636119f147eda266e0d2284aa53a9c99925d0e442a0e92d" // sha-256
        ),
        .target(
            name: "FileViewerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                "IONFileViewerLib"
            ],
            path: "ios/Sources/FileViewerPlugin"),
        .testTarget(
            name: "FileViewerPluginTests",
            dependencies: ["FileViewerPlugin"],
            path: "ios/Tests/FileViewerPluginTests")
    ]
)
