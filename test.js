
let data = "ade,tinu, tope, blessing";
char = data.length
let array = [];
let letters = '';
for (let i = 0; i< data.length; i++){
    letters = data[i]
   // array.push(data[i])
    //console.log( letters)
    if(letters == (",")){
        array.push('hello')
        console.log( array)

       // for(let a=0;a<letters.length; a++){
     //    let words = letters[a]
       // console.log(words)
        //console.log(data[i])
        //console.log('i see , on my way')
       // array.push(letters)
        //console.log(letters[i])
        }
    }


    let title = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let splitRows = title.split("\n");
console.log(splitRows);
let numRow = splitRows.length;
console.log(numRow);
const test = [];
for(i = 0; i < numRow; i++){
    test.push(splitRows[i].split(","));
}
console.log(test);
    

