export interface Perfume {
  name: string;
  fragrance: string;
  description: string;
  videoFile: string;
}

export interface Pack {
  id: string;
  name: string;
  image: string;
  price: string;
  perfumes: Perfume[];
}

export const perfumePacks: Pack[] = [
  {
    id: 'naruto',
    name: 'Naruto Collection',
    image: '/pictures/naruto.jpg',
    price: '199 MAD',
    perfumes: [
      {
        name: 'Naruto Uzumaki',
        fragrance: 'Ultra Male',
        description: 'The Nine-Tails Jinchuriki carries within him an unbreakable spirit of hope. This vibrant, energetic fragrance captures his journey from outcast to hero - sweet notes of determination mixed with the warmth of friendship. Like his signature orange jumpsuit blazing across Konoha rooftops, this scent embodies the power of never giving up on your dreams, no matter how impossible they seem.',
        videoFile: '/champions/naruto.mp4'
      },
      {
        name: 'Itachi Uchiha',
        fragrance: 'Black Orchid',
        description: 'The tragic genius who bore the weight of his clan\'s sins in silence. This mysterious, deep fragrance reflects the darkness he embraced to protect his beloved village and younger brother. Notes of sacrifice and noble sorrow blend with the strength of unconditional love. Like the crows that followed his shadow, this scent tells the story of a hero misunderstood, whose greatest act of love appeared as the ultimate betrayal.',
        videoFile: '/champions/itachi.mp4'
      },
      {
        name: 'Madara Uchiha',
        fragrance: 'You Intensely',
        description: 'The legendary founder whose dreams of peace were twisted by loss and betrayal. This powerful, intense fragrance captures his eternal flame of ambition - warm, commanding notes that speak of a man who would reshape the world itself. Like his Eternal Mangekyou Sharingan, this scent burns with the intensity of someone who has seen too much pain and chose to end all suffering through ultimate power.',
        videoFile: '/champions/madara.mp4'
      }
    ]
  },
  {
    id: 'onepiece',
    name: 'One Piece Pack',
    image: '/pictures/one piece.jpg',
    price: '199 MAD',
    perfumes: [
      {
        name: 'Monkey D. Luffy',
        fragrance: 'Invictus',
        description: 'The future Pirate King whose rubber heart stretches across the Grand Line, touching every soul he meets. This fresh, adventurous fragrance embodies his infectious laughter and unwavering belief in his crew. Like the wind filling the Thousand Sunny\'s sails, this scent carries the essence of absolute freedom - the courage to chase impossible dreams and the strength to protect what matters most.',
        videoFile: '/champions/luffy.mp4'
      },
      {
        name: 'Roronoa Zoro',
        fragrance: 'Stronger With You Leather',
        description: 'The three-sword style master whose dedication cuts deeper than any blade. This strong, sharp fragrance reflects his unwavering loyalty and relentless pursuit of strength. Like the weight of his promise to Kuina, this scent carries notes of discipline, honor, and the leather-bound resolve of a swordsman who would sacrifice everything to help his captain become the Pirate King.',
        videoFile: '/champions/zoro.mp4'
      },
      {
        name: 'Sanji Vinsmoke',
        fragrance: 'Spicebomb',
        description: 'The cook whose kicks are as fiery as his passion for protecting others. This warm, spicy fragrance captures his elegant fighting style and culinary artistry. Like the All Blue of his dreams, this scent blends the finest spices with the warmth of a man who feeds both body and soul - a gentleman whose love language is a perfectly prepared meal and unwavering chivalry.',
        videoFile: '/champions/sanji.mp4'
      }
    ]
  },
  {
    id: 'deathnote',
    name: 'Death Note Pack',
    image: '/pictures/death note.jpg',
    price: '199 MAD',
    perfumes: [
      {
        name: 'Light Yagami',
        fragrance: 'Absolute Justice',
        description: 'The brilliant student who believed himself chosen to cleanse the world of evil. This sophisticated fragrance captures his god complex - amber and sandalwood notes that speak of divine authority and moral superiority. Like his Death Note\'s crimson pages, this scent embodies the dangerous allure of absolute power and the tragic fall of a once-pure soul corrupted by the intoxicating ability to play god.',
        videoFile: '/champions/Light.mp4'
      },
      {
        name: 'L Lawliet',
        fragrance: 'Silent Mind',
        description: 'The world\'s greatest detective, a genius who lives in shadows and thinks in puzzles. This contemplative fragrance blends black tea, musk, and woods - the essence of late-night deductions and sugar-fueled brilliance. Like his crouched silhouette against computer screens, this scent captures the quiet intensity of a mind that sees patterns others miss, forever hunting the truth in a world of lies.',
        videoFile: '/champions/L Lawliet.mp4'
      },
      {
        name: 'Ryuk',
        fragrance: 'Forbidden Apple',
        description: 'The Shinigami who dropped chaos into the human world out of pure boredom. This playful yet ominous fragrance combines smoky cedar with crisp apple notes - the scent of otherworldly mischief and divine indifference. Like his maniacal laughter echoing from the realm of death, this fragrance embodies the dangerous curiosity of an immortal being who finds entertainment in human suffering and moral corruption.',
        videoFile: '/champions/Ryuk.mp4'
      }
    ]
  },
  {
    id: 'attackontitan',
    name: 'Attack on Titan Pack',
    image: '/pictures/attack on titan.jpg',
    price: '199 MAD',
    perfumes: [
      {
        name: 'Eren Yeager',
        fragrance: 'Sauvage',
        description: 'The boy who swore to eliminate every last titan, only to become humanity\'s greatest threat. This raw, untamed fragrance captures his burning desire for freedom and the terrible price of his choices. Like the rumbling that shook the earth, this scent embodies the savage determination of someone willing to destroy the world to save the people he loves - a tragic hero consumed by the very hatred he sought to end.',
        videoFile: '/champions/Eren.mp4'
      },
      {
        name: 'Levi Ackerman',
        fragrance: 'Bleu de Chanel',
        description: 'Humanity\'s strongest soldier, whose blades dance with lethal precision through titan flesh. This clean, precise fragrance reflects his unwavering discipline and the weight of countless sacrifices. Like his ODM gear cutting through the air, this scent carries notes of duty, loss, and the bitter resolve of a man who has buried too many comrades but continues to fight for those still breathing.',
        videoFile: '/champions/Levi.mp4'
      },
      {
        name: 'Mikasa Ackerman',
        fragrance: 'Black Orchid',
        description: 'The last of her clan, whose devotion burns fiercer than any titan\'s rage. This strong, protective fragrance embodies her fierce loyalty and the red scarf that binds her heart to Eren. Like her Ackerman bloodline awakening in moments of desperate protection, this scent speaks of unbreakable bonds, silent strength, and a love so deep it would follow its object even into damnation.',
        videoFile: '/champions/Mikasa.mp4'
      }
    ]
  }
];

// WhatsApp integration function
export const orderOnWhatsApp = (packName: string, packPrice: string) => {
  const phoneNumber = '212655561692'; // Morocco format
  const message = `Hi! I want to order the ${packName} for ${packPrice}. Please confirm availability and delivery details.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
