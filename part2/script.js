var count = document.getElementsByTagName('p').length;
console.log (count);
document.getElementById('count').textContent = count;

for(var i=0; i<document.getElementsByTagName('p').length; i++) {

      document.getElementsByClassName('trash')[i].addEventListener("click", 
       function(){ 
          this.parentNode.remove();
          count = document.getElementsByTagName('p').length
            document.getElementById('count').textContent = count
       }
      );
};
