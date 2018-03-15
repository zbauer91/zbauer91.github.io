var lifeStory = {
  navBar: {
    linkedIn: {
      link: 'https://www.linkedin.com/in/zachbauer',
      icon: 'fab fa-linkedin',
      text: ' LinkedIn'
    },
    resume: {
      link: 'http://pixelrabbit.me/assets/resume.pdf',
      icon: 'fas fa-file-alt',
      text: ' Resume'
    },
    blog: {
      link: 'http://pixelrabbit.me/jekyll-blog',
      icon: 'fas fa-rss-square',
      text: ' Blog'
    },
    gitHub: {
      link: 'https://www.github.com/zbauer91',
      icon: 'fab fa-github',
      text: ' GitHub'
    },
    email: {
      link: 'mailto:zbauer91@gmail.com',
      icon: 'fas fa-envelope',
      text: ' Email'
    },
    phone: {
      link: 'tel:16145193442',
      icon: 'fas fa-phone',
      text: ' Phone'
    }
  },
  landing: {
    header: 'Zach Bauer',
    subHeader: '&lt;Classy Web Developer/&gt;'
  },
  about: {
    personalPhoto: './assets/images/photo.jpg',
    photoAlt: "A photo of Zach's cute face!",
    tagline: 'An expert at turning caffeine and lack of sleep into code',
    brandStatement:
      "I'm always on the lookout for new, creative ways to solve problems. Whether that be in the work I do professionally, or at home, I'm a practiced MacGyver of programming."
  },
  skills: [
    'React.js',
    'Vue.js',
    'HTML5',
    'CSS3',
    'Materialize',
    'Bootstrap',
    'Handlebars.js',
    'Node.js',
    'Express.js',
    'Axios',
    'Ruby',
    'Rails',
    'Devise Auth',
    'MongoDB',
    'PostgreSQL',
    'SAP HANA',
    'Markdown',
    'Java',
    'Python 3',
    'Whitespace'
  ],
  projects: {
    hanoi: {
      title: 'Tower of Hanoi',
      description:
        'A non-responsive, vanilla HTML, CSS and JavaScript clone of the popular Tower of Hanoi. The game can auto-solve itself inside the dev console. Best played on a full-size computer.',
      deploy: {
        link: 'http://pixelrabbit.me/Tower-of-Hanoi/',
        title: 'Game'
      },
      back: {
        link: 'https://github.com/zbauer91/Tower-of-Hanoi',
        title: 'GitHub Repo'
      }
    },
    motto: {
      title: 'MottoTrack',
      description:
        'Vue.js + Vuetify application to CRUD entries into a remote database. Concepts of Vue.js and implementation achieved in four days.',
      deploy: {
        link: 'http://pixelrabbit.me/MottoTrack/#/',
        title: 'Application'
      },
      front: {
        link: 'https://github.com/zbauer91/MottoTrack',
        title: 'Frontend Repo'
      },
      back: {
        link: 'https://github.com/zbauer91/project-two-api',
        title: 'Backend Repo'
      }
    },
    barber: {
      title: 'BarberHub DC',
      description:
        'A review aggregator to help DC find a quality barber. It is a full-stack MERN application with an express API that connects to Foursquare and Google Maps. It was written as a group project with two other General Assembly students.',
      deploy: {
        link: 'http://pixelrabbit.me/barber-find-dc/',
        title: 'Application'
      },
      front: {
        link: 'https://github.com/zbauer91/barber-find-dc',
        title: 'Frontend Repo'
      },
      back: {
        link: 'https://github.com/zbauer91/barber-find-api',
        title: 'Backend Repo'
      }
    },
    jekyll: {
      title: 'Jekyll Blog',
      description:
        "A Jekyll Blog themed with the latest Bootstrap 4. It's intention is to be a showcase for all of the things I have and will continue to learn outside the curriculum of General Assembly.",
      deploy: {
        link: 'http://pixelrabbit.me/jekyll-blog',
        title: 'Jekyll Blog'
      },
      front: {
        link: 'https://github.com/zbauer91/jekyll-blog',
        title: 'Blog Repo'
      }
    }
  }
}
