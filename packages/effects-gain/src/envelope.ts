import { Effect } from "@trackr/core";

export interface EnvelopeOptions {
    attack: number;
    decay: number;
    sustainLevel: number;
    release: number;
}

export const envelope: Effect<EnvelopeOptions> = (options?: EnvelopeOptions) => {
    return (audioContext: AudioContext, startTime: number, endTime: number) => {
        const adsr = audioContext.createGain();
        if (options) {
            const t0 = startTime;
            // vol:0
            adsr.gain.setValueAtTime(0, t0);
            // attack
            const t1 = t0 + options.attack;
            adsr.gain.linearRampToValueAtTime(1, t1);
            // decay
            const t2 = options.decay;
            adsr.gain.setTargetAtTime(options.sustainLevel, t1, t2);
            // release
            adsr.gain.setTargetAtTime(0, t1 + t2, options.release);
        }
        return adsr;
    }
}
