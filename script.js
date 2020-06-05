let tomatch = "John";
let btnEl = document.getElementById("btn");



btnEl.addEventListener("click", function(event){
    event.preventDefault();
    let thename = document.getElementById("name").value;
    let thenamenum = /\d+/;
    let theage = document.getElementById("age").value;
    let tomatchage = /^\d+$/;
    let html = "";

    

    if (!thenamenum.test(thename)){

        html += `<h3>My name is: <em>${tomatch}.</em><br> `;
        html += ` Your name is: <strong>${thename}.</strong> <br><br>`;

        if (/John/i.test(thename)){
            html += `Wow! we have the same name! `;
            if (tomatchage.test(theage)){
                html += `You are ${theage} years old.`
            }
            else html += `Your age is invalid.`
        }
        else {
            html += `Not my name, but it will work! `;
            if (tomatchage.test(theage)){
                html += `You are ${theage} years old.`
            }
            else html += `Your age is invalid.`
        }
    }
    else  {
        html += `Your name is invalid`;
    }

     html += `</h3>`
     let regexEl = document.getElementById("regex");
     regexEl.innerHTML = html;
})
