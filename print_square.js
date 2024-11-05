/**
 * column 2nd loop
 * |
 * v
 * # # # # # <-- row 1st loop
 * # # # # #
 * # # # # #
 * # # # # #
 * # # # # #
 * 
 * # <- row 1
 * # <- row 2
 * # <- row 3
 * #
 * #
 */

// loop in a loop
console.log('Print square')
for (let i = 0; i < 5; i++) {
    let display = ""
    for (let j = 0; j < 5; j++) {
        display = display + " #"
    }
    // display = "#####"
    console.log(display)
}

/**
 * display = display + "#"
 * display = "" + "#" = "#"
 * display = "#" + "#" = "##"
 * display = "##" + "#" = "###"
 * display = "###" + "#" = "####"
 * display = "####" + "#" = "#####"
 * 
 */
