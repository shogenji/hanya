/**
 * Test for Building Extensions.
 */
//% color=190 weight=100 icon="\uf0c3" block="TestBlocks"
//% groups="['Ha', 'Hi']"
namespace hanya {
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
    export function showSmallHeart(duration: number): void {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(duration)
        basic.clearScreen()
        basic.pause(duration)
    }
}
