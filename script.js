// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (data) {
//     console.log('the data', data)
//   })

let newPost = {
  title: "hello world",
  body: "that's really something"
}

fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'post',
    body: JSON.stringify(newPost)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('post request response data', data)
  })