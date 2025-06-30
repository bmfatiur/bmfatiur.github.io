// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A curated collection of my technical and creative explorations — spanning academic research, practical applications, and personal experiments. Each project reflects not only what I&#39;ve built, but also how I think, structure, and solve. From computer vision prototypes and game development to web platforms and design systems, this is where ideas are forged into function.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Welcome to my repositories page! Here, you&#39;ll find a curated list of projects from my GitHub profile, showcasing my journey and interests in the field of Computer Science and Engineering. Each repository reflects my passion for exploring diverse domains—from building interactive applications and tackling machine learning challenges to delving into the intricacies of computer graphics, digital signal processing, and microcontroller interfacing.Whether it&#39;s the development of practical web application like &quot;Padmaoil,&quot; innovative experiments like &quot;Sleep Disorder Prediction using ML,&quot; or explorations into foundational subjects like data structures and operating systems, these projects highlight my `commitment of learning`, `problem-solving`, and creating meaningful solutions. Dive in to discover how these repositories reflect my growth as a developer and researcher, with a strong focus on advancing my expertise in `computer vision` and beyond.Feel free to explore and be inspired by the diverse range of projects that celebrate both technical depth and creative innovation!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A snapshot of my academic path, technical expertise, and hands-on work in `computer vision`, `deep learning`, and `software development`—showcasing projects, achievements, real-world experience, and active leadership in co-curricular communities like `debate`, `student welfare`, and `campus organizations`.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-linking-inline-news-to-full-blog-posts-in-al-folio-️",
        
          title: "Linking Inline News to Full Blog Posts in al-folio ✍️",
        
        description: "A simple guide to interconnecting your inline announcements and full-length blog content using al-folio.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Linking-Inline-News-to-Full-Blog-Posts-in-al-folio";
          
        },
      },{id: "post-️-how-i-structure-projects-on-my-al-folio-website",
        
          title: "🛠️ How I Structure Projects on My Al-Folio Website",
        
        description: "A behind-the-scenes look at how I organize and present my projects using al-folio",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/How-I-Structure-Projects-on-My-Al-Folio-Website";
          
        },
      },{id: "post-️-captioned-amp-uncaptioned-sliders-in-al-folio-website-posts",
        
          title: "🖼️ Captioned &amp; Uncaptioned Sliders in Al-Folio Website Posts",
        
        description: "A practical comparison of slideshow layouts in al-folio using custom HTML + CSS + JS",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Captioned-Uncaptioned-Sliders-in-Al-Folio-Website-Posts";
          
        },
      },{id: "post-from-silence-to-synergy-my-journey-with-solver-green",
        
          title: "From Silence to Synergy: My Journey with Solver Green 🌱",
        
        description: "A reflective farewell to Solver Green and its impact on my leadership, community building, and undergraduate journey at PUST",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/From-Silence-to-Synergy-My-Journey-with-Solver-Green";
          
        },
      },{id: "post-a-journey-etched-in-bonds-and-milestones",
        
          title: "🎓 A Journey Etched in Bonds and Milestones",
        
        description: "A heartfelt reflection on my journey through CSE at PUST—filled with bonds, resilience, and gratitude",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Journey-Etched-in-Bonds-and-Milestones";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-champion-team-pustds-freshers-league-2019",
          title: '🏆 Champion Team – PUSTDS Freshers’ League 2019',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/PUSTDS-Freshers-League-2019/";
            },},{id: "news-tab-director-cdc-district-intra-1-0-debate-competition",
          title: '💻 Tab Director – CDC District Intra 1.0 Debate Competition',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/CDC-District-Intra-1.0-Debate-Competition/";
            },},{id: "news-honourable-judge-inter-school-debate-competition-2022",
          title: '🎤 Honourable Judge – Inter School Debate Competition 2022',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Inter-School-Debate-Competition-2022/";
            },},{id: "news-honored-at-39-bridging-the-technical-gap-with-edupy-39",
          title: 'Honored at &amp;#39;Bridging the Technical Gap with EDUPY&amp;#39; 🌟',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Bridging-the-Technical-Gap-with-EDUPY/";
            },},{id: "news-a-journey-etched-in-bonds-and-milestones",
          title: '🎓 A Journey Etched in Bonds and Milestones',
          description: "",
          section: "News",},{id: "news-from-silence-to-synergy-my-journey-with-solver-green",
          title: 'From Silence to Synergy: My Journey with Solver Green 🌱',
          description: "",
          section: "News",},{id: "news-aal-izz-well-a-judging-lens-on-fresh-sparks-of-debate",
          title: '🔥 Aal Izz Well — A Judging Lens on Fresh Sparks of Debate...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Aal-Izz-Well/";
            },},{id: "projects-designing-a-scalable-e-commerce-platform-for-padma-oil-mill-ltd",
          title: '🛒 Designing a Scalable E-Commerce Platform for Padma Oil Mill Ltd',
          description: "Web-based Laravel e-commerce system with robust admin and user interfaces",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Designing-a-Scalable-E-Commerce-Platform/";
            },},{id: "projects-dino-dash-a-retro-runner-in-modern-c",
          title: '🦖 Dino Dash: A Retro Runner in Modern C++',
          description: "A 2D Chrome-inspired endless runner combining legacy BGI graphics and modern OpenGL in C++.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Dino-Dash-A-Retro-Runner-in-Modern-C++/";
            },},{id: "projects-️-real-time-tabulation-and-messaging-software-for-debate-tournaments",
          title: '🗂️ Real-Time Tabulation and Messaging Software for Debate Tournaments',
          description: "Desktop system for AP &amp; BP debate tabbing and judge coordination",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Real-Time-Tabulation-and-Messaging-Software-for-Debate-Tournaments/";
            },},{id: "projects-sleepwell-a-machine-learning-web-app-for-early-detection-of-sleep-disorders",
          title: '🧠 SleepWell: A Machine Learning Web App for Early Detection of Sleep Disorders...',
          description: "ML-based sleep disorder detection app",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SleepWell-A-Machine-Learning-Web-App-for-Early-Detection-of-Sleep-Disorders/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%6D%66%72.%63%73%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/bmfatiur", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bmfatiur", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bmfatiur", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-2447-3518", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/bmfatiur", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/8801521514175", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
