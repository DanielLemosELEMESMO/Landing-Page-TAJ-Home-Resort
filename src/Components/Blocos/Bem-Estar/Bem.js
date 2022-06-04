import React from 'react';
import { render } from './static.js';
import Title from './components/Title/Title.js';
import './bem.css';
function BemEstar(props) {
	return (
		<div className='area-bem-estar'>
			<Title />
			<div className='area-imagens-flex'>
				<div className='area-imagens-bem-estar'>
					{render.map((obj, index) => (
						<content className='container-imgagens' key={index}>
							<img src={obj.image} />
							<p>{obj.frase}</p>
						</content>
					))}
				</div>
				{/* area-imagens-bem-estar */}
			</div>
			{/* area-imagens-flex */}
		</div>
		// area-bem-estar
	);
}
export default BemEstar;
