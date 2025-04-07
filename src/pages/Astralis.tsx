import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  Search,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Code2,
  Link2,
  ChevronLeft,
  ChevronRight,
  Filter,
  ChevronsLeft,
  ChevronsRight,
  Key,
  X,
} from 'lucide-react';
import NotificationToast from '../components/NotificationToast';

interface Script {
  _id: string;
  title: string;
  game: {
    name: string;
    imageUrl: string;
    gameId: number;
  };
  views: number;
  verified: boolean;
  scriptType: string;
  image: string;
  script: string;
  createdAt: string;
  isPatched: boolean;
  slug: string;
  key: boolean;
  keyLink: string;
}

type FilterType = 'verified' | 'unverified' | 'newest' | 'oldest' | 'mostviewed';

const defaultImage = "https://files.catbox.moe/ytpkvk.webp";

const Astralis = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState('');
  const [scripts, setScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeFilters, setActiveFilters] = useState<FilterType[]>([]);
  const [customPage, setCustomPage] = useState('');
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success' as const,
  });

  const filters = [
    { id: 'verified' as FilterType, label: 'Verified', color: 'green' },
    { id: 'unverified' as FilterType, label: 'Unverified', color: 'yellow' },
    { id: 'newest' as FilterType, label: 'Newest', color: 'blue' },
    { id: 'oldest' as FilterType, label: 'Oldest', color: 'purple' },
    { id: 'mostviewed' as FilterType, label: 'Most Viewed', color: 'cyan' },
  ];

  const getFilterParams = (filters: FilterType[]) => {
    const params = new URLSearchParams();
    filters.forEach(filter => {
      switch (filter) {
        case 'verified':
          params.append('verified', '1');
          break;
        case 'unverified':
          params.append('verified', '0');
          break;
        case 'newest':
          params.set('sortBy', 'createdAt');
          params.set('order', 'desc');
          break;
        case 'oldest':
          params.set('sortBy', 'createdAt');
          params.set('order', 'asc');
          break;
        case 'mostviewed':
          params.set('sortBy', 'views');
          params.set('order', 'desc');
          break;
      }
    });
    return params.toString();
  };

  // Basic debounce function.
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // We'll use a ref to hold the debounced function.
  const debouncedFetchRef = useRef<(query: string) => void>(debounce((query: string) => fetchScripts(query), 1000));

  // Whenever activeFilters changes, update the debounced function so it uses the latest filters.
  useEffect(() => {
    debouncedFetchRef.current = debounce((query: string) => fetchScripts(query), 1000);
  }, [activeFilters]);

  const fetchScripts = async (query: string = '') => {
    setLoading(true);
    try {
      const filterParams = getFilterParams(activeFilters);
      const baseUrl = query
        ? `https://scriptblox-api-proxy.vercel.app/api/search?q=${encodeURIComponent(query)}&page=${page}&mode=free`
        : `https://scriptblox-api-proxy.vercel.app/api/fetch?page=${page}&mode=free`;
      const endpoint = filterParams ? `${baseUrl}&${filterParams}` : baseUrl;
      
      const response = await fetch(endpoint);
      
      if (response.status === 429) {
        setNotification({
          show: true,
          message: 'Too many requests. Please wait a moment before trying again.',
          type: 'error',
        });
        setLoading(false);
        return;
      }

      const data = await response.json();

      if (data.result) {
        setScripts(data.result.scripts || []);
        setTotalPages(data.result.totalPages || 1);
      } else {
        setScripts([]);
        setTotalPages(1);
        setNotification({
          show: true,
          message: 'Failed to fetch scripts. Invalid API response.',
          type: 'error',
        });
      }
    } catch (error) {
      console.error('Error fetching scripts:', error);
      setScripts([]);
      setTotalPages(1);
      setNotification({
        show: true,
        message: 'Failed to fetch scripts. Please try again.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  // When the search query or filters change, reset the page and call the debounced fetch.
  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
    debouncedFetchRef.current(submittedSearchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submittedSearchQuery, activeFilters]);

  // Immediately fetch when the page changes.
  useEffect(() => {
    if (page > totalPages) return;
    fetchScripts(submittedSearchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedSearchQuery(searchQuery);
  };

  // We ensure that conflicting filters (like verified vs unverified) don't both get set.
  const toggleFilter = (filter: FilterType) => {
    setActiveFilters(prev => {
      // For mutually exclusive filters, we removed the opposite before toggling.
      if (filter === 'verified' && prev.includes('unverified')) {
        prev = prev.filter(f => f !== 'unverified');
      }
      if (filter === 'unverified' && prev.includes('verified')) {
        prev = prev.filter(f => f !== 'verified');
      }
      if (filter === 'newest' && prev.includes('oldest')) {
        prev = prev.filter(f => f !== 'oldest');
      }
      if (filter === 'oldest' && prev.includes('newest')) {
        prev = prev.filter(f => f !== 'newest');
      }
      const isActive = prev.includes(filter);
      return isActive ? prev.filter(f => f !== filter) : [...prev, filter];
    });
    setPage(1);
  };

  const handleCustomPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomPage(value);
    }
  };

  const handleCustomPageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(customPage);
    if (pageNum >= 1 && pageNum <= totalPages && pageNum !== page) {
      setPage(pageNum);
      setCustomPage('');
    }
  };

  const copyScript = async (script: string) => {
    try {
      await navigator.clipboard.writeText(script);
      setNotification({
        show: true,
        message: 'Loadstring copied to clipboard!',
        type: 'success',
      });
    } catch (error) {
      setNotification({
        show: true,
        message: 'Failed to copy script. Please try again.',
        type: 'error',
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] -top-[200px] -right-[200px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)] 
          blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-[100px] -left-[100px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)] 
          blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Astralis</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Search and discover scripts for your favorite games
          </p>

          <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 mb-8">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search scripts..."
                  className="w-full px-6 py-4 bg-black/50 border border-cyan-500/20 rounded-2xl 
                    text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40
                    backdrop-blur-xl transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-cyan-500/10 
                    rounded-xl border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 
                    transition-all duration-300"
                >
                  <Search className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {filters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => toggleFilter(filter.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
                      ${activeFilters.includes(filter.id)
                        ? `bg-${filter.color}-500/20 border-${filter.color}-500/40 text-${filter.color}-400`
                        : 'bg-black/50 border-gray-800 text-gray-400 hover:border-gray-600'}`}
                  >
                    {activeFilters.includes(filter.id) ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <Filter className="w-4 h-4" />
                    )}
                    {filter.label}
                  </motion.button>
                ))}
              </div>
            </form>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 
              rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {scripts.map((script) => (
                  <motion.div
                    key={script._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -5 }}
                    className="group relative bg-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl 
                      overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative">
                      <div className="aspect-video">
                        <img
                          loading="lazy"
                          src={
                            script.image
                              ? (script.image.startsWith('/images')
                                  ? `https://scriptblox.com${script.image}`
                                  : script.image)
                              : defaultImage
                          }
                          alt={script.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = defaultImage;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      </div>

                      <div className="absolute top-2 left-2 flex flex-col gap-2">
                        <span className={`px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1
                          ${script.verified
                            ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                            : 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400'}`}
                        >
                          {script.verified ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                          {script.verified ? 'Verified' : 'Unverified'}
                        </span>
                        {script.isPatched && (
                          <span className="px-3 py-1 rounded-lg bg-red-500/20 border border-red-500/30 
                            text-red-400 text-sm font-medium flex items-center gap-1">
                            <AlertTriangle className="w-4 h-4" />
                            Patched
                          </span>
                        )}
                      </div>

                      <div className="absolute top-2 right-2">
                        <span className="px-3 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/30 
                          text-cyan-400 text-sm font-medium flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {script.views.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="relative p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{script.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-1">{script.game.name}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          {submittedSearchQuery && (
                            <motion.a
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              href={`https://www.roblox.com/games/${script.game.gameId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500/10 
                                rounded-xl border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 
                                transition-all duration-300 text-sm font-medium"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visit Game
                            </motion.a>
                          )}
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={`https://scriptblox.com/script/${script.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-purple-500/10 
                              rounded-xl border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 
                              transition-all duration-300 text-sm font-medium"
                          >
                            <Link2 className="w-4 h-4" />
                            View Post
                          </motion.a>
                        </div>

                        {script.key && script.keyLink && (
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={script.keyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-yellow-500/10 
                              rounded-xl border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/20 
                              transition-all duration-300 text-sm font-medium"
                          >
                            <Key className="w-4 h-4" />
                            Get Key
                          </motion.a>
                        )}

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => copyScript(script.script)}
                          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-cyan-500/10 
                            rounded-xl border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 
                            transition-all duration-300 text-sm font-medium"
                        >
                          <Code2 className="w-4 h-4" />
                          Copy Script
                        </motion.button>

                        <div className="text-gray-500 text-xs text-center">
                          {formatDate(script.createdAt)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (page !== 1) setPage(1);
                }}
                disabled={page === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
                  ${page === 1 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'}`}
              >
                <ChevronsLeft className="w-5 h-5" />
                First
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (page !== 1) setPage(Math.max(1, page - 1));
                }}
                disabled={page === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
                  ${page === 1 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'}`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </motion.button>

              <form onSubmit={handleCustomPageSubmit} className="flex items-center gap-2">
                <span className="text-white">Page</span>
                <input
                  type="text"
                  value={customPage}
                  onChange={handleCustomPageChange}
                  placeholder={page.toString()}
                  className="w-16 px-3 py-2 bg-black/50 border border-cyan-500/20 rounded-xl 
                    text-white text-center placeholder-gray-400 focus:outline-none focus:border-cyan-500/40"
                />
                <span className="text-white">of {totalPages}</span>
              </form>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (page !== totalPages) setPage(Math.min(totalPages, page + 1));
                }}
                disabled={page === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
                  ${page === totalPages 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'}`}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (page !== totalPages) setPage(totalPages);
                }}
                disabled={page === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
                  ${page === totalPages 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'}`}
              >
                Last
                <ChevronsRight className="w-5 h-5" />
              </motion.button>
            </div>
          </>
        )}
      </div>

      <NotificationToast
        show={notification.show}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ ...notification, show: false })}
      />
    </div>
  );
};

export default Astralis;
