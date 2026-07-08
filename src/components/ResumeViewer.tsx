import { Download, ExternalLink, X } from "lucide-react";

interface ResumeViewerProps {
  onClose: () => void;
}

const resumePdfUrl = "/Riddhi_jain_fullstack_developer.pdf";

export default function ResumeViewer({ onClose }: ResumeViewerProps) {
  return (
    <div
      id="resume-viewer-overlay"
      className="fixed inset-0 z-50 flex flex-col items-center bg-slate-950/95 p-4 text-white backdrop-blur-md sm:p-6 lg:p-8"
    >
      <div
        id="resume-controls"
        className="mb-4 flex w-full max-w-6xl flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <div>
            <span className="block font-mono text-xs font-medium text-slate-200">Uploaded Resume Preview</span>
            <span className="block text-[11px] text-slate-500">Riddhi_jain_fullstack_developer.pdf</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            id="open-uploaded-resume-btn"
            href={resumePdfUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-colors hover:border-cyan-300/30 hover:bg-white/[0.1]"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Open PDF</span>
          </a>
          <a
            id="download-resume-btn"
            href={resumePdfUrl}
            download="Riddhi_jain_fullstack_developer.pdf"
            className="flex items-center gap-2 rounded-xl bg-cyan-300 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download PDF</span>
          </a>
          <button
            id="close-viewer-btn"
            onClick={onClose}
            className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] p-2.5 text-slate-300 transition-colors hover:bg-white/[0.1] hover:text-white"
            title="Close viewer"
            aria-label="Close viewer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="min-h-0 w-full max-w-6xl flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
        <object
          data={resumePdfUrl}
          type="application/pdf"
          className="h-full min-h-[70vh] w-full"
          aria-label="Uploaded resume PDF preview"
        >
          <div className="flex h-full min-h-[70vh] flex-col items-center justify-center gap-4 bg-white p-8 text-center text-slate-800">
            <p className="max-w-md text-sm leading-6">
              Your browser could not display the PDF inline. Open or download the uploaded resume using the buttons above.
            </p>
          </div>
        </object>
      </div>
    </div>
  );
}
