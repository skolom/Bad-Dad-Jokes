
const btn = document.querySelector('#btn');

const joke = document.querySelector('#joke');

//Async function and axios to fetch data
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



        




