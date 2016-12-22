var diag_modal = document.getElementById('diag');
var diag_span = document.getElementsByClassName("diag_close")[0];
var diag_btn = document.getElementById("src_code");

//displaying the modal
diag_modal.style.display = "block";

// When the user clicks on (x), close the modal
diag_span.onclick = function() {
    diag_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == diag_modal) {
        diag_modal.style.display = "none";
    }
}

document.getElementById("diag_btn_close").onclick = function () {
     diag_modal.style.display = "none";
}


//PREVIEW MODAL
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
   modal.style.display = "block";
}
span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}
//END OF PREVIEW MODAL



//Tab no-escape
var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
       if(e.keyCode==9 || e.which==5){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1;
       }
    }
}
