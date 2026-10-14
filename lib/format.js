// "2025-12-14" → "14 December 2025". UTC so the date never shifts with the server's timezone.
export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
