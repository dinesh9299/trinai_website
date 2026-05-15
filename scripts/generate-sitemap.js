// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = process.env.VITE_STRAPI_URL || "http://localhost:1337";
const BASE_URL = "https://www.trinai.in"; // ✅ Update to your production domain

async function fetchCategories() {
  try {
    const response = await fetch(
      `${API_URL}/api/categories?filters[is_active][$eq]=true&fields=slug,name`,
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

async function fetchProducts() {
  try {
    const response = await fetch(
      `${API_URL}/api/products?populate=*&fields=model,name,cameraType,productType`,
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

function generateSitemapXml(urls) {
  const today = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  urls.forEach((url) => {
    xml += `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod || today}</lastmod>
    <changefreq>${url.changefreq || "monthly"}</changefreq>
    <priority>${url.priority || "0.5"}</priority>
  </url>
`;
  });

  xml += `</urlset>`;
  return xml;
}

async function generateSitemap() {
  const urls = [
    // Static pages
    { loc: `${BASE_URL}/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${BASE_URL}/about`, priority: "0.9", changefreq: "monthly" },
    { loc: `${BASE_URL}/solutions`, priority: "0.9", changefreq: "monthly" },
    { loc: `${BASE_URL}/contact`, priority: "0.8", changefreq: "monthly" },
    { loc: `${BASE_URL}/products`, priority: "0.9", changefreq: "weekly" },
    {
      loc: `${BASE_URL}/privacy-policy`,
      priority: "0.5",
      changefreq: "yearly",
    },
    { loc: `${BASE_URL}/smartbus`, priority: "0.8", changefreq: "monthly" },
    { loc: `${BASE_URL}/vms`, priority: "0.8", changefreq: "monthly" },
  ];

  // Add category pages
  const categories = await fetchCategories();
  categories.forEach((cat) => {
    urls.push({
      loc: `${BASE_URL}/products/${cat.slug}`,
      priority: "0.8",
      changefreq: "weekly",
    });
  });

  // Add product type pages (3-segment: /products/category/productType)
  const products = await fetchProducts();
  const productTypeSet = new Set();

  products.forEach((product) => {
    if (product.cameraType && product.productType) {
      const categorySlug = product.cameraType
        .toLowerCase()
        .replace(/\s+/g, "-");
      const productTypeSlug = product.productType
        .toLowerCase()
        .replace(/\s+/g, "-");
      const key = `${categorySlug}/${productTypeSlug}`;

      if (!productTypeSet.has(key)) {
        productTypeSet.add(key);
        urls.push({
          loc: `${BASE_URL}/products/${categorySlug}/${productTypeSlug}`,
          priority: "0.7",
          changefreq: "weekly",
        });
      }
    }
  });

  // Add security solution pages
  const securitySolutions = [
    "motion-detection",
    "facial-recognition",
    "remote-monitoring",
    "crowd-monitoring",
    "lpr",
    "pid",
    "bac",
    "rfid-entry",
    "public-event-security",
    "qms",
    "people-counting",
    "atm-security",
    "warehouse-surveillance",
    "asset-tracking",
    "server-monitoring",
    "ppe-detection",
    "fire-smoke",
    "real-time-hazard",
    "emergency-response",
    "crossline-detection",
  ];
  securitySolutions.forEach((slug) => {
    urls.push({
      loc: `${BASE_URL}/security/${slug}`,
      priority: "0.7",
      changefreq: "monthly",
    });
  });

  const sitemapXml = generateSitemapXml(urls);

  const outputPath = path.join(__dirname, "..", "public", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemapXml, "utf8");

  console.log(`✅ Sitemap generated with ${urls.length} URLs at ${outputPath}`);
}

generateSitemap().catch(console.error);
