import { Effect, EffectOptions } from "@trackr/core";

export interface VibratoOptions {
    frequency: number;
    value: number;
}

export const vibrato: Effect<VibratoOptions> = (options?: VibratoOptions) => {
    return (audioContext: AudioContext, eo: EffectOptions) => {
        const vibratoNode = audioContext.createGain();

        audioContext.createOscillator();
        if (options) {
            if (eo.instrument instanceof OscillatorNode) {
                vibratoNode.gain.value = options.value;
                vibratoNode.connect(eo.instrument.detune);

                var lfo = audioContext.createOscillator()
                lfo.connect(vibratoNode)
                lfo.frequency.value = options.frequency;
                
                lfo.start(eo.startTime)
                lfo.stop(eo.endTime+eo.duration)
            }
            
        }
        // eo.latestSource.connect(adsr);
        return vibratoNode;
    }
}
