function cifra(){
    const textEncod = document.getElementById("cifra_texto").value;
    let offset = parseInt(document.getElementById("chave").value);
    let resultEncode = window.cipher.encode(textEncod, offset);
    document.getElementById("cifrado").innerHTML = `${resultEncode}`;
}

function decifra(){
    const textDecod = document.getElementById("decifra_texto").value;
    let offset = parseInt(document.getElementById("chave").value);
    let resultDecode = window.cipher.decode(textDecod, offset);
    document.getElementById("cifrado").innerHTML = `${resultDecode}`;
}

 