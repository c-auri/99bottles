import { downTo, capitalize } from './helpers';

const MAX_BOTTLES = 99

export class Bottles {
    song() {
        return this.verses(MAX_BOTTLES, 0)
    }

    verses(from, to) {
        return downTo(from, to)
            .map((num) => this.verse(num))
            .join(`\n`)
    }

    verse(num) {
        return capitalize(numberOfBottlesOfBeerOnTheWall(num)) + ", " +
            numberOfBottlesOfBeer(num) + ".\n" +
            takeOneDownOrBuySomeMore(num) +
            numberOfBottlesOfBeerOnTheWall(num - 1) + ".\n";
    }
}

function numberOfBottlesOfBeerOnTheWall(num) {
    return numberOfBottlesOfBeer(num) + " on the wall"
}

function numberOfBottlesOfBeer(num) {
    if (num < 0)  num = MAX_BOTTLES 
    if (num == 0) num = "no more"

    return `${num} bottle${num != 1 ? "s" : ""} of beer` 
}

function takeOneDownOrBuySomeMore(num) {
    if (num > 0) {
        return `Take ${num > 1 ? "one" : "it"} down and pass it around, ` 
    } else {
        return `Go to the store and buy some more, ` 
    }
}
