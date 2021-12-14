let button = document.getElementById("button");
let input = document.getElementById("input");
let divs = document.querySelector('.container1');
let divs2 = document.querySelector('.container2');

function newStr(str){ 
    let newStr = '';
  if(str.length>10){
    newStr = str.slice(0, 9) + '…'
  } else {
    newStr = str
  }
  return newStr
}

function transliterate(str) {

    str = str
        .replace('а', 'a')
        .replace('б', 'b')
        .replace('в', 'v')
        .replace('г', 'g')
        .replace('д', 'd')
        .replace('е', 'e')
        .replace('ё', 'yo')
        .replace('ж', 'zh')
        .replace('з', 'z')
        .replace('и', 'i')
        .replace('й', 'i')
        .replace('к', 'k')
        .replace('л', 'l')
        .replace('м', 'm')
        .replace('н', 'n')
        .replace('о', 'o')
        .replace('п', 'p')
        .replace('р', 'r')
        .replace('с', 's')
        .replace('т', 't')
        .replace('у', 'y')
        .replace('ф', 'f')
        .replace('х', 'h')
        .replace('ц', 'ts')
        .replace('ч', 'ch')
        .replace('ш', 'sh')
        .replace('щ', 'shch')
        .replace('ы', 'y')
        .replace('ь', '')
        .replace('ъ', 'ie')
        .replace('э', 'e')
        .replace('ю', 'iu')
        .replace('я', 'ya')
        .replace('А', 'A')
        .replace('Б', 'B')
        .replace('В', 'V')
        .replace('Г', 'G')
        .replace('Д', 'D')
        .replace('Е', 'E')
        .replace('Ё', 'Yo')
        .replace('Ж', 'Zh')
        .replace('З', 'Z')
        .replace('И', 'I')
        .replace('Й', 'I')
        .replace('К', 'K')
        .replace('Л', 'L')
        .replace('М', 'M')
        .replace('Н', 'N')
        .replace('О', 'O')
        .replace('П', 'P')
        .replace('Р', 'R')
        .replace('С', 'S')
        .replace('Т', 'T')
        .replace('У', 'Y')
        .replace('Ф', 'F')
        .replace('Х', 'H')
        .replace('Ц', 'Ts')
        .replace('Ч', 'Ch')
        .replace('Ш', 'Sh')
        .replace('Щ', 'Shch')
        .replace('Ы', 'Y')
        .replace('Ь', '')
        .replace('Ъ', '')
        .replace('Э', 'E')
        .replace('Ю', 'Iu')
        .replace('Я', 'Ya')
  
    return str;
};


function newWord(){
    let newDiv = document.createElement('div');
    let newWord = input.value;
    newDiv.innerText = newStr(newWord);
    newDiv.style.marginLeft = 'auto'
    newDiv.style.marginRight = 'auto'
    divs.appendChild(newDiv);
    newDiv.title = newWord;
    function clickWord(){
      newDiv.innerText = input.value;
    }
    newDiv.addEventListener("click", clickWord );
}

function newWord2(){
    let newDiv = document.createElement('div');
    let newWord = input.value;
    let string = newStr(newWord);
    newDiv.innerText = transliterate(string);
    newDiv.style.marginLeft = 'auto';
    newDiv.style.marginRight = 'auto';
    divs2.appendChild(newDiv);
    newDiv.title = newWord;
    function clickWord(){
      newDiv.innerText = input.value;
    }
    newDiv.addEventListener("click", clickWord );
}


button.addEventListener("click", newWord2);
button.addEventListener("click", newWord) 