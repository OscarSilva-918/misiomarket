import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useCartStore } from '../store/cart';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type ProductImage = {
  id: string;
  url: string;
};

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
  product_images: ProductImage[];
};

export default function Products() {
  const { storeId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const cartItems = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          product_images (
            id,
            url
          )
        `)
        .eq('store_id', storeId)
        .order('name');

      if (error) {
        console.error('Error fetching products:', error);
        return;
      }

      setProducts(data || []);
      setLoading(false);
    }

    if (storeId) {
      fetchProducts();
    }
  }, [storeId]);

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image_url
    });
    toast.success('Producto agregado al carrito', {
      description: `${product.name} se ha agregado a tu carrito de compras.`
    });
  };

  const handleWhatsAppOrder = () => {
    const items = cartItems.map(item => 
      `• ${item.name} (${item.quantity}x) - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const message = `¡Hola! Me gustaría hacer el siguiente pedido:\n\n${items}\n\nTotal: $${total.toFixed(2)}`;
    
    const whatsappUrl = `https://wa.me/543765250232?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Productos
        </h1>
        {cartItems.length > 0 && (
          <button
            onClick={handleWhatsAppOrder}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <span>Ordenar por WhatsApp</span>
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-square relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="h-full group"
              >
                {(product.product_images?.length > 0 
                  ? product.product_images.map(img => img.url)
                  : [product.image_url]
                ).filter(Boolean).map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image || 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=60'}
                      alt={`${product.name} - Imagen ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
                <button className="swiper-button-prev !w-8 !h-8 !bg-white/80 !backdrop-blur !rounded-full !text-gray-800 after:!text-lg group-hover:!opacity-100 !opacity-0 transition-opacity">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="swiper-button-next !w-8 !h-8 !bg-white/80 !backdrop-blur !rounded-full !text-gray-800 after:!text-lg group-hover:!opacity-100 !opacity-0 transition-opacity">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </Swiper>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-primary/90 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Agregar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}