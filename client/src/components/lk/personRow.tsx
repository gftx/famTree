import { FC, useState, useEffect } from 'react'
import { IPerson } from '../../interfaces'
import { api } from '../../api'
import ReactTooltip from 'react-tooltip'
import notification from '../../utils/notification'

const PersonRow: FC = () => {
  const [persons, setPersons] = useState<IPerson[]>([])

  const getPersons: () => void = async () => {
    const res: any = await api.getPersons()
    setPersons(res.data.data)
  }

  useEffect(() => {
    getPersons()
  }, [])

  const changeHandler = (id: number) => {
    notification('функционал пока недоступен', true)
  }

  const deleteHandler = async (id: number) => {
    const res: any = await api.deletePerson(id)

    if (res.error) {
      notification('Человек не удален', true)
    } else {
      getPersons()
      notification('Человек успешно удален', false)
    }
  }

  return (
    <ul className='lk-personsRow'>
      {persons.map(item => (
        <li key={item.id} className='lk-personsRow-item'>
          <div className='lk-personsRow-item__name'>{item.name} {item.surname}</div>
          <a data-tip='React-tooltip' className='lk-personsRow-item__options'> ◕ </a>
          <ReactTooltip
            getContent={() => (
              <div>
                <p>Опции:</p>
                <button className='lk-personsRow-item__options' onClick={() => changeHandler(item.id)}>изменить</button>
                <button className='lk-personsRow-item__options' onClick={() => deleteHandler(item.id)}>удалить</button>
              </div>
            )}
            effect='solid'
            delayHide={300}
            delayUpdate={500}
            place='top'
            type='light'
          />
        </li>
      ))}
    </ul>
  )
}

export default PersonRow