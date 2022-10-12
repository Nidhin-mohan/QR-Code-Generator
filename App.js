let data = document.getElementById("input");
// console.log("data",data);

let submit = document.getElementById("submit");

// console.log("submit", submit);

let qrPic = document.getElementById("img");

submit.addEventListener("click" , GererateQR);

  function GererateQR(){

   let qrValue  = data.value;
//    console.log("data :", qrValue);

if(!qrValue) return ;

   qrPic.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

   console.log(qrPic.src);
   qrPic.style.display = "inline";

}