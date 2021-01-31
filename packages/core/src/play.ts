import { InstrumentFn } from "./instrument/instrument";
import { TrackrStep } from "./trackr-step";

var audioContext = new AudioContext();

export function sequencer(steps: TrackrStep[]) {
    steps.forEach((s, i) => {
        play(i, s.frequency, s.duration, s.instrument)
    })
}

export async function play (index: number, frequency: number, duration: number, instrument: InstrumentFn) {
    var startTime = audioContext.currentTime + index;
    var endTime = audioContext.currentTime + index + duration;
  
    const nodeInstrument = await instrument(audioContext, frequency);
    nodeInstrument.connect(audioContext.destination);

    nodeInstrument.start(startTime);
    nodeInstrument.stop(endTime);
}
   