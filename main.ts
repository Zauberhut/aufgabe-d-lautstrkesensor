basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    100,
    0,
    180
    ))
    basic.pause(100)
})
