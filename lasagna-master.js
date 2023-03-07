/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
    if (remainingTime === 0) {
        return "Lasagna is done.";
    } else if (remainingTime > 0) {
        return "Not done, please wait.";
    } else {
        return "You forgot to set the timer.";
    }
}

export function preparationTime(layers, time) {
    if (time) {
        return layers.length * time;
    } else {
        return layers.length * 2;
    }
}

export function quantities(layers) {
    let noodles = 0;
    let sauce = 0;
    for (let layer in layers) {
        switch (layers[layer]) {
            case "noodles":
                noodles += 50;
                break;
            case "sauce":
                sauce += 0.2;
                break;
            default:
                break;
        }
    }
    return {
        "noodles": noodles,
        "sauce": sauce
    }
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
    let scaledRecipe = {};
    for (let item in recipe) {
        scaledRecipe[item] = recipe[item] / 2 * portions;
    }
    return scaledRecipe;
}