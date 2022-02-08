import * as types from '../constant'
export default function searchAPI(data){
	console.log(data,'dataaaa search');
	return new Promise((resolve, reject) => {
		console.log(data,'search dataaaaaaaaaaa');
        const url = `http://localhost:3004/phoneSearch/?activePage=${data.activePage}&limit=${types.LIMIT}&search=${data.searchPhone}`
		console.log(url,"urllllllllllll");
        const config = {
            method: 'GET'
        }
 
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })


}