export type Instrument<T> = (options: T) => InstrumentFn;
export type InstrumentFn = (audioContext: AudioContext, frequency: number) => AudioScheduledSourceNode | Promise<AudioScheduledSourceNode>;