import './App.css';
import { noteFrequency } from '@trackr/notes';
import { envelope, gain, randomGain, vibrato } from '@trackr/effects-gain';
import { biquadFilter, oscillator, step, sequencer, TrackrStep } from '@trackr/core';

const nf = noteFrequency;

function App() {

  const clickForNotes = () => {
    const noteC3 = nf('A3');
    console.log(noteC3);
    const s1 = new TrackrStep(noteC3, 0.25, oscillator({type: 'sawtooth'}));
    s1.add(biquadFilter({type: 'lowpass', frequency: 2000}));
    const s2 = step(noteC3, 1, oscillator({type: 'sine'}), gain({value: 0.1}));
    const s3 = step(nf('A3'), 1, oscillator({type: 'sine'}), randomGain());
    const s4 = step(nf('C3'), 1, oscillator({type: 'sawtooth'}), envelope({attack: 0.5, decay: 0.6, sustainLevel: 0.3, release: 0.7}));
    const s5 = step(nf('B3'), 1, oscillator({type: 'sawtooth'}), vibrato({frequency: 60, value: 5}));
    // let steps = [s1, s2, s3, s4, step(nf('A3'), 1, oscillator({type: 'sawtooth'}), randomGain()), s5];
    sequencer([s5]);
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
