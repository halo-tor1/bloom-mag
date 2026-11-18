// Edit the text and photos for everything on the site here.
// To add a photo: drop the file into the public/images folder and use the same file name below
// (for example "images/crew-it-1.jpg"). Until a file exists, a "Photo coming soon" box is shown instead.

export const issueLabel = 'Autumn Issue 2026'

export const teams = [
  {
    id: 'editorial',
    name: 'Editorial Team',
    summary: 'Plans each issue, edits every story, and decides what goes to print.',
    members: [
      {
        name: 'Student Name',
        role: 'Editor-in-Chief',
        image: 'images/crew-editorial-1.jpg',
        bio: 'Leads the team, sets the issue theme, and makes sure every story is ready on time.',
      },
      {
        name: 'Student Name',
        role: 'Deputy Editor',
        image: 'images/crew-editorial-2.jpg',
        bio: 'Checks every article for accuracy and helps writers shape their stories.',
      },
      {
        name: 'Student Name',
        role: 'Proofreader',
        image: 'images/crew-editorial-3.jpg',
        bio: 'Catches the last errors before anything is published.',
      },
    ],
  },
  {
    id: 'news',
    name: 'News Crew',
    summary: 'Reports on school news, events, and the stories students want to hear first.',
    members: [
      {
        name: 'Student Name',
        role: 'News Editor',
        image: 'images/crew-news-1.jpg',
        bio: 'Chooses which news stories to cover and keeps the reporting team on track.',
      },
      {
        name: 'Student Name',
        role: 'Senior Reporter',
        image: 'images/crew-news-2.jpg',
        bio: 'Covers school events and breaking news with fast, accurate reporting.',
      },
      {
        name: 'Student Name',
        role: 'Interviewer',
        image: 'images/crew-news-3.jpg',
        bio: 'Speaks with teachers, students, and guests to bring their voices to the page.',
      },
    ],
  },
  {
    id: 'media',
    name: 'Media Team',
    summary: 'Captures school life through photos, video, and design.',
    members: [
      {
        name: 'Student Name',
        role: 'Lead Photographer',
        image: 'images/crew-media-1.jpg',
        bio: 'Shoots events across the school and organises the photo archive.',
      },
      {
        name: 'Student Name',
        role: 'Videographer',
        image: 'images/crew-media-2.jpg',
        bio: 'Films and edits short videos for the magazine and school channels.',
      },
      {
        name: 'Student Name',
        role: 'Graphic Designer',
        image: 'images/crew-media-3.jpg',
        bio: 'Designs the covers, layouts, and graphics that make each issue stand out.',
      },
    ],
  },
  {
    id: 'it',
    name: 'IT Team',
    summary: 'Keeps the website, devices, and online tools running smoothly for everyone.',
    members: [
      {
        name: 'Student Name',
        role: 'IT Lead',
        image: 'images/crew-it-1.jpg',
        bio: 'Oversees the website and makes sure the magazine is always online.',
      },
      {
        name: 'Student Name',
        role: 'Web Developer',
        image: 'images/crew-it-2.jpg',
        bio: 'Builds and updates the magazine pages, galleries, and interactive features.',
      },
      {
        name: 'Student Name',
        role: 'Systems Support',
        image: 'images/crew-it-3.jpg',
        bio: 'Looks after devices, accounts, and the tools the crew uses every day.',
      },
    ],
  },
]

