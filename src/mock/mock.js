const mockPoints = [
  {
    id: 'point-id-1',
    base_price: 1300,
    date_from: '2019-07-10T22:55:56.845Z',
    date_to: '2019-07-11T11:22:13.375Z',
    destination: 'dest-id-1',
    is_favorite: false,
    offers: ['offer-id-1'],
    type: 'taxi',
  },
  {
    id: 'point-id-2',
    base_price: 1100,
    date_from: '2019-07-10T22:55:56.845Z',
    date_to: '2019-07-11T11:22:13.375Z',
    destination: 'dest-id-2',
    is_favorite: true,
    offers: ['offer-id-3'],
    type: 'bus',
  },
  {
    id: 'point-id-3',
    base_price: 900,
    date_from: '2019-07-10T22:55:56.845Z',
    date_to: '2019-07-11T11:22:13.375Z',
    destination: 'dest-id-3',
    is_favorite: false,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa31'],
    type: 'train',
  },
];

const mockDestinations = [
  {
    id: 'dest-id-1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat et neque in eleifend. Fusce tempus maximus sem. Fusce rutrum vel tortor eu lobortis. Proin venenatis, lorem nec interdum sagittis, mi nulla bibendum justo, ut aliquam ligula felis vitae neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.',
    name: 'New-York',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building',
      },
    ],
  },
  {
    id: 'dest-id-2',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat et neque in eleifend. Fusce tempus maximus sem. Fusce rutrum vel tortor eu lobortis. Proin venenatis, lorem nec interdum sagittis, mi nulla bibendum justo, ut aliquam ligula felis vitae neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.',
    name: 'Berlin',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building',
      },
    ],
  },
  {
    id: 'dest-id-3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat et neque in eleifend. Fusce tempus maximus sem. Fusce rutrum vel tortor eu lobortis. Proin venenatis, lorem nec interdum sagittis, mi nulla bibendum justo, ut aliquam ligula felis vitae neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.',
    name: 'Moskow',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building',
      },
    ],
  },
];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'offer-id-1',
        title: 'Upgrade to a business class',
        price: 120,
      },
      {
        id: 'offer-id-2',
        title: 'Child seat',
        price: 420,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'offer-id-3',
        title: 'Econom',
        price: 120,
      },
      {
        id: 'offer-id-4',
        title: 'Child seat',
        price: 420,
      },
    ],
  },
];

export { mockPoints, mockDestinations, mockOffers };
