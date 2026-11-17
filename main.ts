scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    tiles.setTilemap(tilemap`level_0`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . e e e . . . . e e e 
        . . . . f e e f . . f e e f 
        . . . . f f e e f f e e f f 
        . . . . f 3 f e f e e f 3 f 
        . . . . f f 3 e e e e 3 f f 
        . . . . e e e e e e e e e e 
        e f e . e e f e e e e f e e 
        f e f . f e e f e e f e e f 
        f e f . f 6 e e 3 3 e e f f 
        f e f f f f 6 6 6 6 6 6 f . 
        f f e f f e e e e e e f f . 
        . f f f e e f e e e e e f . 
        . . . f e f f e f f f e f . 
        . . . f f . . f f . . f f . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . f e e f . . f e e f 
        . . . . f f e e f f e e f f 
        . . . . f 3 f e f e e f 3 f 
        . . . . f f f e e e e 3 f f 
        . . . . e e e e e e e e e e 
        . e f e e e f e e e e f e e 
        . f e f f e e f e e f e e f 
        . f e f f 6 e e 3 3 e e f f 
        . f f e f e 6 6 6 6 6 6 f . 
        . . f f f e e e e e e e f . 
        . . . . f e f f f e f e f . 
        . . . . f f . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . f e e f . . f e e f 
        . . . . f f e e f f e e f f 
        . . . . f 3 f e f e e f 3 f 
        . . . . f f 3 e e e e 3 f f 
        . . . . e e e e e e e e e e 
        e f e . e e f e e e e f e e 
        f e f . f e e f e e f e e f 
        f e f f f 6 e e 3 3 e e f f 
        f f e f f e 6 6 6 6 6 6 f . 
        . f f f f e e e e e e e f . 
        . . . . . f e f e f e f . . 
        . . . . . f f f f f f . . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        e e e . . . . e e e . . . . 
        f e e f . . f e e f . . . . 
        f f e e f f e e f f . . . . 
        f 3 f e e f e f 3 f . . . . 
        f f 3 e e e e 3 f f . . . . 
        e e e e e e e e e e . . . . 
        e e f e e e e f e e . e f e 
        f e e f e e f e e f . f e f 
        f f e e 3 3 e e 6 f . f e f 
        . f 6 6 6 6 6 6 f f f f e f 
        . f f e e e e e e f f e f f 
        . f e e e e e f e e f f f . 
        . f e f f f e f f e f . . . 
        . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        f e e f . . f e e f . . . . 
        f f e e f f e e f f . . . . 
        f 3 f e e f e f 3 f . . . . 
        f f 3 e e e e f f f . . . . 
        e e e e e e e e e e . . . . 
        e e f e e e e f e e e f e . 
        f e e f e e f e e f f e f . 
        f f e e 3 3 e e 6 f f e f . 
        . f 6 6 6 6 6 6 e f e f f . 
        . f e e e e e e e f f f . . 
        . f e f e f f f e f . . . . 
        . . f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        f e e f . . f e e f . . . . 
        f f e e f f e e f f . . . . 
        f 3 f e e f e f 3 f . . . . 
        f f 3 e e e e 3 f f . . . . 
        e e e e e e e e e e . . . . 
        e e f e e e e f e e . e f e 
        f e e f e e f e e f . f e f 
        f f e e 3 3 e e 6 f f f e f 
        . f 6 6 6 6 6 6 e f f e f f 
        . f e e e e e e e f f f f . 
        . . f e f e f e f . . . . . 
        . . . f f f f f f . . . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedEast, function (sprite, location) {
    game.gameOver(true)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    f e e f . . f e e f . . . . 
    f f e e f f e e f f . . . . 
    f 3 f e e f e f 3 f . . . . 
    f f 3 e e e e 3 f f . . . . 
    e e e e e e e e e e . . . . 
    e e f e e e e f e e . f f f 
    f e e f e e f e e f . f e f 
    f f e e 3 3 e e 6 f . f e f 
    . f 6 6 6 6 6 6 6 f f f e f 
    . f f e e e e e e f f e f f 
    . f e e e e e f e e f f f . 
    . f e f f f e f f e f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
