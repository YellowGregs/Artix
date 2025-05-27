import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Search, Copy, AlertTriangle, CheckCircle, ExternalLink, Code2, Link2, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import NotificationToast from '../components/NotificationToast';

interface Script {
  _id: string;
  title: string;
  game: {
    name: string;
    imageUrl: string;
  };
  views: number;
  verified: boolean;
  scriptType: string;
  image: string;
  script: string;
  createdAt: string;
  isPatched: boolean;
  slug: string;
}

type FilterType = 'all' | 'verified' | 'unverified' | 'newest' | 'oldest' | 'mostviewed';

const astralis = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState('');
  const [scripts, setScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success' as const,
  });

  const filters = [
    { id: 'all', label: 'All Scripts' },
    { id: 'verified', label: 'Verified' },
    { id: 'unverified', label: 'Unverified' },
    { id: 'newest', label: 'Newest' },
    { id: 'oldest', label: 'Oldest' },
    { id: 'mostviewed', label: 'Most Viewed' },
  ];

  const getFilterParams = (filter: FilterType) => {
    switch (filter) {
      case 'verified':
        return 'verified=1';
      case 'unverified':
        return 'verified=0';
      case 'newest':
        return 'sortBy=createdAt&order=desc';
      case 'oldest':
        return 'sortBy=createdAt&order=asc';
      case 'mostviewed':
        return 'sortBy=views&order=desc';
      default:
        return '';
    }
  };

  const fetchScripts = async (
    query: string = '',
    retries = 3,
    backoff = 1000
  ): Promise<void> => {
    setLoading(true);
  
    const filterParam = getFilterParams(activeFilter);
    const endpoint = query
      ? `https://scriptblox-api-proxy.vercel.app/api/search?q=${encodeURIComponent(query)}&page=${page}&mode=free${filterParam ? `&${filterParam}` : ''}`
      : `https://scriptblox-api-proxy.vercel.app/api/fetch?page=${page}&mode=free${filterParam ? `&${filterParam}` : ''}`;
  
    try {
      const res = await fetch(endpoint);
  
      if (res.status === 429 && retries > 0) {
        const retryAfter = parseInt(res.headers.get('Retry-After') || '') || backoff / 1000;
        console.warn(`429 received. Retrying in ${retryAfter}s...`);
        await new Promise(r => setTimeout(r, retryAfter * 1000));
        return fetchScripts(query, retries - 1, backoff * 2);
      }
  
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
  
      let data: any;
      try {
        data = await res.json();
      } catch (e) {
        throw new Error('Invalid JSON in response');
      }
  
      if (
        !data.result ||
        !Array.isArray(data.result.scripts) ||
        typeof data.result.totalPages !== 'number'
      ) {
        console.error('Unexpected response shape:', data);
        throw new Error('Malformed API response');
      }
  
      // All good!
      setScripts(data.result.scripts);
      setTotalPages(data.result.totalPages);
  
    } catch (error: any) {
      console.error('Error fetching scripts:', error);
      setNotification({
        show: true,
        message: error.message.includes('429')
          ? 'Rate limited—please wait a moment and try again.'
          : 'Failed to fetch scripts. Please try again.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchScripts(submittedSearchQuery);
  }, [submittedSearchQuery, page, activeFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setSubmittedSearchQuery(searchQuery);
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

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
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
          </form>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveFilter(filter.id as FilterType);
                  setPage(1);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
                  ${activeFilter === filter.id 
                    ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400' 
                    : 'bg-black/50 border-gray-800 text-gray-400 hover:border-cyan-500/20'}`}
              >
                <Filter className="w-4 h-4" />
                {filter.label}
              </motion.button>
            ))}
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
                    className="bg-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl 
                      overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={script.image.startsWith('/images') 
                          ? `https://scriptblox.com${script.image}` 
                          : script.image}
                        alt={script.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = script.game.imageUrl.startsWith('/images')
                            ? 'https://files.catbox.moe/ytpkvk.webp'
                            : script.game.imageUrl;
                        }}
                      />
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
                          {script.views.toLocaleString()} views
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{script.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{script.game.name}</p>
                      <div className="flex items-center gap-3 mb-4">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={`https://scriptblox.com/script/${script.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 rounded-xl 
                            border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 
                            transition-all duration-300 text-sm"
                        >
                          <Link2 className="w-4 h-4" />
                          View Post
                        </motion.a>
                        <span className="text-gray-500 text-sm">
                          {formatDate(script.createdAt)}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => copyScript(script.script)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 
                          rounded-xl border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 
                          transition-all duration-300"
                      >
                        <Code2 className="w-4 h-4" />
                        Copy Loadstring
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
                  ${page === 1 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'}`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </motion.button>
              <span className="text-white">
                Page {page} of {totalPages}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
                  ${page === totalPages 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'}`}
              >
                Next
                <ChevronRight className="w-5 h-5" />
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

export default astralis;
