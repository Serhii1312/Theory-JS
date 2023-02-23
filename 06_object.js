//const person = {
 //   name: 'Sonya',
 //   age: 20,
 //   isProgrammer: true,
 //   languages:['ua', 'en', 'de'],
 //   //'complex key': 'Complex Value',
 //   //['key_' + (1+3)]: 'Computed key',
 //   greet() {
 //       console.log('greet from person')
 //   },
 //   info() {
 //       console.info('Info about man:', this.name)
 //   }
//}

//console.log(person.name)
//console.log(person['age'])

//const name = person.name
//const age = person.age
//const languages = person.languages

//const {name, age: personAge = 10, languages} = person 

//console.log(name, personAge, languages)
//console.log(person)

//for (let key in person) {
    //if (person.hasOwnProperty(key)) {
    //    console.log('key:', key)
    //    console.log('value:', person[key])
   // }
//}

 
//Object.keys(person).forEach((key) => {
  //  console.log('key:', key)
    //console.log('value:', person[key])
//})

// Context
//person.info()

//const logger = {
  //  keys (){
    //    console.log('Object Keys:  ', Object.keys(this))
   // },

   // keysAndValues() {
     //   Object.keys(this).forEach(function(key) {
       //     console.log(`"${key}": ${this[key]}`)
       // }.bind(this))
   // },

  //  withParams(top = false, between = false, bottom = false) {
      //  if (top) {
       //     console.log('----Start----')
     //   }
       // Object.keys(this).forEach((key, index, array) => {
        //    console.log(`"${key}": ${this[key]}`)
         //   if (between && index !== array.length - 1) {
        //        console.log('--------')
        //    }
        //})

      //  if (bottom) {
       //     console.log('----End----')
       // }
    //}
//}

//const bound = logger.keys.bind(logger)
//bound ()
//logger.keysAndValues.call(logger)
//logger.withParams.call(person, true, true, true)