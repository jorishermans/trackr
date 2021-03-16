import './App.css';
import { noteFrequency } from '@trackr/notes';
import { biquadFilter, oscillator, play, step, sequencer, TrackrStep, gain } from '@trackr/core';

function App() {
  
  const clickForNotes = () => {
    const noteC3 = noteFrequency('A3');
    console.log(noteC3);
    const s1 = new TrackrStep(noteC3, 1, oscillator({type: 'sawtooth'}));
    s1.add(biquadFilter({type: 'lowpass', frequency: 2000}));
    const s2 = step(noteC3, 1, oscillator({type: 'sine'}), gain({value: 0.1}));
    let steps = [s1, s2,
      step(noteFrequency('A3'), 1, oscillator({type: 'sawtooth'}))];
    sequencer(steps);
    // play(0, noteC3, 1, oscillator({type: 'sine'}))
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>This is an example of playing a sequence.</div>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={clickForNotes}
        >
          Play
        </a>
      </header>
    </div>
  );
}

export default App;
