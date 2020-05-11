import React, { useState } from 'react';
import Cat from './components/Cat/Cat.jsx';
import Fade from 'react-reveal/Fade';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {

	const [ openChat, setOpenChat ] = useState(false);

	function Start() {
		setOpenChat(true)
	}

	return (
		<div className='catbox-section'>
			<div className='catbox-container'>
				<div className='catbox-content'>
				{ openChat ?
					<Fade opposite>
						<div>
							<Chatbot />
						</div>
					</Fade>
				:
					<div className='catbox-header' onClick={Start}>
						<Cat />
						<span className='catbox-header-span'> ¡Hola humano! </span>
						<Fade opposite>
							<span className='catbox-header-span-talk'> ¿Hablamos? </span>
						</Fade>
						<Fade opposite>
							<span className='catbox-header-span-start'> Click sobre mí para comenzar :) </span>
						</Fade>
					</div>
				}
				</div>
			</div>
		</div>
	);
}

export default App;
