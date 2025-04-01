import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Store = {
  id: string;
  name: string;
  description: string;
  image_url: string;
};

const promotions = [
  {
    id: 1,
    title: "Ofertas de Primavera",
    description: "¡Hasta 50% de descuento en productos seleccionados!",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Nueva Colección",
    description: "Descubre las últimas tendencias",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Envío Gratis",
    description: "En compras superiores a $50",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1600&auto=format&fit=crop&q=60"
  }
];

export default function StoreSelection() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStores() {
      try {
        const { data, error: supabaseError } = await supabase
          .from('stores')
          .select('*')
          .order('name');

        if (supabaseError) {
          throw supabaseError;
        }

        setStores(data || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching stores:', err);
        setError('Error loading stores. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchStores();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {error}
        </h2>
        <button
          onClick={() => window.location.reload()}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Promotional Banner Carousel */}
      <div className="relative rounded-xl overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          className="h-[400px]"
        >
          {promotions.map((promo) => (
            <SwiperSlide key={promo.id}>
              <div className="relative h-full">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h2 className="text-4xl font-bold mb-2">{promo.title}</h2>
                    <p className="text-xl">{promo.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stores Section */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Nuestras Tiendas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div
              key={store.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => navigate(`/store/${store.id}`)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={store.image_url || 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60'}
                  alt={store.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {store.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                  {store.description || 'Descubre productos increíbles en nuestra tienda'}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                    Ver productos
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}