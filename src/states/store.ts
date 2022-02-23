import create from 'zustand';
import {dummy, cart} from '../mock/dummy';

const useStore = create((set: any) => ({
  cardHolder: {
    number: '1111-2222-3333-4325',
    validThru: '07/24',
    holderName: 'Bayu Ganteng',
  },
  mails: dummy,
  baskets: cart,

  // Actions
  deleteMail: (id: number) =>
    set((state: any) => {
      const newData = [...state.mails];
      const prevIndex = state.mails.findIndex((item: any) => item.key === id);
      newData.splice(prevIndex, 1);

      return {mails: newData};
    }),
  plusQty: (id: number) =>
    set((state: any) => {
      const index = state.baskets.findIndex((item: any) => item.id === id);
      let newData = state.baskets;
      newData[index]['qty'] += 1;

      return {baskets: newData};
    }),
  minQty: (id: number) =>
    set((state: any) => {
      const index = state.baskets.findIndex((item: any) => item.id === id);
      let newData = state.baskets;

      if (newData[index]['qty'] < 1) return null;
      else newData[index]['qty'] -= 1;

      return {baskets: newData};
    }),
}));

export default useStore;
