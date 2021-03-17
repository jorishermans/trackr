## Trackr Gain Effects

This package provides a gain and randomGain to add volume to your step as an effect.

Look at this example below to get you started.
```typescript
const s1 = step(noteC3, 1, oscillator({type: 'sine'}), gain({value: 0.1}));
const s2 = step(noteC5, 1, oscillator({type: 'sine'}), randomGain());
```

First part is the note and the last part is the octave.
