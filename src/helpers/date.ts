// Format UTC Date to readable Day/Month/Year format.
export const formatDate = (date: string) => new Date(Date.parse(date)).toDateString();
