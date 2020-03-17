input.onButtonPressed(Button.B, function () {
    meg.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.A, function () {
    meg.change(LedSpriteProperty.X, -1)
})
let meg: game.LedSprite = null
let bombe = game.createSprite(Math.randomRange(0, 4), 0)
meg = game.createSprite(2, 4)
game.setLife(3)
game.setScore(0)
let pause2 = 1000
basic.forever(function () {
    bombe.change(LedSpriteProperty.Y, 1)
    if (bombe.isTouching(meg)) {
        game.removeLife(1)
    } else if (bombe.get(LedSpriteProperty.Y) == 4) {
        game.addScore(Math.abs(meg.get(LedSpriteProperty.X) - bombe.get(LedSpriteProperty.X)))
    }
    basic.pause(pause2)
    if (bombe.get(LedSpriteProperty.Y) == 4) {
        bombe.set(LedSpriteProperty.Y, 0)
        bombe.set(LedSpriteProperty.X, Math.randomRange(0, 4))
        basic.pause(pause2)
    }
})
basic.forever(function () {
    if (game.score() % 3 == 0) {
        pause2 += -100
        basic.pause(10000)
    }
})
