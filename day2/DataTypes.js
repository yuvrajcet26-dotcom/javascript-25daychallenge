"use strict";//treats all the code as modern and secure
console.log("Yuvraj")
console.log(3+3)
let name = "Yuvraj"
let age = 20
let isLoggedIn = true
//number=> 2 to power 53
//string=> collection of characters
//boolean=> true or false
//bigint=> for very large numbers
//null=> empty value
//undefined=> value is not assigned
//object=> collection of key value pairs
let state; //undefined
console.table({name,age,isLoggedIn,state})
console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof isLoggedIn) //boolean
console.log(typeof state) //undefined
console.log(state) //undefined
console.log(typeof null) //object
console.log
state = null
console.log(state) //null
console.log(typeof state) //object (this is a known quirk in JavaScript, null is considered an object type)
