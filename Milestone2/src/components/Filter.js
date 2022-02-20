export function filterItems(expenseList, query) {
  return expenseList.filter((item) => item.year.startsWith(query));
}
