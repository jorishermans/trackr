import { Effect } from "./effect";

export interface GainOptions {
    value: number;
}

export const gain: Effect<GainOptions> = (options: GainOptions) => {
    return (audioContext: AudioContext) => {
        const o = audioContext.createGain();
        o.gain.setValueAtTime(options.value, audioContext.currentTime);
        return o;
    }
}