const resolve = require('path').resolve


const MOCK_DATA = [
    {
        id: 1,
        name: 'Родион',
        surname: 'Дубанов',
        birth_date: '24.09.2000',
        image: resolve('./assets/rodya.jpeg'),
        fatherID: 3,
        motherID: 4,
        sistersIDs: [2, 5],
        brothersIDs: [2, 5],
        childrenIds: []
    },
    {
        id: 5,
        name: 'Антон',
        surname: 'Иванов',
        birth_date: '24.09.2000',
        image: resolve('./assets/rodya.jpeg'),
        fatherID: 3,
        motherID: 4,
        sistersIDs: [2, 1],
        brothersIDs: [2, 1],
        childrenIds: [3, 4]
    },
    {
        id: 2,
        name: 'Артем',
        surname: 'Дубанов',
        birth_date: '24.09.2000',
        image: resolve('./assets/rodya.jpeg'),
        fatherID: 3,
        motherID: 4,
        sistersIDs: [],
        brothersIDs: [2],
        childrenIds: [3, 4]
    },
    {
        id: 3,
        name: 'Юрий',
        surname: 'Дубанов',
        birth_date: '24.09.2000',
        image: resolve('./assets/yuriy.jpeg'),
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
        image: resolve('./assets/yuriy.jpeg'),
        fatherID: null,
        motherID: null,
        sistersIDs: [],
        brothersIDs: [],
        childrenIds: [1,2]
    },
]

export {MOCK_DATA}