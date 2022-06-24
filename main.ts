namespace SpriteKind {
    export const object = SpriteKind.create()
    export const Cosmetic = SpriteKind.create()
    export const npc = SpriteKind.create()
    export const gui = SpriteKind.create()
    export const Animal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        timer.throttle("B", 500, function () {
            killGui(true)
            controller.moveSprite(Players[0], Playerstats[0], Playerstats[0])
            Players[0].setFlag(SpriteFlag.Invisible, false)
            Players[1].setFlag(SpriteFlag.Invisible, false)
            scene.cameraFollowSprite(Players[0])
            Playerstats[6] = 0
            Playerstats[5] = 0
        })
    }
    if (controller.A.isPressed()) {
        timer.throttle("A", 500, function () {
            if (sprites.readDataNumber(otherSprite, "type") == 1) {
                if (Playerstats[5] == 1) {
                    bugfix = 1
                    if (game.ask("Buy") && Playerstats[7] >= 50) {
                        if (Playerstats[6] == 1) {
                            animalinv.push([1, Math.randomRange(1, 2)])
                        }
                        if (Playerstats[6] == 2) {
                            animalinv.push([2, Math.randomRange(1, 2)])
                        }
                        if (Playerstats[6] == 3) {
                            animalinv.push([3, Math.randomRange(1, 2)])
                        }
                        if (Playerstats[6] == 4) {
                            animalinv.push([4, Math.randomRange(1, 2)])
                        }
                        bugfix = 0
                        Playerstats[7] = Playerstats[7] - 50
                        Playerstats[1] = 4
                        guiText[0].setText(" $" + Playerstats[7])
                    } else {
                        
                        music.powerDown.play()
                        bugfix = 0
                    }
                }
                if (Playerstats[5] == 0) {
                    killGui(true)
                    controller.moveSprite(Players[0], 0, 0)
                    guiText[guiText.length - 1].setPosition(129, 100)
                    guiObjects.push(sprites.create(assets.image`guishopbackground`, SpriteKind.gui))
                    scene.cameraFollowSprite(guiObjects[guiObjects.length - 1])
                    Players[0].setFlag(SpriteFlag.Invisible, true)
                    Players[1].setFlag(SpriteFlag.Invisible, true)
                    guiText.push(textsprite.create("Press A to purchase"))
                    guiText[guiText.length - 1].setFlag(SpriteFlag.RelativeToCamera, true)
                    guiText[guiText.length - 1].setPosition(80, 78)
                    for (let index = 0; index < 4; index++) {
                        guiObjects.push(sprites.create(assets.image`guishopring`, SpriteKind.gui))
                        guiObjects[guiObjects.length - 1].setFlag(SpriteFlag.RelativeToCamera, true)
                    }
                    guiObjects.push(sprites.create(assets.image`dog`, SpriteKind.gui))
                    guiObjects[guiObjects.length - 1].setFlag(SpriteFlag.RelativeToCamera, true)
                    guiObjects.push(sprites.create(assets.image`cat`, SpriteKind.gui))
                    guiObjects[guiObjects.length - 1].setFlag(SpriteFlag.RelativeToCamera, true)
                    guiObjects.push(sprites.create(assets.image`bird`, SpriteKind.gui))
                    guiObjects[guiObjects.length - 1].setFlag(SpriteFlag.RelativeToCamera, true)
                    guiObjects.push(sprites.create(assets.image`hamster`, SpriteKind.gui))
                    guiObjects[guiObjects.length - 1].setFlag(SpriteFlag.RelativeToCamera, true)
                    guiText.push(textsprite.create(""))
                    guiText[guiText.length - 1].setFlag(SpriteFlag.RelativeToCamera, true)
                    guiText[guiText.length - 1].setPosition(20, 50)
                    guiObjects[1].setPosition(30, 20)
                    guiObjects[2].setPosition(60, 20)
                    guiObjects[3].setPosition(90, 20)
                    guiObjects[4].setPosition(120, 20)
                    guiObjects[5].setPosition(30, 20)
                    guiObjects[6].setPosition(60, 20)
                    guiObjects[7].setPosition(90, 20)
                    guiObjects[8].setPosition(120, 20)
                    Playerstats[5] = 1
                    Playerstats[6] = 1
                    if (Playerstats[1] == 3) {
                    	
                    }
                }
            }
        })
    }
    if (controller.right.isPressed()) {
        timer.throttle("Right", 500, function () {
            if (Playerstats[5] == 1) {
                if (Playerstats[6] < 5) {
                    Playerstats[6]++
                }
                if (Playerstats[6] == 5) {
                    Playerstats[6] = 1
                }
            }
        })
    }
    if (controller.left.isPressed()) {
        timer.throttle("left", 500, function () {
            if (Playerstats[5] == 1) {
                if (Playerstats[6] > 0) {
                    Playerstats[6]--
                }
                if (Playerstats[6] == 0) {
                    Playerstats[6] = 4
                }
            }
        })
    }
    if (Playerstats[5] == 1) {
        timer.throttle("flash", 500, function () {
            if (Playerstats[6] == 1) {
                guiText[2].setText("$50")
                if (guiObjects[1].image.equals(assets.image`guishopring0`)) {
                    guiObjects[1].setImage(assets.image`guishopring`)
                } else {
                    guiObjects[1].setImage(assets.image`guishopring0`)
                }
            } else {
                guiObjects[1].setImage(assets.image`guishopring`)
            }
            if (Playerstats[6] == 2) {
                guiText[2].setText("$50")
                if (guiObjects[2].image.equals(assets.image`guishopring0`)) {
                    guiObjects[2].setImage(assets.image`guishopring`)
                } else {
                    guiObjects[2].setImage(assets.image`guishopring0`)
                }
            } else {
                guiObjects[2].setImage(assets.image`guishopring`)
            }
            if (Playerstats[6] == 3) {
                guiText[2].setText("$50")
                if (guiObjects[3].image.equals(assets.image`guishopring0`)) {
                    guiObjects[3].setImage(assets.image`guishopring`)
                } else {
                    guiObjects[3].setImage(assets.image`guishopring0`)
                }
            } else {
                guiObjects[3].setImage(assets.image`guishopring`)
            }
            if (Playerstats[6] == 4) {
                guiText[2].setText("$50")
                if (guiObjects[4].image.equals(assets.image`guishopring0`)) {
                    guiObjects[4].setImage(assets.image`guishopring`)
                } else {
                    guiObjects[4].setImage(assets.image`guishopring0`)
                }
            } else {
                guiObjects[4].setImage(assets.image`guishopring`)
            }
        })
        console.log(Playerstats[6])
    }
})
function input2 () {
    if (controller.A.isPressed()) {
        timer.throttle("action", 5000, function () {
            if (Playerstats[1] == 0) {
                killGui(false)
                if (blockSettings.exists("tutorialFinished")) {
                    start(false)
                } else {
                    start(true)
                }
            }
        })
    }
    if (controller.B.isPressed()) {
        timer.throttle("baction", 250, function () {
            story.clearAllText()
            music.stopAllSounds()
            soundEffects.createSound(soundEffects.waveNumber(WaveType.WhiteNoise), 2500, 550, 250, 100, 0).stop()
            soundEffects.createSound(soundEffects.waveNumber(WaveType.TunableNoise), 100, 300, 25, 255, 255).playUntilDone()
        })
    }
}
function killObjects () {
    for (let value of worldObjects) {
        value.destroy()
    }
    worldObjects = []
}
function level (lvl: number, fade: boolean, col: number, row: number) {
    if (fade) {
        color.setPalette(
        color.Black
        )
    }
    killObjects()
    if (lvl == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
        scene.setBackgroundColor(6)
        scene.setBackgroundImage(assets.image`blank`)
        for (let value2 of tiles.getTilesByType(assets.tile`tree`)) {
            worldObjects.push(sprites.create(assets.image`tree1`, SpriteKind.object))
            tiles.placeOnTile(worldObjects[worldObjects.length - 1], value2)
            sprites.setDataNumber(worldObjects[worldObjects.length - 1], "type", 0)
            tiles.setTileAt(value2, sprites.castle.tileDarkGrass1)
        }
        for (let value3 of tiles.getTilesByType(assets.tile`tree0`)) {
            worldObjects.push(sprites.create(assets.image`tree2`, SpriteKind.object))
            tiles.placeOnTile(worldObjects[worldObjects.length - 1], value3)
            sprites.setDataNumber(worldObjects[worldObjects.length - 1], "type", 0)
            tiles.setTileAt(value3, sprites.castle.tileDarkGrass1)
        }
    }
    if (lvl == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.setBackgroundColor(6)
        scene.setBackgroundImage(assets.image`blank`)
        for (let value4 of tiles.getTilesByType(assets.tile`tree`)) {
            worldObjects.push(sprites.create(assets.image`tree1`, SpriteKind.object))
            tiles.placeOnTile(worldObjects[worldObjects.length - 1], value4)
            sprites.setDataNumber(worldObjects[worldObjects.length - 1], "type", 0)
            tiles.setTileAt(value4, sprites.castle.tileDarkGrass3)
        }
        for (let value5 of tiles.getTilesByType(assets.tile`tree0`)) {
            worldObjects.push(sprites.create(assets.image`tree2`, SpriteKind.object))
            tiles.placeOnTile(worldObjects[worldObjects.length - 1], value5)
            sprites.setDataNumber(worldObjects[worldObjects.length - 1], "type", 0)
            tiles.setTileAt(value5, sprites.castle.tileDarkGrass3)
        }
        worldObjects.push(sprites.create(assets.image`dealer`, SpriteKind.npc))
        sprites.setDataNumber(worldObjects[worldObjects.length - 1], "type", 1)
    }
    if (lvl == 2) {
        tiles.setCurrentTilemap(tilemap`level3`)
        scene.setBackgroundColor(6)
        scene.setBackgroundImage(assets.image`blank`)
        for (let value6 of tiles.getTilesByType(assets.tile`tree`)) {
            worldObjects.push(sprites.create(assets.image`tree1`, SpriteKind.object))
            tiles.placeOnTile(worldObjects[worldObjects.length - 1], value6)
            sprites.setDataNumber(worldObjects[worldObjects.length - 1], "type", 0)
            tiles.setTileAt(value6, sprites.castle.tileDarkGrass3)
        }
        for (let value7 of tiles.getTilesByType(assets.tile`tree0`)) {
            worldObjects.push(sprites.create(assets.image`tree2`, SpriteKind.object))
            tiles.placeOnTile(worldObjects[worldObjects.length - 1], value7)
            sprites.setDataNumber(worldObjects[worldObjects.length - 1], "type", 0)
            tiles.setTileAt(value7, sprites.castle.tileDarkGrass3)
        }
    }
    if (lvl == 3) {
        tiles.setCurrentTilemap(tilemap`level4`)
        scene.setBackgroundColor(15)
        scene.setBackgroundImage(assets.image`blank`)
    }
    if (lvl == 4) {
        tiles.setCurrentTilemap(tilemap`level5`)
        scene.setBackgroundColor(15)
        scene.setBackgroundImage(assets.image`blank`)
        for (let index2 = 0; index2 <= 2; index2++) {
            worldObjects.push(sprites.create(assets.image`fence`, SpriteKind.object))
            sprites.setDataNumber(worldObjects[worldObjects.length - 1], "type", 1)
            sprites.setDataNumber(worldObjects[worldObjects.length - 1], "num", index2)
        }
        tiles.placeOnTile(worldObjects[0], tiles.getTileLocation(8, 35))
        tiles.placeOnTile(worldObjects[1], tiles.getTileLocation(2, 35))
        tiles.placeOnTile(worldObjects[2], tiles.getTileLocation(8, 30))
        tiles.placeOnTile(worldObjects[3], tiles.getTileLocation(2, 30))
    }
    if (lvl == 5) {
        tiles.setCurrentTilemap(tilemap`level6`)
        scene.setBackgroundColor(7)
        scene.setBackgroundImage(assets.image`blank`)
        worldObjects.push(sprites.create(assets.image`pc`, SpriteKind.object))
        tiles.placeOnTile(worldObjects[0], tiles.getTileLocation(7, 11))
        sprites.setDataNumber(worldObjects[0], "type", 2)
        worldObjects.push(sprites.create(assets.image`trough`, SpriteKind.object))
        tiles.placeOnTile(worldObjects[1], tiles.getTileLocation(8, 11))
        worldObjects[1].x += 10
        sprites.setDataNumber(worldObjects[1], "type", 3)
    }
    if (lvl == 6) {
        tiles.setCurrentTilemap(tilemap`level7`)
        scene.setBackgroundColor(6)
        scene.setBackgroundImage(assets.image`blank`)
    }
    if (lvl == 7) {
        tiles.setCurrentTilemap(tilemap`level8`)
        scene.setBackgroundColor(15)
        scene.setBackgroundImage(assets.image`blank`)
        worldObjects.push(sprites.create(assets.image`dealer`, SpriteKind.npc))
        sprites.setDataNumber(worldObjects[worldObjects.length - 1], "type", 1)
    }
    if (fade) {
        timer.after(100, function () {
            color.startFadeFromCurrent(color.originalPalette, 500)
        })
    }
    tiles.placeOnTile(Players[0], tiles.getTileLocation(col, row))
    Playerstats[2] = lvl
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        timer.throttle("A", 500, function () {
            if (sprites.readDataNumber(otherSprite, "type") == 1) {
                level(5, true, 5, 14)
                Playerstats[8] = sprites.readDataNumber(otherSprite, "num")
                if (Playerstats[1] == 2) {
                    story.startCutscene(function () {
                        worldObjects.push(sprites.create(assets.image`goobel`, SpriteKind.npc))
                        tiles.placeOnTile(worldObjects[worldObjects.length - 1], tiles.getTileLocation(6, 11))
                        controller.moveSprite(Players[0], 0, 0)
                        timer.after(500, function () {
                            story.printCharacterText("next to me is the pc and feeding trough", "Goobel")
                            story.printCharacterText("the pc is used to manage things to do with your animal", "Goobel")
                            story.printCharacterText("you can check their stats pick them up or kill them", "Goobel")
                            story.printCharacterText("the feeding trough is where you put food to feed your animal", "Goobel")
                            story.printCharacterText("your animal will roam this pen", "Goobel")
                            story.printCharacterText("only one animal per pen is allowed", "Goobel")
                            story.printCharacterText("to breed them you will need to put two animals into a breeding pen", "Goobel")
                            story.printCharacterText("there is more but i wont go much further", "Goobel")
                            story.printCharacterText("i suggest you go and buy an animal and bring it back here", "Goobel")
                            story.printCharacterText("ill give you $50 to buy an animal", "Goobel")
                            Playerstats[7] = Playerstats[7] + 50
                            guiText.push(textsprite.create(" $" + Playerstats[7], 15, 1))
                            guiText[guiText.length - 1].setIcon(assets.image`coin`)
                            guiText[guiText.length - 1].setFlag(SpriteFlag.RelativeToCamera, true)
                            guiText[guiText.length - 1].setPosition(130, 10)
                            guiText[guiText.length - 1].z = 3
                            story.printCharacterText("go north from the farm to get to town look for the shop with the words PET on top", "Goobel")
                            story.printCharacterText("ill wait here", "Goobel")
                            Playerstats[1] = 3
                            controller.moveSprite(Players[0], Playerstats[0], Playerstats[0])
                        })
                    })
                }
                if (Playerstats[1] == 4) {
                    story.startCutscene(function () {
                        worldObjects.push(sprites.create(assets.image`goobel`, SpriteKind.npc))
                        tiles.placeOnTile(worldObjects[worldObjects.length - 1], tiles.getTileLocation(6, 11))
                        controller.moveSprite(Players[0], 0, 0)
                        timer.after(500, function () {
                            story.printCharacterText("your back!", "Goobel")
                            story.printCharacterText("go use the pc", "Goobel")
                            story.printCharacterText("select deposit", "Goobel")
                            controller.moveSprite(Players[0], Playerstats[0], Playerstats[0])
                        })
                    })
                }
            }
            if (sprites.readDataNumber(otherSprite, "type") == 2) {
                story.printCharacterText("pc")
                story.showPlayerChoices("Take out", "Stats", "Deposit", "Delete", "Next Page")
                if (story.checkLastAnswer("Take out")) {
                	
                }
                if (story.checkLastAnswer("Deposit")) {
                    if (Playerstats[1] == 4) {
                        if (animalinv[0][0] == 1) {
                            // torso - 0
                            // head - 1
                            // leg1 - 2
                            // leg2 - 3
                            // tail - 4
                            // extra - 5
                            // torso - 0
                            // head - 1
                            // leg1 - 2
                            // leg2 - 3
                            // tail - 4
                            // extra - 5
                            Pens[Playerstats[8]] = [
                            sprites.create(assets.image`dog_torso_1`, SpriteKind.Animal),
                            sprites.create(assets.image`dog_head_1`, SpriteKind.Animal),
                            sprites.create(assets.image`dog_leg1_1`, SpriteKind.Animal),
                            sprites.create(assets.image`dog_leg2_1`, SpriteKind.Animal),
                            sprites.create(assets.image`dog_tail_1`, SpriteKind.Animal),
                            sprites.create(assets.image`blank`, SpriteKind.Player)
                            ]
                            sprites.setDataNumber(Pens[Playerstats[8]][0], "type", animalinv[0][0])
                            sprites.setDataNumber(Pens[Playerstats[8]][0], "gender", animalinv[0][1])
                            animalinv.pop()
                        }
                    }
                }
            }
            if (sprites.readDataNumber(otherSprite, "type") == 3) {
                story.printCharacterText("feed")
            }
        })
    }
})
function save () {
    blockSettings.writeNumber("level", Playerstats[2])
    blockSettings.writeNumber("gender", Playerstats[3])
    blockSettings.writeNumber("pens", Playerstats[4])
}
function load () {
    Playerstats[2] = blockSettings.readNumber("level")
    Playerstats[3] = blockSettings.readNumber("gender")
    Playerstats[4] = blockSettings.readNumber("pens")
}
function isAtLocation (col: number, row: number, sprite: Sprite) {
    if (tiles.locationXY(tiles.locationOfSprite(sprite), tiles.XY.column) == col && tiles.locationXY(tiles.locationOfSprite(sprite), tiles.XY.row) == row) {
        return true
    } else {
        return false
    }
}
function killGui (money: boolean) {
    for (let value8 of guiText) {
        value8.destroy()
    }
    for (let value22 of guiObjects) {
        value22.destroy()
    }
    guiObjects = []
    guiText = []
    if (money) {
        guiText.push(textsprite.create(" $" + Playerstats[7], 15, 1))
        guiText[guiText.length - 1].setIcon(assets.image`coin`)
        guiText[guiText.length - 1].setFlag(SpriteFlag.RelativeToCamera, true)
        guiText[guiText.length - 1].setPosition(130, 10)
        guiText[guiText.length - 1].z = 3
    }
}
function start (first: boolean) {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    if (first) {
        story.startCutscene(function () {
            Playerstats[1] = 1
            story.printCharacterText("Last call for this stop!", "???")
            soundEffects.createSound(soundEffects.waveNumber(WaveType.WhiteNoise), 2500, 550, 250, 100, 0).playUntilDone()
            music.setVolume(255)
            music.thump.playUntilDone()
            story.printCharacterText("Hi im goobel whats your name", "Goobel")
            Playersrings[0] = game.askForString("Name")
            story.printCharacterText("Hello " + Playersrings[0] + " what a cool name", "Goobel")
            story.printCharacterText("welcome to Ikituria the land of the.....", "Goobel")
            story.printCharacterText("i forgot", "Goobel")
            story.printCharacterText("umm.....", "Goobel")
            story.printCharacterText("ive got to ask sorry if its weird but are you a girl or a boy?", "Goobel")
            story.showPlayerChoices("Boy", "Girl")
            Players.push(sprites.create(assets.image`p1`, SpriteKind.Player))
            if (story.checkLastAnswer("Boy")) {
                Players.push(sprites.create(assets.image`hairm`, SpriteKind.Cosmetic))
                Playerstats[3] = 1
            } else {
                Players.push(sprites.create(assets.image`hairf`, SpriteKind.Cosmetic))
                Playerstats[3] = 2
            }
            level(0, true, 11, 7)
            worldObjects.push(sprites.create(assets.image`goobel`, SpriteKind.npc))
            Players[0].z = 1
            Players[1].z = 2
            Players[1].setFlag(SpriteFlag.Ghost, true)
            scene.cameraFollowSprite(Players[0])
            console.log(worldObjects.length)
            tiles.placeOnTile(Players[0], tiles.getTileLocation(11, 7))
            tiles.placeOnTile(worldObjects[16], tiles.getTileLocation(10, 7))
            Playerstats[1] = 2
            if (story.checkLastAnswer("Boy")) {
                story.printCharacterText("looking cool bro", "Goobel")
            } else {
                worldObjects[16].setImage(assets.image`goobel0`)
                story.printCharacterText("now that i can see you clearly you are quite pretty *blushs*", "Goobel")
                worldObjects[16].setImage(assets.image`goobel`)
            }
            story.printCharacterText("anyway ill see you at the farm", "Goobel")
            story.printCharacterText("go west than south", "Goobel")
            story.spriteMoveToLocation(worldObjects[16], 0, worldObjects[16].y, 100)
            worldObjects[16].destroy()
            controller.moveSprite(Players[0], Playerstats[0], Playerstats[0])
        })
    }
}
function tilemaps () {
    if (Playerstats[2] == 0) {
        if (isAtLocation(0, 6, Players[0])) {
            level(1, true, 30, 11)
        }
        if (isAtLocation(0, 7, Players[0])) {
            level(1, true, 30, 12)
        }
    }
    if (Playerstats[2] == 1) {
        if (isAtLocation(31, 11, Players[0])) {
            level(0, true, 1, 6)
        }
        if (isAtLocation(31, 12, Players[0])) {
            level(0, true, 1, 6)
        }
        if (isAtLocation(8, 23, Players[0]) || isAtLocation(9, 23, Players[0])) {
            level(2, true, 7, 1)
        }
        if (isAtLocation(16, 0, Players[0]) || isAtLocation(17, 0, Players[0]) || (isAtLocation(18, 0, Players[0]) || isAtLocation(19, 0, Players[0]))) {
            level(6, true, 2, 4)
            if (Playerstats[2] == 3) {
                story.printCharacterText("i should go to the pet shop", Playersrings[0])
            }
        }
    }
    if (Playerstats[2] == 2) {
        if (isAtLocation(0, 8, Players[0])) {
            level(3, true, 30, 8)
            if (Playerstats[1] == 2) {
                story.startCutscene(function () {
                    worldObjects.push(sprites.create(assets.image`goobel`, SpriteKind.npc))
                    tiles.placeOnTile(worldObjects[worldObjects.length - 1], tiles.getTileLocation(13, 5))
                    controller.moveSprite(Players[0], 0, 0)
                    story.spriteMoveToLocation(Players[0], 220, 110, 100)
                    story.printCharacterText("welcome to the farm", "Goobel")
                    story.printCharacterText("who owns this farm", Playersrings[0])
                    story.printCharacterText("you now", "Goobel")
                    story.printCharacterText("it was mine but my arms are too stubby to work this place", "Goobel")
                    story.printCharacterText("does it have a name", Playersrings[0])
                    story.printCharacterText("no you can name it", "Goobel")
                    timer.after(500, function () {
                        Playersrings[1] = game.askForString("Farm Name")
                        story.printCharacterText("cool name", "Goobel")
                        story.printCharacterText("anyway ill give a tour", "Goobel")
                        story.printCharacterText("here is the house", "Goobel")
                        story.printCharacterText("this is where you can sleep", "Goobel")
                        story.printCharacterText("and you can use the pc to pay the bills", "Goobel")
                        story.printCharacterText("there is also storage boxes you can use to store items", "Goobel")
                        story.printCharacterText("lets go to the animal pens", "Goobel")
                        story.printCharacterText("take the path north", "Goobel")
                        story.spriteMoveToLocation(worldObjects[worldObjects.length - 1], 405, 110, 100)
                        story.spriteMoveToLocation(worldObjects[worldObjects.length - 1], 405, 0, 100)
                        controller.moveSprite(Players[0], Playerstats[0], Playerstats[0])
                        worldObjects[worldObjects.length - 1].destroy()
                    })
                })
            }
        }
        if (isAtLocation(7, 0, Players[0])) {
            level(1, true, 9, 22)
        }
    }
    if (Playerstats[2] == 3) {
        if (isAtLocation(25, 0, Players[0])) {
            level(4, true, 5, 38)
        }
        if (isAtLocation(31, 8, Players[0])) {
            if (Playerstats[1] != 2) {
                level(2, true, 1, 8)
            }
        }
    }
    if (Playerstats[2] == 4) {
        if (isAtLocation(5, 39, Players[0]) || isAtLocation(4, 39, Players[0])) {
            if (Playerstats[1] != 2) {
                level(3, true, 25, 1)
            }
        }
    }
    if (Playerstats[2] == 5) {
        if (isAtLocation(5, 15, Players[0])) {
            level(3, true, 25, 1)
        }
        if (isAtLocation(5, 11, Players[0])) {
            if (controller.A.isPressed()) {
                tiles.placeOnTile(Players[0], tiles.getTileLocation(5, 8))
                Players[0].sayText("A", 200, false)
            }
        }
        if (isAtLocation(5, 9, Players[0])) {
            if (controller.A.isPressed()) {
                tiles.placeOnTile(Players[0], tiles.getTileLocation(5, 12))
                Players[0].sayText("A", 200, false)
            }
        }
    }
    if (Playerstats[2] == 6) {
        if (isAtLocation(2, 5, Players[0])) {
            level(1, true, 16, 1)
        }
        if (isAtLocation(2, 2, Players[0])) {
            level(7, true, 1, 4)
            story.startCutscene(function () {
                controller.moveSprite(Players[0], 0, 0)
                story.printCharacterText("hey kid", "???")
                story.spriteMoveToLocation(Players[0], 20, 20, 100)
                story.printCharacterText("hi", Playersrings[0])
                story.printCharacterText("are you here to buy a pet", "???")
                story.printCharacterText("yes", Playersrings[0])
                story.printCharacterText("my name is shade", "shade")
                story.printCharacterText("im the only person on this island who can get you purebreds", "shade")
                story.printCharacterText("they are wild caught", "shade")
                story.printCharacterText("how much you got", "shade")
                story.printCharacterText("$50", Playersrings[0])
                story.printCharacterText("perfect", "shade")
                story.printCharacterText("ill give you a deal", "shade")
                story.printCharacterText("normally these pets are very expensive", "shade")
                story.printCharacterText("but because i havn't had a customer in a couple years", "shade")
                story.printCharacterText("you can have one pet for $50", "shade")
                story.printCharacterText("anyone you want", "shade")
                story.printCharacterText("come talk to me when your ready", "shade")
                controller.moveSprite(Players[0], Playerstats[0], Playerstats[0])
            })
        }
    }
    if (Playerstats[2] == 7) {
        if (isAtLocation(1, 5, Players[0])) {
            level(6, true, 2, 3)
        }
    }
}
let Pens: Sprite[][] = []
let animalinv: number[][] = []
let bugfix = 0
let worldObjects: Sprite[] = []
let guiText: TextSprite[] = []
let guiObjects: Sprite[] = []
let Playersrings: string[] = []
let Players: Sprite[] = []
let Playerstats: number[] = []
Players = []
Playerstats = []
Playersrings = []
guiObjects = []
guiText = []
worldObjects = []
// Speed - 0
Playerstats.push(250)
// inGame - 1
Playerstats.push(0)
// level - 2
Playerstats.push(0)
// gender - 3
Playerstats.push(0)
// pens - 4
Playerstats.push(2)
// inGui? - 5
Playerstats.push(0)
// selected gui - 6
Playerstats.push(0)
// money - 7
Playerstats.push(0)
// current pen - 8
Playerstats.push(0)
// Player Name - 0
Playersrings.push("")
// Farm Name - 1
Playersrings.push("")
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999bbbb999999999999999999999999999999999999bbbb999999999999999999999999999999999999bbbb999999999999999999999999999999999999bbbb9999999999999999999
    99999999999bbbbbbbbbbb99999999999999999999999999999bbbbbbbbbbb99999999999999999999999999999bbbbbbbbbbb99999999999999999999999999999bbbbbbbbbbb999999999999999999
    99999999bbbbbbbbbbbbbb99999999999999999999999999bbbbbbbbbbbbbb99999999999999999999999999bbbbbbbbbbbbbb99999999999999999999999999bbbbbbbbbbbbbb999999999999999999
    999999bbbbbbbbbbbbbbbb999999999999999999999999bbbbbbbbbbbbbbbb999999999999999999999999bbbbbbbbbbbbbbbb999999999999999999999999bbbbbbbbbbbbbbbb999999999999999999
    99999bbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbb999999999999999999
    99999bbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbb999999999999999999
    9999bbbbbbbbbbbbbbbbbbb999999999999999999999bbbbbbbbbbbbbbbbbbb999999999999999999999bbbbbbbbbbbbbbbbbbb999999999999999999999bbbbbbbbbbbbbbbbbbb99999999999999999
    9999bbbbbbbbbbbbbbbbbbb999999999999999999999bbbbbbbbbbbbbbbbbbb999999999999999999999bbbbbbbbbbbbbbbbbbb999999999999999999999bbbbbbbbbbbbbbbbbbb99999999999999999
    999bbbbbbbbbbbbbbbbbbbb999999bbb99999999999bbbbbbbbbbbbbbbbbbbb999999bbb99999999999bbbbbbbbbbbbbbbbbbbb999999bbb99999999999bbbbbbbbbbbbbbbbbbbb999999bbb99999999
    999bbbbbbbbbbbbbbbbbbbb99999bbbbb9999999999bbbbbbbbbbbbbbbbbbbb99999bbbbb9999999999bbbbbbbbbbbbbbbbbbbb99999bbbbb9999999999bbbbbbbbbbbbbbbbbbbb99999bbbbb9999999
    99bbbbbbbbbbbbbbbbbbbbb99999bbbbb999999999bbbbbbbbbbbbbbbbbbbbb99999bbbbb999999999bbbbbbbbbbbbbbbbbbbbb99999bbbbb999999999bbbbbbbbbbbbbbbbbbbbb99999bbbbb9999999
    99bbbbbbbbbbbbbbbbbbbbb99999bbbbb999999999bbbbbbbbbbbbbbbbbbbbb99999bbbbb999999999bbbbbbbbbbbbbbbbbbbbb99999bbbbb999999999bbbbbbbbbbbbbbbbbbbbb99999bbbbb9999999
    99bbbbbbbbbbbbbbbbbbbbb99999bbbbbb99999999bbbbbbbbbbbbbbbbbbbbb99999bbbbbb99999999bbbbbbbbbbbbbbbbbbbbb99999bbbbbb99999999bbbbbbbbbbbbbbbbbbbbb99999bbbbbb999999
    9bbbbbbbbbbbbbbbbbbbbbb99999bbbbbb9999999bbbbbbbbbbbbbbbbbbbbbb99999bbbbbb9999999bbbbbbbbbbbbbbbbbbbbbb99999bbbbbb9999999bbbbbbbbbbbbbbbbbbbbbb99999bbbbbb999999
    9bbbbbbbbbbbbbbbbbbbbbb99999bbbbbb9999999bbbbbbbbbbbbbbbbbbbbbb99999bbbbbb9999999bbbbbbbbbbbbbbbbbbbbbb99999bbbbbb9999999bbbbbbbbbbbbbbbbbbbbbb99999bbbbbb999999
    9bbbbbbbbbbbbbbbbbbbbbb9999bbbbbbb9999999bbbbbbbbbbbbbbbbbbbbbb9999bbbbbbb9999999bbbbbbbbbbbbbbbbbbbbbb9999bbbbbbb9999999bbbbbbbbbbbbbbbbbbbbbb9999bbbbbbb999999
    bbbbbbbbbbbbbbb8bbbbbbb9999bbbbbbb9999bbbbbbbbbbbbbbbbb8bbbbbbb9999bbbbbbb9999bbbbbbbbbbbbbbbbb8bbbbbbb9999bbbbbbb9999bbbbbbbbbbbbbbbbb8bbbbbbb9999bbbbbbb9999bb
    bbbbbbbbbbbbbb88bbbbbbb9999bbbbbbb99bbbbbbbbbbbbbbbbbb88bbbbbbb9999bbbbbbb99bbbbbbbbbbbbbbbbbb88bbbbbbb9999bbbbbbb99bbbbbbbbbbbbbbbbbb88bbbbbbb9999bbbbbbb99bbbb
    bbbbbbbbbbbbbb88bbbbbbb9999bbbbbbbb9bbbbbbbbbbbbbbbbbb88bbbbbbb9999bbbbbbbb9bbbbbbbbbbbbbbbbbb88bbbbbbb9999bbbbbbbb9bbbbbbbbbbbbbbbbbb88bbbbbbb9999bbbbbbbb9bbbb
    bbbbbbbbbbbbb8888bbbbbb9999bbbbbbbbbbbbbbbbbbbbbbbbbb8888bbbbbb9999bbbbbbbbbbbbbbbbbbbbbbbbbb8888bbbbbb9999bbbbbbbbbbbbbbbbbbbbbbbbbb8888bbbbbb9999bbbbbbbbbbbbb
    bbbbbbbbbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888bbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbb888bbbbbbbbbbbbbbb6666666bbbbbbbbbbbbbbb888bbbbbbbbbbbbbbb6666666bbbbbbbbbbbbbbb888bbbbbbbbbbbbbbb6666666bbbbbbbbbbbbbbb888bbbbbbbbbbbbbbb6666666bb
    bbbbbbbbbbbb88888bbbbbbbbbbbb66666666666bbbbbbbbbbbb88888bbbbbbbbbbbb66666666666bbbbbbbbbbbb88888bbbbbbbbbbbb66666666666bbbbbbbbbbbb88888bbbbbbbbbbbb66666666666
    6bbbbbbbbbbb8888888bbbbbbbbb6666666666666bbbbbbbbbbb8888888bbbbbbbbb6666666666666bbbbbbbbbbb8888888bbbbbbbbb6666666666666bbbbbbbbbbb8888888bbbbbbbbb666666666666
    666bbbbbbbb888888bbbbbbbbb66666666666666666bbbbbbbb888888bbbbbbbbb66666666666666666bbbbbbbb888888bbbbbbbbb66666666666666666bbbbbbbb888888bbbbbbbbb66666666666666
    6666bbbbb888888888bbbbbbb6666666666666666666bbbbb888888888bbbbbbb6666666666666666666bbbbb888888888bbbbbbb6666666666666666666bbbbb888888888bbbbbbb666666666666666
    66666bbbbbb88888888bbbbb666666666666666666666bbbbbb88888888bbbbb666666666666666666666bbbbbb88888888bbbbb666666666666666666666bbbbbb88888888bbbbb6666666666666666
    666666bb668888888bbbbbb66666666666666666666666bb668888888bbbbbb66666666666666666666666bb668888888bbbbbb66666666666666666666666bb668888888bbbbbb66666666666666666
    666666666666888888bbbb668666666666666666666666666666888888bbbb668666666666666666666666666666888888bbbb668666666666666666666666666666888888bbbb668666666666666666
    6666666666888888888bb66686666666666666666666666666888888888bb66686666666666666666666666666888888888bb66686666666666666666666666666888888888bb6668666666666666666
    6666666668888888888866688666666666666666666666666888888888886668866666666666666666666666688888888888666886666666666666666666666668888888888866688666666666666666
    6666666888888888886666668866666666666666666666688888888888666666886666666666666666666668888888888866666688666666666666666666666888888888886666668866666666666666
    6666666668888888886666688666666666666666666666666888888888666668866666666666666666666666688888888866666886666666666666666666666668888888886666688666666666666666
    6666666668888888666666888866666666666666666666666888888866666688886666666666666666666666688888886666668888666666666666666666666668888888666666888866666666666666
    6666666688688888888668888886666666666666666666668868888888866888888666666666666666666666886888888886688888866666666666666666666688688888888668888886666666666666
    6666666666888888888866688666666666668666666666666688888888886668866666666666866666666666668888888888666886666666666686666666666666888888888866688666666666668666
    6666666688888888888668888886666666668666666666668888888888866888888666666666866666666666888888888886688888866666666686666666666688888888888668888886666666668666
    6668666888888888888688888888666666688866666866688888888888868888888866666668886666686668888888888886888888886666666888666668666888888888888688888888666666688866
    6668866666888888888888888866666666668866666886666688888888888888886666666666886666688666668888888888888888666666666688666668866666888888888888888866666666668866
    6688666688888888888888888888666666688666668866668888888888888888888866666668866666886666888888888888888888886666666886666688666688888888888888888888666666688666
    6668866888888888888888888888866666888866666886688888888888888888888886666688886666688668888888888888888888888666668888666668866888888888888888888888866666888866
    6688888888888888888888888886666666688886668888888888888888888888888666666668888666888888888888888888888888866666666888866688888888888888888888888886666666688886
    6668888888888888888888888888866666888866666888888888888888888888888886666688886666688888888888888888888888888666668888666668888888888888888888888888866666888866
    6668888888888888888888888888886668888886666888888888888888888888888888666888888666688888888888888888888888888866688888866668888888888888888888888888886668888886
    6688888888888888888888888888666666888866668888888888888888888888888866666688886666888888888888888888888888886666668888666688888888888888888888888888666666888866
    6888888888888888888888888888886688888886688888888888888888888888888888668888888668888888888888888888888888888866888888866888888888888888888888888888886688888886
    6688888888888888888888888888888668888888668888888888888888888888888888866888888866888888888888888888888888888886688888886688888888888888888888888888888668888888
    6688888888888888888888888888886688888888668888888888888888888888888888668888888866888888888888888888888888888866888888886688888888888888888888888888886688888888
    8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
guiText.push(textsprite.create("Press A to Start"))
guiText[0].setPosition(80, 80)
load()
game.onUpdate(function () {
    input2()
    if (Playerstats[1] >= 2) {
        tilemaps()
        Players[1].setPosition(Players[0].x, Players[0].y)
    }
    if (Playerstats[1] >= 4) {
        for (let value9 of Pens) {
            value9[1].setPosition(value9[0].x, value9[0].y)
            value9[2].setPosition(value9[0].x, value9[0].y)
            value9[3].setPosition(value9[0].x, value9[0].y)
            value9[4].setPosition(value9[0].x, value9[0].y)
            value9[5].setPosition(value9[0].x, value9[0].y)
        }
    }
})
game.onUpdateInterval(2000, function () {
    save()
})
game.onUpdateInterval(500, function () {
    if (Playerstats[1] >= 3) {
        if (Playerstats[5] == 0) {
            guiText[0].setText(" $" + Playerstats[7])
        }
    }
})
