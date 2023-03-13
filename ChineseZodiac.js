let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let year = Number(gets());
let zodiac = year % 12;
let sign = ``;

switch (zodiac) {
    case 0:
        sign = `Monkey`;
        break;
    case 1:
        sign = `Rooster`;
        break;
    case 2:
        sign = `Dog`;
        break;
    case 3:
        sign = `Pig`;
        break;
    case 4:
        sign = `Rat`;
        break;
    case 5:
        sign = `Ox`;
        break;
    case 6:
        sign = `Tiger`;
        break;
    case 7:
        sign = `Hare`;
        break;
    case 8:
        sign = `Dragon`;
        break;
    case 9:
        sign = `Snake`;
        break;
    case 10:
        sign = `Horse`;
        break;
    case 11:
        sign = `Ram`;
        break;
}
print(sign);