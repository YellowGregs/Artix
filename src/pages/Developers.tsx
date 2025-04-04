import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import ImageModal from '../components/ImageModal';

interface Developer {
  name: string;
  role: string;
  image: string;
  description: string;
  discord?: string;
  github?: string;
}

interface ImageModalState {
  isOpen: boolean;
  imageUrl: string;
  userName: string;
}

const apiUrls = {
  f_and_a_owner: [
    "https://avatar-cyan.vercel.app/api/1132054172628435095",
    "https://avatar-cyan.vercel.app/api/773634385266081832",
  ],
  falcon_owner: [
    "https://avatar-cyan.vercel.app/api/1144237011801227294",
  ],
  falcon_dev: [
    "https://avatar-cyan.vercel.app/api/773952016036790272",
  ],
};

const teamDescriptions: Record<string, string> = {
  "1132054172628435095": "Owner of Artix.",
  "773634385266081832": "Owner of Artix.",
  "1144237011801227294": "Director of Falcon.",
  "773952016036790272": "Developer at Falcon."
};

const teamSocialLinks: Record<string, { discord?: string, github?: string }> = {
  "1132054172628435095": { discord: ".bsn_"},
  "773634385266081832": { discord: ".nyxify" },
  "1144237011801227294": { discord: "aduososo" },
  "773952016036790272": { discord: "yellowgreg", github: "https://github.com/yellowgreg" },
};

const Developers = () => {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [imageModal, setImageModal] = useState<ImageModalState>({
    isOpen: false,
    imageUrl: '',
    userName: '',
  });

  useEffect(() => {
    const fetchDevelopers = async () => {
      const fetchedDevelopers = await Promise.all(
        Object.entries(apiUrls).flatMap(([role, urls]) =>
          urls.map(async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            const userId = data.id;
            return {
              name: data.display_name,
              role:
                role === "f_and_a_owner"
                  ? "ARTIX OWNER"
                  : role.replace(/_/g, ' ').toUpperCase(),
              image: data.avatarUrl,
              description: teamDescriptions[userId] || "Member of the Falcon & Astralis Team",
              discord: teamSocialLinks[userId]?.discord,
              github: teamSocialLinks[userId]?.github,
            };
          })
        )
      );
      setDevelopers(fetchedDevelopers);
    };

    fetchDevelopers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32 pb-20 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-900/0 to-cyan-900/20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Artix Team</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">Meet the team behind Artix</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developers.map((dev, index) => (
            <DeveloperCard 
              key={index} 
              developer={dev} 
              index={index}
              onImageClick={() => setImageModal({
                isOpen: true,
                imageUrl: dev.image,
                userName: dev.name,
              })}
            />
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={imageModal.isOpen}
        onClose={() => setImageModal({ ...imageModal, isOpen: false })}
        imageUrl={imageModal.imageUrl}
        userName={imageModal.userName}
      />
    </div>
  );
};

const DeveloperCard = ({ 
  developer, 
  index, 
  onImageClick 
}: { 
  developer: Developer; 
  index: number;
  onImageClick: () => void;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ delay: index * 0.1 }} 
    whileHover={{ y: -5 }} 
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
    <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 group-hover:border-cyan-500/30">
      <div className="flex items-start gap-4">
        <motion.img 
          whileHover={{ scale: 1.05 }} 
          src={developer.image} 
          alt={developer.name} 
          className="w-20 h-20 rounded-xl object-cover border-2 border-gray-800 group-hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
          onClick={onImageClick}
        />
        <div>
          <h3 className="text-xl font-bold text-white">{developer.name}</h3>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mt-2">{developer.role}</span>
        </div>
      </div>
      <p className="text-gray-300 mt-4">{developer.description}</p>
      <div className="flex items-center gap-4 mt-4">
        {developer.discord && (
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }} 
            className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all duration-200 cursor-pointer" 
            onClick={() => {
              navigator.clipboard.writeText(developer.discord!);
              alert('Discord username copied to clipboard!');
            }}
          >
            <FaDiscord className="w-5 h-5" />
          </motion.div>
        )}
        {developer.github && (
          <motion.a 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }} 
            href={developer.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all duration-200"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

export default Developers;