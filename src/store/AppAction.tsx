export const setAction = (payload: any, type: string, dispatch: Function) => {
  dispatch({
    type,
    payload,
  });
};

export default { setAction };
