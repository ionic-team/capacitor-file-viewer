package com.capacitorjs.plugins.fileviewer

import android.app.Activity
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import io.ionic.libs.ionfileviewerlib.IONFLVWController
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch

@CapacitorPlugin(name = "FileViewer")
class FileViewerPlugin : Plugin() {

    private val ioScope: CoroutineScope by lazy { CoroutineScope(Dispatchers.IO) }
    private val controller: IONFLVWController by lazy { IONFLVWController() }

    override fun handleOnDestroy() {
        super.handleOnDestroy()
        ioScope.cancel()
    }

    @PluginMethod
    fun openDocumentFromLocalPath(call: PluginCall) {
        val filePath: String? = call.getString("path")
        checkPreconditionsAndRun(call) { activity ->
            controller.openDocumentFromLocalPath(activity, filePath ?: "")
                .handleResult(call)
        }
    }

    @PluginMethod
    fun openDocumentFromResources(call: PluginCall) {
        val resourcePath: String? = call.getString("path")
        checkPreconditionsAndRun(call) { activity ->
            // this method needs to be called from a non-UI thread, because it can involve I/O operations.
            ioScope.launch {
                controller.openDocumentFromResources(activity, assetPath = resourcePath ?: "")
                    .handleResult(call)
            }
        }
    }

    @PluginMethod
    fun openDocumentFromUrl(call: PluginCall) {
        val url: String? = call.getString("url")
        checkPreconditionsAndRun(call) { activity ->
            controller.openDocumentFromUrl(activity, url ?: "")
                .handleResult(call)
        }
    }

    @PluginMethod
    fun previewMediaContentFromLocalPath(call: PluginCall) = openDocumentFromLocalPath(call)

    @PluginMethod
    fun previewMediaContentFromResources(call: PluginCall) = openDocumentFromResources(call)

    @PluginMethod
    fun previewMediaContentFromUrl(call: PluginCall) = openDocumentFromUrl(call)

    /**
     * Handle a result from the native library
     *
     * @param call the capacitor plugin call - to notify of success or error
     */
    private fun Result<Unit>.handleResult(call: PluginCall) = onSuccess {
        call.resolve()
    }.onFailure {
        call.sendError(it.toFileViewerError())
    }


    /**
     * check if preconditions match before running the capacitor plugin method
     *
     * @param call the capacitor plugin call to notify of errors in case preconditions are not met
     * @param runner callback that is run in case preconditions are met
     */
    private fun checkPreconditionsAndRun(call: PluginCall, runner: (Activity) -> Unit) {
        activity?.also {
            runner(it)
        } ?: run {
            call.sendError(FileViewerErrors.genericError)
        }
    }

    /**
     * Extension function to return a unsuccessful plugin result
     * @param error error class representing the error to return, containing a code and message
     */
    private fun PluginCall.sendError(error: FileViewerErrors.ErrorInfo) =
        this.reject(error.message, error.code)
}