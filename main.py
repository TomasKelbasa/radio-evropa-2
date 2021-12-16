radio.set_transmit_power(3)
radio.set_group(111)

oldData = 0

def on_forever():
    pass
basic.forever(on_forever)

def on_received_number(receivedNumber):
    data = abs(radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH))
    whaleysans.show_number(data)
    if(data > 70):
        music.play_tone(Note.C, music.beat())
    elif(data > 60):
        music.play_tone(Note.D, music.beat())
    elif(data > 50):
        music.play_tone(Note.E, music.beat())
    elif(data > 40):
        music.play_tone(Note.F, music.beat())
    
    
    basic.pause(500)
    oldData = data
radio.on_received_number(on_received_number)