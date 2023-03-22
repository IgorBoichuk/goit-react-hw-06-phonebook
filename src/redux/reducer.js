import { addContact, deleteContact, setFilter } from './actions';

export const listReducer = (state = 0, action) => {
  switch (action.type) {
    case addContact.type: {
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case deleteContact.type: {
      console.log(state.contacts);
      console.log(action.payload);

      return {
        // state.contacts.filter(item => item.id !== id),
        ...state,
        contacts: [state.contacts.filter(item => item.id !== action.payload)],
      };
    }

    case setFilter.type: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};