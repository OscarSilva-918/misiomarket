/*
  # Add Sample Products

  1. Changes
    - Insert sample products for each store with realistic data
    - Products include name, description, price, stock, and image URLs
*/

-- Tech Haven Products
INSERT INTO products (store_id, name, description, price, stock, image_url)
SELECT 
  id as store_id,
  unnest(ARRAY[
    'MacBook Pro 16"',
    'iPhone 15 Pro',
    'iPad Air',
    'AirPods Pro'
  ]) as name,
  unnest(ARRAY[
    'Potente laptop para profesionales',
    'El iPhone más avanzado hasta la fecha',
    'Versatilidad y potencia en una tablet',
    'Experiencia de audio inmersiva'
  ]) as description,
  unnest(ARRAY[
    1299.99,
    999.99,
    599.99,
    249.99
  ]) as price,
  unnest(ARRAY[
    10,
    15,
    20,
    30
  ]) as stock,
  unnest(ARRAY[
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80'
  ]) as image_url
FROM stores WHERE name = 'Tech Haven';

-- Moda Elegante Products
INSERT INTO products (store_id, name, description, price, stock, image_url)
SELECT 
  id as store_id,
  unnest(ARRAY[
    'Vestido de Noche',
    'Traje Ejecutivo',
    'Bolso de Diseñador',
    'Zapatos de Cuero'
  ]) as name,
  unnest(ARRAY[
    'Elegante vestido para ocasiones especiales',
    'Traje moderno y sofisticado',
    'Bolso de alta calidad',
    'Zapatos artesanales de cuero genuino'
  ]) as description,
  unnest(ARRAY[
    299.99,
    499.99,
    199.99,
    159.99
  ]) as price,
  unnest(ARRAY[
    8,
    12,
    15,
    20
  ]) as stock,
  unnest(ARRAY[
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80'
  ]) as image_url
FROM stores WHERE name = 'Moda Elegante';

-- Hogar & Decoración Products
INSERT INTO products (store_id, name, description, price, stock, image_url)
SELECT 
  id as store_id,
  unnest(ARRAY[
    'Sofá Moderno',
    'Lámpara de Diseño',
    'Mesa de Centro',
    'Alfombra Artesanal'
  ]) as name,
  unnest(ARRAY[
    'Sofá contemporáneo para tu sala',
    'Lámpara decorativa con diseño único',
    'Mesa de centro elegante y funcional',
    'Alfombra tejida a mano'
  ]) as description,
  unnest(ARRAY[
    899.99,
    199.99,
    299.99,
    249.99
  ]) as price,
  unnest(ARRAY[
    5,
    15,
    10,
    8
  ]) as stock,
  unnest(ARRAY[
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=800&auto=format&fit=crop&q=80'
  ]) as image_url
FROM stores WHERE name = 'Hogar & Decoración';

-- Deportes Elite Products
INSERT INTO products (store_id, name, description, price, stock, image_url)
SELECT 
  id as store_id,
  unnest(ARRAY[
    'Bicicleta de Montaña',
    'Raqueta de Tenis',
    'Balón de Fútbol',
    'Set de Pesas'
  ]) as name,
  unnest(ARRAY[
    'Bicicleta profesional para todo terreno',
    'Raqueta profesional de alto rendimiento',
    'Balón oficial de competición',
    'Set completo de pesas para entrenamiento'
  ]) as description,
  unnest(ARRAY[
    799.99,
    199.99,
    49.99,
    299.99
  ]) as price,
  unnest(ARRAY[
    6,
    12,
    30,
    10
  ]) as stock,
  unnest(ARRAY[
    'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80'
  ]) as image_url
FROM stores WHERE name = 'Deportes Elite';

-- Jardín Verde Products
INSERT INTO products (store_id, name, description, price, stock, image_url)
SELECT 
  id as store_id,
  unnest(ARRAY[
    'Set de Jardinería',
    'Maceta Decorativa',
    'Planta de Interior',
    'Sistema de Riego'
  ]) as name,
  unnest(ARRAY[
    'Set completo de herramientas para jardín',
    'Maceta de diseño para interiores y exteriores',
    'Planta decorativa de bajo mantenimiento',
    'Sistema de riego automático inteligente'
  ]) as description,
  unnest(ARRAY[
    79.99,
    49.99,
    29.99,
    159.99
  ]) as price,
  unnest(ARRAY[
    15,
    20,
    25,
    10
  ]) as stock,
  unnest(ARRAY[
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1558693168-c370615b54e0?w=800&auto=format&fit=crop&q=80'
  ]) as image_url
FROM stores WHERE name = 'Jardín Verde';

-- Librería Sabia Products
INSERT INTO products (store_id, name, description, price, stock, image_url)
SELECT 
  id as store_id,
  unnest(ARRAY[
    'Best Seller 2024',
    'Clásicos de Literatura',
    'Libro de Cocina',
    'Novela Gráfica'
  ]) as name,
  unnest(ARRAY[
    'El libro más vendido del año',
    'Colección de obras clásicas',
    'Recetas internacionales ilustradas',
    'Historia ilustrada de aventuras'
  ]) as description,
  unnest(ARRAY[
    24.99,
    39.99,
    34.99,
    29.99
  ]) as price,
  unnest(ARRAY[
    30,
    20,
    15,
    25
  ]) as stock,
  unnest(ARRAY[
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1471666875520-c75081f42081?w=800&auto=format&fit=crop&q=80'
  ]) as image_url
FROM stores WHERE name = 'Librería Sabia';