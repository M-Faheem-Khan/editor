// shows the modal
// Containing:
// -- number of words
// -- number of sentences
function show_stats(sentence_count, word_count){
     // shows the modal on page load
     if (document.cookie.indexOf('visited=true') == -1){
          document.getElementById("words").innerHTML = word_count;
          document.getElementById("sentences").innerHTML = sentence_count;
          // load the overlay
          $('#analyze_modal').modal({show:true});
       }
}

function analyze() {
     // get content from editor
     // calculate number of Sentences & words

     var data = document.getElementById("editor").value;
     // spliting the paragraphs in to sentences
     sentences = data.split(". ");
     var i, words = 0;
     // spliting each sentence to list of words
     for (i = 0; i < sentences.length; i++){
          sentences[i] = sentences[i].split(" ");
          words = words + sentences[i].length;
     }

     // this function shows the modal and the passed values in the modal
     show_stats(sentences.length, words+1);
}
