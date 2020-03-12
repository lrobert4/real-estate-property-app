const History = require('./payhistory');

const newHistory = [
    {
        address: '123 Tax Lane NW',
        city: 'Atlanta',
        state: 'GA',
        zipCode: '30080',
        firstName: 'Bad',
        lastName: 'Bunny',
        amountPaid: '2000',
        date: '2-1-2020',
    },
    {
        address: '123 Money Way NW',
        city: 'Atlanta',
        state: 'GA',
        zipCode: '30060',
        firstName: 'George',
        lastName: 'Porge',
        amountPaid: '2500',
        date: '3-1-2020',
    },
    {
        address: '246 Excalibur Dr',
        city: 'Atlanta',
        state: 'GA',
        zipCode: '30060',
        firstName: 'Billy',
        lastName: 'Jean',
        amountPaid: '2250',
        date: '1-1-2020',
    },
];

History.deleteMany().then(() => {
    return History.create(newHistory);
}).then(() => {
    console.log('Database seeded.');
});