import { Product, Artist, Mood, MoodData } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Urban Stealth Jacket',
    price: 89,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/fashion.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZmFzaGlvbi5qcGciLCJpYXQiOjE3NzgyODM4OTgsImV4cCI6MTgwOTgxOTg5OH0.W5UxhHFshmD-BV4VHlVBT_vxyakoiS6S8w8RaLqso4I',
    category: 'urban',
    type: 'top',
    mood: 'urban',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX8Ueb9C7V6rN',
    description: 'High-performance urban jacket with a stealth finish. Designed for the city rhythm.'
  },
  {
    id: '2',
    name: 'Neo-Hype Velocity Jacket',
    price: 120,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/Streetwear%20look.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvU3RyZWV0d2VhciBsb29rLmpwZyIsImlhdCI6MTc3ODI5NDM0OSwiZXhwIjoxODA5ODMwMzQ5fQ.bkdsya4J_gjMedsU4A8a8BOdFIQEufkWOrIP90cLJz8',
    category: 'street',
    type: 'top',
    mood: 'hype',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsKG7P9v8',
    description: 'A high-impact streetwear piece designed for those who set the pace. Bold, loud, and unapologetically hype.'
  },
  {
    id: '3',
    name: 'Ethereal Dream Set',
    price: 150,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(9).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDkpLmpwZyIsImlhdCI6MTc3ODI4NDk5NSwiZXhwIjoxODA5ODIwOTk1fQ.k9CqVhh2WmG3gQ7vDvSqprdGuDTLZi8s-q3UAIHkDJs',
    category: 'street',
    type: 'top',
    mood: 'chill',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcnM',
    description: 'A soft, dream-like ensemble for ultimate relaxation. Perfect for low-fidelity moments.'
  },
  {
    id: '4',
    name: 'Sophisticated Tailored Jacket',
    price: 180,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/Tailored%20ease%20with%20a%20fresh%20perspective_.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvVGFpbG9yZWQgZWFzZSB3aXRoIGEgZnJlc2ggcGVyc3BlY3RpdmVfLmpwZyIsImlhdCI6MTc3ODI5MDM4NywiZXhwIjoxODA5ODI2Mzg3fQ.Tc0BWMSOC4eNS9xmd0S9ZNdXNlQXW-D9QSzyr7nYh9g',
    category: 'elegant',
    type: 'top',
    mood: 'elegant',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM3M',
    description: 'A perfect balance of formal structure and urban ease. Tailored for a fresh, sophisticated perspective.'
  },
  {
    id: '5',
    name: 'Urban Core Graphic Tee',
    price: 45,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/OUTFIT.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvT1VURklULmpwZyIsImlhdCI6MTc3ODI4NDE0MCwiZXhwIjoxODA5ODIwMTQwfQ.p1g_qaTWF94LN8iQ55N8_PKwnWVdNSyX7Z_--tjo_b4',
    category: 'urban',
    type: 'top',
    mood: 'urban',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsKG7P9v8',
    description: 'A masterpiece of urban expression. High-density print on premium cotton for the street elite.'
  },
  {
    id: '6',
    name: 'Melancholy Mist Knit',
    price: 95,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(12).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDEyKS5qcGciLCJpYXQiOjE3NzgyOTAwMzgsImV4cCI6MTgwOTgyNjAzOH0.i0aY_7-wxBY7s8C3y9zt3UBz1Ox1qxhKhxvHmhjzpEc',
    category: 'street',
    type: 'top',
    mood: 'sad',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX7qK8vYLaJA0',
    description: 'A delicate, hauntingly beautiful knit for those quiet, contemplative moments.'
  },
  {
    id: '7',
    name: 'Chill Essence Oversized Tee',
    price: 55,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(10).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDEwKS5qcGciLCJpYXQiOjE3NzgyODU0NjQsImV4cCI6MTgwOTgyMTQ2NH0.MUaZ6T66bzZpMdzJ9zj7K5aPpTSn71RSixgXz10rf14',
    category: 'street',
    type: 'top',
    mood: 'chill',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcnM',
    description: 'Ultra-relaxed fit for the ultimate chill vibe. Premium soft cotton for your daily lofi sessions.'
  },
  {
    id: '8',
    name: 'Shadow Echo Hoodie',
    price: 110,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(11).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDExKS5qcGciLCJpYXQiOjE3NzgyODk4NzYsImV4cCI6MTgwOTgyNTg3Nn0.aXYLobjfr-FSSxladMJOakswX0ySpXatiUZOWmF9wi8',
    category: 'street',
    type: 'top',
    mood: 'sad',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX7qK8vYLaJA0',
    description: 'A deep, contemplative hoodie for the quiet hours. Crafted for the soul in search of silence.'
  },
  {
    id: '9',
    name: 'Eternal Chic Trench Coat',
    price: 245,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/45+%20Trench%20Coat%20Outfits%20to%20Make%20You%20the%20Chicest%20Girl%20in%20Town%20-%20JennySgou.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvNDUrIFRyZW5jaCBDb2F0IE91dGZpdHMgdG8gTWFrZSBZb3UgdGhlIENoaWNlc3QgR2lybCBpbiBUb3duIC0gSmVubnlTZ291LmpwZyIsImlhdCI6MTc3ODI5MjM2NCwiZXhwIjoxODA5ODI4MzY0fQ.844E8Ovu6EnP0WRYflMXBJmdeonLAdQLBtbAdSgUXO4',
    category: 'elegant',
    type: 'top',
    mood: 'elegant',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM3M',
    description: 'A timeless silhouette redesigned for the modern urbanite. Sophistication meets functional elegance.'
  },
  {
    id: '10',
    name: 'Midnight Echo Denim',
    price: 135,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(13).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDEzKS5qcGciLCJpYXQiOjE3NzgyOTI5MzIsImV4cCI6MTgwOTgyODkzMn0.k0mw1wRlfKDViHpC7OWsF8gj3-Yo-vPz-6Iro3o2PHY',
    category: 'street',
    type: 'bottom',
    mood: 'night',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX5Y268u77J7u',
    description: 'Deep indigo denim designed for the nocturnal flow. A versatile piece for late night urban exploration.'
  },
  {
    id: '11',
    name: 'Midnight Allure Bodysuit',
    price: 155,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(14).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDE0KS5qcGciLCJpYXQiOjE3NzgyOTMxNzQsImV4cCI6MTgwOTgyOTE3NH0.8upVXHEQFofz6LIQJUPOwhMec6SupO3STPU3-ZOXyFc',
    category: 'street',
    type: 'top',
    mood: 'night',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX5Y268u77J7u',
    description: 'A striking silhouette designed for the nocturnal fashionista. Elegant, bold, and unapologetically night.',
    imagePosition: 'center bottom'
  },
  {
    id: '12',
    name: 'Velocity Street Oversized Tee',
    price: 65,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(16).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDE2KS5qcGciLCJpYXQiOjE3NzgyOTQwNDMsImV4cCI6MTgwOTgzMDA0M30.ijw81atQTe1BfIPqNayILgQolU99TZJPe4YzhtzFV4c',
    category: 'street',
    type: 'top',
    mood: 'hype',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsKG7P9v8',
    description: 'High-intensity streetwear for the trend-setters. Premium heavy cotton with an oversized fit that commands attention.'
  },
  {
    id: '13',
    name: 'Sage Slouchy Pullover',
    price: 75,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/Slouchy%20Pullover%20Sweatshirt%20-%20Washed%20Sage%20French%20Terry.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvU2xvdWNoeSBQdWxsb3ZlciBTd2VhdHNoaXJ0IC0gV2FzaGVkIFNhZ2UgRnJlbmNoIFRlcnJ5LmpwZyIsImlhdCI6MTc3ODI4MDY4MywiZXhwIjoxODA5ODE2NjgzfQ.rdqUl_pFUi9VOpPqBAOybj8OP8FVzY6Nk10pa-a8xLc',
    category: 'street',
    type: 'top',
    hiddenFromShop: true,
    mood: 'chill',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcnM',
    description: 'Ultra-soft French terry pullover in a washed sage finish. The ultimate slouchy comfort piece.'
  },
  {
    id: '14',
    name: 'Neon Hype Kicks',
    price: 160,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(7).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDcpLmpwZyIsImlhdCI6MTc3ODI4MjQ2OSwiZXhwIjoxODA5ODE4NDY5fQ._xfZRGRIZgBfABEqwALsZxFDGMMhRciSEs9zCmk5Xbs',
    category: 'street',
    type: 'shoes',
    hiddenFromShop: true,
    mood: 'hype',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsKG7P9v8',
    description: 'Limited edition neon kicks that glow with the hype. Designed for maximum street visibility.'
  },
  {
    id: '15',
    name: 'Urban Core Cargos',
    price: 115,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(3).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDMpLmpwZyIsImlhdCI6MTc3ODI4MDA1OCwiZXhwIjoxODA5ODE2MDU4fQ.pPZJWk5fsfeTuAjW4tJG6Ti6AeE768Mm3ju-9RJxuVI',
    category: 'urban',
    type: 'bottom',
    hiddenFromShop: true,
    mood: 'urban',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX8Ueb9C7V6rN',
    description: 'Technical cargo pants with multiple utility pockets. Rugged, functional, and purely urban.'
  },
  {
    id: '16',
    name: 'Midnight Tech Beanie',
    price: 35,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(6).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDYpLmpwZyIsImlhdCI6MTc3ODI4MTg3NSwiZXhwIjoxODA5ODE3ODc1fQ.Y4HIv4TqzQuuxlIEiM-c4Bk5lZN_srGvslc3VS4Vd5w',
    category: 'street',
    type: 'accessory',
    hiddenFromShop: true,
    mood: 'night',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX5Y268u77J7u',
    description: 'Minimalist tech beanie for the cold nights. Sleek, warm, and essential.',
    imagePosition: 'center 20%'
  },
  {
    id: '17',
    name: 'Melancholy Mesh Skirt',
    price: 85,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(4).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDQpLmpwZyIsImlhdCI6MTc3ODI4MTE0MSwiZXhwIjoxODA5ODE3MTQxfQ.QyQAvRg06LSeY4wqV_37ItdixXwfgS1S3b92a-0yDEU',
    category: 'street',
    type: 'bottom',
    hiddenFromShop: true,
    mood: 'sad',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX7qK8vYLaJA0',
    description: 'A delicate, layered mesh skirt that flows like a soft mist.',
    imagePosition: 'center 60%'
  },
  {
    id: '18',
    name: 'Velvet Noir Blazer',
    price: 210,
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%208.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgOC5qcGciLCJpYXQiOjE3NzgyODI5MjksImV4cCI6MTgwOTgxODkyOX0.AHVmEYiYeZyr5g6nEd7vw_-NtJKZE-0xW04VtzKJhGQ',
    category: 'elegant',
    type: 'top',
    hiddenFromShop: true,
    mood: 'elegant',
    playlistUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM3M',
    description: 'A sharp, structured blazer in deep velvet black.',
    imagePosition: 'center 40%'
  }
];

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'PINKPANTHERESS',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800',
    genre: 'Breakbeat / Bedroom Pop',
    bio: 'Merging late 90s UK garage and jungle with modern lo-fi pop, PinkPantheress defines the Y2K sonic aesthetic.',
    featuredTrack: "Boy's a liar Pt. 2",
    trackUrl: "https://open.spotify.com/track/6I9VjXGP6Yyc70696XurJ0",
    spotifyUrl: "https://open.spotify.com/artist/7mcDc79s4isp4o9s5js"
  }
];

