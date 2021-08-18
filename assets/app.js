document.getElementById('search-btn').addEventListener('click', event => {

  let input = document.getElementById('search-input').value
  
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=9zby5Ocx2Cn3yzfMeS7n4QpW9UWQ1npn&limit=20&q=${input}`)
    .then(response => {
      let imageList = response.data.data
      console.log(imageList)

      imageList.forEach(imgObj => {

        let gif = imgObj.images.fixed_width.url

        let divEl = document.createElement('div')
        divEl.className = 'col-3 card gif'
        divEl.innerHTML = `
        <img src=${gif} class="card-img-top" alt="GIF">
        <div class="card-body">
          <button class="btn btn-primary">Save GIF</button>
        </div>
        `

        document.getElementById('results').append(divEl)

      })

      
    })
    .catch(error => console.log(error))

})