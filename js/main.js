//1
 
function SummPlus() {
    let numer1 = document.getElementById("num1").value;  
    let numer2 = document.getElementById("num2").value;
 
    var sum = 0;


 if(numer1 != "" && numer2 != ""){
    while(numer1 <= numer2){       
        sum = Number(sum) + Number(numer1);  
        numer1 =  Number(numer1) + 1;
     }
     document.getElementById("stroka1").innerHTML = (`<p> ответ: ${sum}</p>`);
 }else{
    document.getElementById("stroka1").innerHTML = (`<p>Пустое поле</p>`);
 }

    
}
//2

function gcd_rec(){
    let numer3 = document.getElementById("num3").value;  
    let numer4 = document.getElementById("num4").value;
   
    if(numer3 != "" && numer4 != ""){  
        if (numer3 < 0) {
            numer3 = numer3 * (-1);
        }
        if (numer4 < 0) {
            numer4 = numer4 * (-1);
        }
        let result = 1;
        for(let i = 2; i <= numer3; i++) {
            if(numer3 % i === 0 && numer4 % i === 0) {
                result = i;
            }
        }
        document.getElementById("stroka2").innerHTML = (`<p> ответ: ${result}</p>`);
        }
        else{
        document.getElementById("stroka2").innerHTML = (`<p>Пустое поле</p>`);
        }

}

//3
function divider(){
    let numer5 = document.getElementById("num5").value;  
    let ansver = document.getElementById("stroka3");
    i=0;
    cleanHtml()
    ansver.insertAdjacentHTML('beforeend', `<span> ответ: |</span>`);
    if(numer5 != "" && numer5 > 0){
        for (var i=1; i<=numer5; i++) {
            if (numer5%i==0) {
                ansver.insertAdjacentHTML('beforeend', `<span> ${i} |</span>`);
               
            }
          }
         
    }
    
    else{
        document.getElementById("stroka3").innerHTML = (`<p>Ведите число больше 0</p>`);
        }
}
function cleanHtml() {
    var element = document.getElementById("stroka3");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}