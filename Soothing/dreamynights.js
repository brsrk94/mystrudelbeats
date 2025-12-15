// ================================
// Dreamy Night (By Brsrk94)
// https://strudel.cc/#Ci8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ci8vIERyZWFteSBOaWdodCAoQnkgQnJzcms5NCkKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KCi8vIHRlbXBvCnNldENwcyg4NS82MC80KQoKLy8gc2NhbGUKbGV0IHNjID0gIjxlYjptYWpvciBhYjptYWpvcj4vMiIKCgovLyAtLS0tLS0tLSBQQUQgQ0hPUkRTIChwaWFubyByb2xsKSAtLS0tLS0tLQokOiBuKCI8MCAyIDQgMiAxIDMgNSAzPiIpCiAgLmFkZCgiPDAgNCA3Pi84IikKICAuc2NhbGUoc2MpCiAgLnMoInNhdyIpCiAgLmxwZigiPDQwMCA2MDAgODAwIDYwMD4iKQogIC5yZWwoNCkKICAucm9vbSgwLjgpCiAgLmdhaW4oMC4zNSkKICAuc2xvdygyKQogIC5vcmJpdCgxKQogIC5fcGlhbm9yb2xsKCkKCgovLyAtLS0tLS0tLSBCQVNTIChzY29wZSkgLS0tLS0tLS0KJDogbigiPDAgfiAyIH4gNCB%2BIDEgfj4iKQogIC5hZGQoLTEyKQogIC5zY2FsZShzYykKICAucygic2luZSIpCiAgLmxwZigzMDApCiAgLnJlbCgyKQogIC5nYWluKDAuNDUpCiAgLnNsb3coMikKICAub3JiaXQoMikKICAuX3Njb3BlKCkKCgovLyAtLS0tLS0tLSBNRUxPRElDIEJFTExTIChwaWFubyByb2xsKSAtLS0tLS0tLQokOiBuKCIwIH4gNCB%2BIDcgfiAyIH4iKQogIC5zY2FsZShzYykKICAuYWRkKDEyKQogIC5zKCJ0cmlhbmdsZSIpCiAgLmRlY2F5KCI8MC4zIDAuNiAwLjg%2BIikKICAubHBmKDIwMDApCiAgLmdhaW4oMC4zKQogIC5zbG93KDIpCiAgLm9yYml0KDMpCiAgLl9waWFub3JvbGwoKQoKCi8vIC0tLS0tLS0tIEFUTU9TUEhFUklDIFBBRCAoc2NvcGUpIC0tLS0tLS0tCiQ6IG4oIjAgMiA0IDciKQogIC5zY2FsZShzYykKICAuYWRkKDI0KQogIC5zKCJzcXVhcmUiKQogIC5scGYoIjw2MDAgOTAwIDEyMDA%2BIikKICAucmVsKDUpCiAgLnJvb20oMC45KQogIC5nYWluKDAuMjUpCiAgLnNsb3coNCkKICAub3JiaXQoNCkKICAuX3Njb3BlKCkKCgovLyAtLS0tLS0tLSBTT0ZUIFJIWVRITSAtLS0tLS0tLQokOiBzKCJiZCB%2BIH4gfiBiZCB%2BIH4gfiIpCiAgLmdhaW4oMC4yNSkKICAubHBmKDIwMCkKCiQ6IHMoIn4gaGggfiBoaCIpCiAgLmdhaW4oMC4xMikKICAuaHBmKDcwMDApCiAgLnNsb3coMikKCgovLyAtLS0tLS0tLSBEUkVBTVkgQVJQRUdHSU8gKHBpYW5vIHJvbGwpIC0tLS0tLS0tCiQ6IG4oIjAgMiA0IDcgOSA3IDQgMiIpCiAgLmFkZCgiPDAgLTEgMSAtMj4vNCIpCiAgLnNjYWxlKHNjKQogIC5hZGQoMjQpCiAgLnMoInNpbmUiKQogIC5kZWNheSgwLjIpCiAgLmxwZigzMDAwKQogIC5nYWluKDAuMykKICAuc2xvdygyKQogIC5vcmJpdCg1KQogIC5fcGlhbm9yb2xsKCkKCgovLyAtLS0tLS0tLSBBTUJJRU5UIFdBU0ggKHNjb3BlKSAtLS0tLS0tLQokOiBuKCIwIDIgNCA2IDkiKQogIC5zY2FsZShzYykKICAucygic2F3IikKICAubHBmKCI8MzAwIDUwMCA2MDA%2BIikKICAuaHBmKDEwMCkKICAucmVsKDYpCiAgLnJvb20oMC45NSkKICAuZ2FpbigwLjIpCiAgLnNsb3coNCkKICAub3JiaXQoNikKICAuX3Njb3BlKCkK
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
