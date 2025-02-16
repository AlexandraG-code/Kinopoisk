import { useState } from 'react'

import { useParams } from 'react-router-dom'

import { Button, Flex, Spin, Tag } from 'antd'

import { CustomModal } from '@shared/ui/Modal/ui/Modal'

import { useGetPersonByIdQuery } from '../api/personApiService'

export const ViewPerson = () => {
	const { personId } = useParams()

	const { data: person, isLoading } = useGetPersonByIdQuery(Number(personId))
	const [open, setOpen] = useState(false)

	return (
		<Spin spinning={isLoading}>
			<CustomModal isOpen={open} setIsOpen={setOpen}>
				<h2> Какая-то дополнительная информация про актера</h2>
				<Flex>
					<div>Профессия</div>
					{person?.profession?.map(({ value }) => <Tag color={'blue'}>{value ?? ''} </Tag>)}
				</Flex>
				<Flex>
					<div>Место рождения</div>
					{person?.birthPlace?.map(({ value }) => <Tag color={'green'}>{value ?? ''} </Tag>)}
				</Flex>
			</CustomModal>
			<Flex gap={'3em'}>
				<div>
					<img src={person?.photo ?? ''} alt={person?.name ?? ''} />
				</div>
				<Flex vertical gap={'1em'}>
					<div>
						Имя: {person?.name} ({person?.enName})
					</div>
					<div>Возраст:{person?.age}</div>
					<div>
						<h5>Фильмография:</h5>
						{person?.movies?.map((movie) => <Tag color={'red'}>{movie?.name ?? ''} </Tag>)}
					</div>
				</Flex>
			</Flex>

			<Button type="primary" onClick={() => setOpen(true)}>
				Подробнее
			</Button>
		</Spin>
	)
}
