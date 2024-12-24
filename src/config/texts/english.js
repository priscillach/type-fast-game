// 每个难度包含10条句子的数组
const englishTexts = [
  [ // Difficulty 1
    "The sun rises in the east.",
    "I like to read books.",
    "She is my best friend.",
    "We play soccer every day.",
    "The cat is sleeping on the bed.",
    "He enjoys listening to music.",
    "Can you help me with this?",
    "The flowers are blooming in spring.",
    "I had toast for breakfast.",
    "This is a simple sentence."
  ],
  [ // Difficulty 2
    "The rain stopped just before we left the house.",
    "She bought a new dress for the party tonight.",
    "A quick brown fox jumps over the lazy dog.",
    "I enjoy hiking in the mountains during summer.",
    "Learning new skills can be both fun and rewarding.",
    "The little boy lost his red balloon in the park.",
    "They are planning a trip to Paris next month.",
    "The cake smells delicious as it bakes in the oven.",
    "My sister adopted a small, fluffy white kitten.",
    "He spent the afternoon fixing his old bicycle."
  ],
  [ // Difficulty 3
    "The colorful butterfly flitted gracefully between the blooming flowers.",
    "After a long day, she relaxed on the couch with a cup of warm tea.",
    "His dedication to practicing the piano every day is remarkable.",
    "The ancient ruins revealed secrets of a civilization long forgotten.",
    "She carefully painted the landscape, capturing every tiny detail.",
    "The book was so engaging that he couldn't put it down until he finished.",
    "The city lights sparkled like stars on the dark, tranquil water.",
    "His collection of stamps from around the world is quite impressive.",
    "Despite the chilly weather, the marathon runners pushed through.",
    "The mysterious letter arrived without a sender's name or address."
  ],
  [ // Difficulty 4
    "In the heart of the bustling city, a quiet cafe offered a peaceful retreat.",
    "The engineer worked tirelessly to design a bridge that could withstand earthquakes.",
    "As the sun set over the horizon, the sky turned brilliant shades of orange and pink.",
    "She meticulously organized her notes before the big presentation tomorrow.",
    "The detective pieced together the clues, slowly unraveling the truth behind the case.",
    "Despite the odds, the small team achieved their ambitious goal ahead of schedule.",
    "The forest was alive with the sound of chirping birds and rustling leaves.",
    "His innovative approach to solving the problem earned him widespread recognition.",
    "After years of hard work, she finally opened her own bakery in the neighborhood.",
    "The audience was captivated by the speaker's eloquent and inspiring words."
  ],
  [ // Difficulty 5
    "The protagonist's journey through the uncharted wilderness was fraught with danger and discovery.",
    "In the quiet town of Elmwood, strange occurrences began to unsettle the residents.",
    "The art museum's latest exhibit showcased masterpieces from the Renaissance era.",
    "Her intricate embroidery featured a vibrant garden teeming with flowers and butterflies.",
    "The scientist conducted numerous experiments to verify the accuracy of her groundbreaking theory.",
    "The novel's complex characters and interwoven plotlines kept readers enthralled until the final page.",
    "During the storm, the ship's crew demonstrated exceptional skill and teamwork to navigate to safety.",
    "The chef's signature dish combined unexpected flavors to create a culinary masterpiece.",
    "Beneath the starry sky, the campers shared stories and laughter around the crackling fire.",
    "His relentless pursuit of justice earned him both admiration and adversaries."
  ],
  [ // Difficulty 6
    "The researcher's findings shed new light on the intricate workings of the human brain.",
    "Amidst the towering skyscrapers, a hidden garden provided a serene escape for city dwellers.",
    "The ancient manuscript, written in a language long forgotten, held the key to a lost treasure.",
    "Her heartfelt letter conveyed emotions that words alone could scarcely express.",
    "The orchestra's performance of the symphony was met with thunderous applause and a standing ovation.",
    "Overcoming seemingly insurmountable challenges, the mountaineers reached the summit against all odds.",
    "The film's breathtaking cinematography transported viewers to an entirely different world.",
    "Through meticulous planning and unwavering determination, the entrepreneur launched a successful startup.",
    "As the spacecraft hurtled through the void, the astronauts prepared for their daring mission.",
    "The young poet's evocative verses captured the raw essence of human experience."
  ],
  [ // Difficulty 7
    "In a quaint coastal village, legends of a ghostly lighthouse keeper were passed down through generations.",
    "The professor's lecture on quantum mechanics was both enlightening and challenging for his students.",
    "Beneath the ocean's surface, vibrant coral reefs teemed with an astonishing diversity of marine life.",
    "The architect's design seamlessly blended modern aesthetics with traditional elements.",
    "With grace and precision, the ballerina performed a routine that left the audience in awe.",
    "The memoir detailed the author's harrowing experiences and ultimate triumph over adversity.",
    "The sprawling library housed an impressive collection of rare books and manuscripts.",
    "A sudden twist in the story revealed a hidden connection between the two protagonists.",
    "The eco-friendly initiative aimed to reduce waste and promote sustainable living practices.",
    "The adventurer's journal chronicled his encounters with diverse cultures and breathtaking landscapes."
  ],
  [ // Difficulty 8
    "The groundbreaking discovery, hailed as a monumental achievement in the field of medicine, opened new avenues for treatment.",
    "As the wildfire spread rapidly, firefighters worked tirelessly to protect homes and evacuate residents to safety.",
    "The novelist's prose, rich with vivid imagery and nuanced themes, captivated readers worldwide.",
    "An intricate network of underground tunnels connected the city's historical landmarks.",
    "The diplomat's skillful negotiations averted a potential conflict, fostering a new era of cooperation.",
    "With unwavering resolve, the scientist pursued her hypothesis, despite repeated setbacks and skepticism.",
    "The elaborate masquerade ball, held in a grand manor, was the talk of the town for weeks.",
    "His innovative approach to renewable energy solutions earned him prestigious accolades.",
    "The explorer's account of his journey through uncharted territories inspired generations to come.",
    "A delicate balance of flavors and textures defined the chef's award-winning cuisine."
  ],
  [ // Difficulty 9
    "In the midst of the bustling marketplace, an artisan demonstrated traditional techniques to craft intricate pottery.",
    "The playwright's work masterfully interwove historical events with poignant personal narratives.",
    "The ambitious urban renewal project aimed to revitalize neglected neighborhoods while preserving their cultural heritage.",
    "A team of researchers embarked on an ambitious expedition to study the effects of climate change in remote polar regions.",
    "The gripping courtroom drama explored themes of justice, morality, and the fallibility of human judgment.",
    "The intricacies of the clockmaker's craft were evident in every detail of his exquisite creations.",
    "Her eloquent speech, delivered with conviction and poise, galvanized the audience into action.",
    "The groundbreaking technology promised to revolutionize industries and redefine possibilities.",
    "As the orchestra reached the crescendo, the hall resonated with an almost palpable energy.",
    "The anthology featured a diverse array of voices, each offering a unique perspective on the human condition."
  ],
  [ // Difficulty 10
    "The philosopher's treatise challenged conventional thought, presenting a radical reimagining of societal structures and ethics.",
    "An intricate mosaic of cultural influences shaped the region's unique traditions, architecture, and cuisine.",
    "The ambitious space exploration initiative aimed to establish a permanent human presence on Mars within the next decade.",
    "Through a masterful blend of satire and symbolism, the novel critiqued the complexities of modern life.",
    "The grand cathedral, with its soaring arches and detailed frescoes, stood as a testament to centuries of artistic devotion.",
    "In a groundbreaking experiment, scientists successfully simulated the conditions of early planetary formation.",
    "The epic poem wove a tapestry of heroism, tragedy, and redemption across its meticulously crafted verses.",
    "The economic treatise analyzed global trade dynamics, offering insights into emerging market trends and challenges.",
    "The symphony's final movement, a tour de force of emotional and technical brilliance, left the audience spellbound.",
    "The memoir, a deeply introspective exploration of identity and resilience, resonated with readers from all walks of life."
  ]
];

export default englishTexts; 