let person : { name: string; age: number; place: string ; vacancy: boolean} = {
    name:"AJMAL",
    age:24,
    place:"MPM",
    vacancy:false
};



type  Details = {
    name: string,
    age:number,
    place:string,
    vacancy:boolean,
    getName: () => void
}

let personOne: Details = {
    name:"AJMAL",
    age:24,
    place:"MPM",
    vacancy:true,
    getName: function(){
        return this.name;
    }
}


// Union or options

interface bookDetail{
    name: string,
    id: number | string,
    price:number,
    author:string
}


const bookOne: bookDetail = {
    name : "BookOne",
    id: 1,
    price: 4567,
    author:"APJ ABDUL KALAM"
}



let randomArray : (number | string ) [] = [ 1, 4, 5, 6, 'ajmal'];



// Option

interface Ball{
    color:string,
    size?:number,
    origin:string
}

const ballOne : Ball = { color: 'red',  origin: 'indian'};

function colorSize( color: Ball){
    return color.origin
}

// console.log(colorSize(ballOne))


const sumOfNumber = ({firstName, lastName} : { firstName: string, lastName: string}) : string => {
    return firstName+lastName
}

let fullName = sumOfNumber({ firstName: 'AJMAL', lastName: 'M'});


type ProductDetail = {
    name: string,
    id: (number | string),
    price:number
}

function  getProductDetail(name: string) : ProductDetail{
    return { name, id:4, price: 400}
}


const productDetail = getProductDetail('Apple');







type statusType = "pending" | "completed" | "failed" | '';

let currentStatus : statusType = "";


currentStatus = "failed";

console.log(currentStatus)