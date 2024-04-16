function changeBinary(binaryParaId) {

    let binaryPara = document.getElementById(binaryParaId);
    let binaryText = binaryPara.textContent;
    let changedText = binaryText
        .split(' ')
        .map(bit => (bit === '0' ? '1' : '0'))
        .join(' ');
    binaryPara.textContent = changedText;

}

setInterval(() => { changeBinary('bnr1') }, 250);
setInterval(() => { changeBinary('bnr2') }, 250);
