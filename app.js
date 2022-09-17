// saidalixon.uz
"use strict";

const text1 = document.querySelector("#text1"),
  text2 = document.querySelector("#text2"),
  form = document.querySelector("form"),
  btn = document.querySelector("button"),
  copyBtn = document.getElementById("copy"),
  resetBtn = document.querySelector("#reset");

function resetForm() {
  document.getElementById("myForm").reset();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val1 = text1.value;
  const removeSpace = val1.replace(/ /g, "");
  const noNumber = removeSpace.match(/\D/g);

  if (noNumber[0].charCodeAt(0) >= 65 && noNumber[0].charCodeAt(0) <= 122) {
    text2.value = replaceTxt(val1);
  } else {
    text2.value = replaceTxt2(val1);
  }

  function copy() {
    text2.select();
    document.execCommand("copy");
  }

  copyBtn.addEventListener("click", copy);

  function replaceTxt(txt) {
    txt = txt.replace(/\n/g, "\n ");
    txt = txt.replace(/,/g, ", ");
    txt = txt.replace(/:/g, ": ");
    txt = txt.replace(/;/g, "? ");
    txt = txt.replace(/·/g, "; ");
    txt = txt.replace(/\./g, ". ");
    txt = txt.replace(/!/g, "! ");
    txt = txt.replace(/‘/g, "ъ");
    txt = txt.replace(/’/g, "ъ");
    txt = txt.replace(/\'/g, "ъ");
    txt = txt.replace(/ʻ/g, "ъ");
    txt = txt.replace(/ʼ/g, "ъ");
    txt = txt.replace(/h/g, "ҳ");
    txt = txt.replace(/a/g, "а");
    txt = txt.replace(/b/g, "б");
    txt = txt.replace(/ch/g, "ч");
    txt = txt.replace(/d/g, "д");
    txt = txt.replace(/e/g, "е");
    txt = txt.replace(/ е/g, " э");
    txt = txt.replace(/f/g, "ф");
    txt = txt.replace(/g/g, "г");
    txt = txt.replace(/g'/g, "ғ");
    txt = txt.replace(/i/g, "и");
    txt = txt.replace(/j/g, "ж");
    txt = txt.replace(/k/g, "к");
    txt = txt.replace(/q/g, "қ");
    txt = txt.replace(/l/g, "л");
    txt = txt.replace(/m/g, "м");
    txt = txt.replace(/n/g, "н");
    txt = txt.replace(/o/g, "о");
    txt = txt.replace(/o'/g, "ў");
    txt = txt.replace(/p/g, "п");
    txt = txt.replace(/r/g, "р");
    txt = txt.replace(/s/g, "с");
    txt = txt.replace(/sh/g, "ш");
    txt = txt.replace(/t/g, "т");
    txt = txt.replace(/u/g, "у");
    txt = txt.replace(/v/g, "в");
    txt = txt.replace(/x/g, "х");
    txt = txt.replace(/y/g, "й");
    txt = txt.replace(/z/g, "з");
    txt = txt.replace(/A/g, "А");
    txt = txt.replace(/B/g, "Б");

    txt = txt.replace(/H/g, "Ҳ");
    txt = txt.replace(/CH/g, "Ч");
    txt = txt.replace(/Ch/g, "Ч");
    txt = txt.replace(/D/g, "Д");
    txt = txt.replace(/E/g, "Е");
    txt = txt.replace(/ Е/g, " Э");
    txt = txt.replace(/F/g, "Ф");
    txt = txt.replace(/G/g, "Г");
    txt = txt.replace(/G'/g, "Ғ");
    txt = txt.replace(/I/g, "И");
    txt = txt.replace(/J/g, "Ж");
    txt = txt.replace(/K/g, "К");
    txt = txt.replace(/Q/g, "Қ");
    txt = txt.replace(/L/g, "Л");
    txt = txt.replace(/M/g, "М");
    txt = txt.replace(/N/g, "Н");
    txt = txt.replace(/O/g, "О");
    txt = txt.replace(/O'/g, "Ў");
    txt = txt.replace(/P/g, "П");
    txt = txt.replace(/R/g, "Р");
    txt = txt.replace(/S/g, "С");
    txt = txt.replace(/SH/g, "Ш");
    txt = txt.replace(/T/g, "Т");
    txt = txt.replace(/U/g, "У");
    txt = txt.replace(/V/g, "В");
    txt = txt.replace(/X/g, "Х");
    txt = txt.replace(/Y/g, "Й");
    txt = txt.replace(/Z/g, "З");

    txt = txt.replace(/ya/g, "я");
    txt = txt.replace(/yo/g, "ё");
    txt = txt.replace(/yu/g, "ю");
    txt = txt.replace(/ts/g, "ц");
    txt = txt.replace(/Ya/g, "Я");
    txt = txt.replace(/YA/g, "Я");
    txt = txt.replace(/YO/g, "Ё");
    txt = txt.replace(/Yo/g, "Ё");
    txt = txt.replace(/Yu/g, "Ю");
    txt = txt.replace(/YU/g, "Ю");
    txt = txt.replace(/TS/g, "Ц");
    txt = txt.replace(/Ts/g, "Ц");
    txt = txt.replace(/Yе/g, "Е");

    txt = txt.replace(/\n /g, "\n");
    return txt;
  }

  function replaceTxt2(txt) {
    txt = txt.replace(/а/g, "a");
    txt = txt.replace(/б/g, "b");
    txt = txt.replace(/ч/g, "ch");
    txt = txt.replace(/д/g, "d");
    txt = txt.replace(/[еэ]/g, "e");
    txt = txt.replace(/ф/g, "f");
    txt = txt.replace(/г/g, "g");
    txt = txt.replace(/ғ/g, "g‘");
    txt = txt.replace(/ҳ/g, "h");
    txt = txt.replace(/и/g, "i");
    txt = txt.replace(/ж/g, "j");
    txt = txt.replace(/к/g, "k");
    txt = txt.replace(/қ/g, "q");
    txt = txt.replace(/л/g, "l");
    txt = txt.replace(/м/g, "m");
    txt = txt.replace(/н/g, "n");
    txt = txt.replace(/о/g, "o");
    txt = txt.replace(/ў/g, "o‘");
    txt = txt.replace(/п/g, "p");
    txt = txt.replace(/р/g, "r");
    txt = txt.replace(/с/g, "s");
    txt = txt.replace(/ш/g, "sh");
    txt = txt.replace(/т/g, "t");
    txt = txt.replace(/у/g, "u");
    txt = txt.replace(/в/g, "v");
    txt = txt.replace(/х/g, "x");
    txt = txt.replace(/й/g, "y");
    txt = txt.replace(/з/g, "z");
    txt = txt.replace(/ъ/g, "’");
    txt = txt.replace(/ь/g, "");
    txt = txt.replace(/А/g, "A");
    txt = txt.replace(/Б/g, "B");
    txt = txt.replace(/Ч/g, "Ch");
    txt = txt.replace(/Д/g, "D");
    txt = txt.replace(/[ЕЭ]/g, "E");
    txt = txt.replace(/Ф/g, "F");
    txt = txt.replace(/Г/g, "G");
    txt = txt.replace(/Ғ/g, "G‘");
    txt = txt.replace(/Ҳ/g, "H");
    txt = txt.replace(/И/g, "I");
    txt = txt.replace(/Ж/g, "J");
    txt = txt.replace(/К/g, "K");
    txt = txt.replace(/Қ/g, "Q");
    txt = txt.replace(/Л/g, "L");
    txt = txt.replace(/М/g, "M");
    txt = txt.replace(/Н/g, "N");
    txt = txt.replace(/О/g, "O");
    txt = txt.replace(/Ў/g, "O‘");
    txt = txt.replace(/П/g, "P");
    txt = txt.replace(/Р/g, "R");
    txt = txt.replace(/С/g, "S");
    txt = txt.replace(/Ш/g, "Sh");
    txt = txt.replace(/Т/g, "T");
    txt = txt.replace(/У/g, "U");
    txt = txt.replace(/В/g, "V");
    txt = txt.replace(/Х/g, "X");
    txt = txt.replace(/Й/g, "Y");
    txt = txt.replace(/З/g, "Z");
    txt = txt.replace(/Ъ/g, "’");
    txt = txt.replace(/Ь/g, "");
    txt = txt.replace(/Ы/g, "");
    txt = txt.replace(/ы/g, "");

    txt = txt.replace(/я/g, "ya");
    txt = txt.replace(/ё/g, "yo");
    txt = txt.replace(/ю/g, "yu");
    txt = txt.replace(/ц/g, "ts");
    txt = txt.replace(/Я/g, "Ya");
    txt = txt.replace(/Ё/g, "Yo");
    txt = txt.replace(/Ю/g, "Yu");
    txt = txt.replace(/Ц/g, "Ts");
    return txt;
  }
});
