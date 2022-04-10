import React from 'react';
import { useEffect, useState } from 'react';
import {authURL} from './secret/secret'
import Card from './Card';
import './App.css';


function App() {
  const auth =
		`Bearer ${authURL}`;


	const [albums, setAlbums] = useState([]);

	useEffect(async => {
		getData()
			.then(data =>
				data.albums.items.forEach(item => setAlbums(added => [...added, item]))
			) //for each album then take the ones added already and add the new item to the array.
			.catch(error => console.log(error));
	}, []);

	async function getData() {
		const response = await fetch(
			'https://api.spotify.com/v1/browse/new-releases',
			{
				method: 'GET',
				headers: {
					Authorization: auth
				},
				'Content-Type': 'application/json'
			} 
		);
		const data = await response.json();
		return data;
	}

	return (
		<main>
			<Card albums={albums} />
		</main>
	);
}

export default App;
