export default function callApi(data) {
	return new Promise((resolve, reject) => {
		const url = `http://localhost:3004/student`;
		fetch(url, {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			});
	});
  }