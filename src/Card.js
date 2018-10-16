import React from 'react';




const Card = ({id,name,email}) =>{

	return(
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src = {`https://robohash.org/${id}?200x200`} alt='profile'/>
			<h1>{name}</h1>
			<h2>{email}</h2>
		</div>

		)
}

export default Card;