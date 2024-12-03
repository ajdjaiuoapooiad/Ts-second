enum Role {ADMIN = 'ADMIN',READ_ONLY = 100,AUTHOR = 'YUKITO'}

const person = {
    name: "Max",
    age: 30,
    hobbys: ['develop','read','excise','cooking','sports'],
    role: Role.ADMIN,
}

console.log(person.name);
for(const hobby of person.hobbys){
    console.log(hobby);
    
}
