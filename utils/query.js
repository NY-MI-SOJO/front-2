/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Fetches from the graphql endpoint using the query provided
 * @Exports {@function getArticles}
 */



const getArticles = async () =>{
    const response = await fetch(
    'https://nymisojo-back.herokuapp.com/graphql',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: queryVar,
            variables: {},
        }),
    })
    const resJson = await response.json();
    console.log(resJson)
    const articleObjects = resJson.data.articles.reduce((restObj, article) =>{
        article.tags.forEach(tag =>{
          restObj[tag.Name] = restObj[tag.Name] ?? []
          restObj[tag.Name].push(article);
        });
        return restObj;
    },{})
    return articleObjects;
} 


    
const queryVar = `
    query {
        articles {
            Title, Source, Description, Image, imageDescription, isHero, articleOrientation, URI, isHero
            tags { 
                Name, Order
            }  
        }
    }
`

export {getArticles};