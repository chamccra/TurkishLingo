//what i need to do -
//create list of answer in arrays 
// take index of song to match with answer - show answer when check button is clicked 
//update html box 
turkish = ['Grigo, "Gerçekten bilmiyorum," diyor', 'Ardından, emlak vergisi adını aldı', 'Şimdi ise elli altı sandalyesi olacak', 
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

let answer = document.querySelector('textarea');


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
        //console.log(turkish[currentSong], english[currentSong]);


    });
    



   // if($(this).contains('current-song') )
   
   
   // repeat button 
// function repeatButton(){
   
// }



//     //slow button 
// function slowDown() {

// }



    //random button 
// const check = document.querySelectorAll('button.button');

// check.addEventListener('click', Randomize());

// function Randomize() {
//     var playlist = Array("clip1.mp3", "clip2.mp3", "clip3.mp3");
//     var randomSong = playlist[Math.floor(Math.random()*$("#playlist li a").length)];
//     $("#audioPlayer").setAttribute('src', randomSong);

// }



    //continuous play 
    // $("#audioPlayer")[0].addEventListener("ended", function(){
    //    currentSong++;
    //     if(currentSong == $("#playlist li a").length)
    //         currentSong = 0;
    //     $("#playlist li").removeClass("current-song");
    //     $("#playlist li:eq("+currentSong+")").addClass("current-song");
    //     $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
    //     $("#audioPlayer")[0].play();
    // });
}