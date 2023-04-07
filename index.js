function encrypt() {
  var plaintext = document.getElementById("plaintext").value;
  var shift = parseInt(document.getElementById("shift").value);
  var ciphertext = "";

  for (var i = 0; i < plaintext.length; i++) {
    var charCode = plaintext.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) { // uppercase letters
      charCode = ((charCode - 65 + shift) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) { // lowercase letters
      charCode = ((charCode - 97 + shift) % 26) + 97;
    }

    ciphertext += String.fromCharCode(charCode);
  }

  document.getElementById("ciphertext").value = ciphertext;
}

function decrypt() {
  var ciphertext2 = document.getElementById("ciphertext2").value;
  var shift2 = parseInt(document.getElementById("shift2").value);
  var plaintext2 = "";

  for (var i = 0; i < ciphertext2.length; i++) {
    var charCode = ciphertext2.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) { // uppercase letters
      charCode = ((charCode - 65 - shift2 + 26) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) { // lowercase letters
      charCode = ((charCode - 97 - shift2 + 26) % 26) + 97;
    }

    plaintext2 += String.fromCharCode(charCode);
  }

  document.getElementById("plaintext2").value = plaintext2;
}