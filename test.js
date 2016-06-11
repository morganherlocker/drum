var Drum = require('./index')

var beatsPerMinute = 450
var beatsPerBar = 4
var bars = 6

var drum = new Drum(beatsPerMinute, beatsPerBar, bars)

drum.add('./drums/78S.wav', 0)
drum.add('./drums/78S.wav', 2)
drum.add('./drums/78S.wav', 4)
drum.add('./drums/78S.wav', 6)
drum.add('./drums/78S.wav', 8)
drum.add('./drums/78S.wav', 10)
drum.add('./drums/78S.wav', 12)
drum.add('./drums/78S.wav', 14)

drum.add('./drums/78S.wav', 2)
drum.add('./drums/78S.wav', 6)
drum.add('./drums/78S.wav', 10)
drum.add('./drums/78S.wav', 14)

drum.add('./drums/78K.wav', 1)
drum.add('./drums/78K.wav', 5)
drum.add('./drums/78K.wav', 9)
drum.add('./drums/78K.wav', 13)

drum.add('./drums/808K_A.wav', 3)
drum.add('./drums/808K_A.wav', 10)
drum.add('./drums/808K_A.wav', 12)

drum.add('./drums/909K_A.wav', 13)
drum.add('./drums/909K_A.wav', 14)
drum.add('./drums/909K_A.wav', 15)

drum.add('./drums/HARDK.wav', 3)
drum.add('./drums/HARDK.wav', 7)
drum.add('./drums/909CHH.wav', 11)
drum.add('./drums/909SIDE.wav', 12)
drum.add('./drums/909SIDE.wav', 14)
drum.add('./drums/HARDK.wav', 15)

drum.add('./drums/808T_B.wav', 0)
drum.add('./drums/VIDEOS.wav', 1)
drum.add('./drums/VIDEOK.wav', 3)

drum.add('./drums/BRRDC1.wav', 5)

drum.add('./drums/78S.wav', 16)
drum.add('./drums/78S.wav', 18)
drum.add('./drums/78S.wav', 20)
drum.add('./drums/78S.wav', 22)

drum.add('./drums/PIPE1.wav', 17)
drum.add('./drums/PUNCHK.wav', 19)
drum.add('./drums/808COW.wav', 21)
drum.add('./drums/GATEK2.wav', 22)


drum.play()
