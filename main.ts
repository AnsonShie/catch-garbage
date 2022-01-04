input.onButtonPressed(Button.A, function () {
    if (垃圾袋.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
})
let 垃圾袋: game.LedSprite = null
垃圾袋 = game.createSprite(2, 2)
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    垃圾袋.move(1)
    垃圾袋.ifOnEdgeBounce()
    basic.pause(150)
})
