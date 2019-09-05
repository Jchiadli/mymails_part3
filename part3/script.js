var count = document.getElementsByTagName('p').length;
document.getElementById('count').textContent = count;

document.getElementById('btn-add').addEventListener("click",function(){
                      var newText = document.getElementById('add message').value;
                      var div  = document.createElement("div");
                          div.className ="row-added";
                          document.body.appendChild(div);

                      var img = document.createElement("img")
                          img.className = "avatar";
                          img.src = "avatar-5.jpg";
                          div.appendChild(img);

                      var msg  = document.createElement("div");
                      div.appendChild(msg);
                      msg.className = "content"

                      var h6 = document.createElement('h6');
                      h6.textContent = "Rani Alheraqi";

                      content = document.createElement('p');
                      content.textContent = newText

                      msg.appendChild(content)

                      var trash = document.createElement('img')
                          trash.src = "trash.png";
                          trash.className = "trash"
                          div.appendChild(trash)

                      var count = document.getElementsByTagName('p').length;
                      document.getElementById('count').textContent = count;
                      document.getElementById('add message').value = "";
                      trash.addEventListener("click", 
                         function(){ 
                            this.parentNode.remove();
                            count = document.getElementsByTagName('p').length
                              document.getElementById('count').textContent = count
                         }
                        );
                    }
                  );


for(var i=0; i<document.getElementsByTagName('p').length; i++) {
      document.getElementsByClassName('trash')[i].addEventListener("click", 
       function(){ 
          this.parentNode.remove();
          count = document.getElementsByTagName('p').length
            document.getElementById('count').textContent = count
       }
      );
};
