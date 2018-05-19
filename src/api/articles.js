
export default {
	getArticles: () =>
	{
		return fetch(`https://my-json-server.typicode.com/Invizor/articles-fake/articles`)
			.then(response => {
				return response.json();
			});
	},
	updateArticle: (article) =>
	{
		return fetch(`https://my-json-server.typicode.com/Invizor/articles-fake/articles?id=${article.id}`, {
			method: 'PUT',
			body: article
		})
			.then(response => {
				return response.json();
			});
	}
}