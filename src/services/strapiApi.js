// // src/services/strapiApi.js

// const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// // ✅ Helper to get full image URL from Strapi media
// export const getStrapiMedia = (media) => {
//   if (!media) return null;

//   // Handle string URL directly
//   if (typeof media === "string") {
//     if (media.startsWith("http")) return media;
//     return `${API_URL}${media}`;
//   }

//   // Handle media object from Strapi
//   const imageUrl = media.url;
//   if (!imageUrl) return null;
//   if (imageUrl.startsWith("http")) return imageUrl;
//   return `${API_URL}${imageUrl}`;
// };

// // ✅ Fetch header data from Strapi
// export const fetchHeaderData = async () => {
//   try {
//     const query = new URLSearchParams({
//       populate: {
//         logo_dark: { fields: ["url", "formats"] },
//         logo_light: { fields: ["url", "formats"] },
//         navigation_items: {
//           fields: ["label", "url", "has_mega_menu", "order"],
//         },
//       },
//     });

//     const response = await fetch(`${API_URL}/api/header?${query}`);
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Error fetching header:", error);
//     return null;
//   }
// };

// // ✅ Fetch all categories with their products
// export const fetchCategories = async () => {
//   try {
//     const query = new URLSearchParams({
//       populate: {
//         products: {
//           fields: [
//             "name",
//             "model",
//             "picture",
//             "cameraType",
//             "productType",
//             "keyFeatures",
//             "document",
//             "id",
//           ],
//           populate: {
//             picture: { fields: ["url", "formats"] },
//             document: { fields: ["url"] },
//           },
//           filters: {
//             is_featured: {
//               $eq: true,
//             },
//           },
//           sort: ["order:asc"],
//         },
//         image: {
//           fields: ["url", "formats"],
//         },
//       },
//       sort: "order:asc",
//       filters: {
//         is_active: {
//           $eq: true,
//         },
//       },
//     });

//     const response = await fetch(`${API_URL}/api/categories?${query}`);
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// };

// // ✅ Fetch single category by slug
// export const fetchCategoryBySlug = async (slug) => {
//   try {
//     const query = new URLSearchParams({
//       populate: {
//         products: {
//           fields: [
//             "name",
//             "model",
//             "picture",
//             "cameraType",
//             "productType",
//             "keyFeatures",
//             "document",
//             "id",
//           ],
//           populate: {
//             picture: { fields: ["url", "formats"] },
//             document: { fields: ["url"] },
//           },
//         },
//         image: { fields: ["url", "formats"] },
//       },
//       filters: {
//         slug: {
//           $eq: slug,
//         },
//       },
//     });

//     const response = await fetch(`${API_URL}/api/categories?${query}`);
//     const data = await response.json();
//     return data.data[0] || null;
//   } catch (error) {
//     console.error("Error fetching category:", error);
//     return null;
//   }
// };

// // ✅ Fetch single product by ID
// export const fetchProductById = async (id) => {
//   try {
//     const query = new URLSearchParams({
//       populate: {
//         picture: { fields: ["url", "formats"] },
//         document: { fields: ["url"] },
//         category: {
//           fields: ["name", "slug"],
//         },
//       },
//     });

//     const response = await fetch(`${API_URL}/api/products/${id}?${query}`);
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return null;
//   }
// };

// // ✅✅✅ THIS IS THE KEY: DEFAULT EXPORT (must be at the end)
// export default {
//   fetchCategories,
//   fetchCategoryBySlug,
//   fetchProductById,
//   fetchHeaderData,
//   getStrapiMedia,
// };

// src/services/strapiApi.js
// ✅ FINAL VERSION - Strapi v5 compatible with detailed_sections
const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// ============================================
// ✅ HELPER: Get full image URL from Strapi media
// ============================================
export const getStrapiMedia = (media) => {
  if (!media) return null;
  if (typeof media === "string") {
    return media.startsWith("http") ? media : `${API_URL}${media}`;
  }
  if (media?.data?.attributes?.url) {
    const url = media.data.attributes.url;
    return url.startsWith("http") ? url : `${API_URL}${url}`;
  }
  if (media?.data?.url) {
    return `${API_URL}${media.data.url}`;
  }
  if (media?.url) {
    return `${API_URL}${media.url}`;
  }
  return null;
};

