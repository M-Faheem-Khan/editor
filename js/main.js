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

//SETTING MODAL
var settings_modal = document.getElementById('settings_modal');
var settings_btn = document.getElementById("set-btn");
var settings_span = document.getElementsByClassName("setting_close")[0];
var save_btn = document.getElementById("save");

     //Editor
var editor = document.getElementById('editor');

//Getting value from user
settings_btn.onclick = function() {
    settings_modal.style.display = "block";
}
settings_span.onclick = function() {
    settings_modal.style.display = "none";
}
var font = document.getElementById("font_size");
save_btn.onclick = function() {
    settings_modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == settings_modal) {
       settings_modal.style.display = "none";
    }
}
//END OF SETTING MODAL

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
