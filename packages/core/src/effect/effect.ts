export type Effect<T> = (options: T) => EffectFn;
export type EffectFn = (audioContext: AudioContext) => AudioNode | Promise<AudioNode>;