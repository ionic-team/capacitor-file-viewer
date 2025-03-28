package com.capacitorjs.plugins.fileviewer

import io.ionic.libs.ionfileviewerlib.model.IONFLVWException

object FileViewerErrors {
    private fun formatErrorCode(number: Int): String {
        return "OS-PLUG-FLVW-" + number.toString().padStart(4, '0')
    }

    data class ErrorInfo(
        val code: String,
        val message: String
    )

    val fileDoesNotExist = ErrorInfo(
        code = formatErrorCode(4),
        message = "The file you are trying to open does not exist."
    )

    fun urlMalformed(url: String) = if (url.isBlank()) {
        urlEmpty
    } else {
        ErrorInfo(
            code = formatErrorCode(5),
            message = "The URL you are trying to open is malformed - $url"
        )
    }

    fun filePathInvalid(path: String?) = if (path.isNullOrBlank()) {
        filePathEmpty
    } else {
        invalidParameters
    }

    val filePathEmpty = ErrorInfo(
        code = formatErrorCode(6),
        message = "Path of the file to open is either null or empty."
    )

    val urlEmpty = ErrorInfo(
        code = formatErrorCode(7),
        message = "URL to open is either null or empty."
    )

    val genericError = ErrorInfo(
        code = formatErrorCode(8),
        message = "Could not open the document."
    )

    val invalidParameters: ErrorInfo = ErrorInfo(
        code = formatErrorCode(9),
        message = "Invalid parameters."
    )

    val noAppToOpen = ErrorInfo(
        code = formatErrorCode(10),
        message = "There is no app to open this document."
    )
}

fun Throwable.toFileViewerError(): FileViewerErrors.ErrorInfo = when (this) {
    is IONFLVWException.FileDoesNotExist -> FileViewerErrors.fileDoesNotExist
    is IONFLVWException.InvalidURL -> FileViewerErrors.urlMalformed(url)
    is IONFLVWException.InvalidPath -> FileViewerErrors.filePathInvalid(path)
    is IONFLVWException.EmptyURL -> FileViewerErrors.urlEmpty
    is IONFLVWException.NoApp -> FileViewerErrors.noAppToOpen
    else -> FileViewerErrors.genericError
}