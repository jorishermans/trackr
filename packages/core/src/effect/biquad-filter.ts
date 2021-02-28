import { Effect } from "./effect";

export interface BiquadFilterOptions {
    type?: BiquadFilterType;
    frequency?: number;
}

export const biquadFilter: Effect<BiquadFilterOptions> = (options: BiquadFilterOptions) => {
    return (audioContext: AudioContext) => {
        const o = audioContext.createBiquadFilter();
        o.type = options.type ?? 'allpass';
        o.frequency.value = options.frequency ?? 8000;
        o.Q.value = 1;
        return o;
    }
}