import { Instrument } from "./instrument";

export interface WaveOptions {
    url: string;
}

export const wave: Instrument<WaveOptions> = (options: WaveOptions) => {
    return async (audioContext: AudioContext) => {
        const arrayBuffer = await fetching(options.url);
        const buffer = await decodeAudioData(audioContext, arrayBuffer);
        const player = audioContext.createBufferSource();
    
        player.buffer = buffer as AudioBuffer;
        return player;
    }
}

async function fetching(url: string) {
    return await fetch(url).then(function(response) {
        return response.arrayBuffer()
    });
}

const decodeAudioData = (audioContext: AudioContext, buffer: ArrayBuffer) => {
    return new Promise((resolve, reject) => {
        audioContext.decodeAudioData(buffer, (decodedData) => resolve(decodedData));
    })
}
