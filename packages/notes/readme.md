## Trackr notes

This package provides a function to translate note notations into frequencies that you can use in web audio api.

Look at this example below to get you started.
```typescript
const freq = noteFrequency('A#3');

oscillator.frequency.value = freq;
```

First part is the note and the last part is the octave.
