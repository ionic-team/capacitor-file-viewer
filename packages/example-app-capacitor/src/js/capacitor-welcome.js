import { SplashScreen } from '@capacitor/splash-screen';
import { Camera } from '@capacitor/camera';
import { FileViewer } from '@capacitor/file-viewer';

const SAMPLE_PDF_URL = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf';
const SAMPLE_VIDEO_URL = 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4';

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `
    <style>
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: block;
        width: 100%;
        height: 100%;
      }
      h1, h2, h3, h4, h5 {
        text-transform: uppercase;
      }
      .button {
        display: inline-block;
        padding: 10px;
        background-color: #73B5F6;
        color: #fff;
        font-size: 0.9em;
        border: 0;
        border-radius: 3px;
        margin: 0 4px 8px 0;
        text-decoration: none;
        cursor: pointer;
      }
      main {
        padding: 15px;
      }
      main hr { height: 1px; background-color: #eee; border: 0; }
      main h1 {
        font-size: 1.4em;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      main h2 {
        font-size: 1.1em;
      }
      main h3 {
        font-size: 0.9em;
      }
      main p {
        color: #333;
      }
      main pre {
        white-space: pre-line;
      }
    </style>
    <div>
      <capacitor-welcome-titlebar>
        <h1>File Viewer</h1>
      </capacitor-welcome-titlebar>
      <main>
        <h2>Documents</h2>
        <p>
          <button class="button" data-method="openDocumentFromUrl">Open PDF from URL</button>
          <button class="button" data-method="openDocumentFromResources">Open PDF from resources</button>
          <button class="button" data-method="openDocumentFromLocalPath">Take a photo and open it</button>
        </p>
        <h2>Media</h2>
        <p>
          <button class="button" data-method="previewMediaContentFromUrl">Preview video from URL</button>
          <button class="button" data-method="previewMediaContentFromResources">Preview video from resources</button>
          <button class="button" data-method="previewMediaContentFromLocalPath">Record a video and preview it</button>
        </p>
        <h2>Errors</h2>
        <p>
          <button class="button" data-method="missingResource">Open a missing resource</button>
        </p>
        <pre id="result"></pre>
      </main>
    </div>
    `;
    }

    connectedCallback() {
      const result = this.shadowRoot.querySelector('#result');
      const calls = {
        openDocumentFromUrl: () => FileViewer.openDocumentFromUrl({ url: SAMPLE_PDF_URL }),
        openDocumentFromResources: () => FileViewer.openDocumentFromResources({ path: 'public/files/sample.pdf' }),
        openDocumentFromLocalPath: async () =>
          FileViewer.openDocumentFromLocalPath({ path: (await Camera.getPhoto({ resultType: 'uri' })).path }),
        previewMediaContentFromUrl: () => FileViewer.previewMediaContentFromUrl({ url: SAMPLE_VIDEO_URL }),
        previewMediaContentFromResources: () =>
          FileViewer.previewMediaContentFromResources({ path: 'public/files/sample.mp4' }),
        previewMediaContentFromLocalPath: async () =>
          FileViewer.previewMediaContentFromLocalPath({ path: (await Camera.recordVideo({})).uri }),
        missingResource: () => FileViewer.openDocumentFromResources({ path: 'public/files/missing.pdf' }),
      };

      this.shadowRoot.querySelectorAll('[data-method]').forEach((button) =>
        button.addEventListener('click', async () => {
          const method = button.dataset.method;
          try {
            await calls[method]();
            result.textContent = `${method}: success`;
          } catch (e) {
            result.textContent = `${method}: ${e.code ?? 'error'} ${e.message}`;
          }
        }),
      );
    }
  },
);

window.customElements.define(
  'capacitor-welcome-titlebar',
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: calc(15px + env(safe-area-inset-top)) 15px 15px 15px;
        text-align: center;
        background-color: #73B5F6;
      }
      ::slotted(h1) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.9em;
        font-weight: 600;
        color: #fff;
      }
    </style>
    <slot></slot>
    `;
    }
  },
);
