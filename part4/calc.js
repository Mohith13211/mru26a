export function add(a,b){
    return a+b
}
export function subtract(a,b){
    return a-b
}

// another way to export is 
/*
function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
export {add,sub}
*/
// if you have a single function in the module 
// you can directly export them using "export default"