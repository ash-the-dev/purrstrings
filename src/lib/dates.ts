const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export function formatPublishDate(isoDate: string) {
  return dateFormatter.format(new Date(`${isoDate}T00:00:00`));
}

export function formatReadingTime(minutes: number) {
  return `${minutes} min read`;
}
