import { Effect, EffectOptions } from "./effect";

export interface BiquadFilterOptions {
    type?: BiquadFilterType;
    frequency?: number;
}

export const biquadFilter: Effect<BiquadFilterOptions> = (options?: BiquadFilterOptions) => {
    return (audioContext: AudioContext, eo: EffectOptions) => {
        const o = audioContext.createBiquadFilter();
        if (options) {
            o.type = options.type ? options.type : 'allpass';
            o.frequency.value = options.frequency ? options.frequency : 8000;
        }
        o.Q.value = 1;
        eo.latestSource.connect(o);
        return o;
    }
}