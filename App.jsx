import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Wishlist from "./components/Wishlist";
import Confirmation from "./components/Confirmation";
import BookingForm from "./components/BookingForm";

export default function App() {
  const [page, setPage] = useState('home');
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist')||'[]'));
  const [booking, setBooking] = useState(() => {
  const saved = localStorage.getItem('booking');
  return saved ? JSON.parse(saved) : null;
});
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
  }, [theme]);

  return (
    <div>
      <Navbar
        page={page}
        setPage={setPage}
        wishlist={wishlist}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="p-4">
        {page === 'home' && <Home setPage={setPage} wishlist={wishlist} setWishlist={setWishlist} setBooking={setBooking} />}
        {page === 'about' && <About />}
        {page === 'contact' && <ContactUs />}
        {page === 'wishlist' && <Wishlist wishlist={wishlist} setWishlist={setWishlist} />}
        {page === 'booking' && booking && (
          <BookingForm booking={booking} setPage={setPage} />
        )}
        {page === 'confirmation' && booking && (
          <Confirmation booking={booking} />
        )}
      </main>
    </div>
  );
}
