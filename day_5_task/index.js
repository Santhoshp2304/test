let xhr =new XMLHttpRequest();
xhr.open("GET","resume.JSON",true);
// console.log(xhr);
// console.log(xhr.responseText);
xhr.onload =function() {
let resume = JSON.parse(xhr.responseText);
console.log(resume);
console.log("_____________________RESUME_____________________");
console.log(`\n`);

    for(let k in resume.basics) {   //using for in loop

        if(k=='name'){
            console.log(`Name of the Candidate : ${resume.basics[k]}`);
        }
        if(k=="fathername"){
            console.log(`Father's Name : ${resume.basics[k]}`);
        }
        if(k=="email"){
            console.log(`Email-ID : ${resume.basics[k]}`);
        }
        if(k=="phone"){
            console.log(`Contact Number : ${resume.basics[k]}`);
        }
        if(k=="dob"){
            console.log(`Date Of Birth : ${resume.basics[k]}`);
        }
        if(k=="location"){
            console.log(`Address : ${resume.basics[k]}`);
        }    
}
console.log(`\n`);
console.log("%%%%%%%%%%%  EDUCATION %%%%%%%%%%%%");
console.log(`\n`);
for(let k in resume.education) {  //using for in loop

    if(k=='institution'){
        console.log(`Name of the College : ${resume.education[k]}`);
    }
    if(k=="degree"){
        console.log(`Degree : ${resume.education[k]}`);
    }
    if(k=="endDate"){
        console.log(`PassedOut Year : ${resume.education[k]}`);
    }
    if(k=="score"){
        console.log(`Percentage Earned In College : ${resume.education[k]}`);
    }
}
console.log(`\n******SKILLS*****`);
console.log(`\n`);
for(let i =0;i<resume.skills.length;i++) {  //using for loop
    console.log(`        ${i+1}) ${resume.skills[i]}`);
}
console.log(`\n########CERTIFICATES########`);
console.log(`\n`);
resume.certificates.forEach(i => { //using foreach loop
    console.log(`       - ${i}`);
    
});
console.log(`\n--------------HOBBIES--------------`);
console.log(`\n`);
for(let hobby of resume.hobby){  //using for of loop
   console.log(`                    -${hobby}`);
}
}
xhr.send();