/**
 * Replaces all occurrences of ':' with ' ‣ ' in the given product category.
 *
 * @param category - The product category to sanitize.
 * @returns The sanitized product category.
 */
export function sanitizeProductCategory(category: string): string {
  return category.replaceAll(':', ' ‣ ').toUpperCase();
}

/**
 * Converts a string or numeric representation of a number to a string with two decimal places.
 *
 * @param num - The string or number representation of the number to be converted.
 * @returns A string with two decimal places.
 */
export function numToTwoDecimals(num: string | number): string {
  return parseFloat(num.toString()).toFixed(2);
}