export const MOODS: MoodData[] = [
  { 
    id: 'urban', 
    label: 'URBANO', 
    color: 'brand-neon', 
    music: 'Trap / Hip-Hop',
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(3).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDMpLmpwZyIsImlhdCI6MTc3ODI4MDA1OCwiZXhwIjoxODA5ODE2MDU4fQ.pPZJWk5fsfeTuAjW4tJG6Ti6AeE768Mm3ju-9RJxuVI'
  },
  { 
    id: 'chill', 
    label: 'CHILL', 
    color: 'brand-beige', 
    music: 'Lo-Fi / Soul',
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/Slouchy%20Pullover%20Sweatshirt%20-%20Washed%20Sage%20French%20Terry.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvU2xvdWNoeSBQdWxsb3ZlciBTd2VhdHNoaXJ0IC0gV2FzaGVkIFNhZ2UgRnJlbmNoIFRlcnJ5LmpwZyIsImlhdCI6MTc3ODI4MDY4MywiZXhwIjoxODA5ODE2NjgzfQ.rdqUl_pFUi9VOpPqBAOybj8OP8FVzY6Nk10pa-a8xLc'
  },
  { 
    id: 'sad', 
    label: 'SAD VIBES', 
    color: 'brand-purple', 
    music: 'Emo Rap / Indie',
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(4).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDQpLmpwZyIsImlhdCI6MTc3ODI4MTE0MSwiZXhwIjoxODA5ODE3MTQxfQ.QyQAvRg06LSeY4wqV_37ItdixXwfgS1S3b92a-0yDEU'
  },
  { 
    id: 'elegant', 
    label: 'ELEGANTE', 
    color: 'brand-neon', 
    music: 'Techno / House',
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%208.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgOC5qcGciLCJpYXQiOjE3NzgyODI5MjksImV4cCI6MTgwOTgxODkyOX0.AHVmEYiYeZyr5g6nEd7vw_-NtJKZE-0xW04VtzKJhGQ'
  },
  { 
    id: 'night', 
    label: 'NIGHT', 
    color: 'brand-gray', 
    music: 'Dark Techno',
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(6).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDYpLmpwZyIsImlhdCI6MTc3ODI4MTg3NSwiZXhwIjoxODA5ODE3ODc1fQ.Y4HIv4TqzQuuxlIEiM-c4Bk5lZN_srGvslc3VS4Vd5w'
  },
  { 
    id: 'hype', 
    label: 'HYPE', 
    color: 'brand-neon', 
    music: 'Hyperpop',
    image: 'https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/descarga%20(7).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGVzY2FyZ2EgKDcpLmpwZyIsImlhdCI6MTc3ODI4MjQ2OSwiZXhwIjoxODA5ODE4NDY5fQ._xfZRGRIZgBfABEqwALsZxFDGMMhRciSEs9zCmk5Xbs'
  }
];
