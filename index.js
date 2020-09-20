
function fetchUp( options){
   
    const {url, headers,  max_size } = options
  
    var inpFile = document.getElementById("fetchup")
 
        myForm.addEventListener('submit',e =>{
            e.preventDefault();
            var url = 'upload.php';
            var formData = new FormData()
 
            formData.append("fetchup",inpFile.files[0])
 
            fetch(url, {
                method:"POST",
                body:formData
            })
        });
  }
  
