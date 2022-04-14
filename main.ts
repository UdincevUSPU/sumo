function стоп () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
function Вперед () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.analogWritePin(AnalogPin.P1, лево)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function Право () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, лево)
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
let лево = 0
let право = 0
право = 600
лево = 600
basic.forever(function () {
    Вперед()
    basic.pause(10000)
})
