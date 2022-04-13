input.onGesture(Gesture.TiltRight, function () {
    drawing.moveInDirection(MoveDirection.Right)
})
input.onGesture(Gesture.LogoDown, function () {
    drawing.moveInDirection(MoveDirection.Down)
})
input.onButtonPressed(Button.A, function () {
    drawing.toogleCursor()
})
input.onGesture(Gesture.TiltLeft, function () {
    drawing.moveInDirection(MoveDirection.Left)
})
input.onGesture(Gesture.LogoUp, function () {
    drawing.moveInDirection(MoveDirection.Up)
})
input.onButtonPressed(Button.B, function () {
    drawing.clear()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    drawing.redraw()
})
basic.forever(function () {
    drawing.blinkCursor()
})
