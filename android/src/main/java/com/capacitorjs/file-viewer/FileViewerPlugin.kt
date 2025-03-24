package com.capacitorjs.osinappbrowser
import androidx.lifecycle.lifecycleScope
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "FileViewer")
class FileViewerPlugin : Plugin() {

    override fun load() {
        super.load()
    }

    @PluginMethod
    fun echo(call: PluginCall) {
        val message = call.getString("message") ?: "No message provided"
        call.resolve(message)
    }
}