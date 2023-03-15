let input = ['peshoishere','3','eho','piere','telerik'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let title = gets();
let num = +gets();

for (let i = 0; i < num; i++)
{
    let keyword = gets();
    let remaining = '';
    let lastIndex = 0;
    let tempTitle = title;
    for (let j = 0; j < keyword.length; j++)
    {
        if (lastIndex > tempTitle.length)
        {
            console.log('No such title found!');
            break;
        }
        let letterIndex = tempTitle.indexOf(keyword[j]);
        if (letterIndex == -1)
        {
            console.log('No such title found!');
            break;
        }

        remaining = remaining + tempTitle.slice(lastIndex, letterIndex);
        lastIndex = letterIndex + 1;
        tempTitle = tempTitle.slice(lastIndex, tempTitle.length)
        lastIndex = 0;
        if (j == keyword.length -1)
        {
            remaining = remaining + tempTitle.slice(lastIndex, tempTitle.length);
              console.log(remaining);
    title = remaining;
    break;
        }
          tempTitle = tempTitle.slice(lastIndex, tempTitle.length)
        lastIndex = 0;
    }
  
}