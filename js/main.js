const cvc=document.getElementById("cvc")
const name=document.getElementById("name")
const cardNumberid=document.getElementById("cardNumber")
const expDateYY=document.getElementById("expDateYY")
const expDateMM=document.getElementById("expDateMM")
const form=document.getElementById("form")
const confirm=document.getElementById("confirm")
const cardNumberClass=document.querySelector(".cardNumberClass");
const expDate=document.querySelector(".expDate");
const cvcClass=document.querySelector(".cvc");

const cardNumber=(value)=>{
    faildValue=`qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOP{}ASDFGHJKL":ZXCVBNM<>?!@#$%^&*()_+=-`
    for(let i=0;i<value.length;i++){
        if(faildValue.includes(value[i])){return false}

    }
    return true
}

const blankCell=(value)=>{
    if(value==""){return false}return true
}

confirm.addEventListener('click',()=>{
    let firstcheck;
    let secondcheck;
    let thirdcheck;
    // card number check
    if(blankCell(cardNumberid.value)){
        if(cardNumber(cardNumberid.value)){
            cardNumberClass.classList.add('hidden')
            firstcheck=true;
        }else{
            cardNumberClass.classList.remove('hidden')
            firstcheck=false;
        }
    }else{
        cardNumberClass.classList.remove('hidden')
        firstcheck=false;
    }
    // exp date check
   
    if(blankCell(expDateYY.value)){
        if(expDateMM){
            
            expDate.classList.add('hidden')
            secondcheck=true;
        }else{
            expDate.classList.remove('hidden')
            secondcheck=false;
            
        }
        
    }else{
        expDate.classList.remove('hidden')
        secondcheck=false;

    }

     // cvc check
     if(blankCell(cvc.value)){
         cvcClass.classList.add('hidden')
        thirdcheck=true;
     }else{
        cvcClass.classList.remove('hidden')

        thirdcheck=false
     }
// confirm check
if(firstcheck&&secondcheck&&thirdcheck){
    form.classList.add("hidden")
}
})
