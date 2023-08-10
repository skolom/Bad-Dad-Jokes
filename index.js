
const btn = document.querySelector('#btn');

const joke = document.querySelector('#joke');

// const options = {
//     method: 'GET',
//     headers: { 
//         'X-Api-Key': 'GYsVrGD1nNYU8RT4S6ZgsRS6UtvrKO6UJoAycfAF'
//     }
// }

// const apiURL =  "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// async function getJoke() {
//     const response = await fetch(apiURL, options);
//     const data = await response.json();

//     console.log(data);
// }

// btn.addEventListener('click', getJoke);


//Get data Rwquest via Axios
 async function fetchData () {

    try {
        
        joke.innerText = "Updating..."

        btn.disable = true;
        btn.innerText = "Loading...";

        const response = await axios.get("https://api.api-ninjas.com/v1/dadjokes?limit=1", {
        headers: { 'X-Api-Key': 'GYsVrGD1nNYU8RT4S6ZgsRS6UtvrKO6UJoAycfAF'}
                
     }
);          
        btn.disable = false;
        btn.innerText = "Tell me a Joke";

        return joke.innerText = response.data[0].joke ;

    } catch (error) {
        btn.disable = false;
        btn.innerText = "Tell me a Joke";
        return joke.innerText = "An error occured, Try again later" ;
        
    }
        

}   

btn.addEventListener('click', fetchData);



        




