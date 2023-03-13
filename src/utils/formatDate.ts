export function formatDateNum(
  date: string,
  separator: '-' | '/' = '-'
): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1; // getMonth() returns a zero-based month (0-11), so we need to add 1 to get the month number (1-12)
  const day = d.getDate();

  return `${year}${separator}${month}${separator}${day}`;
}
