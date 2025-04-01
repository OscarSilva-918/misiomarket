/*
  # Add additional product images

  1. Changes
    - Add multiple images for selected products
    - Each product will have a carousel of images
    - Maintain existing image while adding new ones
*/

-- Balón de Fútbol
INSERT INTO product_images (product_id, url)
SELECT p.id, url
FROM products p,
UNNEST(ARRAY[
  'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=800&auto=format&fit=crop&q=80'
]) AS url
WHERE p.name = 'Balón de Fútbol';

-- Best Seller 2024
INSERT INTO product_images (product_id, url)
SELECT p.id, url
FROM products p,
UNNEST(ARRAY[
  'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&auto=format&fit=crop&q=80'
]) AS url
WHERE p.name = 'Best Seller 2024';

-- Bicicleta de Montaña
INSERT INTO product_images (product_id, url)
SELECT p.id, url
FROM products p,
UNNEST(ARRAY[
  'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=800&auto=format&fit=crop&q=80'
]) AS url
WHERE p.name = 'Bicicleta de Montaña';

-- MacBook Pro
INSERT INTO product_images (product_id, url)
SELECT p.id, url
FROM products p,
UNNEST(ARRAY[
  'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80'
]) AS url
WHERE p.name = 'MacBook Pro 16"';

-- Sofá Moderno
INSERT INTO product_images (product_id, url)
SELECT p.id, url
FROM products p,
UNNEST(ARRAY[
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&auto=format&fit=crop&q=80'
]) AS url
WHERE p.name = 'Sofá Moderno';