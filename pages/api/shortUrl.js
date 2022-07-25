/*this is a very easy api to understand the algoritm
1) create async function with the require parameters
2) create a object {} variable url with req.body
3) Create a shortUrl with math random to string (explain below in the code)
4) response the shortUrl
*/
export default async function handler(req,res){
      const { url } = req.body
	const shortUrl = Math.random() //create a number  0 < 1
		.toString(36) // pased to string with letters (36) example 0.usijoiaj9
		.substr(2,6)// eliminate the first 0.1 math random number response example: usijo  
    res.status(200).send({url, shortUrl})
}
