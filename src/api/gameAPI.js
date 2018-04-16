
export const fetchGameMock = () => {
  return Promise.resolve({
    players: [
      {
        id: 123,
        field: [
          {
            name: 'kukaracha',
          },
          {
            name: 'kukaka',
          },
        ],
        hand: [
          {
            name: 'mcJaja',
          },
          {
            name: 'kukaka',
          },
        ],
        deck: [
          {
            name: 'mcJaja',
          },
          {
            name: 'kukaka',
          },
        ],
        grave: [
          {
            name: 'mcJaja',
          },
          {
            name: 'kukaka',
          },
        ],
        exile: [
          {
            name: 'mcJaja',
          },
          {
            name: 'kukaka',
          },
        ],
      },

      {
        id: 456,
        field: [
          {
            name: 'mcJaja',
          },
          {
            name: 'kukaka',
          },
        ],
        hand: [
          {
            name: 'mcJaja',
          },
          {
            name: 'kukaka',
          },
        ],
        deck: [
          {
            name: 'mcJaja',
          },
          {
            name: 'kukaka',
          },
        ],
        grave: [
          {
            name: 'mcJaja',
          },
          {
            name: 'kukaka',
          },
        ],
        exile: [
          {
            name: 'mcJaja',
          },
          {
            name: 'kukaka',
          },
        ],
      },
    ],
  })
}