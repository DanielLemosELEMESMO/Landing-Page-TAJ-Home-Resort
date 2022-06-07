import React from 'react';
import { render } from './static.js';
import './bem.css';
function BemEstar(props) {
	return (
		<div className='area-bem-estar'>
			<h2>
				Providenciamos os melhores <br />
				serviços para o seu bem-estar.
			</h2>
			<div className='area-imagens-flex'>
				<div className='area-imagens-bem-estar'>
					{render.map((obj, index) => (
						<div className='container-imgagens' key={index}>
							<img src={obj.image} />
							<p>{obj.frase}</p>
						</div>
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
