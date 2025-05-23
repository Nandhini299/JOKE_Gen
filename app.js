const button= document.getElementById("button");
const jokecontent = document.getElementById("jokecontent");
const joke = document.getElementById("joke");

button.onclick =() =>
{
    //axios - mid
    axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then(function(response)
    {
        button.textContent = "Next";
        joke.textContent = "";
        jokecontent.textContent = response.data.setup;
        setTimeout(function()
    {
        joke.textContent = response.data.punchline;
    },2000);
    })
      .catch(function(error)
{
    console.log(error);
}) //promises 
};

