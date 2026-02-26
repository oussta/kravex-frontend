const STRAPI_URL = 'https://kravex-project.onrender.com';

// Base fetch function with error handling
async function fetchStrapi(endpoint) {
  try {
    const res = await fetch(`${STRAPI_URL}/api/${endpoint}`);
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`fetchStrapi error [${endpoint}]:`, error);
    return null;
  }
}

// Products
export async function getProducts() {
  return fetchStrapi('products?populate=*&pagination[pageSize]=100');
}

export async function getProduct(slug) {
  return fetchStrapi(`products?filters[slug][$eq]=${slug}&populate=*`);
}

// Categories
export async function getCategories() {
  return fetchStrapi('categories?populate=*');
}

// Blog
export async function getBlogs() {
  return fetchStrapi('blogs?populate=*&pagination[pageSize]=100');
}

export async function getBlog(slug) {
  return fetchStrapi(`blogs?filters[slug][$eq]=${slug}&populate=*`);
}

// Single Types
export async function getConfiguracion() {
  return fetchStrapi('configuracion-general?populate=*');
}

export async function getNewsletter() {
  return fetchStrapi('seccion-newsletter?populate=*');
}

export { STRAPI_URL };