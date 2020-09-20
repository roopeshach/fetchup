
function fetchUp( options){
   
    const {url, headers,  max_size } = options
  
    var file = document.getElementById("fetchup")
 
        myForm.addEventListener('submit',e =>{
            e.preventDefault();
            var url = 'upload.php';
            var formData = new FormData()
 
            formData.append("fetchup",file.files[0])
 
            fetch(url, {
                method:"POST",
                body:formData
            })
            .then(
                function(response) {
                  if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                      response.status);
                    return;
                  }
            
                  // Examine the text in the response
                  response.json().then(function(data) {
                    alert(data.response)
                    file.value = file.defaultValue;
                  });
                }
              )
              .catch(function(err) {
                console.log('Fetch Error :-S', err);
              });
            
            
              
        
              
        });
  }
  
