export default function deleteAPI(data){
	console.log(data, 'dataaaaaa');
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3004/student/${data.id}`;
        fetch(url, { 
			method: 'DELETE'
            // headers: {'content-type': 'application/json'},
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res)
        })
        .catch((error) =>{
            reject(error);
        })
    })
    }