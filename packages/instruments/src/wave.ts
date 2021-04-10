import { Instrument } from "@trackr/core";
import { bassWave } from "./wavebanks/bass-wave";
import { brassWave } from "./wavebanks/brass-wave";
import { tromboneWave } from "./wavebanks/trombone-wave";

export interface WaveOptions {
    rawWave: {"real": number[], "imag": number[]}
}

export const wave: Instrument<WaveOptions> = (options: WaveOptions) => {
    return (audioContext: AudioContext, frequency: number) => {
        return wavetable(audioContext, frequency, options.rawWave)
    }
}

export const bass = wave({rawWave: bassWave});
export const brass = wave({rawWave: brassWave});
export const trombone = wave({rawWave: tromboneWave});

const wavetable = (audioContext: AudioContext, frequency: number, periodicWave: any) => {
    const o = audioContext.createOscillator();
    const w = audioContext.createPeriodicWave(periodicWave["real"], periodicWave["imag"]);
    o.setPeriodicWave(w);
    o.frequency.value = frequency;
    return o;
}
