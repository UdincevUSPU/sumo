function стоп () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P1, 0)
}
function Вперед () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.analogWritePin(AnalogPin.P1, лево)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function search () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.analogWritePin(AnalogPin.P1, лево)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
}
function Право () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, лево)
}
function Рывок () {
    pins.analogWritePin(AnalogPin.P0, 900)
    pins.analogWritePin(AnalogPin.P1, 900)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}
function назад () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P1, лево)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
}
function Лево () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, лево)
}
let acc = 0
let dis = 0
let line_value = 0
let a = 0
let лево = 0
let право = 0
право = 200
лево = 200
let dline = 100
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        a = 1
    }
    if (a) {
        line_value = pins.analogReadPin(AnalogPin.P2)
        if (line_value < dline) {
            назад()
            basic.pause(1000)
            назад()
            basic.pause(1)
        }
        dis = sonar.ping(
        DigitalPin.P9,
        DigitalPin.P8,
        PingUnit.Centimeters
        )
        if (dis < 5) {
            Рывок()
            basic.pause(1)
        }
        dis = sonar.ping(
        DigitalPin.P9,
        DigitalPin.P8,
        PingUnit.Centimeters
        )
        if (dis > 5) {
            search()
            basic.pause(100)
        }
        acc = input.rotation(Rotation.Pitch)
        if (acc > 5) {
            назад()
            basic.pause(1)
        }
    }
})
