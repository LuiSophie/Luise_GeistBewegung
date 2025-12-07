/**
 * Positionszeiger
 */
// Button A: vorwärts
input.onButtonPressed(Button.A, function () {
    positionszeiger = (positionszeiger + 1) % ANZAHL_POSITIONEN
    aendereLEDs()
})
// Anzeige-Hilfsfunktion
function aendereLEDs () {
    basic.clearScreen()
    // Image anzeigen (Frame 0)
    muster[positionszeiger].showImage(0)
}
// Button B: rückwärts
input.onButtonPressed(Button.B, function () {
    positionszeiger = (positionszeiger - 1 + ANZAHL_POSITIONEN) % ANZAHL_POSITIONEN
    aendereLEDs()
})
let positionszeiger = 0
let muster: Image[] = []
let ANZAHL_POSITIONEN = 0
// Anzahl der Positionen
ANZAHL_POSITIONEN = 9
// LED-Muster als Image-Objekte (Array)
muster = [
images.createImage(`
    . # # # .
    # . # . #
    # # # # #
    # # # # #
    # . # . #
    `),
images.createImage(`
    # # # . .
    . # . # .
    # # # # .
    # # # # .
    . # . # .
    `),
images.createImage(`
    # # . . .
    # . # . .
    # # # . .
    # # # . .
    # . # . .
    `),
images.createImage(`
    # . . . .
    . # . . .
    # # . . .
    # # . . .
    . # . . .
    `),
images.createImage(`
    . . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `),
images.createImage(`
    . . . . .
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    `),
images.createImage(`
    . . . . #
    . . . # .
    . . . # #
    . . . # #
    . . . # .
    `),
images.createImage(`
    . . . # #
    . . # . #
    . . # # #
    . . # # #
    . . # . #
    `),
images.createImage(`
    . . # # #
    . # . # .
    . # # # #
    . # # # #
    . # . # .
    `)
]
// Startanzeige
aendereLEDs()
