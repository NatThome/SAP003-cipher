window.cipher = {
  encode: encode,
  decode: decode
};

function encode(textEncod, offset){
  let resultado = "";
  for (let i = 0; i < textEncod.length; i ++){
    //if(textEncod.charCodeAt(i) === 32){  
    //}
    encodedMessage = ((textEncod.charCodeAt(i) - 65 + offset) % 26) + 65;
    resultado += String.fromCharCode(encodedMessage);
    }
    return resultado;
}

function decode(textDecod, offset){
  let resultado = "";
  for (let i = 0; i < textDecod.length; i ++){
    decodedMessage = ((textDecod.charCodeAt(i) - 90 - offset) % 26) + 90;
    resultado += String.fromCharCode(decodedMessage);
  }
  return resultado;
}


