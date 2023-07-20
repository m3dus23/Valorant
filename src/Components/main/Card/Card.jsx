import React from 'react'
import styles from './Card.module.scss'

export const Card = ({ name, country, image, skills }) => {

	const HeroNameStyle = {
		display: 'flex',
		height: '70px',
		fontSize: '72px',
		lineHeight: '0.6em',
		color: 'transparent',
		WebkitTextStroke: '1px white'
	}

	return (
		<div className={styles.card}>
			<div className='overflow-hidden'>
				<img className={styles.animateHero} src={image} alt={name} />
			</div>
			<div
				className='flex w-full absolute top-32 -left-[137px] rotate-90 tracking-widest'>
				<div className={styles.animateName}>
					<div className='text-primary font-bold text-lg'>{country}</div>
					<div style={HeroNameStyle}>{name}</div>
				</div>
			</div>
			<div
				className='absolute -bottom-10 -right-7 flex items-center justify-center h-[90px] w-[300px] px-3 gap-6 bg-secondary border-2 border-white'>
				{skills.map((skills, index) => {
					return <img className='h-[45px] w-[45px]' key={index} src={skills} alt='svg' />
				})}
			</div>
		</div>
	)
}
