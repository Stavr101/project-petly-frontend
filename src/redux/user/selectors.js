// export const selectLoading = state => state.contacts.isLoading;
// export const selectAllContacts = state => state.contacts.items;
// export const getContacts = state => state.contacts;
export const getContacts = state => state.user;
export const getPets = ({ pets }) => pets.items;

export const getLoading = ({ user }) => user.isLoading;
export const getError = ({ user }) => user.error;
