export function TableMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" className={className} aria-hidden>
      <ellipse cx="140" cy="118" rx="108" ry="28" fill="#0c0b0a" opacity="0.55" />
      <ellipse cx="140" cy="96" rx="110" ry="42" fill="#1c1916" />
      <ellipse cx="140" cy="92" rx="100" ry="36" fill="#141210" />
      <ellipse cx="140" cy="90" rx="96" ry="34" fill="none" stroke="#3d3832" strokeWidth="1.2" />
      <ellipse cx="140" cy="90" rx="72" ry="24" fill="none" stroke="#2a2622" strokeWidth="0.8" />
      {/* lantern */}
      <rect x="134" y="64" width="12" height="18" rx="1" fill="#2a2622" />
      <rect x="136" y="68" width="8" height="10" fill="#d6d0c4" opacity="0.85" />
      <rect x="137" y="70" width="6" height="6" fill="#ece7dc" opacity="0.55" />
      <line x1="140" y1="52" x2="140" y2="64" stroke="#6e6960" strokeWidth="1" />
      {/* dice */}
      <rect x="108" y="84" width="10" height="10" transform="rotate(-12 113 89)" fill="#ece7dc" />
      <rect x="162" y="86" width="8" height="8" transform="rotate(18 166 90)" fill="#d6d0c4" />
      {/* map */}
      <rect x="88" y="78" width="28" height="16" transform="rotate(-8 102 86)" fill="#9a9488" opacity="0.35" />
      {/* chairs */}
      <rect x="70" y="108" width="18" height="6" rx="1" fill="#2a2622" />
      <rect x="192" y="108" width="18" height="6" rx="1" fill="#2a2622" />
      <rect x="128" y="128" width="24" height="6" rx="1" fill="#2a2622" />
      <rect x="128" y="54" width="24" height="5" rx="1" fill="#2a2622" />
    </svg>
  );
}
