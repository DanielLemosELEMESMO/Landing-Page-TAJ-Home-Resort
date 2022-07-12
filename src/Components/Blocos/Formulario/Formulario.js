import React, { useState } from 'react';
import './formulario.css';
import Botao from '../Botao/Botao.js';
import { deleteCaracter } from './delete.js';
import { addCaracter } from './caracterAdd.js';
import { numericRuler } from './rulerPhone.js';

// precisa-se criar regra para o input do telefone, para caso escrevam errado alguma coisa ou coloquem string ao inves de numero
// TA COM BUG MAS FOI QUASE
function formulario(props) {
	const [numeric, setNumeric] = useState('');

	const handleChange = (e) => {
		let element = e.target.value;
		numericRuler(element);
		setNumeric(addCaracter(deleteCaracter(element)));
	};

	return (
		<div className='area-form-flex'>
			<form>
				<label reactfor='nome'>
					<p>Nome</p>
					<input type='text' key='nome' placeholder='Nome completo' required />
				</label>

				<label reactfor='telefone'>
					<p>Telefone</p>
					<input
						type='text'
						key='telefone'
						maxLength={15}
						placeholder='Telefone com DDD'
						value={numeric}
						onChange={(e) => handleChange(e)}
						required
					/>
				</label>
				<label reactfor='cidade'>
					<p>Cidade</p>
					<input type='text' key='cidade' required />
				</label>

				<label reactfor='estado'>
					<p>Estado</p>
					<input type='text' key='estado' required />
				</label>

				<label reactfor='email'>
					<p>E-mail</p>
					<input
						type='email'
						key='email'
						required
						placeholder='exemplo@email.com'
					/>
				</label>

				<label reactfor='mensagem'>
					<p>Mensagem</p>
					<textarea required key='mensagem'></textarea>
				</label>

				<label reactfor='termo' className='termo'>
					<input type='checkbox' key='termo' required />
					<p>Aceito receber o contato de um consultor</p>
				</label>
				<Botao className='botao-enviar' title='ENVIAR' />
			</form>
			<div className='contato-texto'>
				<h2>Entre em contato conosco e marque uma visita.</h2>
				<p>
					Não perca a <span className='destaque'>oportunidade</span> de
					proporcionar a você e sua família essa{' '}
					<span className='destaque'>experiência única.</span>
				</p>
				<p>
					Venha visitar o Taj Home Resort e conhecer mais sobre esse{' '}
					<span className='destaque'>paraíso localizado em Vila Velha</span>,
					onde os seus{' '}
					<span className='destaque'>sonhos podem se tornar realidade.</span>
				</p>
				<img
					src={require('../../Assets/Imagens/desktop_logo_pequena.png')}
					alt='TAJ'
				/>
			</div>
			<br />
		</div>
	);
}
export default formulario;
