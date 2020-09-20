# FETCHUP
fetchup is an package for uploading files asynchrously using js fetch api

## usage
```
  fetchUp( {
      url: 'https;///', 
    headers: {
      'content-type': 'multipart/form-data'
    },
    max_size: 2,
    input: ""
  })

```

## In HTML form
```
<input type="file" id="fetchup"></input>
```