let name = prompt('Name');
let className = prompt("Class");
let roll = prompt('Roll');
let bn = prompt('Bangla');
let en = prompt('English');
let mt = prompt('Math');
let sc = prompt('Science');
let ss = prompt('Social Science');
let rel = prompt('Religion');

console.log(`
Name    : ${name}
Roll    : ${roll}

Suject      Mark        GPA                 Grade
=====================================================
Bangla  : ${bn}         ${getGpa(bn)}       ${getGrade(bn)} 
English : ${en}         ${getGpa(en)}       ${getGrade(en)}  
Math    : ${mt}         ${getGpa(mt)}       ${getGrade(mt)}  
Science : ${sc}         ${getGpa(sc)}       ${getGrade(sc)}
Science : ${ss}         ${getGpa(ss)}       ${getGrade(ss)}
Science : ${rel}        ${getGpa(rel)}      ${getGrade(rel)}





`);


