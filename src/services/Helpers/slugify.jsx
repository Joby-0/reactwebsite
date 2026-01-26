export function slugify(str) {
  if (!str) return '';

  return str
    .toLowerCase()            // lowercase
    .trim()                   // remove leading/trailing spaces
    .replace(/\s+/g, '-')     // replace spaces with dash
    .replace(/[^\w-]/g, '');  // remove everything except letters, numbers, and dash
}
