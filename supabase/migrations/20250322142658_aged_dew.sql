/*
  # Add product images support

  1. New Tables
    - product_images
      - id (uuid, primary key)
      - product_id (uuid, foreign key)
      - url (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on product_images table
    - Add policy for public access to images
*/

CREATE TABLE product_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view product images"
  ON product_images
  FOR SELECT
  TO public
  USING (true);

-- Migrate existing image_url data to the new table
INSERT INTO product_images (product_id, url)
SELECT id, image_url
FROM products
WHERE image_url IS NOT NULL;