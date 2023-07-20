import val from '../../img/main/val.svg'
import { SkillCard } from './AboutSkill/SkillCard'
import { SkillList } from './AboutSkill/SkillList'
import { Card } from './Card/Card'
import { Cards } from './Card/CardList'

const Main = () => {
	const AgentStyleText = {
		fontFamily: 'michroma',
		fontSize: '110px',
		color: 'transparent',
		WebkitTextStroke: '1px white',
		transform: 'rotate(90deg)'
	}

	return (
		<div className='flex flex-col relative bg-primary'>
			<div className='flex pt-24 pb-44'>
				<div className='w-[320px] flex justify-center place-items-center ml-[60px] cursor-default'>
					<div style={AgentStyleText}>AGENTS</div>
				</div>
				<div className='flex gap-24 z-10'>
					{Cards.map((card, index) => {
						return (
							<Card
								key={index}
								name={card.name}
								country={card.country}
								image={card.image}
								skills={card.skills}
							/>
						)
					})}
				</div>
			</div>
			<div className='flex justify-center gap-12 px-24 -mb-14'>
				{SkillList.map((about, index) => {
					return (
						<SkillCard
							key={index}
							title={about.title}
							skill={about.skill}
							about={about.about}
							img={about.img}
						/>
					)
				})}
			</div>
			<span className='absolute top-16 left-[1350px] border-2 border-[#1F2326] opacity-50 w-[150px]'></span>
			<span className='absolute bottom-72 left-16 border-2 border-[#1F2326] opacity-50 w-[150px]'></span>
			<span className='absolute bottom-[355px] left-16 border-2 border-[#1F2326] opacity-50 w-[60px]'></span>
			<span className='absolute top-40 left-16 border-2 border-[#1F2326] opacity-50 w-[30px]'></span>
			<span className='absolute top-36 left-[1070px] border-2 border-[#1F2326] opacity-50 w-[30px]'></span>
			<span className='absolute bottom-[600px] left-[1075px] border-2 border-[#1F2326] opacity-50 w-[30px]'></span>
			<span className='absolute bottom-[600px] left-[1540px] border-2 border-[#1F2326] opacity-50 w-[30px]'></span>
			<span className='absolute top-80 left-16 border-2 border-[#1F2326] opacity-50 w-[4px]'></span>
			<span className='absolute top-16 left-[310px] border-2 border-[#1F2326] opacity-50 w-[4px]'></span>
			<span className='absolute top-16 left-[290px] border-2 border-[#1F2326] opacity-50 w-[4px]'></span>
			<span className='absolute bottom-[260px] left-[1567px] border-2 border-[#1F2326] opacity-50 w-[4px]'></span>
			<span className='absolute bottom-[260px] left-[1587px] border-2 border-[#1F2326] opacity-50 w-[4px]'></span>
			<span className='absolute bottom-[520px] left-[1100px] border-2 border-[#1F2326] opacity-50 w-[4px]'></span>
			<span className='absolute top-[230px] left-[1098px] border-2 border-[#1F2326] opacity-50 w-[4px]'></span>
			<span className='absolute top-[75px] left-[600px] w-7 h-7 bg-[#1F2326] opacity-50'></span>
			<span className='absolute top-[280px] left-[1470px] w-7 h-7 bg-[#1F2326] opacity-50'></span>
			<span className='absolute bottom-[340px] left-[705px] w-7 h-7 bg-[#1F2326] opacity-50'></span>
			<span className='absolute bottom-[270px] left-[1795px] w-7 h-7 bg-[#1F2326] opacity-50'></span>
			<span>
				<img
					className='absolute bottom-[370px] left-16 opacity-50 bg-[#1F2326] p-2'
					src={val}
					alt='logo'
					width='60px'
				/>
			</span>
		</div>
	)
}

export default Main
