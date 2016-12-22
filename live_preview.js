document.getElementById('editor').onkeyup = document.getElementById('editor').onkeypress = function() {
     document.getElementById('preview').innerHTML = this.value;
}
//SAME AS THIS
//var editor = document.getElementById('editor');
//editor.onkeyup = editor.onkeypress = function() {document.getElementById('preview').innerHTML = this.value;}​;
