const flexGeneric = {
  display: "flex",
  flex: 1,
}

export const vertical = {
  ...flexGeneric,
  flexDirection: 'row' as const,
  backgroundColor: '#FEE',
}

export const horizontal = {
  ...flexGeneric,
  flexDirection: 'column' as const,
  backgroundColor: '#EFE',
}