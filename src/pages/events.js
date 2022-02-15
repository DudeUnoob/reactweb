import React from 'react';

const Events = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Left',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Events in my Community</h1>
	<iframe src="https://discord.com/widget?id=893850212127342613&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
	<p className='discord'>Join the Discord for Community Events!</p>
	</div>
);
};

export default Events;
