document.getElementById("btn-cifra").addEventListener("click", cifra);
function cifra() {
  const textEncod = document.getElementById("cifra_texto").value;
  let offset = parseInt(document.getElementById("chave").value);
  let resultEncode = window.cipher.encode(offset, textEncod);
  document.getElementById("cifrado").innerHTML = `${resultEncode}`;
}

document.getElementById("btn-decifra").addEventListener("click", decifra);
function decifra() {
  const textDecod = document.getElementById("decifra_texto").value;
  let offset = parseInt(document.getElementById("chave").value);
  let resultDecode = window.cipher.decode(offset, textDecod);
  document.getElementById("cifrado").innerHTML = `${resultDecode}`;
}