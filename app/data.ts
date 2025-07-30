type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Frost Fest 2025',
    description:
      'Music Fest at Stanford featuring Doechii, Zack Fox, Ray Vaughn, and Zacari.',
    link: 'https://stanforddaily.com/2025/04/14/review-doechii-lights-up-frost-amphitheater-at-frost-fest-2025/',
    image: 'https://cdn-images.dzcdn.net/images/artist/b2ee54b63e3a3485b6aed609fd320521/1900x1900-000000-80-0-0.jpg',
    id: 'project1',
  },
  {
    name: 'Black Fest 2025',
    description:
      'Stanford Black Fest featuring Vince Staples and TiaCorine.',
    link: 'https://live.stanford.edu/events/25-frost/blackfest/',
    image: 'https://images.squarespace-cdn.com/content/v1/58519102725e25cc99d17697/3da4953e-9b95-47ab-acd5-5c116eb44dcd/Screenshot+2022-04-20+at+09.33.07.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Skywalk',
    title: 'Data Science Intern',
    start: '2025',
    end: 'Present',
    link: 'https://skywalk.ai',
    id: 'work1',
  },
  {
    company: 'Stanford Concert Network',
    title: 'Co-Director, Talent Coordinator',
    start: '2024',
    end: 'Present',
    link: 'https://scn.stanford.edu',
    id: 'work2',
  },
  {
    company: 'Stanford University',
    title: 'CS106A/B Teaching Assistant',
    start: '2023',
    end: 'Present',
    link: 'https://cs106a.stanford.edu',
    id: 'work3',
  },
  {
    company: 'The Openproof Project',
    title: 'Full Stack Developer Intern',
    start: '2023',
    end: '2023',
    link: 'https://openproof.gradegrinder.net',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Do You Deserve to Be Here? - Anonymous',
    description: 'A thought-provoking essay on finding belonging.',
    link: 'https://essays.wtf/meritocracy',
    uid: 'blog-1',
  },

  {
    title: 'Angel of the Night (1979) - Angela Bofill',
    description: 'Iconic.',
    link: 'https://music.apple.com/us/album/angel-of-the-night/282859756',
    uid: 'blog-2',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/austinkonig',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/austinkonig',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/akfourtyfive',
  },
  {
    label: 'Resume',
    link: 'https://drive.google.com/file/d/18_lM0c6nyBB8ZA8SvAW0kyCDzZk6XSQV/view?usp=sharing',
  },
]

export const EMAIL = 'akonig45@stanford.edu'
