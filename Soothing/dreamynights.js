// ================================
// Dreamy Night (By Brsrk94)
// ================================

// tempo
setCps(85/60/4)

// scale
let sc = "<eb:major ab:major>/2"


// -------- PAD CHORDS (piano roll) --------
$: n("<0 2 4 2 1 3 5 3>")
  .add("<0 4 7>/8")
  .scale(sc)
  .s("saw")
  .lpf("<400 600 800 600>")
  .rel(4)
  .room(0.8)
  .gain(0.35)
  .slow(2)
  .orbit(1)
  ._pianoroll()


// -------- BASS (scope) --------
$: n("<0 ~ 2 ~ 4 ~ 1 ~>")
  .add(-12)
  .scale(sc)
  .s("sine")
  .lpf(300)
  .rel(2)
  .gain(0.45)
  .slow(2)
  .orbit(2)
  ._scope()


// -------- MELODIC BELLS (piano roll) --------
$: n("0 ~ 4 ~ 7 ~ 2 ~")
  .scale(sc)
  .add(12)
  .s("triangle")
  .decay("<0.3 0.6 0.8>")
  .lpf(2000)
  .gain(0.3)
  .slow(2)
  .orbit(3)
  ._pianoroll()


// -------- ATMOSPHERIC PAD (scope) --------
$: n("0 2 4 7")
  .scale(sc)
  .add(24)
  .s("square")
  .lpf("<600 900 1200>")
  .rel(5)
  .room(0.9)
  .gain(0.25)
  .slow(4)
  .orbit(4)
  ._scope()


// -------- SOFT RHYTHM --------
$: s("bd ~ ~ ~ bd ~ ~ ~")
  .gain(0.25)
  .lpf(200)

$: s("~ hh ~ hh")
  .gain(0.12)
  .hpf(7000)
  .slow(2)


// -------- DREAMY ARPEGGIO (piano roll) --------
$: n("0 2 4 7 9 7 4 2")
  .add("<0 -1 1 -2>/4")
  .scale(sc)
  .add(24)
  .s("sine")
  .decay(0.2)
  .lpf(3000)
  .gain(0.3)
  .slow(2)
  .orbit(5)
  ._pianoroll()


// -------- AMBIENT WASH (scope) --------
$: n("0 2 4 6 9")
  .scale(sc)
  .s("saw")
  .lpf("<300 500 600>")
  .hpf(100)
  .rel(6)
  .room(0.95)
  .gain(0.2)
  .slow(4)
  .orbit(6)
  ._scope()
