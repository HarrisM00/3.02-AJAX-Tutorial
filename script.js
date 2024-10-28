let pageCounter = 1
const animalContainer = $('animal-info')
const btn = $('#btn')

btn.on('click', function() {
  })

  function renderHTML(data) {
    let htmlString = ''

    data.forEach(function (animal){
        htmlString += `<p> $(animal.name) is a $(animal.species) that likes to eat`
      animal.foods.likes.forEach(function() {
        htmlString += index === 0 ? like : `and$(like)`
      })
      htmlString += 'and dislikes'
      animal.foods.dislikes.forEach(function(dislike, index) {
        htmlString += index === 0 ? dislike : `and $(dislike)`
      
      })
      
    htmlString += '.</p>'
  })

  animalCounter.append(htmlString)
  }