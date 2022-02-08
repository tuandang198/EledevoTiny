export default function updateAPI(data){
    return new Promise((resolve, reject) => {
		const url = `http://localhost:3004/student/${data.id}`;
		// console.log(url,'uel updateeeeeeeeeeee');
		// console.log(data.updatePhoneName,"dataaaaa");
        fetch(url, { 
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
				"content": data.content,
				"arrImage": data.arrImage
			})
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