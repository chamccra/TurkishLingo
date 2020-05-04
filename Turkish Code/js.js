console.log("connected");

const circles = document.querySelectorAll('button.circle');
const textarea = document.querySelector('textarea');
const check = document.querySelector('button.button');
const alphabetBox = document.querySelectorAll('box.box1');

console.log(alphabetBox);


//keyboard commands
textarea.addEventListener('keyup', function() {
    textarea.value = textarea.value.replace(/c=/, 'ç');
    textarea.value = textarea.value.replace(/C=/, 'Ç');

    textarea.value = textarea.value.replace(/g=/, 'ğ');
    textarea.value = textarea.value.replace(/G=/, 'Ğ');

    textarea.value = textarea.value.replace(/s=/, 'ş');
    textarea.value = textarea.value.replace(/S=/, 'Ş');

    textarea.value = textarea.value.replace(/o=/, 'ö');
    textarea.value = textarea.value.replace(/O=/, 'Ö');

    textarea.value = textarea.value.replace(/u=/, 'ü');
    textarea.value = textarea.value.replace(/U=/, 'Ü');

    textarea.value = textarea.value.replace(/i=/, 'ı');
    textarea.value = textarea.value.replace(/I=/, 'I');

    textarea.value = textarea.value.replace(/ı=/, 'i');
    textarea.value = textarea.value.replace(/I=/, 'İ');

});

//turning off spell check
textarea.spellcheck = false;

//testing i grabbed the circles
console.log(circles);
console.log(check);


//for each circle look at data 
circles.forEach(circle => circle.addEventListener('click', (event) => {
    console.log(event.target.closest('button.circle').dataset.name);
    printLetter(event);
  
  }));

  //print corresponding letter to textarea
  function printLetter(event) {
      textarea.value += event.target.closest('button.circle').dataset.name;
      console.log('added');
  };


//AUDIO PLAYER JS
turkish = ['Grigo Gerçekten bilmiyorum diyor', 'Ardından emlak vergisi adını aldı', 'Şimdi ise elli altı sandalyesi olacak', 
'Ne tür değişiklikler yapılması planlanıyor', 'Katılım oranı da diğer bir değişken', 'Konuktan sonraki öncelik, eğitim', 'Lükse yer kalmıyor',
'Patlamanın on kilometre uzaktan işitildiği bildirildi', 'Turnuvaya on üç ülkeden doksan sporcu katıldı', 
'Arnavutluk terörle mücadele çabalarını arttırıyor', 'Fiyatın altmış altı Euro olduğu bildirildi', 'Projenin sonuçları Nisan ayında yayınlandı',
'Belki bu kez onların zamanı gelmiştir', 'Sizce sizi efsane yapan ne', 'Paranın onda biri hibe olarak verilecek'];

english = ['Grigo is saying, "I really don\'t know"', 'Afterwards, it got named the property tax', 'But now, he will have fifty six chairs',
'What kind of changes are being planned', 'The participation rate is another variable', 'The priority after the guest is education',
'There\'s not going to be any room for luxury', 'It was reported that the explosion was heard from 10 kilometers away', 
'Ninety athletes from thirteen countries have joined the tournament', 'Albania is increasing its efforts on fighting against terrorism',
'The price was reported to be sixty six Euros', 'The results of the project was published on April', 'Maybe it\'s their turn this time',
'What do you think that makes you a legend', 'A tenth of the money will be given as a grant'];

var currentSong = 0;
let answer;

function audioPlayer(){
    
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e){
       e.preventDefault(); 
       $("#audioPlayer")[0].src = this;
       $("#audioPlayer")[0].play();
       $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");

        console.log(currentSong);
        answer = turkish[currentSong];
        console.log(answer);

    });
};

//checking answer (with button)
check.onclick = function() {

    let realAnswer = answer;
    let results = document.querySelector('.showAnswer');
    results.innerHTML ='';

    console.log(textarea.value);
    userAnswer = textarea.value;

    ////comparing the answer to the user input 

        var dmp = new diff_match_patch();
        var d = dmp.diff_main(userAnswer, realAnswer);

        dmp.diff_cleanupSemantic(d);
        dmp.diff_cleanupEfficiency(d);
        var ds = dmp.diff_prettyHtml(d);


    if(userAnswer === answer){
        console.log('correct');
        results.innerHTML = `<p>That's right! Awesome job.</p>`;

    }else{
        console.log('so close the right answer is ' + answer);
        //results.insertAdjacentHTML('beforeend', htmlWrong);
        results.innerHTML = `<p>Nice Try. The correct answer is <span> ${answer}.</span></p> 
        <p>How you can improve: ${ds}</p>`;
        
    }
};

//check button key shortcut 
textarea.addEventListener('keyup', function(key) {
    if(key.keyCode == 13){
        key.preventDefault(); 
        //console.log('enter');
        let results = document.querySelector('.showAnswer');
        results.innerHTML ='';

        console.log(textarea.value);
        userAnswer = textarea.value;
        let realAnswer = answer;

     ////comparing the answer to the user input 

        var dmp = new diff_match_patch();
        var d = dmp.diff_main(userAnswer, realAnswer);

        dmp.diff_cleanupSemantic(d);
        dmp.diff_cleanupEfficiency(d);
        var ds = dmp.diff_prettyHtml(d);
        
        if(userAnswer === answer){
            console.log('correct');
            results.innerHTML = `<p>That's right! Awesome job.</p>`;
    
        }else{
            console.log('so close the right answer is ' + answer);
            results.innerHTML = `<p>Nice Try. The correct answer is <span> ${answer}.</span></p> 
            <p>How you can improve: ${ds}</p>`;
            
        }
     }
});
