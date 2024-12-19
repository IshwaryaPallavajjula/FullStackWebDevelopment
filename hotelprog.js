import React, { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

const menuItems: MenuItem[] = [
  { id: 1, name: 'Veg Biryani', description: 'Mixed vegetable biryani', price: 150, category: 'Rice' },
  { id: 2, name: 'Palak Paneer', description: 'Spinach curry with paneer', price: 180, category: 'Curries' },
  { id: 3, name: 'Veg Manchurian', description: 'Deep-fried vegetable balls in Manchurian sauce', price: 120, category: 'Chinese' },
  { id: 4, name: 'Dal Makhani', description: 'Black lentil curry with kidney beans', price: 100, category: 'Curries' },
  { id: 5, name: 'Mattar Paneer', description: 'Peas and paneer curry', price: 180, category: 'Curries' },
  { id: 6, name: 'Veg Spring Rolls', description: 'Deep-fried vegetable spring rolls', price: 80, category: 'Chinese' },
  { id: 7, name: 'Rajma Masala', description: 'Kidney bean curry', price: 120, category: 'Curries' },
  { id: 8, name: 'Samosas', description: 'Deep-fried or baked pastry filled with spiced potatoes and peas', price: 60, category: 'Snacks' },
  { id: 9, name: 'Idli', description: 'Steamed rice cake', price: 40, category: 'South Indian' },
  { id: 10, name: 'Dosa', description: 'Fermented rice and lentil crepe', price: 60, category: 'South Indian' },
  { id: 11, name: 'Vada Pav', description: 'Deep-fried doughnut sandwich', price: 40, category: 'Street Food' },
  { id: 12, name: 'Pav Bhaji', description: 'Mixed vegetable curry with bread', price: 80, category: 'Street Food' },
  { id: 13, name: 'Kachoris', description: 'Deep-fried bread puffs filled with spiced potatoes and peas', price: 60, category: 'Snacks' },
  { id: 14, name: 'Gujarati Thali', description: 'Mixed vegetable platter with rice, roti, and dal', price: 200, category: 'Thalis' },
  { id: 15, name: 'South Indian Thali', description: 'Mixed vegetable platter with rice, roti, and sambar', price: 220, category: 'Thalis' },
  { id: 16, name: 'Chana Masala', description: 'Chickpea curry', price: 120, category: 'Curries' },
  { id: 17, name: 'Saag Aloo', description: 'Spinach curry with potatoes', price: 100, category: 'Curries' },
  { id: 18, name: 'Baingan Bharta', description: 'Roasted eggplant mash', price: 80, category: 'Curries' },
  { id: 19, name: 'Kadai Paneer', description: 'Paneer curry with bell peppers and onions', price: 180, category: 'Curries' },
  { id: 20, name: 'Malai Kofta', description: 'Deep-fried vegetable dumplings in creamy sauce', price: 200, category: 'Curries' },
  { id: 21, name: 'Sag Paneer', description: 'Spinach curry with paneer', price: 180, category: 'Curries' },
  { id: 22, name: 'Tinda Masala', description: 'Baby pumpkin curry', price: 100, category: 'Curries' },
  { id: 23, name: 'Bhindi Masala', description: 'Okra curry', price: 100, category: 'Curries' },
  { id: 24, name: 'Aloo Gobi', description: 'Potato and cauliflower curry', price: 80, category: 'Curries' },
  { id: 25, name: 'Mushroom Masala', description: 'Mushroom curry', price: 150, category: 'Curries' },
  { id: 26, name: 'Veg Jalfrezi', description: 'Stir-fried mixed vegetables', price: 120, category: 'Chinese' },
  { id: 27, name: 'Veg Chowmein', description: 'Stir-fried noodles with mixed vegetables', price: 100, category: 'Chinese' },
  { id: 28, name: 'Ras Malai', description: 'Deep-fried paneer in creamy sauce', price: 150, category: 'Desserts' },
  { id: 29, name: 'Gulab Jamun', description: 'Deep-fried dumplings in rose syrup', price: 100, category: 'Desserts' },
  { id: 30, name: 'Jalebi', description: 'Deep-fried fermented batter in syrup', price: 80, category: 'Desserts' },
  { id: 31, name: 'Kulfi', description: 'Indian-style ice cream', price: 60, category: 'Desserts' },
  { id: 32, name: 'Lassi', description: 'Yogurt-based drink', price: 40, category: 'Beverages' },
  { id: 33, name: 'Chai', description: 'Spiced tea', price: 20, category: 'Beverages' },
  { id: 34, name: 'Coffee', description: 'Hot coffee', price: 30, category: 'Beverages' },
  { id: 35, name: 'Falooda', description: 'Cold dessert drink with vermicelli noodles', price: 80, category: 'Beverages' },
];

const IshwaryasFoodParadise = () => {
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (item: MenuItem) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  const handleRemoveFromCart = (item: MenuItem) => {
    setCart(cart.filter((i) => i.id !== item.id));
    setTotal(total - item.price);
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-green-500">Ishwarya's Food Paradise</h1>
      <h2 className="text-2xl font-bold text-green-500">Vegetarian Menu</h2>
      <div className="flex flex-wrap justify-center">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4 m-4 w-64">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-sm">{item.description}</p>
            <p className="text-lg font-bold">₹{item.price}</p>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-green-500">Cart</h2>
      <div className="flex flex-wrap justify-center">
        {cart.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4 m-4 w-64">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-lg font-bold">₹{item.price}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleRemoveFromCart(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <p className="text-lg font-bold">Total: ₹{total}</p>
    </div>
  );
};

export default IshwaryasFoodParadise;