import { InstrumentFn } from "./instrument/instrument";

export class TrackrStep {
    constructor(public frequency: number, public duration: number, public instrument: InstrumentFn) {}
}