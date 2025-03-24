import Capacitor
import UIKit


@objc(FileViewerPlugin)
public class FileViewerPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "FileViewerPlugin"
    public let jsName = "FileViewer"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]

    override public func load() {
        self.plugin = .init()
    }

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
