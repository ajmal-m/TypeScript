// Function overloading

function addNum(a: number, b: number) : number{
    return a + b;
}

// Union here example reasonm for function overloading
function addNumWithStringasInput(a: number | string , b: number | string ) : number|string{
    return a + b;
}


//Function overloading

function addNumberFunctionOverloading(a : number, b: number) : number;
function addNumberFunctionOverloading(a : string, b: string) : string;


function addNumberFunctionOverloading(a: any , b:any ) : any{
    return a + b;
}


addNumberFunctionOverloading(2,3);
addNumberFunctionOverloading("2", "3")
// addNumberFunctionOverloading([], [])








// -------------------------GENERICS-----------------------------------cut---

function getAge(age: number | string) : number | string{
    return age;
}

getAge(12);
getAge("12");



// Use GENERICS
function getAgetwo<T>(age : T) : T{
    return age;
}

getAgetwo<number>(12);
getAgetwo<string>("12");



type UserDetail = {
    name:string,
    age: number
}

type AdminDetail = {
    fullName: string,
    role: string
}


const userOne : UserDetail = { name: 'userOne', age: 24};
const adminOne : AdminDetail = { fullName: 'adminHuvella', role:'superAdmin'};



const userdata = getDetail<UserDetail>(userOne);
const admindata = getDetail<AdminDetail>(adminOne);


// console.log(userdata.age, admindata.role)


function getDetail<T>(detail: T): T{
    return detail;
}



// Type extension

type UserDetails = {
    name:string,
    age: number
}

type AdminDetails = {
    name: string,
    age:number
    role: string,
}


// after type extension

type AdminDetails2 = UserDetails  & {
    role: string
}

const admin2 : AdminDetails2 = { name:'ahj', age: 55, role:'tywert'}


// We can use extends key word used for extension in interface