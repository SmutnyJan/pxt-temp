let jeProvadenaAkce = false
mikado.onGuardAwaken(Difficulty.Easy, function () {
    let jeZapnutoHlidani = false
    if (jeZapnutoHlidani == true) {
        jeProvadenaAkce = true
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        soundExpression.sad.playUntilDone()
        jeProvadenaAkce = false
    }
})
