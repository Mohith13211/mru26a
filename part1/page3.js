// Primitive
let a = 10
let name = "Mohith"
let falg = true
let promoted = undefined
let section = null
let number_BigInt = 3456787654334567

// Non-Primitive [Refernce]
const Student = {
    name : "John",
    age : 21
}
console.log(Student)
const s1 = Student
console.log(s1)
Student.age = 25
console.log(s1)