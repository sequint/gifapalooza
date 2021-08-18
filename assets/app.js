document.getElementById('search-btn').addEventListener('click', event => {

  let input = document.getElementById('search-input').value
  
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=9zby5Ocx2Cn3yzfMeS7n4QpW9UWQ1npn&limit=20&q=${input}`)
    .then(response => {
      let imageList = response.data.data
      console.log(imageList)

      document.getElementById('results').innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${imageList[0].images.fixed_width_small}" class="card-img-top" alt="GIF">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      `
    })
    .catch(error => console.log(error))

})