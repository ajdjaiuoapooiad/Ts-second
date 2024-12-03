var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "YUKITO";
})(Role || (Role = {}));
var person = {
    name: "Max",
    age: 30,
    hobbys: ['develop', 'read', 'excise', 'cooking', 'sports'],
    role: Role.ADMIN,
};
console.log(person.name);
for (var _i = 0, _a = person.hobbys; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
