var player = require('play-sound')()

var Drum = function (beatsPerMinute, beatsPerBar, bars) {
  this.beatsPerMinute = beatsPerMinute
  this.beatsPerBar = beatsPerBar
  this.bars = bars
  this.beats = []
  this.current = 0
  this.playing = false

  for (var i = 0; i < (this.bars * this.beatsPerBar); i++) {
    this.beats.push([])
  }
}

Drum.prototype.add = function (sound, beat) {
  this.beats[beat].push(sound)
}

Drum.prototype.remove = function (sound, beat) {
  for (var i = 0; i < this.beats[beat].length; i++) {
    if (this.beats[beat][i] === sound) {
      this.beats[beat].splice(0, i)
      break
    }
  }
}

Drum.prototype.next = function () {
  for (var i = 0; i < this.beats[this.current].length; i++){
    player.play(this.beats[this.current][i])
  }

  if (this.playing) {
    this.current++
    if (this.current === this.beats.length) this.current = 0
    setTimeout(this.next.bind(this), ((60 / this.beatsPerMinute) * 1000))
  }
}

Drum.prototype.play = function () {
  this.playing = true
  this.next()
}

Drum.prototype.stop = function () {
  this.playing = false
}

module.exports = Drum