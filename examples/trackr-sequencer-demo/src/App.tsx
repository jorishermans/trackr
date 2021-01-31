import logo from './logo.svg';
import './App.css';
import { noteFrequency } from '@trackr/notes';
import { oscillator, play, sequencer, TrackrStep } from '@trackr/core';

function App() {
  const clickForNotes = () => {
    const noteC3 = noteFrequency('C3');
    console.log(noteC3);
    let steps = [new TrackrStep(noteC3, 1, oscillator({type: 'sawtooth'})),
      new TrackrStep(noteC3, 1, oscillator({type: 'sine'})),
      new TrackrStep(noteFrequency('A3'), 1, oscillator({type: 'sawtooth'}))];
    sequencer(steps);
    // play(0, noteC3, 1, oscillator({type: 'sine'}))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
