export type Effect<T> = (options?: T) => EffectFn;
export type EffectFn = (audioContext: AudioContext, startTime: number, endTime: number) => AudioNode | Promise<AudioNode>;