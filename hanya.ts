/**
 * Test for Building Extensions.
 */
//% color=190 weight=100 icon="\uf0c3" block="Test Blocks"
namespace hanya {
    //% blockId=show_heart
    //% block="show heart | for $duration x 0.1 seconds"
    //% duration.min=0 duration.max=1000 duration.defl=1
    export function showHeart(duration: number): void {
        basic.showIcon(IconNames.Heart)
        basic.pause(duration * 100)
        basic.clearScreen()
        basic.pause(duration * 100)
    }
}
