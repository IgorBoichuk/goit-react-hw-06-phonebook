// export const addContact = data => {
//   return {
//     type: 'contact/contactAdd',
//     payload: data,
//   };
// };

// export const deleteContact = data => {
//   return {
//     type: 'contact/contactDelete',
//     payload: data,
//   };
// };

// export const setFilter = data => {
//   return {
//     type: 'contact/contactSetFilter',
//     payload: data,
//   };
// };

import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/contactAdd');
export const deleteContact = createAction('contact/contactDelete');
export const setFilter = createAction('contact/contactSetFilter');
