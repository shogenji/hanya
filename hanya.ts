/**
 * Test for Building Extensions.
 */
//% color=190 weight=100 icon="\uf0c3" block="TestBlocks"
//% groups="['Ha', 'Hi']"
namespace hanya {

    
    enum Motors {
        Left = 0,
        Right = 1,
        Both = 2
    }

    //% blockId=show_heart
    //% block="show heart | for $duration x 0.1 seconds"
    //% duration.min=0 duration.max=1000 duration.defl=1
    //% group="Ha"
    export function showHeart(duration: number): void {
        basic.showIcon(IconNames.Heart)
        basic.pause(duration * 100)
        basic.clearScreen()
        basic.pause(duration * 100)
    }

    //% blockId=show_small_heart
    //% block="Show small heart | for $duration"
    //% duration.min=0 duration.max=100000 duration.defl=1000
    //% duration.shadow="timePicker"
    //% group="Hi"
    //% subcategory="Settings"
    export function showSmallHeart(duration: number): void {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(duration)
        basic.clearScreen()
        basic.pause(duration)
    }

    //% blockId=stop
    //% weight=60
    //% block="Stop || for $duration"
    //% block.loc.ja="止まる ||（ミリ秒） $duration"
    //% duration.min=0 duration.max=1000000 duration.defl=0
    //% duration.shadow="timePicker"
    //% group="Movements"
    export function stop(duration?: number): void {
        motorOff(Motors.Both)
        basic.pause(duration)
    }

    function motorOff(motors: Motors): void {
        switch (motors) {
            case Motors.Left:
                pins.digitalWritePin(DigitalPin.P14, 0)
                break
            case Motors.Right:
                pins.digitalWritePin(DigitalPin.P16, 0)
                break
            case Motors.Both:
                pins.digitalWritePin(DigitalPin.P14, 0)
                pins.digitalWritePin(DigitalPin.P16, 0)
                break
            default:
            // Stop - something has gone wrong
        }
    }

}
