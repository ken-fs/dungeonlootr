"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

/**
 * Adsterra units - paste the script src from the dashboard here after
 * creating each unit (publishers.adsterra.com → Websites → dungeonlootr.net
 * → Add ad unit). Empty string = unit disabled.
 */
export const ADSTERRA = {
  /** Social Bar - sticky bar, Adsterra's top eCPM no-slot format. */
  socialBar: "",
  /** Popunder - highest CPM, hurts UX. Enable only if you want max revenue. */
  popunder: "",
} as const;

/** Global Adsterra units - rendered once in the root layout, runs on every page. */
export function AdsterraGlobal() {
  return (
    <>
      {ADSTERRA.socialBar && (
        <Script src={ADSTERRA.socialBar} strategy="lazyOnload" data-cfasync="false" />
      )}
      {ADSTERRA.popunder && (
        <Script src={ADSTERRA.popunder} strategy="lazyOnload" data-cfasync="false" />
      )}
    </>
  );
}

const BANNERS = {
  mobile: { key: "9fbd9d6ac5c60106343f65683c77b4eb", width: 320, height: 50 },
  rect: { key: "e222ec39ded701ab30bd00182004ed3c", width: 300, height: 250 },
  leaderboard: { key: "c2e5dfa5f55929c9e0dc162af8bba63c", width: 728, height: 90 },
} as const;

type BannerUnit = (typeof BANNERS)[keyof typeof BANNERS];

/**
 * Adsterra iframe banner. Their snippet reads the global `atOptions` when
 * invoke.js executes, so both scripts are injected imperatively with
 * async=false to keep execution order (safe for multiple units per page).
 */
function AdBanner({ unit }: { unit: BannerUnit }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.childElementCount > 0) return;
    const opts = document.createElement("script");
    opts.text = `atOptions = ${JSON.stringify({ key: unit.key, format: "iframe", height: unit.height, width: unit.width, params: {} })};`;
    const invoke = document.createElement("script");
    invoke.src = `https://www.highrevenueformat.com/${unit.key}/invoke.js`;
    invoke.async = false;
    el.append(opts, invoke);
  }, [unit]);

  return (
    <div
      ref={ref}
      className="mx-auto my-6 flex justify-center"
      style={{ minHeight: unit.height, maxWidth: unit.width }}
    />
  );
}

/** Top slot: 728x90 on desktop, 320x50 on mobile. */
export function AdLeaderboard() {
  // Client-only pick so the unused unit never loads its script.
  const [mobile, setMobile] = useState<boolean | null>(null);
  useEffect(() => setMobile(window.innerWidth < 768), []);
  if (mobile === null) return null;
  return <AdBanner unit={mobile ? BANNERS.mobile : BANNERS.leaderboard} />;
}

/** In-flow 300x250 rectangle. */
export function AdRect() {
  return <AdBanner unit={BANNERS.rect} />;
}
