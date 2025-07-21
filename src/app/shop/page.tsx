'use client';

import { useState, useEffect } from 'react';
import { ShoppingCartIcon, AcademicCapIcon, WrenchScrewdriverIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

const productCategories = [
  { 
    id: 'all', 
    name: 'All Products', 
    icon: ShoppingCartIcon,
    description: 'Browse everything we offer'
  },
  { 
    id: 'consultation', 
    name: 'Consultation & Training', 
    icon: AcademicCapIcon,
    description: 'Expert guidance and training services'
  },
  { 
    id: 'physical', 
    name: 'Equipment & Materials', 
    icon: WrenchScrewdriverIcon,
    description: 'Physical products for your court'
  },
  { 
    id: 'digital', 
    name: 'Premium Content', 
    icon: PlayCircleIcon,
    description: 'Members-only videos and guides'
  }
];

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, selectedCategory]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data.data || []);
      }
    } catch {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      // Filter by category based on product name or description keywords
      const filtered = products.filter(product => {
        const name = product.name.toLowerCase();
        const description = (product.description || '').toLowerCase();
        
        switch (selectedCategory) {
          case 'consultation':
            return name.includes('consultation') || 
                   name.includes('training') || 
                   name.includes('coaching') ||
                   name.includes('hour') ||
                   description.includes('consultation') ||
                   description.includes('training');
          
          case 'physical':
            return name.includes('bracket') || 
                   name.includes('net') || 
                   name.includes('post') ||
                   name.includes('equipment') ||
                   name.includes('material') ||
                   name.includes('kit') ||
                   description.includes('physical') ||
                   description.includes('equipment');
          
          case 'digital':
            return name.includes('video') || 
                   name.includes('download') || 
                   name.includes('guide') ||
                   name.includes('premium') ||
                   name.includes('member') ||
                   description.includes('video') ||
                   description.includes('digital') ||
                   description.includes('download');
          
          default:
            return true;
        }
      });
      setFilteredProducts(filtered);
    }
  };

  const addToCart = async (product) => {
    if (typeof window !== 'undefined' && window.addToCart) {
      window.addToCart(product);
    }
  };

  const getProductBadge = (product) => {
    const name = product.name.toLowerCase();
    if (name.includes('consultation') || name.includes('training')) {
      return { text: 'Service', color: 'bg-blue-100 text-blue-800' };
    }
    if (name.includes('video') || name.includes('download')) {
      return { text: 'Digital', color: 'bg-purple-100 text-purple-800' };
    }
    return { text: 'Physical', color: 'bg-green-100 text-green-800' };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Products</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <p className="text-sm text-gray-500">
            Make sure you&apos;ve added your BigCommerce API credentials to .env.local
          </p>
          <button 
            onClick={fetchProducts}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Court Materials & Services
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            From expert consultation to professional equipment, everything you need to build and maintain your perfect pickleball court.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <IconComponent className={`w-8 h-8 mb-3 ${
                    selectedCategory === category.id ? 'text-blue-600' : 'text-gray-600'
                  }`} />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCartIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {selectedCategory === 'all' ? 'No products available yet' : `No ${productCategories.find(c => c.id === selectedCategory)?.name.toLowerCase()} available yet`}
            </h3>
            <p className="text-gray-600">
              {selectedCategory === 'all' 
                ? 'Add products to your BigCommerce store to see them here.'
                : 'Try selecting a different category or check back later.'
              }
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                {selectedCategory !== 'all' && ` in ${productCategories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const badge = getProductBadge(product);
                return (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Product Badge */}
                    <div className="p-4 pb-0">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${badge.color}`}>
                        {badge.text}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="p-4">
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-100">
                        {product.images && product.images.length > 0 ? (
                          <img
                            src={product.images[0].url_standard}
                            alt={product.name}
                            className="h-48 w-full object-cover object-center"
                          />
                        ) : (
                          <div className="h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <ShoppingCartIcon className="w-12 h-12 text-gray-400" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 pt-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      
                      {product.description && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {product.description.replace(/<[^>]*>/g, '').substring(0, 150)}...
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-green-600">
                          ${product.price}
                        </span>
                        
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold"
                        >
                          <ShoppingCartIcon className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>

                      {product.inventory_level !== undefined && (
                        <p className="text-sm text-gray-500 mt-3">
                          {product.inventory_level > 0 
                            ? `${product.inventory_level} available` 
                            : 'Currently unavailable'
                          }
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}