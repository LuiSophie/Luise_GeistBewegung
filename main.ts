input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (positionszeiger == 8) {
        positionszeiger = 0
    } else {
        positionszeiger = positionszeiger + 1
    }
    aendereLEDs()
})
function aendereLEDs () {
    if (positionszeiger == 0) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            # # # # #
            # . # . #
            `)
    } else {
        if (positionszeiger == 1) {
            basic.showLeds(`
                # # # . .
                . # . # .
                # # # # .
                # # # # .
                . # . # .
                `)
        } else {
            if (positionszeiger == 2) {
                basic.showLeds(`
                    # # . . .
                    # . # . .
                    # # # . .
                    # # # . .
                    # . # . .
                    `)
            } else {
                if (positionszeiger == 3) {
                    basic.showLeds(`
                        # . . . .
                        . # . . .
                        # # . . .
                        # # . . .
                        . # . . .
                        `)
                } else {
                    if (positionszeiger == 4) {
                        basic.showLeds(`
                            . . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            `)
                    } else {
                        if (positionszeiger == 5) {
                            basic.showLeds(`
                                . . . . .
                                . . . . #
                                . . . . #
                                . . . . #
                                . . . . #
                                `)
                        } else {
                            if (positionszeiger == 6) {
                                basic.showLeds(`
                                    . . . . #
                                    . . . # .
                                    . . . # #
                                    . . . # #
                                    . . . # .
                                    `)
                            } else {
                                if (positionszeiger == 7) {
                                    basic.showLeds(`
                                        . . . # #
                                        . . # . #
                                        . . # # #
                                        . . # # #
                                        . . # . #
                                        `)
                                } else {
                                    if (positionszeiger == 8) {
                                        basic.showLeds(`
                                            . . # # #
                                            . # . # .
                                            . # # # #
                                            . # # # #
                                            . # . # .
                                            `)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (positionszeiger == 0) {
        positionszeiger = 8
    } else {
        positionszeiger = positionszeiger - 1
    }
    aendereLEDs()
})
let positionszeiger = 0
positionszeiger = 0
basic.showLeds(`
    . # # # .
    # . # . #
    # # # # #
    # # # # #
    # . # . #
    `)
