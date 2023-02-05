// export const getUserData = state => state.user;
export const getUserData = ({ user }) => user;

export const getLoading = ({ user }) => user.isLoading;
export const getError = ({ user }) => user.error;
