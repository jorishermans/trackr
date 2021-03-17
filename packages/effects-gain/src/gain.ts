import { Effect } from "@trackr/core";

export interface GainOptions {
    value: number;
}

export const gain: Effect<GainOptions> = (options?: GainOptions) => {
    return (audioContext: AudioContext) => {
        return _gain(audioContext, options ? options.value : 0.5);
    }
}

export const randomGain: Effect<void> = () => {
    return (audioContext: AudioContext) => {
        const value = Math.random();
        return _gain(audioContext, value);
    }
}

function _gain(audioContext: AudioContext, value: number) {
    const o = audioContext.createGain();
    o.gain.setValueAtTime(value, audioContext.currentTime);
    return o;
}