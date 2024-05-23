/**
 * Replaces all occurrences of ':' with ' ‣ ' in the given product category.
 *
 * @param category - The product category to sanitize.
 * @returns The sanitized product category.
 */
export function sanitizeProductCategory(category: string): string {
  return category.replaceAll(':', ' ‣ ');
}
