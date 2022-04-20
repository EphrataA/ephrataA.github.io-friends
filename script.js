const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('btn');

const api_url ="https://friends-quotes-api.herokuapp.com/quotes/random ";
    function getquotes(url){
        fetch(url).then(res => res.json()).then(data => {
         quote.innerHTML=data.quote;
         author.innerHTML=data.character;
        
            console.log(data);
        })
    };
    
  document.getElementById('btn').onclick=function button(params) {
      getquotes(api_url);
  }