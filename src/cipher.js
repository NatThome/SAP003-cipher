window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, textEncod) {
  let resultado = "";
  
  for (let i = 0; i < textEncod.length; i ++) {
    if (textEncod.charCodeAt(i)>= 65 && textEncod.charCodeAt(i)<=90) {
      let encodedMessage = ((textEncod.charCodeAt(i) - 65 + offset) % 26) + 65;
      resultado += String.fromCharCode(encodedMessage);
    }
    else if (textEncod.charCodeAt(i)>= 97 && textEncod.charCodeAt(i)<=122) {
      let encodedMessageLow = ((textEncod.charCodeAt(i) - 97 + offset) % 26) + 97;
      resultado += String.fromCharCode(encodedMessageLow);
    }
    else {
      let encodedMessageEsp = textEncod.charCodeAt(i);
      resultado += String.fromCharCode(encodedMessageEsp);
    }
  }
  return resultado;
}

function decode(offset, textDecod) {
  let resultado = "";

  for (let i = 0; i < textDecod.length; i ++) {
    if (textDecod.charCodeAt(i)>= 65 && textDecod.charCodeAt(i)<=90) {
      let decodedMessage = ((textDecod.charCodeAt(i) - 90 - offset) % 26) + 90;
      resultado += String.fromCharCode(decodedMessage);
    }
    else if (textDecod.charCodeAt(i)>= 97 && textDecod.charCodeAt(i)<=122) {
      let encodedMessageLow = ((textDecod.charCodeAt(i) - 122 - offset) % 26) + 122;
      resultado += String.fromCharCode(encodedMessageLow);
    }
    else {
      let encodedMessageEsp = textDecod.charCodeAt(i);
      resultado += String.fromCharCode(encodedMessageEsp);
    }
  }
  return resultado;
}
