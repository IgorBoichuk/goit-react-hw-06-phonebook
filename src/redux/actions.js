import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/contactAdd');
export const deleteContact = createAction('contact/contactDelete');
export const setFilter = createAction('contact/contactSetFilter');
