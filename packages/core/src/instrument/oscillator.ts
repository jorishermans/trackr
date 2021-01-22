import { Instrument } from "./instrument";

export interface OscillatorOptions {
    type: OscillatorType;
}

export const oscillator: Instrument<OscillatorOptions> = (options: OscillatorOptions) => {
    return (audioContext: AudioContext, frequency: number) => {
        const o = audioContext.createOscillator();
        o.frequency.value = frequency;
        o.type = options.type;
        return o;
    }
}