import { useState } from "react";
import { FiCheck, FiCode, FiCopy, FiEye, FiMonitor, FiSmartphone } from "react-icons/fi";
import { templateMap } from "../template";
import { useRenderTemplate } from "../hooks/useRenderTemplate";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import "./TemplateStudio.css";

type ViewMode = "preview" | "code";
type DeviceMode = "desktop" | "phone";

interface TemplateStudioProps {
  initialTemplate?: string;
}

export default function TemplateStudio({
  initialTemplate = "reading-garden",
}: TemplateStudioProps) {
  const [templateId, setTemplateId] = useState(initialTemplate);
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("desktop");

  const { html, sourceCode } =
    useRenderTemplate(templateId);

  const { copied, copy } = useCopyToClipboard();

  const templates = Object.keys(templateMap);

  return (
    <main className="studio">
      {/* Top toolbar */}
      <header className="studio-toolbar">
        <div className="studio-brand">
          <div className="studio-logo">H</div>
          <div>
            <h1>Template Studio</h1>
            <span>Hyper Elements</span>
          </div>
        </div>

        <div className="studio-controls">
          {/* Template switcher */}
          <select
            className="template-select"
            value={templateId}
            onChange={(e) => setTemplateId(e.target.value)}
            aria-label="Select template"
          >
            {templates.map((id) => (
              <option key={id} value={id}>
                {id.replaceAll("-", " ")}
              </option>
            ))}
          </select>

          {/* Preview / Code switcher */}
          <div className="mode-switcher">
            <button
              className={viewMode === "preview" ? "active" : ""}
              onClick={() => setViewMode("preview")}
            >
              <FiEye /> Preview
            </button>

            <button
              className={viewMode === "code" ? "active" : ""}
              onClick={() => setViewMode("code")}
            >
              <FiCode /> Code
            </button>
          </div>
        </div>
      </header>

      {/* Preview toolbar */}
      <div className="preview-toolbar">
        <div className="preview-label">
          <span className="status-dot" />
          {viewMode === "preview" ? "Live Preview" : "Source Code"}
        </div>

        {viewMode === "preview" && (
          <div className="device-switcher">
            <button
              className={deviceMode === "desktop" ? "active" : ""}
              onClick={() => setDeviceMode("desktop")}
              title="Desktop preview"
              aria-label="Desktop preview"
            >
              <FiMonitor /> Desktop
            </button>

            <button
              className={deviceMode === "phone" ? "active" : ""}
              onClick={() => setDeviceMode("phone")}
              title="Phone preview"
              aria-label="Phone preview"
            >
              <FiSmartphone /> Phone
            </button>
          </div>
        )}

        {viewMode === "code" && (
          <button
            className="copy-button"
            onClick={() => copy(sourceCode)}
            disabled={!sourceCode}
          >
            {copied ? <FiCheck /> : <FiCopy />}{" "}
            {copied ? "Copied" : "Copy code"}
          </button>
        )}
      </div>

      {/* Main workspace */}
      <section className="studio-workspace">
        {viewMode === "preview" ? (
          <div className="preview-canvas">
            {!html ? (
              <div className="loading-state">
                Rendering template...
              </div>
            ) : (
              <div
                className={`device-frame ${
                  deviceMode === "phone" ? "phone-frame" : "desktop-frame"
                }`}
              >
                {deviceMode === "phone" && (
                  <div className="phone-top">
                    <span />
                  </div>
                )}

                <iframe
                  key={`${templateId}-${deviceMode}`}
                  title={`${templateId} preview`}
                  srcDoc={html}
                  sandbox="allow-scripts allow-forms allow-popups"
                  className="preview-iframe"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="code-workspace">
            <div className="code-header">
              <span className="file-icon">TSX</span>
              <span>{templateId}.tsx</span>
              <span className="code-language">TypeScript React</span>
            </div>

            <pre className="code-content">
              <code>{sourceCode || "No source code available."}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Bottom status bar */}
      <footer className="studio-footer">
        <span>
          {templateId.replaceAll("-", " ")}
        </span>

        <span>
          {viewMode === "preview"
            ? deviceMode === "phone"
              ? "Mobile · 390px"
              : "Desktop · Full width"
            : "Source code"}
        </span>
      </footer>
    </main>
  );
}
