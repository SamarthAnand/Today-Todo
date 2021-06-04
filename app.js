var myNodeList = document.getElementsByTagName('LI');
var i;
for(i =0;i<myNodeList.length;i++)
{
   var span = document.createElement('SPAN');
   var txt = document.createTextNode('\u00D7');
   span.className= 'close';
   span.appendChild(txt);
   myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', e => {
   if(e.target.tagName='LI')
   e.target.classList.toggle('checked')

},false);



addToList = () =>{
   var li = document.createElement('li');
   var inputVal = document.getElementById('input-btn').value;

   var temp = document.createTextNode(inputVal);
   li.appendChild(temp);

   if(inputVal ==='')
   {
      alert('Write in the designated space.')
   }
   else{
      document.getElementById('myList').appendChild(li);
   }
   document.getElementById("input-btn").value = "";

   var span = document.createElement('SPAN');
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);
   for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}


anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });