"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    GGBApplet: new (
      params: Record<string, unknown>,
      html5: boolean
    ) => {
      inject: (id: string) => void;
    };
  }
}

export interface GeoGebraEmbedProps {
  /** GeoGebra app type */
  appName?: "geometry" | "graphing" | "classic" | "3d";
  /** Load a pre-built material by ID (from geogebra.org/m/[ID]) */
  materialId?: string;
  /** GeoGebra commands to run after initialization */
  commands?: string[];
  /** Width in pixels (responsive via container) */
  width?: number;
  /** Height in pixels */
  height?: number;
  /** Show toolbar */
  showToolBar?: boolean;
  /** Show menu bar */
  showMenuBar?: boolean;
  /** Show algebra input */
  showAlgebraInput?: boolean;
  /** Show reset icon */
  showResetIcon?: boolean;
  /** Label for accessibility */
  label?: string;
}

let scriptLoaded = false;
let scriptLoading = false;
const loadCallbacks: (() => void)[] = [];

function loadGeoGebraScript(): Promise<void> {
  return new Promise((resolve) => {
    if (scriptLoaded) {
      resolve();
      return;
    }

    loadCallbacks.push(resolve);

    if (scriptLoading) return;
    scriptLoading = true;

    const script = document.createElement("script");
    script.src = "https://www.geogebra.org/apps/deployggb.js";
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      loadCallbacks.forEach((cb) => cb());
      loadCallbacks.length = 0;
    };
    document.head.appendChild(script);
  });
}

let instanceCounter = 0;

export function GeoGebraEmbed({
  appName = "geometry",
  materialId,
  commands,
  width = 800,
  height = 500,
  showToolBar = true,
  showMenuBar = false,
  showAlgebraInput = false,
  showResetIcon = true,
  label,
}: GeoGebraEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(`ggb-${++instanceCounter}`);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) return;

    let cancelled = false;

    async function init() {
      try {
        await loadGeoGebraScript();
        if (cancelled || !containerRef.current) return;

        const params: Record<string, unknown> = {
          appName,
          width,
          height,
          showToolBar,
          showMenuBar,
          showAlgebraInput,
          showResetIcon,
          showFullscreenButton: true,
          enableShiftDragZoom: true,
          enableRightClick: false,
          capturingThreshold: 8,
          enableLabelDrags: false,
          borderColor: "#e2e8f0",
          language: "da",
          country: "DK",
          scaleContainerClass: "ggb-responsive",
          autoHeight: true,
        };

        if (materialId) {
          params.material_id = materialId;
        }

        if (commands && commands.length > 0) {
          params.appletOnLoad = (api: {
            evalCommand: (cmd: string) => void;
          }) => {
            for (const cmd of commands) {
              api.evalCommand(cmd);
            }
          };
        }

        const applet = new window.GGBApplet(params, true);
        applet.inject(idRef.current);
        injectedRef.current = true;
        setLoading(false);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    init();

    return () => {
      cancelled = true;
    };
  }, [
    appName,
    materialId,
    commands,
    width,
    height,
    showToolBar,
    showMenuBar,
    showAlgebraInput,
    showResetIcon,
  ]);

  if (error) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 text-center">
        <p className="text-muted text-sm">
          GeoGebra kunne ikke indlæses. Prøv at{" "}
          <a
            href={
              materialId
                ? `https://www.geogebra.org/m/${materialId}`
                : `https://www.geogebra.org/${appName}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium"
          >
            åbne GeoGebra direkte
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {label && (
        <p className="text-sm font-medium text-muted">{label}</p>
      )}
      <div className="ggb-responsive rounded-xl border-2 border-border overflow-hidden bg-white">
        {loading && (
          <div
            className="flex items-center justify-center bg-surface"
            style={{ height: Math.min(height, 400) }}
          >
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              <p className="mt-2 text-sm text-muted">
                Indlæser GeoGebra...
              </p>
            </div>
          </div>
        )}
        <div
          ref={containerRef}
          id={idRef.current}
          className="w-full"
        />
      </div>
      <p className="text-xs text-muted text-right">
        Drevet af{" "}
        <a
          href="https://www.geogebra.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          GeoGebra
        </a>
      </p>
    </div>
  );
}
