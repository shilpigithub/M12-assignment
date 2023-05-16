// STEP 1
// function Cat() {
//     console.log('Cat instance is created');
// }

// const Dog = function() {
//     console.log('Dog instance is created');
// }

// STEP 2
// const cat1 = new Cat()
// const dog1 = new Dog()


// STEP 3
// class Animal {
//     constructor(){
//     }
//     displayMsg = function() {
//         console.log('The Animal has been created')
//     }
// }
// const animal1 = new Animal()
// animal1.displayMsg()

// STEP 4
// class Animal {
//     constructor(msg){
//         console.log(msg)
//     }   
// }
// const animal1 = new Animal('The message in constructor')


// STEP 5
// class Animal {
//     constructor( type, breed, color, height, length){
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }

// const animal1 = new Animal('dog', 'poodle', 'brown', 18 ,15)
// console.log(animal1.height)

// STEP 6
// class Animal {
//     constructor( type, breed, color, height, length){
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
// }

// const animal1 = new Animal('dog', 'poodle', 'brown', 18 ,15)

// for (const prop in animal1) {
//     console.log(`animal1.${prop} = ${animal1[prop]}`)
//   }

// STEP 7

// class Animal {
//     constructor( type, breed, color, height, length){
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }

//     speak = function() {
//         if(this.type === 'dog') {
//             console.log(`The ${this.color} dog is barking`)
//         } else if(this.type === 'cat') {
//             console.log(`The ${this.color} cat is meowing`)
//         }

//     }
// }

// const dog1 = new Animal('dog', 'poodle', 'brown', 18 ,15)
// const cat1 = new Animal('cat','Bengal', 'white', 25 ,20)
// dog1.speak()
// cat1.speak()

// STEP 8

function Animal(type, breed, color, height, length) {
   
    let _type = type
    let _breed = breed
    let _color = color
    let _height = height
    let _length = length

    let checkType = function() { // Private function
        if(_type === 'dog') {
            return _type
        } else if(_type === 'cat') {
            return _type
        }
    }     

    this.speak = function() {
       return `${checkType()} has made a noise`
    }
}

const dog1 = new Animal('dog', 'poodle', 'brown', 18 ,15)
const cat1 = new Animal('cat','Bengal', 'white', 25 ,20)
console.log(dog1.speak())
console.log(cat1.speak())


// STEP 9

String.prototype.findWords = function(str,search) {
    let tmpStr = str;
    let tmpArr = tmpStr.split(' ');
    let wordsCount = 0;
    console.log(tmpArr);
    for (i = 0; i < tmpArr.length; i++) {
       let word = tmpArr[i];
       if(word === search)
           wordsCount++;
    }
    return wordsCount;
   
   }
   
   const myObj = new String;
   const str = 'This is is is first sentence. This is second.';
   const search = 'first';
   
   alert(`the number of times the word '${search}' found in paragraph is ${myObj.findWords(str,search)}`);