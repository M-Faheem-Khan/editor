var copyTextareaBtn = document.querySelector('#copy-btn');

copyTextareaBtn.addEventListener('click', function(event) {
     var copyTextarea = document.querySelector('#editor');
     copyTextarea.select();

     try {
          // copy successful
          var successful = document.execCommand('copy');
     } catch (err) {
          // copy failed
          // console.log('Oops, unable to copy');
     }
});
