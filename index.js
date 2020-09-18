function fetchUp( options){
    const {url, headers, input, max_size } = options
  
    const data = new FormData()
  
    for (const file of input.files) {
        //Mb ma change
      if(file.size > max_size * 1024 * 1024){
        console.error(`${file.name} is larger than ${max_size}`)
      }

      data.append('fetchup',file,file.name)
    }
  
    return fetch(url, {
      method: 'POST',
      body: data
    }).then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
  }
  
// use garne tarika 
  
//   postFile( {
//       url: 'https;///',
//     headers: {
//       'content-type': 'multipart/form-data'
//     },
//     max_size: '2',
//     input: ""
//   })

//html ma use garne
//<input type="file" id="fetchup"></input>