let output=document.querySelector("#output");
// output.contentDocument.body.innerHTML="<h1>Durgesh Kumar</h1>"
// output.contentDocument.head.innerHTML="<style>h1{color:Green}</style>"
// output.contentWindow.eval('let a=10; let b=5; alert(a+b)')

let htmlCode, cssCode, jsCode;
let allInput=document.querySelectorAll(".left textarea")

allInput.forEach((el,idx)=>{
    el.addEventListener("keyup",()=>{
        if(idx==0){
            htmlCode=el.value;
        }
        if(idx==1){
            cssCode=el.value;
        }
        if(idx==2){
            jsCode=el.value;
        }
        output.contentDocument.body.innerHTML=htmlCode;
        output.contentDocument.head.innerHTML=`<style>${cssCode}</style>`;
        output.contentWindow.eval(jsCode)
  
    })
})

