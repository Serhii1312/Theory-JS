// 1. Змінні
// variable

//const firstName = 'Serhii'

//const lastName = prompt( Message : 'Введіть фамілію')

//alert(firstName + ' ' + lastName)

// 2. Мутація 

//console.log ('Імя людини: ' + firstName + ', а вік людини: ' + age)

// 3. Оператори

//let currentYear = 2023
//const birthYear = 2001

//const age = currentYear + birthYear

//const a = 10
//const b = 5

//let c = 30
//c /= a

//console.log(a +b)
//console.log(a-b)
//console.log(a * b)
//console.log(a / b)
//console.log(currentYear++)
//console.log(currentYear)
//console.log(c)

// 4. Типи данних 
//const isProgrammer = true
//const name = 'Serhii'
//const age = 26 
//let x 

//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log

// 5 Приорітет операторів 
//const fullAge = 26
//const birthYear = 1993
//const currentYear = 2020

// > < >= <=
//const isFullAge = currentYear - birthYear >= fullAge
//console.log(isFullAge)

// 6. Умовні оператори
//const courseStatus = 'bla' // ready, pending, fail

//if (courseStatus === 'ready') {
 //console.log('Курс вже готовий')
//} else if (courseStatus === 'pending') {
 //   console.log('Курс в розробці')
//} else {
  //  console.log('Курс не вийшов')
//}


//const isReady = true

//if (isReady) {
 //   console.log('allready')
//} else {
 //   console.log('allnoready')
//}

//isReady ? console.log('allready') : console.log('allnoready')

//const num1 = 42 //number
//const num2 = '42' //string

//console.log(num1 === num2)

// 7. Бульова логіка
// && false
// ||true
// ! false
// !!true

// 8. Функции

//function calculateAge(year) {
//  return 2023 - year 
//}

//console.log(calculateAge(2000))
//console.log(calculateAge(2001))
//console.log(calculateAge(2002))

//function logInfoAbout(name, year) {
  //const age = calculateAge(year)

  //if (age > 0){
   // console.log('Людина на імя ' + name + ' зараз має вік ' + age)
  //} else {
    //console.log('Це вже майбутнє')
  //}
  //}


//logInfoAbout('Сергій', 2023)

//9 Массиви
//const cars =['Мазда', 'Мерседес', 'Форд']
//const cars = new Array('Мазда', 'Мерседес', 'Форд')
//console.log(cars.length)
//console.log(cars[2])

//cars[0] = 'Porsche'
//cars[3] = 'Mazda'
//console.log(cars)

// 10. Цикли
//const cars =['Мазда', 'Мерседес', 'Форд', 'Porsche']

//for (let i = 0; i < cars.length; i++) {
 // const car = cars[i]
 // console.log(car)
//}

//for (let car of cars) {
 // console.log(car)
//}

// 11 Об'єкти
//const person = {
 // firstname: 'Serhii',
 // lastName: 'Poruchnik',
 // year: 2001,
 // languages: ['Ua', 'En'],
 // hasWife: false,
 // greet: function() {
  //  console.log('greet')
 // }
//}

//console.log(person.firstname)
//console.log(person['lastName'])
//const key = 'year'
//console.log(person[key])
//person.hasWife = true
//person.isProgrammer = true
//console.log(person)
