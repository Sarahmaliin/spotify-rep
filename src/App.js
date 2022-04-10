import React from 'react';
import { useEffect, useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const auth =
		'Bearer BQAS7kt4Z72N89pvoUEp2iKLY3cbmNCGnBPAeZfQbPiQTHsQpBi84oHK54-FjfwsGevZbmGv-0y-I6toNDyXNjLBqu9PexbGNpea5mlLKZ5tM2gLlccCw9v_gB5gN6apUFLMFMnc9iZnk5qZ';

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
