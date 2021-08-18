document.getElementById('search-btn').addEventListener('click', event => {

  // Clear prior display values.
  document.getElementById('results').innerHTML = ''

  let input = document.getElementById('search-input').value
  
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=9zby5Ocx2Cn3yzfMeS7n4QpW9UWQ1npn&limit=20&q=${input}`)
    .then(response => {
      let gifList = response.data.data
      console.log(gifList)

      gifList.forEach(imgObj => {

        let gif = imgObj.images.fixed_width.url
        let gifId = imgObj.slug

        let divEl = document.createElement('div')
        divEl.className = 'col-3 card gif'
        divEl.innerHTML = `
        <img src=${gif} class="card-img-top" id=${gifId} alt="GIF">
        <div class="card-body">
          <button class="btn btn-primary save-gif">Save GIF</button>
        </div>
        `

        document.getElementById('results').append(divEl)

      })

      
    })
    .catch(error => console.log(error))

  document.getElementById('search-input').value = ''

})

document.addEventListener('click', event => {

  if (event.target.classList.contains('save-gif')) {

    let selectedId = event.target.parentNode.parentNode.children[0].id
    let selectedItem = event.target.parentNode.parentNode.children[0].src

    localStorage.setItem(selectedId, selectedItem)
  }

})