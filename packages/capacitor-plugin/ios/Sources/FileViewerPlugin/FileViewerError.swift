enum FileViewerError: Error {
    case fileDoesNotExist
    case urlMalformed(url: String)
    case pathEmpty
    case urlEmpty
    case couldNotOpenDocument
    case bridgeNotInitialised
    case downloadFailed
    case missingFileExtension

    func toCodeMessagePair() -> (code: String, message: String) {
        ("OS-PLUG-FLVW-\(String(format: "%04d", code))", description)
    }
}

private extension FileViewerError {
    var code: Int {
        switch self {
        case .fileDoesNotExist: 4
        case .urlMalformed: 5
        case .pathEmpty: 6
        case .urlEmpty: 7
        case .couldNotOpenDocument: 8
        case .bridgeNotInitialised: 11
        case .downloadFailed: 12
        case .missingFileExtension: 13
        }
    }

    var description: String {
        switch self {
        case .fileDoesNotExist: "The file you are trying to open does not exist."
        case .urlMalformed(let url): "The URL you are trying to open is malformed - \(url)"
        case .pathEmpty: "Path of the file to open is either null or empty."
        case .urlEmpty: "URL to open is either null or empty."
        case .couldNotOpenDocument: "Could not open the document."
        case .downloadFailed: "The download failed."
        case .missingFileExtension: "The file has no extension."
        case .bridgeNotInitialised: "Cordova bridge isn't initialized."
        }
    }
}
