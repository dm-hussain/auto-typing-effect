const span = document.querySelector('#h1 span');
const span2= document.querySelector('#h2 span')

const wordList1 = ['Student', 'Teacher', 'Doctor'];
const wordList2= ['Developer', 'Pilot', 'Dancer', 'Police']



function autoType(wordList, element){

  let reverse = false;
let wordIdx = 0;
let charIdx = 0;
let skipUpdate = 0;

    const intervalId = setInterval(() => {
        if (skipUpdate) {
          skipUpdate--;
          return;
        }
        // debugger
        if (charIdx === wordList[wordIdx].length) {
          skipUpdate = 6;
          reverse = true;
        }
      
        if (charIdx === 0 && reverse) {
          reverse = false;
          wordIdx++;
          if (wordIdx === wordList.length) wordIdx = 0;
        }
      
        if (!reverse) {
          skipUpdate = 2;
          element.innerText = element.innerText + wordList[wordIdx][charIdx];
          charIdx++;
        } else {
          // debugger
          element.innerText = element.innerText.slice(0, charIdx);
          charIdx--;
          if (charIdx === 0) {
            element.innerText = element.innerText.slice(0, 0);
          }
        }
      }, 100);
}

 
autoType(wordList1, span)
autoType(wordList2, span2)