// ============================================
// ✅ HEADER FUNCTIONS
// ============================================
export const fetchHeaderData = async () => {
  try {
    const query = new URLSearchParams({
      populate: {
        logo_dark: { fields: ["url", "formats"] },
        logo_light: { fields: ["url", "formats"] },
        navigation_items: {
          fields: ["label", "url", "has_mega_menu", "order"],
        },
      },
    });
    const response = await fetch(`${API_URL}/api/header?${query}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching header:", error);
    return null;
  }
};

// ============================================
// ✅ CATEGORY & PRODUCT FUNCTIONS
// ============================================
export const fetchCategories = async () => {
  try {
    const query = new URLSearchParams({
      populate: {
        products: {
          fields: [
            "name",
            "model",
            "picture",
            "cameraType",
            "productType",
            "keyFeatures",
            "document",
            "id",
          ],
          populate: {
            picture: { fields: ["url", "formats"] },
            document: { fields: ["url"] },
          },
          filters: { is_featured: { $eq: true } },
          sort: ["order:asc"],
        },
        image: { fields: ["url", "formats"] },
      },
      sort: "order:asc",
      filters: { is_active: { $eq: true } },
    });
    const response = await fetch(`${API_URL}/api/categories?${query}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchCategoryBySlug = async (slug) => {
  try {
    const query = new URLSearchParams({
      populate: {
        products: {
          fields: [
            "name",
            "model",
            "picture",
            "cameraType",
            "productType",
            "keyFeatures",
            "document",
            "id",
          ],
          populate: {
            picture: { fields: ["url", "formats"] },
            document: { fields: ["url"] },
          },
        },
        image: { fields: ["url", "formats"] },
      },
      filters: { slug: { $eq: slug } },
    });
    const response = await fetch(`${API_URL}/api/categories?${query}`);
    const data = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
};

export const fetchProductById = async (id) => {
  try {
    const query = new URLSearchParams({
      populate: {
        picture: { fields: ["url", "formats"] },
        document: { fields: ["url"] },
        category: { fields: ["name", "slug"] },
      },
    });
    const response = await fetch(`${API_URL}/api/products/${id}?${query}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

// ============================================
// ✅ SMARTBUS PAGE FUNCTIONS
export const fetchSmartbusPage = async () => {
  try {
    console.log(
      "🔄 Fetching Smartbus from Strapi v5 with CORRECT populate syntax...",
    );

    // ✅ STRAPI V5 CORRECT SYNTAX: Use 'true' not '*' for nested media
    // Format: populate[component][populate][field]=true
    const params = new URLSearchParams({
      // Top-level media relations
      "populate[banner_image]": "true",
      "populate[gallery_images]": "true",
      "populate[Featuresimage]": "true",
      "populate[Bigdataanalyticsimage]": "true",

      // Components with nested media - USE 'true' NOT '*'
      "populate[features][populate][image]": "true",
      "populate[tech_features][populate][image]": "true",
      "populate[tech_features][populate][sub_features]": "true",
      "populate[bus_components][populate][icon]": "true",
      "populate[benefits][populate][image]": "true",
      "populate[innovations][populate][image]": "true",

      // ✅ CRITICAL: Detailed sections with items - your screenshots show 'items' field
      "populate[detailed_sections][populate][image]": "true",
      "populate[detailed_sections][populate][items][populate][icon]": "true",
    });

    const response = await fetch(
      `${API_URL}/api/smartbus-pages?${params.toString()}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Smartbus API Error:", errorText);
      throw new Error(`Strapi returned ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Fetched Smartbus Data:", data);

    // Debug: Check detailed sections
    if (data?.data?.[0]?.detailed_sections?.length > 0) {
      console.log(
        "🔍 Detailed Sections:",
        data.data[0].detailed_sections.map((ds) => ({
          title: ds.section_title,
          hasImage: !!ds.image,
          hasItems: !!ds.items,
          itemCount: ds.items?.length,
        })),
      );
    }

    if (data.data && Array.isArray(data.data) && data.data.length > 0) {
      return data.data[0];
    }
    return data.data;
  } catch (error) {
    console.error("❌ fetchSmartbusPage error:", error);
    throw error;
  }
};

export const transformSmartbusData = (strapiData) => {
  if (!strapiData) {
    console.warn("⚠️ No Strapi data provided");
    return null;
  }

  const getValue = (obj, key) => {
    if (!obj) return null;
    if (obj[key] !== undefined) return obj[key];
    if (obj.attributes?.[key] !== undefined) return obj.attributes[key];
    return null;
  };

  const mapArray = (arr) => {
    if (!Array.isArray(arr)) return [];
    return arr.map((item) => {
      // Unwrap Strapi v5 format: { id, attributes: {...} }
      if (item?.attributes) {
        return { id: item.id, ...item.attributes };
      }
      return item;
    });
  };

  const getMediaUrl = (media) => {
    if (!media) return null;
    const mediaItem =
      media?.data?.attributes || media?.data || media?.attributes || media;
    if (!mediaItem?.url) return null;
    const url = mediaItem.url;
    return url.startsWith("http") ? url : `${API_URL}${url}`;
  };

  return {
    banner: {
      title: getValue(strapiData, "banner_title"),
      subtitle: getValue(strapiData, "banner_subtitle"),
      description: getValue(strapiData, "banner_description"),
      image: getMediaUrl(getValue(strapiData, "banner_image")),
    },
    highlights: getValue(strapiData, "highlights") || [],

    // ✅ Map features component
    solutions: mapArray(getValue(strapiData, "features")).map((item) => ({
      id: item.id,
      title: getValue(item, "title"),
      description: getValue(item, "description"),
      order: getValue(item, "order"),
      image: getMediaUrl(getValue(item, "image")),
    })),

    // ✅ Map tech_features
    techFeatures: mapArray(getValue(strapiData, "tech_features")).map(
      (item) => {
        const desc1 = getValue(item, "description");
        const desc2 = getValue(item, "description2");
        const desc3 = getValue(item, "description3");
        const descriptions = [desc1, desc2, desc3].filter(Boolean);

        return {
          id: item.id,
          title: getValue(item, "title"),
          description: descriptions,
          order: getValue(item, "order"),
          bullets: mapArray(getValue(item, "sub_features")).map((sub) => ({
            text: getValue(sub, "name") || getValue(sub, "text"),
            description: getValue(sub, "description"),
          })),
        };
      },
    ),

    // ✅ Map innovations
    innovations: mapArray(getValue(strapiData, "innovations")).map((item) => ({
      id: item.id,
      title: getValue(item, "title"),
      description: getValue(item, "description"),
      order: getValue(item, "order"),
    })),

    // ✅ Map benefits
    benefits: mapArray(getValue(strapiData, "benefits")).map((item) => ({
      id: item.id,
      title: getValue(item, "title"),
      description: getValue(item, "description"),
      order: getValue(item, "order"),
      external_image_url: getMediaUrl(getValue(item, "external_image_url")),
    })),

    // ✅ Map bus_components
    busComponents: mapArray(getValue(strapiData, "bus_components")).map(
      (item) => ({
        id: item.id,
        name: getValue(item, "name"),
        description: getValue(item, "description"),
        position: getValue(item, "position"),
        order: getValue(item, "order"),
        icon: getMediaUrl(getValue(item, "icon")),
        icon_url: getMediaUrl(getValue(item, "icon_url")),
      }),
    ),

    // ✅ Map gallery images
    gallery: mapArray(getValue(strapiData, "gallery_images")).map((img) =>
      getMediaUrl(img),
    ),

    // ✅ UPDATED: Map detailed_sections with items AND image
    detailedSections: mapArray(getValue(strapiData, "detailed_sections")).map(
      (item) => {
        const sectionImage = getMediaUrl(getValue(item, "image"));

        console.log(
          `🖼️ Section "${getValue(item, "section_title")}" image:`,
          sectionImage,
        );
        console.log(`📋 Section items:`, getValue(item, "items"));

        return {
          id: item.id,
          section_title: getValue(item, "section_title"),
          section_type: getValue(item, "section_type"),
          description: getValue(item, "description"),
          order: getValue(item, "order"),
          image: sectionImage,
          // ✅ Use 'items' field (not sub_features)
          items: mapArray(getValue(item, "items")).map((sub) => ({
            id: sub.id,
            title: getValue(sub, "title"),
            description: getValue(sub, "description"),
            icon: getMediaUrl(getValue(sub, "icon")),
            icon_url: getMediaUrl(getValue(sub, "icon_url")),
          })),
        };
      },
    ),

    cta: {
      title: getValue(strapiData, "cta_title"),
      description: getValue(strapiData, "cta_description"),
      button: {
        text: getValue(strapiData, "cta_button_text"),
        link: getValue(strapiData, "cta_button_link"),
      },
    },
  };
};

// ============================================
// ✅ SOLUTIONS PAGE FUNCTIONS
// ============================================
export const fetchSolutionsPage = async () => {
  try {
    console.log("🔄 Fetching Solutions Page...");
    const query = "populate[industries][populate][solutions][populate]=image";
    const response = await fetch(`${API_URL}/api/solutions-pages?${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("❌ Solutions API Error:", errText);
      throw new Error(`Strapi error ${response.status}: ${errText}`);
    }

    const json = await response.json();
    return Array.isArray(json.data) ? json.data[0] : json.data;
  } catch (error) {
    console.error("❌ fetchSolutionsPage failed:", error);
    throw error;
  }
};

export const transformSolutionsData = (strapiData) => {
  if (!strapiData) return { banner: {}, industries: [] };
  const getValue = (obj, key) => {
    if (!obj) return null;
    if (obj[key] !== undefined) return obj[key];
    if (obj.attributes?.[key] !== undefined) return obj.attributes[key];
    return null;
  };
  const mapArray = (arr) => {
    if (!Array.isArray(arr)) return [];
    return arr.map((item) => {
      if (item?.attributes) {
        return { id: item.id, ...item.attributes };
      }
      return item;
    });
  };
  return {
    banner: {
      title: getValue(strapiData, "banner_title") || "Our Solutions",
      description:
        getValue(strapiData, "banner_description") ||
        "Comprehensive surveillance solutions",
      image: getStrapiMedia(getValue(strapiData, "banner_image")),
    },
    industries: mapArray(getValue(strapiData, "industries"))
      .map((ind) => {
        const solutionsRaw = getValue(ind, "solutions") || [];
        const solutions = mapArray(solutionsRaw)
          .map((sol) => {
            const sAttrs = sol.attributes || sol;
            return {
              id: sol.id,
              name: getValue(sAttrs, "name") || "Solution",
              description: getValue(sAttrs, "description") || "",
              image:
                getStrapiMedia(getValue(sAttrs, "image")) ||
                getValue(sAttrs, "external_image_url"),
              order: Number(getValue(sAttrs, "order")) || 0,
              isActive: getValue(sAttrs, "is_active") !== false,
            };
          })
          .filter((sol) => sol.isActive);
        return {
          id: ind.id,
          industry: getValue(ind, "industry") || "Unknown",
          title: getValue(ind, "industry") || "Unknown",
          description: getValue(ind, "description") || "",
          image:
            getStrapiMedia(getValue(ind, "image")) ||
            getValue(ind, "external_image_url"),
          gradient: `from-[${getValue(ind, "gradient_from") || "#00ADE7"}] to-[${getValue(ind, "gradient_to") || "#305292"}]`,
          navigateTo: getValue(ind, "navigate_to"),
          showDetailedView: getValue(ind, "show_detailed_view") !== false,
          solutions: solutions,
          order: Number(getValue(ind, "order")) || 0,
        };
      })
      .sort((a, b) => a.order - b.order),
  };
};

// ============================================
// ✅ VMS PAGE FUNCTIONS
// ============================================
export const fetchVmsPage = async () => {
  try {
    console.log("🔄 Fetching VMS from Strapi...");
    const query = new URLSearchParams({
      "populate[hero_stats]": "*",
      "populate[hero_image]": "true",
      "populate[main_features][populate]": "image",
      "populate[quick_features]": "*",
      "populate[specifications]": "*",
      "populate[deployment_cards]": "*",
    });
    const response = await fetch(`${API_URL}/api/vms-page?${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ VMS API Error:", errorText);
      throw new Error(`Strapi returned ${response.status}`);
    }
    const data = await response.json();
    console.log("✅ Fetched VMS ", data);
    return data.data;
  } catch (error) {
    console.error("❌ fetchVmsPage error:", error);
    throw error;
  }
};

export const transformVmsData = (strapiData) => {
  if (!strapiData) return null;
  const getValue = (obj, key) => {
    if (!obj) return null;
    if (obj[key] !== undefined) return obj[key];
    if (obj.attributes?.[key] !== undefined) return obj.attributes[key];
    return null;
  };
  const mapArray = (arr) => {
    if (!Array.isArray(arr)) return [];
    return arr.map((item) => {
      if (item?.attributes) {
        return { id: item.id, ...item.attributes };
      }
      return item;
    });
  };
  return {
    hero: {
      badge: getValue(strapiData, "hero_badge"),
      badgeIcon: getValue(strapiData, "hero_badge_icon"),
      title: getValue(strapiData, "hero_title"),
      description: getValue(strapiData, "hero_description"),
      stats: mapArray(getValue(strapiData, "hero_stats")),
      image: getStrapiMedia(getValue(strapiData, "hero_image")),
    },
    features: {
      title: getValue(strapiData, "features_title"),
      subtitle: getValue(strapiData, "features_subtitle"),
      mainFeatures: mapArray(getValue(strapiData, "main_features")).map(
        (f) => ({
          id: f.id,
          iconName: f.icon_name,
          title: f.title,
          description: Array.isArray(f.description)
            ? f.description
            : JSON.parse(f.description || "[]"),
          image: getStrapiMedia(f.image),
        }),
      ),
      quickFeatures: mapArray(getValue(strapiData, "quick_features")).map(
        (q) => ({
          id: q.id,
          iconName: q.icon_name,
          title: q.title,
          description: q.description,
          bgGradient: q.bg_gradient,
        }),
      ),
    },
    specs: {
      title: getValue(strapiData, "specs_title"),
      subtitle: getValue(strapiData, "specs_subtitle"),
      items: mapArray(getValue(strapiData, "specifications")),
    },
    deployment: {
      title: getValue(strapiData, "deployment_title"),
      subtitle: getValue(strapiData, "deployment_subtitle"),
      cards: mapArray(getValue(strapiData, "deployment_cards")).map((c) => ({
        id: c.id,
        iconName: c.icon_name,
        title: c.title,
        description: c.description,
      })),
    },
  };
};

// ============================================
// ✅ SECURITY SOLUTIONS FUNCTIONS
// ============================================
export const fetchSecuritySolutions = async () => {
  try {
    const params = new URLSearchParams({
      populate: "icon",
      sort: "order:asc",
    });
    const response = await fetch(
      `${API_URL}/api/security-solutions?${params.toString()}`,
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching security solutions:", error);
    return [];
  }
};

export const fetchSecuritySolutionBySlug = async (slug) => {
  try {
    const params = new URLSearchParams({
      populate: "*",
    });
    params.append("filters[slug][$eq]", slug);
    const response = await fetch(
      `${API_URL}/api/security-solutions?${params.toString()}`,
    );
    const data = await response.json();
    if (data.data?.length) {
      return data.data[0];
    }
    return null;
  } catch (error) {
    console.error("Error fetching security solution:", error);
    return null;
  }
};

// ============================================
// ✅ DEFAULT EXPORT - ALL FUNCTIONS
// ============================================
export default {
  getStrapiMedia,
  fetchHeaderData,
  fetchCategories,
  fetchCategoryBySlug,
  fetchProductById,
  fetchSmartbusPage,
  transformSmartbusData,
  fetchSolutionsPage,
  transformSolutionsData,
  fetchVmsPage,
  transformVmsData,
  fetchSecuritySolutions,
  fetchSecuritySolutionBySlug,
};
