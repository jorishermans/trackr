import { Effect, EffectOptions } from "@trackr/core";

export interface GainOptions {
    value: number;
}

export const gain: Effect<GainOptions> = (options?: GainOptions) => {
    return (audioContext: AudioContext, eo: EffectOptions) => {
        const o = _gain(audioContext, options ? options.value : 0.5);
        eo.latestSource.connect(o);
        return o;
    }
}

export const randomGain: Effect<void> = () => {
    return (audioContext: AudioContext, eo: EffectOptions) => {
        const value = Math.random();
        const o = _gain(audioContext, value);
        eo.latestSource.connect(o);
        return o;
    }
}

function _gain(audioContext: AudioContext, value: number) {
    const o = audioContext.createGain();
    o.gain.setValueAtTime(value, audioContext.currentTime);
    return o;
}