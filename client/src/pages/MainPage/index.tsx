import MainCard from '../../views/main/mainCard';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../api';
import { IPerson } from '../../interfaces';

const MainPage = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);

  const getPersons: () => void = async () => {
    const res: any = await api.getPersons();
    setPersons(res.data.data);
  };

  useEffect(() => {
    getPersons();
  }, []);

  const navigate = useNavigate();
  const goToProfile = (value: string) => {
    navigate({
      pathname: '/profile',
      search: createSearchParams({
        id: value
      }).toString()
    });
  };

  return (
    <main className='main'>
      {persons.length !== 0 && (
        <div className='main-container'>
          {persons.map((item: IPerson) => (
            <div
              className='mainCard'
              key={item.id}
              onClick={() => goToProfile(`${item.id}`)}
            >
              <MainCard
                persons={persons}
                goToProfile={goToProfile}
                {...item}
              />
            </div>
          ))}
        </div>

      )}
    </main>
  );
};

export { MainPage };
