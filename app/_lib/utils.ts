const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
};

export const getFormattedDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", options);
};