export const articles = [
  {
    id: 'autumn-fair',
    featured: true,
    title: 'Autumn Fair Brings the Whole School Together',
    category: 'News',
    author: 'Student Reporter',
    date: '2026-10-18',
    image: 'images/autumn-fair.jpg',
    excerpt: 'Families, teachers, and students filled the courtyard for a day of food, games, and music.',
    body: [
      'This year the Autumn Fair drew the biggest crowd in school history. Booths lined the courtyard, and the smell of fresh baking drifted across the whole campus.',
      'Each class ran a stall, from the lemonade stand to the face-painting corner. Proceeds will go toward the new library reading corner.',
    ],
  },
  {
    id: 'robotics-win',
    title: 'Inside the Robotics Club Winning Build',
    category: 'Features',
    author: 'Maya Chen',
    date: '2026-10-09',
    image: 'images/robotics.jpg',
    excerpt: 'Six students spent three months designing a robot that took first place at the regional contest.',
    body: [
      'The team started with a simple idea: build a robot that could sort recycling on its own. Early prototypes failed often, but every failure taught them something new.',
      'By the final weekend, their robot sorted every item correctly and earned first place. The club is already planning next year\'s build.',
    ],
  },
  {
    id: 'regional-final',
    title: 'Our Team Wins the Regional Final',
    category: 'Sports',
    author: 'Daniel Okafor',
    date: '2026-09-27',
    image: 'images/sports-final.jpg',
    excerpt: 'A late goal sealed a 2-1 win and sent the school crowd onto the pitch.',
    body: [
      'With only minutes left, the score was tied. A pass from midfield found our captain, who slotted the winning goal into the corner.',
      'Coaches say the win came from months of early training sessions. The team now heads to the national qualifiers in December.',
    ],
  },
  {
    id: 'student-art-hall',
    title: 'Student Art Takes Over the Main Hall',
    category: 'Arts',
    author: 'Priya Nair',
    date: '2026-09-14',
    image: 'images/art-hall.jpg',
    excerpt: 'Paintings, sculptures, and photographs from every year group are on display until the end of term.',
    body: [
      'Walking into the main hall now feels like stepping into a gallery. Every wall shows work from students in every year group.',
      'The exhibition runs until the end of term, and visitors are invited to vote for their favourite piece.',
    ],
  },
  {
    id: 'homework-opinion',
    title: 'Why Homework Should Get One Day Off',
    category: 'Opinion',
    author: 'Lucas Brandt',
    date: '2026-08-30',
    image: 'images/homework.jpg',
    excerpt: 'A weekly break from homework could help students rest, focus, and enjoy their weekends more.',
    body: [
      'Most students already spend long evenings on assignments. Adding a full day of homework on the weekend leaves little room to recharge.',
      'A single homework-free day each week would give students time for sport, family, and hobbies, and many teachers agree it would help learning too.',
    ],
  },
  {
    id: 'library-team',
    title: 'Meet the New Library Team',
    category: 'Features',
    author: 'Aisha Rahman',
    date: '2026-08-21',
    image: 'images/library.jpg',
    excerpt: 'Twelve student volunteers now run the library after school, from book clubs to quiet study sessions.',
    body: [
      'The library has a new team this year. Volunteers help shelve returns, run the book club, and keep the reading corner stocked.',
      'Want to join? Sign-ups are open at the front desk every Tuesday lunchtime.',
    ],
  },
]

export const galleryEvents = [
  {
    id: 'founders-day',
    title: "Founder's Day",
    photos: [
      "images/founder's day/Copy_of_1789127693365.jpg",
      "images/founder's day/Copy_of_1789127693187.jpg",
      "images/founder's day/Copy_of_1789112832858.jpg",
      "images/founder's day/Copy_of_1789112475698.jpg",
      "images/founder's day/Copy_of_1789112475551.jpg",
      "images/founder's day/Copy_of_1789111097553.jpg",
      "images/founder's day/Copy_of_1789111643378.jpg",
      "images/founder's day/Copy_of_1789112364283.jpg",
      "images/founder's day/Copy_of_1789111985015.jpg",
    ],
  },
  {
    id: 'cultural-day',
    title: 'Cultural Day',
    photos: [
      'images/cultural day/Copy_of_1790785901615.jpg',
      'images/cultural day/Copy_of_1790785901574.jpg',
      'images/cultural day/Copy_of_1790785901426.jpg',
      'images/cultural day/Copy_of_1790785901244.jpg',
      'images/cultural day/Copy_of_1790785901017.jpg',
    ],
  },
  {
    id: 'career-day',
    title: 'Career Day',
    photos: [
      'images/career day/Copy_of_IMG_20261106_101820.jpg',
      'images/career day/Copy_of_IMG_20261106_102909.jpg',
      'images/career day/Copy_of_IMG_20261106_103423.jpg',
      'images/career day/Copy_of_IMG_20261106_103819.jpg',
      'images/career day/Copy_of_IMG_20261106_104000.jpg',
      'images/career day/Copy_of_IMG_20261106_104610.jpg',
      'images/career day/Copy_of_IMG_20261106_111332.jpg',
      'images/career day/Copy_of_IMG_20261106_112819.jpg',
      'images/career day/Copy_of_IMG_20261106_114508.jpg',
      'images/career day/Copy_of_IMG_20261106_122807.jpg',
      'images/career day/Copy_of_IMG_20261106_122913.jpg',
      'images/career day/Copy_of_IMG_20261106_123436.jpg',
      'images/career day/Copy_of_IMG_20261106_123651.jpg',
      'images/career day/Copy_of_IMG_20261106_124625.jpg',
    ],
  },
]

export const entrancePhoto = 'images/entrance.jpg'
