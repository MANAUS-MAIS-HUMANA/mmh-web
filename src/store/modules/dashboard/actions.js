export function setData(data) {
  return {
    type: '@dashboard/SET_DATA',
    payload: { data },
  };
}

export function setAmount(data) {
  return {
    type: '@dashboard/SET_AMOUNT',
    payload: { data },
  };
}