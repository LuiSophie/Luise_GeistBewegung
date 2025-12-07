"""

Positionszeiger

"""
# Button A: vorwärts (zyklisch)

def on_button_pressed_a():
    global positionszeiger
    positionszeiger = (positionszeiger + 1) % ANZAHL_POSITIONEN
    aendereLEDs()
input.on_button_pressed(Button.A, on_button_pressed_a)

# Hilfsfunktion: aktuelles Muster anzeigen
# basic.showLeds(muster[positionszeiger])
def aendereLEDs():
    basic.clear_screen()
# Button B: rückwärts (zyklisch)

def on_button_pressed_b():
    global positionszeiger
    # (pos - 1 + N) % N vermeidet negatives Ergebnis
    positionszeiger = (positionszeiger - 1 + ANZAHL_POSITIONEN) % ANZAHL_POSITIONEN
    aendereLEDs()
input.on_button_pressed(Button.B, on_button_pressed_b)

positionszeiger = 0
ANZAHL_POSITIONEN = 0
# Anzahl der Positionen
ANZAHL_POSITIONEN = 9
# LED-Muster als Array (Index = positionszeiger)
muster = ["""
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        # . # . #
        """,
    """
        # # # . .
        . # . # .
        # # # # .
        # # # # .
        . # . # .
        """,
    """
        # # . . .
        # . # . .
        # # # . .
        # # # . .
        # . # . .
        """,
    """
        # . . . .
        . # . . .
        # # . . .
        # # . . .
        . # . . .
        """,
    """
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        """,
    """
        . . . . .
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        """,
    """
        . . . . #
        . . . # .
        . . . # #
        . . . # #
        . . . # .
        """,
    """
        . . . # #
        . . # . #
        . . # # #
        . . # # #
        . . # . #
        """,
    """
        . . # # #
        . # . # .
        . # # # #
        . # # # #
        . # . # .
        """]
# Initiale Anzeige
aendereLEDs()