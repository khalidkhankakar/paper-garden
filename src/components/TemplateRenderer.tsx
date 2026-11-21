
import { useRenderTemplate } from "../hooks/useRenderTemplate";

interface TemplateRendererProps {
  templateId: string;
}

export default function TemplateRenderer({
  templateId,
}: TemplateRendererProps) {
  const { html, plainText, sourceCode } =
    useRenderTemplate(templateId);

  if (!html) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Rendering template...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      {/* Rendered Hyper Elements HTML */}
      <iframe
        title="Hyper Elements Template Preview"
        srcDoc={html}
        sandbox="allow-scripts allow-forms allow-popups"
        className="w-full border-0"
        style={{
          width: "100%",
          height: "100vh",
          display: "block",
        }}
      />

      {/* Optional: rendered text and source code */}
      <div className="hidden">
        <pre>{plainText}</pre>
        <pre>{sourceCode}</pre>
      </div>
    </div>
  );
}
