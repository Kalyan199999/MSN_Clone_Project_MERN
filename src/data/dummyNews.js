const dummyNews = [
  {
    title: 'India Wins T20 World Cup 2025',
    description: 'India beats England in the finals to claim the T20 World Cup.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Cricket'
  },
  {
    title: 'CBSE Announces New Education Policy',
    description: 'CBSE introduces new curriculum including AI and coding in class 6.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Education'
  },
  {
    title: 'Miss World 2025 Crowned in Paris',
    description: 'Miss Brazil wins Miss World 2025 in a grand ceremony.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Events'
  },
  {
    title: 'Ukraine-Russia Conflict Escalates Again',
    description: 'New airstrikes reported in eastern Ukraine amid peace talks.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'War'
  },
  {
    title: 'Delhi Faces Severe Water Scarcity',
    description: 'Water supply cut by 30% in several parts of Delhi due to shortage.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Scarcity'
  },
  {
    title: 'NASA Launches Mars Rover 2025',
    description: 'New rover aims to collect rock samples and search for ancient life.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Science'
  },
  {
    title: 'Google Releases AI that Can Code Websites',
    description: 'Google’s Gemini AI now supports full web development.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Technology'
  },
  {
    title: 'Students Top NEET 2025 with 720 Marks',
    description: '3 students from Telangana get perfect scores in NEET.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Education'
  },
  {
    title: 'Rain Forecast in Mumbai for Next 5 Days',
    description: 'IMD warns of heavy rainfall and possible waterlogging.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Current News'
  },
  {
    title: 'Chandrayaan-4 Prepares for Moon Base Test',
    description: 'ISRO to test reusable landers in upcoming Chandrayaan-4 mission.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Science'
  },
  {
    title: 'NASA Detects Possible Signs of Life on Europa',
    description: 'Water plumes suggest presence of microbial life under ice crust.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Science'
  },
  {
    title: 'Australia Defeats India in Women’s Cricket Final',
    description: 'Close match ends with Australia taking home the trophy.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Cricket'
  },
  {
    title: 'AI to Detect Cancer Early with Just Blood Sample',
    description: 'Startup claims 92% accuracy in early-stage cancer detection.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Technology'
  },
  {
    title: 'Google Fires 50 Employees Over AI Ethics Leak',
    description: 'Internal conflict over AI ethics intensifies.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Technology'
  },
  {
    title: 'India Launches World’s Largest Solar Park',
    description: 'Mega renewable energy project inaugurated in Gujarat.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Current News'
  },
  {
    title: 'UN Declares Global Water Emergency',
    description: '42% of the world facing fresh water shortage.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Scarcity'
  },
  {
    title: 'Schools Closed Due to Heatwave in Rajasthan',
    description: 'Temperatures reach 49°C, students to get online classes.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Education'
  },
  {
    title: 'Miss World 2026 Will Be Held in India',
    description: 'Delhi chosen as the official host for global pageant.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Events'
  },
  {
    title: 'Young Innovator Wins Global AI Hackathon',
    description: '17-year-old builds AI to help farmers predict rain.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Technology'
  },
  {
    title: 'Water Mafia Busted in Mumbai',
    description: 'Illegal tanker business uncovered in suburban areas.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Scarcity'
  },
  {
    title: 'India Signs Defence Deal with France',
    description: 'New fighter jets and submarine tech included.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'War'
  },
  {
    title: 'UPSC Results 2025 Declared: Women Top Charts',
    description: 'Over 8 out of top 10 rankers are women this year.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Education'
  },
  {
    title: 'BCCI Announces New Domestic T20 League',
    description: 'Focus on young Indian talent from rural districts.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Cricket'
  },
  {
    title: 'AI Generates Bollywood Songs with Just Prompts',
    description: 'New tool creates lyrics, beats, and vocals automatically.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Technology'
  },
  {
    title: 'Floods Displace Thousands in Assam',
    description: 'Brahmaputra overflow affects 6 lakh people.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Current News'
  },
  {
    title: 'MIT Discovers New Type of Energy Storage',
    description: 'Cheaper, longer-lasting batteries could power future.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Science'
  },
  {
    title: 'School Girl from AP Wins Intel Science Award',
    description: 'Her project on river water purification won global praise.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Education'
  },
  {
    title: 'UNICEF Declares Yemen Crisis a Famine',
    description: 'Children under 5 most affected by malnutrition.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'War'
  },
  {
    title: 'New Coach Announced for Team India',
    description: 'Rahul Dravid steps down; new era begins.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Cricket'
  },
  {
    title: 'Water ATMs Launched in Rural Karnataka',
    description: 'Villagers get clean water using QR code machines.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Scarcity'
  },
  {
    title: 'Hyderabad Students Create Mars Drone',
    description: 'Low-cost model tested in desert climate.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Science'
  },
  {
    title: 'India Bans Facial Recognition in Schools',
    description: 'Govt cites privacy violations and student safety.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Technology'
  },
  {
    title: 'Miss Japan Resigns Over Dual Citizenship Clash',
    description: 'Debate sparks over identity and global representation.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Events'
  },
  {
    title: 'Kashmir Conflict Intensifies Again',
    description: 'Heavy firing reported along LoC.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'War'
  },
  {
    title: 'World Youth Summit Hosted in Dubai',
    description: 'Leaders call for climate and education reforms.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Events'
  },
  {
    title: 'Amazon Rainforest Fires Break New Records',
    description: 'Environmentalists demand urgent action.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Current News'
  },
  {
    title: 'India Introduces Coding as Subject in Class 5',
    description: 'NEP 2025 includes computer logic for primary kids.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Education'
  },
  {
    title: 'ICC Proposes 5-Day Women’s Test Matches',
    description: 'Historic rule change expected in next series.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Cricket'
  },
  {
    title: 'Global Students Join Virtual Science Olympiad',
    description: 'Over 90 countries participate in online contests.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Education'
  },
  {
    title: 'AI Tool Translates Sign Language in Real-Time',
    description: 'Breakthrough for deaf and mute communication.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Technology'
  },
  {
    title: 'Miss World 2025 Wins for Climate Activism',
    description: 'She pledges to plant 1 million trees across Asia.',
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Events'
  },
];
export default dummyNews;

