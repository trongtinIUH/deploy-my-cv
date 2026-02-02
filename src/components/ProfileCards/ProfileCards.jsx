import React, { useState } from 'react';
import Card from './Card';
import ProfileModal from '../Modal/ProfileModal';
import { profileData } from '../../data/profileData';

const ProfileCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenModal = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <section className="cards-section min-h-screen bg-gradient-to-b from-[#0a0a1a] via-gray-900 to-gray-950 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-amber-100 mb-2 sm:mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
          Hover over the cards
        </h1>
        <p className="text-white/60 text-center mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base">
          Click to see details
        </p>

        {/* Cards Container - Flex like CodePen */}
        <div className="flex flex-wrap justify-center">
          {profileData.cards.map((card) => (
            <Card 
              key={card.id} 
              data={card} 
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <ProfileModal 
          card={selectedCard} 
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default ProfileCards;