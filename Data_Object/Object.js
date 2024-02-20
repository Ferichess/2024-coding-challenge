const hobies = (title, time) => {return `${title} ${time}`};

const object = {
    name: "Eko",
    tlp : +6285802374011,
    address : "Jl. Kebon jeruk no. 11",
    age : "30",
    married : true,
    salary : 1000000,
    family: undefined,
    children: null,
    hobby: () => hobies("Coding", new Date()),
    skill: [1, "membaca", "3", ["javascript", "typescript"], {file: "input.txt", size: 32}, () => {return "hello function"}],
    education: {
        name: "SMA",
        year: 2010,
        major: {
            degree: "S1",
            score: 3.5
        }
    
    }
   
}

console.log(object.hobby());
console.log(object.skill[3][1]);
console.log(object.skill[5]());
console.log(object.skill.map((el,i) => el));
console.log(object.education.major.score)
console.log(object.address);