import { EffectFn } from "./effect/effect";
import { InstrumentFn } from "./instrument/instrument";

export const step = (frequency: number, duration: number, instrument: InstrumentFn, ...effects: EffectFn[]) => {
    const trackrStep = new TrackrStep(frequency, duration, instrument);
    effects.forEach(e => {
        trackrStep.add(e);
    });
    return trackrStep;
}

export class TrackrStep {
    public effects: EffectFn[] = []
    constructor(public frequency: number, public duration: number, public instrument: InstrumentFn) {}
    add(effect: EffectFn) { this.effects.push(effect); }
}