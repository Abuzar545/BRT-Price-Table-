function brt(){
    const input=document.querySelector("#input").value;
    console.log(input);
    const text=document.querySelector('#text');
    if(input <5){
        text.innerText=`0 charge free: ${input} `;
    } else if(input==5){
    text.innerText=`Rs. 15`;
    }else if(input >=5.1&& input<=10){
        text.innerText=`RS. 20: ${input} `;
    }else if(input >=10.1&& input<=15){
        text.innerText=`RS. 25: ${input} `;
    }else if(input >=15.1&& input<=20){
        text.innerText=`RS. 30: ${input} `;
    }else if(input >=20.1&& input<=30){
        text.innerText=`RS. 35: ${input} `;
    }else if(input >=30.1&& input<=35){
        text.innerText=`RS. 40: ${input} `;
    }else if(input >=35.1&& input<=40){
        text.innerText=`RS. 50: ${input} `;
    }else if(input >=40.1 && input<=50 ){
        text.innerText=`RS. 55: ${input} `;
    }else {
        text.innerText=`Enter valid information`;
    }
}