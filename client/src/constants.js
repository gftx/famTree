
import rodya from './images/rodya.jpeg'
import yuriy from './images/yuriy.jpeg'
const MOCK_DATA = [
    {
        id: 1,
        name: 'Родион',
        surname: 'Дубанов',
        birth_date: '24.09.2000',
        image: rodya,
        fatherID: 3,
        motherID: 4,
        sistersIDs: [],
        brothersIDs: [2],
        childrenIds: []
    },
    {
        id: 5,
        name: 'Родион',
        surname: 'Дубанов',
        birth_date: '24.09.2000',
        image: rodya,
        fatherID: 3,
        motherID: 4,
        sistersIDs: [],
        brothersIDs: [2],
        childrenIds: []
    },
    {
        id: 2,
        name: 'Артем',
        surname: 'Дубанов',
        birth_date: '24.09.2000',
        image: rodya,
        fatherID: 3,
        motherID: 4,
        sistersIDs: [],
        brothersIDs: [2],
        childrenIds: []
    },
    {
        id: 3,
        name: 'Юрий',
        surname: 'Дубанов',
        birth_date: '24.09.2000',
        image: yuriy,
        fatherID: null,
        motherID: null,
        sistersIDs: [],
        brothersIDs: [],
        childrenIds: [1,2]
    },
    {
        id: 4,
        name: 'Гузель',
        surname: 'Дубанова',
        birth_date: '24.09.2000',
        image: yuriy,
        fatherID: null,
        motherID: null,
        sistersIDs: [],
        brothersIDs: [],
        childrenIds: [1,2]
    },
]

export {MOCK_DATA}