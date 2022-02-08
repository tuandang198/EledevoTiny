import * as types from '../constant'

export default function paginateAPI(payload) {

	return new Promise((resolve, reject) => {
		const url = `http://localhost:3004/items?_page=${payload.paginateItem}&_limit=${types.LIMIT}`;
		fetch(url, {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((res) => {
				resolve(res);
				console.log(res);
			})
			.catch((error) => {
				reject(error);
			});
	});
  }