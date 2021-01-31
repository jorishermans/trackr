## Trackr Core

This package provides the core functionality of the trackr core music api.

Play a simple sequence:

ts```
// define steps
let steps = [new TrackrStep(noteFrequency('C3'), 1, oscillator({type: 'sawtooth'})), ... ];
    
sequencer(steps);
```
