radio.setTransmitPower(3)
radio.setGroup(111)
let oldData = 0
basic.forever(function on_forever() {
    
})
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let data = Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    whaleysans.showNumber(data)
    if (data > 70) {
        music.playTone(Note.C, music.beat())
    } else if (data > 60) {
        music.playTone(Note.D, music.beat())
    } else if (data > 50) {
        music.playTone(Note.E, music.beat())
    } else if (data > 40) {
        music.playTone(Note.F, music.beat())
    }
    
    basic.pause(500)
    let oldData = data
})
