import React, { useState } from 'react';
import './formulario.css';
import Botao from '../Botao/Botao.js';
// precisa-se criar regra para o input do telefone, para caso escrevam errado alguma coisa ou coloquem string ao inves de numero
// TA COM BUG MAS FOI QUASE
function formulario(props) {
	const [numeric, setNumeric] = useState('');

	const numericRuler = (e) => {
		let result = e.match(
			/([A-Z]|[a-z])|[!@#$%^&*_+\=[\]{};´`':"\|,.<>/?~¿Øø£¥☻®♥♦¼♣«♠»•α◘ß○π♂Σ♀Φ♪±♫≥☼≤►■◄†↑‡↓↔™¨]/g
		)
			? e.length--
			: e;
		return result;
	};
	const handleChange = (e) => {
		let element = e.target.value;
		if (element.length === 1) {
			element = `(${element}`;
		}
		if (element.length === 3) {
			element = `${element})`;
		}
		if (element.length === 4) {
			element = `${element} `;
		}
		if (element.length === 9) {
			element = `${element}-`;
		}
		setNumeric(numericRuler(element));
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
					Não perca a oportunidade de proporcionar a você e sua família essa
					experiência única.
				</p>
				<p>
					Venha visitar o Taj Home Resort e conhecer mais sobre esse paraíso
					localizado em Vila Velha, onde os seus sonhos podem se tornar
					realidade.
				</p>
				<img src='' alt='TAJ' />
			</div>
			<br></br>
		</div>
	);
}
export default formulario;
