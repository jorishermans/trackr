export interface EffectOptions {
    startTime: number; 
    endTime: number;
    duration: number;
    latestSource: AudioNode | AudioScheduledSourceNode;
    instrument: AudioScheduledSourceNode
}

export type Effect<T> = (options?: T) => EffectFn;
export type EffectFn = (audioContext: AudioContext, options: EffectOptions) => AudioNode | Promise<AudioNode>;