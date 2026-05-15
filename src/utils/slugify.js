// src/utils/slugify.js

/**
 * Converts text to a URL-friendly slug
 * @param {string} text - Text to convert
 * @returns {string} URL-safe slug
 */
export const slugify = (text) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special chars except letters, numbers, spaces, hyphens
    .replace(/[\s_-]+/g, "-") // Convert spaces/underscores to single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

/**
 * Generates a clean slug from product name ONLY
 * @param {Object} product - Product object from your productsall array
 * @returns {string} Clean URL-safe product slug (based on name only)
 */
export const getProductSlug = (product) => {
  if (!product || !product.name) return "";

  // ✅ ONLY slugify the product name for clean URLs
  // Example: "2MP Eyeball Camera" → "2mp-eyeball-camera"
  return slugify(product.name);
};
