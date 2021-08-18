window.addEventListener('load', event => {



    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      console.log(key)
      let gif = localStorage.getItem(key)

      let divEl = document.createElement('div')
      divEl.className = 'col-3 card gif'
      divEl.innerHTML = `
        <img src=${gif} class="card-img-top" alt="GIF">
        `
      document.getElementById('saved-display').append(divEl)

    }

})