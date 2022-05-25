import React from 'react';
import './bem.css';
function bemEstar() {
	return (
		<div className='area-bem-estar'>
			<h2>
				Providenciamos os melhores <br />
				serviços para o seu bem-estar.
			</h2>
			<div className='area-imagens-flex'>
				<div className='area-imagens-bem-estar'>
					<content className='container-imgagens'>
						<img src='' />
						<p>
							Oferta de Toalhas | <br />
							Piscina e Spa
						</p>
					</content>
					{/* container-imgagens */}
					<content className='container-imgagens'>
						<img src='' />
						<p>
							Carro Elétrico | <br />
							Área de Lazer
						</p>
					</content>
					{/* container-imgagens */}
					<content className='container-imgagens'>
						<img src='' />
						<p>
							Helpers <br />
							(Ajudantes)
						</p>
					</content>
					{/* container-imgagens */}
					<content className='container-imgagens'>
						<img src='' />
						<p>
							Educador Físico | <br />
							Academia
						</p>
					</content>
					{/* container-imgagens */}
					<content className='container-imgagens'>
						<img src='' />
						<p>
							Segurança <br />
							24hrs
						</p>
					</content>
					{/* container-imgagens */}
					<content className='container-imgagens'>
						<img src='' />
						<p>
							Monitoramento <br />
							24hrs
						</p>
					</content>
					{/* container-imgagens */}
					<content className='container-imgagens'>
						<img src='' />
						<p>
							Churrasqueiras com <br />
							preparo para TV e som
						</p>
					</content>
					{/* container-imgagens */}
					<content className='container-imgagens'>
						<img src='' />
						<p>
							Tomada dupla na <br />
							cozinha e banheiros
						</p>
					</content>
					{/* container-imgagens */}
					<content className='container-imgagens'>
						<img src='' />
						<p>
							Revestimentos <br />
							tendência
						</p>
					</content>
					{/* container-imgagens */}
				</div>
				{/* area-imagens-bem-estar */}
			</div>
			{/* area-imagens-flex */}
		</div>
		// area-bem-estar
	);
}
export default bemEstar;
