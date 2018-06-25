// shows the modal on page load
$( document ).ready(function() {
     if (document.cookie.indexOf('visited=true') == -1){
          // load the overlay
          $('#myModal').modal({show:true});
     }
});



// setting the title of the tab on document title change
function change_title(){
     // getting element
     var document_title = document.getElementById("document_title");
      // if length of the title is 0
      // set the the title to 0
      // otherwise set it to document
     if (document_title.value == 0){
          document.title = "Untitled Document";
     } else {
          document.title = document_title.value;
     }
}

// This Function is run when body is resized or when the page is loaded
// sets the height and width of the textarea to the scroll height of the window
$("#editor").on('load', function() {
	var scroll_height = $("#editor").get(0).scrollHeight;
	$("#editor").css('height', scrollHeight + 'px');
});
// }

// This function dims the textarea when input is in onfocus and vice versa
function dim_other(current_element_id, element_id){
     var out_of_focus_element = document.getElementById(element_id);
     var in_focus_element = document.getElementById(current_element_id);
     // changing the styles of the out of focus elements
     out_of_focus_element.style.background = "rgb(235, 235, 235)";
     out_of_focus_element.style.color = "#464646";
     // changing the styles of the element in focus
     in_focus_element.style.background = "white";
     in_focus_element.style.color = "#111111";
}
