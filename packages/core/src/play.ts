import { EffectFn } from "./effect/effect";
import { InstrumentFn } from "./instrument/instrument";
import { TrackrStep } from "./trackr-step";

var audioContext: AudioContext;

export function sequencer(steps: TrackrStep[]) {
    steps.forEach((s, i) => {
        play(i, s.frequency, s.duration, s.instrument, s.effects)
    })
}

export function createAudio() {
    if (!audioContext) audioContext = new AudioContext();
}

export async function play (index: number, frequency: number, duration: number, instrument: InstrumentFn, effects: EffectFn[]) {
    createAudio();
    var startTime = audioContext.currentTime + index;
    var endTime = audioContext.currentTime + index + duration;
  
    const nodeInstrument = await instrument(audioContext, frequency);
    let latestSource: AudioNode | AudioScheduledSourceNode = nodeInstrument;
    
    for (let e of effects) {
        const nodeEffect = await e(audioContext, {startTime, endTime, duration, latestSource, instrument: nodeInstrument});
        // latestSource.connect(nodeEffect);
        latestSource = nodeEffect;
    }
    latestSource.connect(audioContext.destination);

    nodeInstrument.start(startTime);
    nodeInstrument.stop(endTime);
}
   