var audioContext = new AudioContext();

export function play (index: number, frequency: number, duration: number) {
    var startTime = audioContext.currentTime + index
    var endTime = startTime + duration
  
    var oscillator = audioContext.createOscillator()
    oscillator.connect(audioContext.destination)
  
    oscillator.type = 'sawtooth'
    oscillator.frequency.value = frequency;
  
    oscillator.start(startTime)
    oscillator.stop(endTime)
}
   