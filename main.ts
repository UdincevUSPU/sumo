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
}
function назад () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P1, лево)
}
function Лево () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, лево)
}
let a = 0
let лево = 0
let право = 0
право = 200
лево = 200
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        a = 1
    }
    if (a) {
        if (sonar.ping(
        DigitalPin.P9,
        DigitalPin.P8,
        PingUnit.Centimeters
        ) > 15) {
            if (pins.analogReadPin(AnalogPin.P2) < 500) {
                Лево()
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . # . # .
                    . # . # .
                    # . . . #
                    `)
            }
        } else {
            if (pins.analogReadPin(AnalogPin.P2) < 500) {
                Рывок()
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            } else {
                стоп()
            }
        }
    }
})
