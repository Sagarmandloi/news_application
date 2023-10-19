 const ApiKey='77790e8dd07a4b0c897d4d6425823267';
const url='https://newsapi.org/v2/everything?q=';

window.addEventListener('load',()=>fetchNews('india'));

async function fetchNews(query){
    const news= await fetch(`${url}${query}&apiKey=${ApiKey}`);
       const data= await news.json();
       console.log(data);
      bindData(data.articles);  
    }
    function bindData(articles){
        let cardList = document.getElementById("cardList")
        
        articles.forEach(article => {
            if(article.urlToImage){
            let card = document.createElement("div")
            card.setAttribute("id","card")
            
            
            let cardInner = document.createElement("div")
            cardInner.setAttribute("class","card-header")
             cardInner.innerHTML= `<img class="newImg" src=${article.urlToImage}>`
            
             let cardTitle=document.createElement("h3")
             cardTitle.setAttribute("class","card-content")
             cardTitle.innerHTML=`<h3 class="news-title">${article.title}</h3> `
             
             let cardDis=document.createElement("p")
             cardDis.setAttribute("class","card-content")
             cardDis.innerHTML=`<p class="news-desc">${article.description}</p>`
             
             let seeNews=document.createElement('p')
             seeNews.setAttribute('class','full-news')
             seeNews.innerHTML=` ${article.source.name}`
               
             card.addEventListener('click',()=>{

                window.open(article.url,'_blank');
             })

            

             card.appendChild(cardInner)
             cardList.appendChild(card)

             card.appendChild(cardTitle)   
            cardList.appendChild(card)
 
             card.appendChild(cardDis)
             cardList.appendChild(card)

             card.appendChild(seeNews)
             cardList.appendChild(card)
            }
           

        });
        
    
    }

    function newsYouWant(id){
        fetchNews(id);

      }

    
        
    