const vaxTrail = (peoples) => {
    peoples.sort(function (a, b) {
        return a.age - b.age;
    });


    const AA = peoples.filter(people => people.age >= 20 && people.age <= 30 && people.temperature < 100)
    const BB = peoples.filter(people => people.age >= 31 && people.age <= 40 && people.temperature < 100)
    const CC = peoples.filter(people => people.age >= 41 && people.age <= 50 && people.temperature < 100)
    const DD = peoples.filter(people => people.temperature >= 100)

    return { A: AA, B: BB, C: CC, D: DD }
}


// console.log(vaxTrail([
//     { name: 'sunil', age: 21, temperature: 98 },
//     { name: 'Biplap', age: 22, temperature: 98 },
//     { name: 'Kabir', age: 38, temperature: 99 },
//     { name: 'Rahul', age: 37, temperature: 99 },
//     { name: 'Paul', age: 42, temperature: 98 },
//     { name: 'Kat', age: 41, temperature: 98 },
//     { name: 'Nayem', age: 55, temperature: 100 },
//     { name: 'Sabnaj', age: 51, temperature: 101 }
// ]));