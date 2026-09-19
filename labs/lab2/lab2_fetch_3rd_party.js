/**
 Purpose:
 Fetch from a thrird party API and print out the results
 */

 fetch("https://official-joke-api.appspot.com/random_joke")
    .then((reponse) => {
        return reponse.json()
    })
    .then((dataJSON) => {
        console.log(dataJSON)
    })
    .catch((error) => {
        console.log(error)
    })
    