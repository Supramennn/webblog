import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Search, Clock, Eye, Lock, Tag, ChevronRight } from "lucide-react";

const articles = [
  {
    title: "Cybersecurity Itu Gak Ribet: Panduan Gampang Buat Orang Awam",
    slug: "/panduan-cybersecurity-untuk-pemula",
    excerpt:
      "Belajar dasar cybersecurity dengan cara yang gampang dan ringan. Cocok untuk kamu yang gak paham teknologi tapi pengin tetap aman di internet.",
    tags: ["cybersecurity dasar", "keamanan digital", "pemula"],
    date: "17 April 2025",
    readTime: "5 menit",
    featured: true,
    image: "/api/placeholder/800/450"
  },
  {
    title: "Password yang Aman Gak Perlu Bikin Pusing",
    slug: "/password-kuat-gampang",
    excerpt:
      "Tips mudah bikin password yang kuat tanpa pusing. Cocok untuk pemula dan non-techies. Plus rekomendasi password manager terbaik.",
    tags: ["password", "cybersecurity", "password manager"],
    date: "10 April 2025",
    readTime: "4 menit",
    featured: false,
    image: "/api/placeholder/800/450"
  },
  {
    title: "Phishing: Cara Penipu Digital Menjebak Kamu",
    slug: "/cara-menghindari-phishing",
    excerpt:
      "Phishing itu bukan cuma email aneh — bisa datang dari WhatsApp, Instagram, atau teman sendiri. Pelajari cara deteksi & hindarinya dengan mudah.",
    tags: ["phishing", "scam", "keamanan digital"],
    date: "5 April 2025",
    readTime: "6 menit",
    featured: true,
    image: "/api/placeholder/800/450"
  },
  {
    title: "Privasi di WhatsApp, Instagram & Google: Cara Gampang Biar Gak Gampang Dicari",
    slug: "/atur-privasi-sosmed-google",
    excerpt:
      "Belajar cara atur privasi di WhatsApp, Instagram & Google dalam beberapa langkah gampang. Cocok buat kamu yang pengin tetap eksis tapi aman.",
    tags: ["privasi", "whatsapp", "instagram", "google", "cyber hygiene"],
    date: "1 April 2025",
    readTime: "7 menit",
    featured: false,
    image: "/api/placeholder/800/450"
  },
  {
    title: "VPN: Perlu Gak Sih dan Cara Pilih yang Bener",
    slug: "/vpn-untuk-pemula",
    excerpt:
      "Kebanyakan iklan VPN bikin bingung? Artikel ini jelasin bedanya VPN bagus dan VPN abal-abal, plus kapan kamu beneran perlu pake VPN.",
    tags: ["vpn", "privasi online", "keamanan jaringan"],
    date: "25 Maret 2025",
    readTime: "8 menit",
    featured: false,
    image: "/api/placeholder/800/450"
  },
  {
    title: "Ponsel Kamu Dihack? Begini Cara Cek dan Solusinya",
    slug: "/cek-keamanan-ponsel",
    excerpt:
      "Ponsel lemot, baterai cepat habis, atau ada aktivitas aneh? Cek apakah ponselmu dihack dan langkah-langkah praktis untuk mengamankannya kembali.",
    tags: ["keamanan ponsel", "malware", "hacking"],
    date: "20 Maret 2025",
    readTime: "5 menit",
    featured: false,
    image: "/api/placeholder/800/450"
  }
];

const popularTags = ["cybersecurity", "privasi", "password", "keamanan digital", "phishing", "vpn", "malware"];

export default function BlogHome() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Apply dark mode to the body
    if (darkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
    
    return () => {
      document.body.classList.remove('bg-gray-900', 'text-white');
    };
  }, [darkMode]);
  
  // Filter articles based on search and active tag
  const filteredArticles = articles.filter(article =>
    (article.title.toLowerCase().includes(search.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))) &&
    (activeTag === "" || article.tags.includes(activeTag))
  );
  
  // Get featured articles
  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-blue-600'} py-4 shadow-lg`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield size={24} className="text-white" />
            <h1 className="text-2xl font-bold text-white">SecureBytesBlog</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-blue-700"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </Button>
            <Button className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-100'}`}>
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-500'} text-white py-16`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">🛡️ Cybersecurity for Non-Techies</h1>
            <p className="text-xl mb-6">Panduan santai buat kamu yang pengin lebih aman di dunia digital, tanpa ribet teknis.</p>
            <div className="relative">
              <Input
                placeholder="Cari artikel cybersecurity..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`pl-10 pr-4 py-3 rounded-lg w-full ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800'}`}
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Popular Tags */}
        <div className="mb-8">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Popular Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={activeTag === "" ? "default" : "outline"}
              className={`rounded-full text-sm ${darkMode ? 'hover:bg-gray-700' : ''}`}
              onClick={() => setActiveTag("")}
            >
              All
            </Button>
            {popularTags.map((tag, idx) => (
              <Button 
                key={idx}
                variant={activeTag === tag ? "default" : "outline"}
                className={`rounded-full text-sm ${darkMode ? 'hover:bg-gray-700' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                #{tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        {search === "" && activeTag === "" && (
          <div className="mb-12">
            <h2 className={`text-2xl font-semibold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <Eye size={24} className="mr-2" /> Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article, index) => (
                <Card key={index} className={`overflow-hidden hover:shadow-xl transition-shadow ${darkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <CardContent className={`p-5 ${darkMode ? 'text-white' : ''}`}>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Clock size={16} />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <a href={article.slug} className={`text-xl font-semibold hover:underline block mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {article.title}
                    </a>
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-full ${
                            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                          }`}
                          onClick={() => setActiveTag(tag)}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className={`mt-2 ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}`}>
                      Baca Selengkapnya <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <h2 className={`text-2xl font-semibold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <Lock size={24} className="mr-2" /> {search !== "" || activeTag !== "" ? "Search Results" : "Latest Articles"}
          </h2>
          
          {filteredArticles.length === 0 ? (
            <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <Search size={48} className="mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p>Try searching with different keywords or tags</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${darkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                  <CardContent className={`p-5 ${darkMode ? 'text-white' : ''}`}>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Clock size={16} />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <a href={article.slug} className={`text-xl font-semibold hover:underline block mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {article.title}
                    </a>
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-full cursor-pointer ${
                            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                          } ${tag === activeTag ? (darkMode ? 'bg-blue-900' : 'bg-blue-100') : ''}`}
                          onClick={() => setActiveTag(tag)}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter */}
        <div className={`mt-16 p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} flex flex-col md:flex-row items-center justify-between`}>
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Tetap Update dengan Tips Keamanan Digital Terbaru
            </h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Dapatkan artikel & panduan cybersecurity terbaru langsung ke email kamu, tanpa spam.
            </p>
          </div>
          <div className="md:w-1/3 flex">
            <Input 
              placeholder="Email kamu" 
              className={`rounded-r-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
            />
            <Button className="rounded-l-none">Subscribe</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-8 mt-12 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Shield size={20} />
                <span className="font-bold">SecureBytesBlog</span>
              </div>
              <p className="text-sm mt-2">Cybersecurity for non-techies, explained simply</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-center">
            © 2025 SecureBytesBlog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}