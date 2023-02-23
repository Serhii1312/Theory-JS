// 1 Функції
// Function Declaration
//function greet(name) {
//    console.log('Привіт - ', name)
//}

// Function Expression
//const greet2 = function greet2(name){
  //  console.log('Привіт 2 -', name)
//}

//greet('Sonya')
//greet2('Sonya')

//console.log(typeof greet)
//console.dir(greet)

// 2 Анонімні функції

//let counter = 0
//const interval = setInterval(function() {
  //  if (counter === 5) {
   //     clearInterval(interval)
   // } else {
    //console.log(++counter)
   // }
//}, 1000)

// 3 Стрілкові функії
//function greet(name) {
  //  console.log('Привіт - ', name)
//}

//const arrow = (name) => {
   // console.log('Привіт - ', name)
//}

//const arrow2 = name => console.log('Привіт - ', name)

//arrow2('son')
//arrow('Sonya')

//const pow2 = num => num ** 2


//console.log(pow2(8))

// 4 Параметри за замовчуванням
//const sum = (a = 40, b = a * 2) => a + b

//console.log(sum(41, 4))
//console.log(sum())

//function sumAll(...all) {
 //   let = result = 0
  //  for (let num of all) {
   //     result += num
   // }
  //  return result
//}

//const res = sumAll(1, 2, 3, 4, 5)
//console.log(res)

// 5 Замикання
//function createMember(name) {
   // return function(lastName) {
      //  console.log(name + lastName)
   // }
//}

//const logWithLastName = createMember('Serhii')
//console.log(logWithLastName('Minin'))