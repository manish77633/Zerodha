import React from 'react';
import Hero from './Hero'
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Award from './Award;';
import OpenAccount from '../../OpenAccount';

function HomePage() {

	return (
		<>
		
			<Hero />
			<OpenAccount />
			<Award /> 
			<Stats />
			<Pricing />
			<Education />
			
			
	
		</>
	);
}

export default HomePage;