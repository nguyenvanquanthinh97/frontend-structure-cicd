import React, { useState } from 'react';
import { ShoppingCart, User, LogOut, Star, Home, Plus } from 'lucide-react';

const ShopHomepage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 124,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
      category: "Wearables"
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 156,
      category: "Accessories"
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 203,
      category: "Kitchen"
    },
    {
      id: 5,
      name: "Desk Lamp",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
      rating: 4.2,
      reviews: 67,
      category: "Home"
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 142,
      category: "Electronics"
    },
    {
      id: 7,
      name: "Wireless Mouse",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
      rating: 4.1,
      reviews: 98,
      category: "Electronics"
    },
    {
      id: 8,
      name: "Phone Case",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=300&h=300&fit=crop",
      rating: 4.0,
      reviews: 234,
      category: "Accessories"
    }
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignInOut = () => {
    setIsSignedIn(!isSignedIn);
  };

  const handleAddToCart = (productId) => {
    if (isSignedIn) {
      setCartCount(prev => prev + 1);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-amber-400/50 text-amber-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar - Material Design Style */}
      <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer hover:bg-blue-700 p-2 rounded transition-colors"
              onClick={handleLogoClick}
            >
              <Home className="w-6 h-6 text-white mr-2" />
              <span className="text-white font-bold text-xl">ShopHub</span>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2">
              {/* Cart Button - only show when signed in */}
              {isSignedIn && (
                <button className="relative p-3 text-white hover:bg-blue-700 rounded-full transition-colors duration-200">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                </button>
              )}

              {/* Sign In/Out Button */}
              <button
                onClick={handleSignInOut}
                className={`flex items-center space-x-2 px-4 py-2 rounded font-medium transition-all duration-200 ${
                  isSignedIn
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isSignedIn ? (
                  <>
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </>
                ) : (
                  <>
                    <User className="w-4 h-4" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Material Design */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Shop the latest trends with unbeatable prices
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Shop Now
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid gap-6" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  ${product.price}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product.id)}
                  disabled={!isSignedIn}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSignedIn
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  <span>{isSignedIn ? 'Add to Cart' : 'Sign in to Add'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button for Cart (only when signed in) */}
      {isSignedIn && (
        <div className="fixed bottom-6 right-6 z-40">
          <button className="relative bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopHomepage;