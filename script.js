const num=40;
const num2="40";
if(num===num2){
    //console.log("Same number")
}
else{
    //console.log("other number")
}


const Bayodata={
    name:"Tanvir",
    age:20,
    passion:"reacts to girls post",
    dream:"be husband of Jannat apu"
}


const  {name,age,passion,dream}=Bayodata;

//console.log(age)

const ExGirlfriend=["Sokina","Jorina","Rohima","Korima"];
const concate=ExGirlfriend.concate("এগুলার দিন শেষ,জান্নাত আপুর বাংলাদেশ");
const [first,secound,third,...last]=ExGirlfriend;
console.log(first)
console.log(secound)
console.log(third)
console.log(last)
console.log(concate)