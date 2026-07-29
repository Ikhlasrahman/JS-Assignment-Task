// console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]));

// let arr = [{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]

// let highestRating = arr[0];

// for (let value of arr){
//     // console.log(value)

//     if (value.rating>highestRating.rating){
//         highestRating = value;
//     }
// }


// console.log(highestRating.name.toUpperCase())


function topRatedRestaurant(restaurants) {

    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return 'Invalid'
    }
    //      Write your code here

    let highestRating = restaurants[0];

    for (let value of restaurants) {
        if (value.rating > highestRating.rating) {
            highestRating = value;
        }
    }

    return highestRating.name.toUpperCase();

}

console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]))
console.log(topRatedRestaurant([]))

