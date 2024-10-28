console.log("***********start*************")

//let data = ['ID','Name','Occupation','Age'\n'42'',Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"];

let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,DoctorAssistant,26";
let cell = "";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cellnum="1";
console.log(data)
//console.log('inital outpuit')
//let char = data.length
//console.log(char)

for (let i = 0; i < data.length; i++) {
   let char = data[i];

    //console.log(char)

   if (char == "," || char == "\n") {
    for(char>0; char<',';char++)
    cell=char.length;
    console.log(cell)
    let now=data[i]
    //console.log(now)



    if(cell !==0){}
        switch(cell){
            case 1:
                cell1 = cell;
            case 2 :
                cell2 = cell;
                
                    case 3:
                        cell3 = cell;
                        break;
                    case 4:
                        cell4 = cell;
                    
                
        }break;
   }
       
   }

//console.log(cell)
   




//cell = data.length
//if(cell == ',' || cell == '\n'){
  //  console.log("the is a  here", newData)
//}
console.log('******** testing begin******')

let text = "hello, World, welcome, home \n";
let commaIndex = text.indexOf(',')
let commaIndex2 = text.indexOf('\n')
let p;
//console.log(commaIndex)

//for(p)


/*

if (commaIndex !== -1){
    let lengthbeforecomma = commaIndex
    console.log(lengthbeforecomma)
    for (p = 0; p < lengthbeforecomma; p++){
        newtext = text[p]
       // console.log(newtext)
        for(let m = 0; m<=lengthbeforecomma; m++){
            //switch()
            cell= newtext;
            cell1 = newtext;
            console.log(cell, cell1)
        }
        //
        //cell1 = newtext;
        //console.log(cell1)

        



        //console.log(cell1, cell2)
        
    }

    
    //console.log(cell)

    
}
    */
   
console.log(Object.keys(vehicle));
console.log(Object.values(vehicle));

// what variable would I use?
// the name of my cat? a string
let catName = 'Arrow';
// the age of my cat? a number
let catAge = 4;
// my cat's favorite things? an array
const favoriteThings = ['food', 'toys', 'blankets', 'keyboards'];
// can my cat speak French? boolean
let speaksFrench = false;
// can my cat solve a Rubik's cube? boolean
let solveCube = false;
// one variable to describe my cat? object
const myCat = {
    catName: 'Arrow',
    catAge: 4,
    favoriteThings: ['food', 'toys', 'blankets', 'keyboards'],
    speaksFrench: false
}

console.log('======================================================================');
console.log(myCat);
console.log(myCat.catName);
console.log(myCat.favoriteThings);
console.log(myCat.favoriteThings[2]);
console.log('======================================================================');


console.log(myCats);
console.log('======================================================================');
console.log(myCats[1]);
console.log('======================================================================');
console.log(myCats[1].catAge);

console.log('======================================================================');
// we know how to iterate through an array
for ( const cat of myCats) {
    console.log(cat.catName);
    // each cat is an object
    // you can iterate through that using
    // for (const key in cat)
}

console.log('******** Array begin******')

const myCats = [
    {
        catName: 'Arrow',
        catAge: 4,
        favoriteThings: ['food', 'toys', 'blankets', 'keyboards'],
        speaksFrench: false
    }, 
    {
        catName: 'Horatio',
        catAge: 8,
        favoriteThings: ['food', 'food', 'blankets'],
        speaksFrench: false
    },
    {
        catName: 'Bud',
        catAge: 1.5,
        favoriteThings: ['food', 'toys', 'plastic'],
        speaksFrench: false
    },
    {
        catName: 'Spot',
        catAge: 1.5,
        favoriteThings: ['food', 'toys', 'people', 'keyboards'],
        speaksFrench: false
    }
]
