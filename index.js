window.addEventListener('load', function (){
   let homeBtn = document.getElementById('home');
   let introBtn = document.getElementById('introduce');
   homeBtn.addEventListener('click', function (){
      window.location = './index.html'
   })
   introBtn.addEventListener('click', function (){
      console.log('click');
      window.location = './introduce.html';
   });
});