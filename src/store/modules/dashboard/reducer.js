import produce from 'immer';

const INITIAL_STATE = {
  data: [
    {
      date: '02/04/2020',
      local: 'Manaus',
      name: 'SALDO INICIAL',
      value: 10.45,
    },
    {
      date: '02/04/2020',
      local: 'Manaus',
      name: 'IMPORTADORA TV',
      value: 50000,
    },
    {
      date: '06/04/2020',
      local: 'Manaus',
      name: 'SOP-ADRIANÓPOLIS',
      value: 1000,
    },
    {
      date: '06/04/2020',
      local: 'Manaus',
      name: 'DELMAR ANTÔNIO',
      value: 200,
    },
    {
      date: '06/04/2020',
      local: 'Manaus',
      name: 'RODRIGO BARAUN',
      value: 1000,
    },
    {
      date: '06/04/2020',
      local: 'Manaus',
      name: 'IVANA DA FONSECA',
      value: 50,
    },
    {
      date: '06/04/2020',
      local: 'Manaus',
      name: 'TARIFA DE SERVIÇOS',
      value: -84,
    },
    {
      date: '07/04/2020',
      local: 'Manaus',
      name: 'NIOMAR LINS',
      value: 200,
    },
    {
      date: '07/04/2020',
      local: 'Manaus',
      name: 'SALOMAO ISRAEL',
      value: 500,
    },
    {
      date: '07/04/2020',
      local: 'Manaus',
      name: 'CARLOS PEREIRA',
      value: 40,
    },
    {
      date: '08/04/2020',
      local: 'Manaus',
      name: 'JOSE ANTONIO',
      value: 100,
    },
    {
      date: '08/04/2020',
      local: 'Manaus',
      name: 'MAURICIO AUCAR',
      value: 300,
    },
    {
      date: '08/04/2020',
      local: 'Manaus',
      name: 'NELSON ANGELO',
      value: 240,
    },
    {
      date: '09/04/2020',
      local: 'Manaus',
      name: 'JOSÉ HENRIQUE',
      value: 1000,
    },
    {
      date: '13/04/2020',
      local: 'Manaus',
      name: 'ANA P M ABREU',
      value: 80,
    },
    {
      date: '13/04/2020',
      local: 'Manaus',
      name: 'WERRYGTON K B',
      value: 100,
    },
    {
      date: '13/04/2020',
      local: 'Manaus',
      name: 'ELLEN TAIZA',
      value: 100,
    },
    {
      date: '14/04/2020',
      local: 'Manaus',
      name: 'RRZ AMAZONAS',
      value: 1000,
    },
    {
      date: '16/04/2020',
      local: 'Manaus',
      name: 'SOP - DJALMA BATISTA',
      value: 1000,
    },
    {
      date: '20/04/2020',
      local: 'Manaus',
      name: 'PROSPERO GUERREIRO',
      value: 50,
    },
    {
      date: '20/04/2020',
      local: 'Manaus',
      name: 'NILSON JOSE',
      value: 250,
    },
    {
      date: '20/04/2020',
      local: 'Manaus',
      name: 'ROMERO REIS',
      value: 1000,
    },
    {
      date: '20/04/2020',
      local: 'Manaus',
      name: 'IVANA DA CUNHA',
      value: 100,
    },
    {
      date: '20/04/2020',
      local: 'Manaus',
      name: 'RAIMUNDO JOSÉ',
      value: 100,
    },
    {
      date: '20/04/2020',
      local: 'Manaus',
      name: 'VLADYA RACHEL',
      value: 650,
    },
    {
      date: '20/04/2020',
      local: 'Manaus',
      name: 'CLINGER BELEM',
      value: 200,
    },
    {
      date: '30/04/2020',
      local: 'Manaus',
      name: 'FM IND GRÁFICA',
      value: -550,
    },
    {
      date: '06/05/2020',
      local: 'Manaus',
      name: 'A.M. DA S ROD',
      value: -54940,
    },
    {
      date: '06/05/2020',
      local: 'Manaus',
      name: 'TARIFA DE SERVIÇOS',
      value: -84,
    },
    {
      date: '08/05/2020',
      local: 'Manaus',
      name: 'ASAAS GESTAO FINANCEIRA SA',
      value: -100,
    },
  ],
  cash: {
    current: 0,
    goal: 800000,
  },
  basic: {
    current: 2320,
    goal: 4500,
  },
  benefits: {
    current: 6960,
    goal: 13500,
  },
  months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'],
  byMonth: [],
};

export default function dashboard(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {

      case '@dashboard/SET_DATA': {
        draft.data = action.payload.data;
        break;
      }

      case '@dashboard/SET_AMOUNT': {
        let value = 0;
        let amount = 0;
        let arr = [];

        // eslint-disable-next-line
        action.payload.data.map((donation, idx) => {
          const data = action.payload.data
          let actualMonth = data[idx].date.slice(3, 5)
          let nextMonth = data[idx + 1] ? data[idx + 1].date.slice(3, 5) : 0

          if (donation.value > 0) {
            value = value + donation.value
            amount = amount + donation.value
          }

          if(nextMonth !== actualMonth) {
            arr = arr.concat({x: draft.months[actualMonth - 1], y: amount})
            amount = 0;
          } 
        })

        draft.byMonth = arr;
        draft.cash.current = value;
        break;
      }

      default:
    }
  });
}
