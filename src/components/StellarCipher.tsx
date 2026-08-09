"use client";

import { Clock3, Lightbulb, Orbit, RotateCcw, Sparkles, Star, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

const puzzles = [
  { name: "ORION SIGNAL", solution: [2, 0, 3, 1], positions: [[82, 100], [220, 63], [324, 174], [164, 250]], path: "M82 100 L220 63 L324 174 L164 250", hints: ["First signal: begin at the star on the right.", "Second signal: travel to the star at upper left.", "Final signal: move down, then complete the pattern at the top."] },
  { name: "LYRA SIGNAL", solution: [1, 3, 0, 2], positions: [[74, 196], [174, 66], [315, 116], [252, 245]], path: "M74 196 L174 66 L315 116 L252 245", hints: ["First signal: begin at the upper-left star.", "Second signal: cross to the star at the bottom right.", "Final signal: move to the lower left, then finish at the right."] },
  { name: "NOVA SIGNAL", solution: [3, 1, 2, 0], positions: [[95, 79], [306, 78], [202, 150], [199, 256]], path: "M95 79 L306 78 L202 150 L199 256", hints: ["First signal: begin at the lowest star.", "Second signal: move to the star in the upper right.", "Final signal: choose the centre, then complete the pattern at upper left."] },
];

export default function StellarCipher() {
  const [sequence, setSequence] = useState<number[]>([]);
  const [started, setStarted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [hints, setHints] = useState(0);
  const [mistake, setMistake] = useState(false);
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const puzzle = puzzles[puzzleIndex];
  const solved = sequence.length === puzzle.solution.length && sequence.every((star, index) => star === puzzle.solution[index]);
  useEffect(() => {
    if (!started || solved) return;
    const timer = window.setInterval(() => setElapsed((seconds) => seconds + 1), 1000);
    return () => window.clearInterval(timer);
  }, [started, solved]);
  const time = `${String(Math.floor(elapsed / 60)).padStart(2, "0")}:${String(elapsed % 60).padStart(2, "0")}`;
  const addStar = (index: number) => {
    if (solved || mistake || sequence.includes(index)) return;
    if (!started) setStarted(true);
    const next = [...sequence, index];
    setSequence(next);
    if (!puzzle.solution.slice(0, next.length).every((star, position) => star === next[position])) {
      setMistake(true);
      window.setTimeout(() => {
        setSequence([]);
        setMistake(false);
      }, 650);
    }
  };
  const reset = () => { setSequence([]); setStarted(false); setElapsed(0); setHints(0); setMistake(false); };
  const nextPuzzle = () => {
    setSequence([]);
    setStarted(false);
    setElapsed(0);
    setHints(0);
    setMistake(false);
    setPuzzleIndex((index) => (index + 1) % puzzles.length);
  };
  const hintText = puzzle.hints[hints - 1];
  return (
    <section className="stellarSection" aria-labelledby="stellar-title">
      <div className="starField" aria-hidden="true" />
      <div className="nebula nebulaOne" aria-hidden="true" /><div className="nebula nebulaTwo" aria-hidden="true" />
      <div className="stellarCopy"><p className="sectionEyebrow"><Orbit size={15} /> NIGHT SKY PROTOCOL</p><h2 id="stellar-title">Decode the<br /><em>constellation.</em></h2><p>Tap all four stars in the hidden order. A correct star glows; a wrong star resets the signal. Ask for hints whenever you need them.</p><div className="cipherHint"><Sparkles size={16} /> Estimated solve time: under one minute.</div></div>
      <div className="cipherPanel">
        <div className="cipherHeader"><span>STAR CIPHER / {puzzle.name}</span><span><Clock3 size={13} /> {time}</span></div>
        <div className={`constellation ${solved ? "solved" : ""}`} key={puzzleIndex}>
          <svg viewBox="0 0 400 310" aria-hidden="true"><path d={puzzle.path} /><path className="constellationTrace" d={puzzle.path} style={{ strokeDashoffset: solved ? 0 : 690 }} /></svg>
          {puzzle.positions.map(([left, top], index) => <button key={index} className={`cipherStar star${index} ${sequence.includes(index) ? "chosen" : ""}`} style={{ left: `${left / 4}%`, top: `${top / 3.1}%` }} onClick={() => addStar(index)} aria-label={`Star ${index + 1}`}><Star fill="currentColor" size={27} /></button>)}
          {solved && <div className="cipherMessage"><Trophy size={22} /><strong>CONSTELLATION SOLVED</strong><p>You decoded the Eulim sky in <b>{time}</b>.</p><small>{puzzleIndex === puzzles.length - 1 ? "You have decoded every signal." : "A new signal is waiting in the night sky."}</small><button type="button" className="cipherNext" onClick={nextPuzzle}>{puzzleIndex === puzzles.length - 1 ? "Play again" : "Next constellation"}</button></div>}
        </div>
        <p className="cipherProgress" aria-live="polite">{solved ? `${puzzle.name} decoded — ${puzzleIndex + 1} of ${puzzles.length} complete.` : mistake ? "Signal disrupted — recalibrating…" : sequence.length ? `Correct signal: ${sequence.length} of 4 stars aligned.` : "Tap a star to begin the signal."}</p>
        <div className="cipherActions"><button type="button" className="cipherHintButton" onClick={() => setHints((value) => Math.min(value + 1, 3))} disabled={solved || hints === 3}><Lightbulb size={15} /> Ask for a hint</button><button type="button" className="cipherReset" onClick={reset}><RotateCcw size={15} /> Reset signal</button></div>
        {hints > 0 && !solved && <p className="hintMessage"><Lightbulb size={15} /> {hintText}</p>}
      </div>
    </section>
  );
}
