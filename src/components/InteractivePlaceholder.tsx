interface InteractivePlaceholderProps {
  /** Short title describing the planned feature */
  title: string;
  /** Description of what this interactive element will do */
  description: string;
  /** Icon or emoji */
  icon?: string;
  /** Type of element for styling */
  type?: "calculator" | "visualizer" | "simulator" | "converter" | "explorer";
}

const typeStyles: Record<string, { bg: string; border: string; iconBg: string }> = {
  calculator: { bg: "bg-blue-50", border: "border-blue-200", iconBg: "bg-blue-100" },
  visualizer: { bg: "bg-purple-50", border: "border-purple-200", iconBg: "bg-purple-100" },
  simulator: { bg: "bg-amber-50", border: "border-amber-200", iconBg: "bg-amber-100" },
  converter: { bg: "bg-green-50", border: "border-green-200", iconBg: "bg-green-100" },
  explorer: { bg: "bg-rose-50", border: "border-rose-200", iconBg: "bg-rose-100" },
};

export function InteractivePlaceholder({
  title,
  description,
  icon = "🔧",
  type = "visualizer",
}: InteractivePlaceholderProps) {
  const style = typeStyles[type] || typeStyles.visualizer;

  return (
    <div
      className={`rounded-xl border-2 border-dashed ${style.border} ${style.bg} p-5 sm:p-6`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-lg ${style.iconBg} flex items-center justify-center text-lg`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              {title}
            </h3>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted bg-white/80 px-2 py-0.5 rounded-full border border-border">
              Kommer snart
            </span>
          </div>
          <p className="text-sm text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}
