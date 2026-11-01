let ctx: AudioContext | null = null;

function ac() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const C = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!C) return null;
    ctx = new C();
  }
  return ctx;
}

export function unlockAudio() {
  const c = ac();
  if (c && c.state === "suspended") void c.resume();
}

export function tickDice() {
  const c = ac();
  if (!c) return;
  const t = c.currentTime;
  for (let i = 0; i < 3; i++) {
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "square";
    o.frequency.value = 180 + Math.random() * 220;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.04, t + 0.01 + i * 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08 + i * 0.05);
    o.connect(g);
    g.connect(c.destination);
    o.start(t + i * 0.04);
    o.stop(t + 0.12 + i * 0.05);
  }
}

export function tickHit() {
  const c = ac();
  if (!c) return;
  const t = c.currentTime;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "sawtooth";
  o.frequency.setValueAtTime(90, t);
  o.frequency.exponentialRampToValueAtTime(40, t + 0.12);
  g.gain.setValueAtTime(0.05, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
  o.connect(g);
  g.connect(c.destination);
  o.start(t);
  o.stop(t + 0.15);
}
