import React from 'react'
import { ReactComponent as Logo } from '../../img/header/riot.svg'
import logo from '../../img/header/logo_valorant.svg'
import Auth from '../../Auth/Auth'
import styles from './buttonLink.module.scss'

const Header = () => {
	return (
		<div className='flex h-[124px] font-montserrat bg-primary'>
			<div className='flex items-center pl-11 pr-6'>
				<div className='flex mr-[30px] gap-11'>
					<a href='/'>
						<Logo className='transition-colors duration-500 hover:fill-[#1F2326]' height={35} />
					</a>
					<div className='w-0.5 h-9 bg-white'></div>
					<img className='h-[35px]' src={logo} alt='logo' />
				</div>
				<div>
					<ul className='text-white flex ml-[30px] gap-[40px]'>
						<li>
							<a href='/' className={styles.blackLink}>game</a>
						</li>
						<li>
							<a href='/' className={styles.blackLink}>champions</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='bg-secondary flex items-center text-white flex-1 justify-between px-11'>
				<nav>
					<ul className='text-white flex gap-[40px]'>
						<li>
							<a href='/' className={styles.primaryLink}>news</a>
						</li>
						<li>
							<a href='/' className={styles.primaryLink}>patch notes</a>
						</li>
						<li>
							<a href='/' className={styles.primaryLink}>discover</a>
						</li>
						<li>
							<a href='/' className={styles.primaryLink}>e-sports</a>
						</li>
						<li>
							<a href='/' className={styles.primaryLink}>universe</a>
						</li>
						<li>
							<a href='/' className={styles.primaryLink}>shop</a>
						</li>
						<li>
							<a href='/' className={styles.primaryLink}>support</a>
						</li>
					</ul>
				</nav>
				<Auth />
			</div>
		</div>
	)
}

export default Header