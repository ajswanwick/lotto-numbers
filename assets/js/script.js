const button = document.getElementById('btn');
button.addEventListener('click', getlottoNumbers);


function getlottoNumbers(){

    const lottoNums = [];
    for (let i = 0; i < 6; i++) {
    lottoNums.push(Math.floor(Math.random() * 52) + 1);
    }
    //document.getElementById("lotto").innerText = lottoNums
    document.getElementById("first-num").innerText = lottoNums[0]
    document.getElementById("second-num").innerText = lottoNums[1]
    document.getElementById("third-num").innerText = lottoNums[2]
    document.getElementById("fourth-num").innerText = lottoNums[3]
    document.getElementById("fifth-num").innerText = lottoNums[4]
    document.getElementById("sixth-num").innerText = lottoNums[5]

     
    //const bonusNumbers = []
    //for( let j = 0; j < 2; j++){
      //bonusNumbers.push(Math.floor(Math.random() * 12) + 1);
    //}
    //console.log(bonusNumbers);
      }
    
