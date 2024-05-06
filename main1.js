const handleChange=()=>{
    let text= document.getElementById("text").value
    let result = document.getElementById("result")
    if(text.length === 0){
        result.innerText = "parolni kiriting"
        result.classList.add("required")
        result.classList.remove("strong")
        result.classList.remove("normal")
        result.classList.remove("easy")
    }else  if(text.length <= 4){
        result.innerText = " kuchsiz parol"
        result.classList.add("eays")
        result.classList.remove("strong")
        result.classList.remove("normal")
        result.classList.remove("required")
    }else if(text.length > 4 && text.length < 8 ){
        result.innerText = " urtacha parol"
        result.classList.add("normal")
        result.classList.remove("strong")
        result.classList.remove("required")
        result.classList.remove("eays")
    }else if(text.length >= 8  ){
        result.innerText = " kuchli  parol"
        result.classList.add("strong")
        result.classList.remove("required")
        result.classList.remove("normal")
        result.classList.remove("eays")
    }        
}