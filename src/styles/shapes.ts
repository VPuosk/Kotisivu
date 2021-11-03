const flexGeneric = {
  display: "flex",
  flex: 1,
  margin: 10,
}

export const vertical = {
  ...flexGeneric,
  "flex-direction": "row",
  backgroundColor: '#FEE',
}

export const horizontal = {
  ...flexGeneric,
  "flex-direction": "column",
  backgroundColor: '#EFE',
}