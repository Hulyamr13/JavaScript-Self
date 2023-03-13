let count = Number(gets());

for (let i = 0; i < count; i++) {
    array = gets().split(',').map(Number);
    let isSorted = true;

    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            isSorted = false
        }
    }
    print(isSorted);
}