import React from "react";
import { Phone, MapPin, Clock, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const menuItems = [
  {
    name: "Vada",
    description: "Crispy, golden perfection",
    image: "./images/vada.jpg",
    price: "₹15",
  },
  {
    name: "Coffee",
    description: "Your midnight fuel",
    image: "./images/coffee.jpg",
    price: "₹20",
  },
  {
    name: "Tea",
    description: "Classic comfort in a cup",
    image: "./images/tea.jpg",
    price: "₹15",
  },
  {
    name: "Pazhampori",
    description: "Sweet banana fritters",
    image: "./images/pazhampori.jpg",
    price: "₹12",
  },
  {
    name: "Mutta Bajji",
    description: "Spicy egg fritters",
    image: "./images/mutta-bajji.jpg",
    price: "₹25",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#191414] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#191414] via-[#191414]/90 to-[#191414]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/images/hero.jpg)" }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1
              className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl"
              style={{ fontFamily: "'PolySans Bulky', sans-serif" }}
            >
              Cheroor Tea Stall
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold tracking-wide drop-shadow-lg">
              GECTIAN's favorite night hangout place
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-[#1DB954] mb-12">
            <Clock size={24} />
            <span className="text-lg font-bold text-white">
              Open every night • 9 PM to 3 AM
            </span>
          </div>

          <Button
            size="lg"
            className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#1DB954]/20"
          >
            <Play size={20} className="mr-2" />
            Explore Our Menu
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-black mb-4 text-white"
              style={{ fontFamily: "'PolySans Bulky', sans-serif" }}
            >
              Late Night <span className="text-[#1DB954]">Essentials</span>
            </h2>
            <p className="text-xl text-white font-semibold">
              Fuel your midnight conversations and study sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {menuItems.map((item, index) => (
              <Card
                key={item.name}
                className="bg-[#181818] border-none hover:bg-[#282828] transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-2xl hover:shadow-[#1DB954]/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 relative overflow-hidden rounded-lg bg-[#282828]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 bg-[#282828]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute bottom-2 right-2 bg-[#1DB954] text-black px-2 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.price}
                    </div>
                  </div>
                  <h3
                    className="font-black text-lg mb-1 text-white group-hover:text-[#1DB954] transition-colors duration-300"
                    style={{ fontFamily: "'PolySans Bulky', sans-serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#1DB954]/10 to-[#1DB954]/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Clock size={48} className="text-[#1DB954]" />
            <div>
              <h2
                className="text-3xl md:text-4xl font-black mb-2 text-white"
                style={{ fontFamily: "'PolySans Bulky', sans-serif" }}
              >
                We're Night Owls Too
              </h2>
              <p className="text-xl text-white font-semibold">
                Open every night from{" "}
                <span className="text-[#1DB954] font-bold">9 PM to 3 AM</span>
              </p>
            </div>
          </div>
          <p className="text-lg text-white font-medium max-w-2xl mx-auto">
            Whether you're cramming for exams, having late-night discussions, or
            just need a cozy spot to unwind, we've got you covered with fresh
            snacks and hot beverages.
          </p>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-black mb-4 text-white"
              style={{ fontFamily: "'PolySans Bulky', sans-serif" }}
            >
              Find Your <span className="text-[#1DB954]">Spot</span>
            </h2>
            <p className="text-xl text-white font-semibold">
              Located in the heart of GECT campus
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-[#181818] border-none p-8">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <Phone className="text-[#1DB954]" size={32} />
                    <div>
                      <h3
                        className="text-2xl font-black mb-2 text-white"
                        style={{ fontFamily: "'PolySans Bulky', sans-serif" }}
                      >
                        Call Us
                      </h3>
                      <p className="text-white font-medium">
                        Got questions? Give us a ring!
                      </p>
                    </div>
                  </div>
                  <a
                    href="tel:0123456789"
                    className="text-3xl font-bold text-[#1DB954] hover:text-[#1ed760] transition-colors duration-300"
                  >
                    0123456789
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-[#181818] border-none p-8">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <MapPin className="text-[#1DB954]" size={32} />
                    <div>
                      <h3
                        className="text-2xl font-black mb-2 text-white"
                        style={{ fontFamily: "'PolySans Bulky', sans-serif" }}
                      >
                        Location
                      </h3>
                      <p className="text-white font-medium">
                        Easy to find, hard to leave
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href="https://maps.app.goo.gl/Agj6PyYvCvdkj2UL8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Find us on Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card className="bg-[#181818] border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0441234567!2d76.21234567890123!3d10.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA3JzI0LjQiTiA3NsKwMTInNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Spotify Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#191414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2
              className="text-4xl md:text-5xl font-black mb-4 text-white"
              style={{ fontFamily: "'PolySans Bulky', sans-serif" }}
            >
              The <span className="text-[#1DB954]">Perfect Playlist</span>
            </h2>
            <p className="text-xl text-white font-semibold">
              Curated vibes for your late-night hangout sessions
            </p>
          </div>

          <Card className="bg-[#181818] border-none overflow-hidden max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="h-80 flex items-center justify-center bg-[#282828] rounded-lg mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1DB954] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play size={32} className="text-black" />
                  </div>
                  <h3
                    className="text-xl font-black mb-2 text-white"
                    style={{ fontFamily: "'PolySans Bulky', sans-serif" }}
                  >
                    Cheroor Nights Playlist
                  </h3>
                  <p className="text-white font-medium">
                    Spotify embed coming soon...
                  </p>
                </div>
              </div>
              <p className="text-white font-medium text-sm">
                The perfect soundtrack for your study breaks and midnight
                conversations. Mix of chill beats, indie favorites, and campus
                classics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0a0a0a] border-t border-[#282828]">
        <div className="max-w-4xl mx-auto text-center">
          <h3
            className="text-2xl font-black mb-4 text-[#1DB954]"
            style={{ fontFamily: "'PolySans Bulky', sans-serif" }}
          >
            Cheroor Tea Stall
          </h3>
          <p className="text-white font-medium mb-6">
            GECTIAN's favorite night hangout place • Open 9 PM - 3 AM
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-300 font-medium">
            <span>© 2024 Cheroor Tea Stall</span>
            <span>•</span>
            <span>Made with ❤️ for night owls</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
