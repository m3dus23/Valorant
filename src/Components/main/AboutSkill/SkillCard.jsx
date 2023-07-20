import React from 'react'
import styles from './SkillCard.module.scss'

export const SkillCard = ({ title, skill, about, img }) => {
	return (
		<div
			className={styles.skillCard}>
			<div className='font-montserrat flex flex-col flex-initial w-[340px] gap-y-2'>
				<div className='text-4xl text-[#C4C4C4]'>{title}</div>
				<div className='text-2xl text-black font-bold'>{skill}</div>
				<div className=''>{about}</div>
			</div>
			<div className='z-10'>
				<img className={styles.animateImg} src={img} alt='logo' width='200px' height='160px' />
			</div>
			<span className='absolute w-[158px] h-[160px] bg-primary bottom-0 right-20'></span>
		</div>
	)
}