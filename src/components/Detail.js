import { useParams } from 'react-router-dom'
import { Films as data } from '../shared/ListOfFilms'
import { useState } from 'react';
import { Icon } from 'react-materialize';
import ModalCase from './ModalCase';

export default function Detail() {
	const userName = useParams();
	const film = data.find(obj => {
		return obj.id == userName.id;
	});
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='container-details'>
			<div className='product-card'>
				<div className='badge'>{film.title}</div>
				<div className='product-tumb'>
					<img src={`../${film.img}`} alt='' />
				</div>
				<a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
					<Icon>ondemand_video</Icon>
				</a>
				{isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
				<div className='product-details'>
					<h5>Nation: {film.nation}</h5>
					<h5>Year: {film.year}</h5>
					<p>{film.info}</p>
					<div className='product-bottom-details'></div>
				</div>
			</div>
		</div>
	)


}