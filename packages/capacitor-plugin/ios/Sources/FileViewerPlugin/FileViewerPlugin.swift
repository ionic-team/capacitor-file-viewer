import Capacitor
import IONFileViewerLib
import UIKit

typealias FileViewerService = any IONFLVWOpenDocumentManager & IONFLVWPreviewMediaManager

@objc(FileViewerPlugin)
public class FileViewerPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "FileViewerPlugin"
    public let jsName = "FileViewer"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "openDocumentFromLocalPath", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openDocumentFromResources", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openDocumentFromUrl", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "previewMediaContentFromLocalPath", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "previewMediaContentFromResources", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "previewMediaContentFromUrl", returnType: CAPPluginReturnPromise)
    ]

    private var fileViewer: FileViewerService?

    override public func load() {
        if let viewController = self.bridge?.viewController as? UIViewController {
            fileViewer = IONFLVWManager(viewController: viewController)
        }
    }

    func getService() -> Result<FileViewerService, FileViewerError> {
        if fileViewer == nil { load() }
        return fileViewer.map(Result.success) ?? .failure(.bridgeNotInitialised)
    }
}

// MARK: - Public API Methods
private extension FileViewerPlugin {
    @objc func openDocumentFromLocalPath(_ call: CAPPluginCall) {
        let filePath = call.getString("path")
        executeOperation(call, operationRunner: { service in
            do {
                try service.openDocumentFromLocalPath(filePath: filePath ?? "", completion: { call.resolve() })
            } catch {
                self.sendError(call, self.mapError(error))
            }
        })
    }

    @objc func openDocumentFromResources(_ call: CAPPluginCall) {
        let resourcePath = call.getString("path")
        executeOperation(call, operationRunner: { service in
            do {
                try service.openDocumentFromResources(assetPath: resourcePath ?? "", completion: { call.resolve() })
            } catch {
                self.sendError(call, self.mapError(error))
            }
        })
    }

    @objc func openDocumentFromUrl(_ call: CAPPluginCall) {
        let url = call.getString("url")
        executeOperation(call, operationRunner: { service in
            do {
                try service.openDocumentFromUrl(url: url ?? "", completion: { err in
                    if let error = err {
                        self.sendError(call, self.mapError(error))
                    } else {
                        call.resolve()
                    }
                })
            } catch {
                self.sendError(call, self.mapError(error))
            }
        })
    }

    @objc func previewMediaContentFromLocalPath(_ call: CAPPluginCall) {
        let filePath = call.getString("path")
        executeOperation(call, operationRunner: { service in
            do {
                try service.previewMediaContentFromLocalPath(filePath: filePath ?? "")
                call.resolve()
            } catch {
                self.sendError(call, self.mapError(error))
            }
        })
    }

    @objc func previewMediaContentFromResources(_ call: CAPPluginCall) {
        let resourcePath = call.getString("path")
        executeOperation(call, operationRunner: { service in
            do {
                try service.previewMediaContentFromResources(assetPath: resourcePath ?? "")
                call.resolve()
            } catch {
                self.sendError(call, self.mapError(error))
            }
        })
    }

    @objc func previewMediaContentFromUrl(_ call: CAPPluginCall) {
        let url = call.getString("url")
        executeOperation(call, operationRunner: { service in
            do {
                try service.previewMediaContentFromUrl(url: url ?? "")
                call.resolve()
            } catch {
                self.sendError(call, self.mapError(error))
            }
        })
    }

    func executeOperation(_ call: CAPPluginCall, operationRunner: @escaping (FileViewerService) -> Void) {
        switch getService() {
        case .success(let service): DispatchQueue.main.async {
            operationRunner(service)
        }
        case .failure(let error): sendError(call, error)
        }
    }

    func sendError(_ call: CAPPluginCall, _ error: FileViewerError) {
        let errorPair = error.toCodeMessagePair()
        call.reject(errorPair.message, errorPair.code)
    }

    func mapError(_ error: Error, url: String = "") -> FileViewerError {
        return switch error {
        case IONFLVWError.fileDoesNotExist: .fileDoesNotExist
        case IONFLVWError.invalidURL: .urlMalformed(url: url)
        case IONFLVWError.emptyFilePath: .pathEmpty
        case IONFLVWError.invalidEmptyURL: .urlEmpty
        case IONFLVWError.downloadFailed: .downloadFailed
        case IONFLVWError.missingFileExtension: .missingFileExtension
        default: .couldNotOpenDocument
        }
    }
}
