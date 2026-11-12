window.SITE_CONFIG = {
  "_note": "Default content for the whole site. Keep this file strict JSON after 'window.SITE_CONFIG =' (double quotes, no comments, no trailing commas) because app/cms.php reads it on the server too. Text markup: *word* = orange italic, \\n = line break.",

  "site": {
    "name": "CRETECH",
    "tagline": "DIGITAL SOLUTIONS",
    "logo": "assets/images/logo.svg",
    "logoLight": "assets/images/logo-white.svg",
    "email": "hello@cretech.in",
    "phone": "+91 98765 43210",
    "location": "Noida, India",
    "footerTagline": "Technology • Creativity • Growth",
    "footerText": "Technical and digital services for individuals, graduates, startups and businesses. From website and app development to design and digital marketing, we help turn ideas into practical work.",
    "_socialsNote": "Footer social icons. Put the real profile address in url; while url is \"#\" the icon shows without a link.",
    "socials": [
      { "label": "LinkedIn", "icon": "linkedin", "url": "#" },
      { "label": "Facebook", "icon": "facebook", "url": "#" },
      { "label": "Instagram", "icon": "instagram", "url": "#" },
      { "label": "X", "icon": "x", "url": "#" }
    ]
  },

  "nav": [
    { "label": "Home", "href": "", "page": "home" },
    { "label": "About", "href": "about", "page": "about" },
    { "label": "Services", "href": "services", "page": "services", "dropdown": "services" },
    { "label": "Work", "href": "services", "page": "work" },
    { "label": "Process", "href": "process", "page": "process" },
    { "label": "Contact", "href": "contact", "page": "contact" }
  ],
  "headerCta": { "label": "Let’s Talk", "href": "contact" },

  "footerLinks": {
    "quick": [
      { "label": "Home", "href": "" },
      { "label": "About Us", "href": "about" },
      { "label": "Services", "href": "services" },
      { "label": "Our Process", "href": "process" },
      { "label": "Contact Us", "href": "contact" }
    ],
    "services": [
      { "label": "Website Development", "href": "services/website-development" },
      { "label": "App Development", "href": "services/app-development" },
      { "label": "UI/UX Design", "href": "services/ui-ux-design" },
      { "label": "SEO Services", "href": "services/seo-services" },
      { "label": "Google Ads", "href": "services/google-ads-services" },
      { "label": "Social Media Marketing", "href": "services/social-media-marketing" },
      { "label": "Email Creation", "href": "services/email-creation-setup" },
      { "label": "Content & Graphic Design", "href": "services/graphic-design-creative-content" }
    ],
    "legal": [
      { "label": "Privacy Policy", "href": "privacy-policy" },
      { "label": "Terms & Conditions", "href": "terms-and-conditions" },
      { "label": "Disclaimer", "href": "disclaimer" }
    ]
  },

  "seo": {
    "siteName": "CRETECH",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "pages": {
      "home": { "title": "CRETECH | Technology, Creativity & Growth", "description": "CRETECH offers website development, app development, UI/UX design, SEO, digital marketing and content services for individuals, startups and businesses." },
      "about": { "title": "About CRETECH", "description": "CRETECH brings website development, design and digital services together to help people and businesses build a clear and useful online presence." },
      "services": { "title": "Our Services | CRETECH", "description": "Website development, app development, UI/UX design, SEO, Google Ads, social media marketing, email setup, content writing and graphic design under one roof." },
      "process": { "title": "Our Working Process | CRETECH", "description": "From your first idea to final delivery: see the seven clear stages CRETECH follows on every project." },
      "contact": { "title": "Contact CRETECH", "description": "Have an idea? Tell CRETECH about your project and we will get back to you." },
      "privacy-policy": { "title": "Privacy Policy | CRETECH", "description": "How CRETECH handles information shared through this website." },
      "terms-and-conditions": { "title": "Terms & Conditions | CRETECH", "description": "Terms for using the CRETECH website and services." },
      "disclaimer": { "title": "Disclaimer | CRETECH", "description": "Disclaimer for the CRETECH website." },
      "not-found": { "title": "Page Not Found | CRETECH", "description": "The page you are looking for could not be found." }
    }
  },

  "services": [
    {
      "slug": "website-development",
      "title": "Website Development",
      "icon": "▣",
      "short": "Responsive, user-friendly and functional websites.",
      "summary": "Business websites, portfolio websites, landing pages and custom web solutions.",
      "image": "photo-1498050108023-c5249f4df085",
      "intro": "A website is often the first place people learn about you. We build websites that are clear, responsive and easy to manage, based on what your project needs.",
      "features": ["Business and corporate websites", "Personal and portfolio websites", "Landing pages for campaigns and launches", "Responsive layouts for mobile, tablet and desktop", "Custom web solutions for specific requirements"]
    },
    {
      "slug": "app-development",
      "title": "App Development",
      "icon": "▯",
      "short": "Mobile applications with useful features and smooth performance.",
      "summary": "Mobile-friendly application experiences and custom application development.",
      "image": "photo-1512941937669-90a1b58e7e9c",
      "intro": "We plan and develop applications around the features your users actually need, keeping the experience simple and the performance smooth.",
      "features": ["Requirement discussion and feature planning", "Mobile-friendly application screens", "Custom application development", "Testing before delivery", "Support for agreed refinements"]
    },
    {
      "slug": "ui-ux-design",
      "title": "UI/UX Design",
      "icon": "⚒",
      "short": "Clean, attractive and easy-to-use interfaces.",
      "summary": "User-friendly layouts, wireframes and visual interface design.",
      "image": "photo-1586717791821-3f44a563fa4c",
      "intro": "Good design helps people find what they need without effort. We design layouts and interfaces that look clean and are easy to use.",
      "features": ["User flows and page structure", "Wireframes", "Visual interface design", "Design for mobile and desktop screens", "Design handover for development"]
    },
    {
      "slug": "seo-services",
      "title": "SEO Services",
      "icon": "⌕",
      "short": "Improve visibility and get quality traffic.",
      "summary": "On-page SEO, technical basics, content optimisation and website visibility support.",
      "image": "photo-1460925895917-afdab827c52f",
      "intro": "SEO helps the right people find your website. We work on the on-page and technical basics that support better visibility in search results.",
      "features": ["On-page SEO for titles, headings and descriptions", "Technical SEO basics", "Content optimisation", "Keyword research for your services", "Website visibility support"]
    },
    {
      "slug": "google-ads-services",
      "title": "Google Ads Services",
      "icon": "◉",
      "short": "Targeted campaigns to reach the right audience.",
      "summary": "Campaign setup and audience-focused advertising support.",
      "image": "photo-1551288049-bebda4e38f71",
      "intro": "Google Ads can put your business in front of people who are already searching for what you offer. We help set up campaigns around your goals and budget.",
      "features": ["Campaign planning based on your goals", "Campaign and ad setup", "Audience and keyword targeting", "Budget-focused approach", "Ongoing advertising support"]
    },
    {
      "slug": "social-media-marketing",
      "title": "Social Media Marketing",
      "icon": "◈",
      "short": "Build your brand and engage your audience.",
      "summary": "Social media content planning, creative posts and brand communication.",
      "image": "photo-1611162617474-5b21e879e113",
      "intro": "Social media is where many people meet your brand. We help you plan content and communicate consistently with your audience.",
      "features": ["Social media content planning", "Creative posts", "Brand communication", "Profile setup support", "Consistent posting approach"]
    },
    {
      "slug": "email-creation-setup",
      "title": "Email Creation & Setup",
      "icon": "✉",
      "short": "Create professional email accounts and manage business communication.",
      "summary": "Professional business email creation and setup assistance.",
      "image": "photo-1557200134-90327ee9fafa",
      "intro": "A professional email address on your own domain builds trust. We help you create and set up business email accounts.",
      "features": ["Business email on your own domain", "Account creation and setup", "Setup on phone and computer", "Basic email configuration", "Setup assistance and guidance"]
    },
    {
      "slug": "content-writing",
      "title": "Content Writing",
      "icon": "▤",
      "short": "Clear, engaging and SEO-friendly content.",
      "summary": "Website pages, service descriptions, blogs and SEO-friendly content.",
      "image": "photo-1455390582262-044cdead277a",
      "intro": "Clear words help visitors understand what you do. We write content for your website and marketing that is easy to read and search-friendly.",
      "features": ["Website page content", "Service descriptions", "Blog articles", "SEO-friendly writing", "Editing and proofreading"]
    },
    {
      "slug": "graphic-design-creative-content",
      "title": "Graphic Design & Creative Content",
      "icon": "▧",
      "short": "Banners, social media creatives and website visuals for your brand.",
      "summary": "Website banners, social media creatives and digital visual assets.",
      "image": "photo-1558655146-d09347e92766",
      "intro": "Visuals shape how people remember your brand. We create graphics that fit your brand and work across your website and social media.",
      "features": ["Website banners", "Social media creatives", "Digital visual assets", "Graphics that match your brand style", "Files ready for web and social use"]
    }
  ],

  "home": {
    "_heroNote": "heroStats show on every slide (a slide can override them with its own \"stats\"). textTone \"light\" = white text, for dark photos.",
    "heroStats": [
      { "value": "7+", "label": "Service Areas" },
      { "value": "100+", "label": "Projects Delivered" },
      { "value": "50+", "label": "Happy Clients" }
    ],
    "heroSlides": [
      {
        "label": "Digital Solutions",
        "titleLines": ["Your Ideas", "Our Digital"],
        "script": "Magic",
        "intro": "Websites, Content, Design, SEO and Digital Marketing — everything your business needs to grow, at one place.",
        "primary": { "label": "Start Your Project", "href": "contact" },
        "secondary": { "label": "Explore Services", "href": "services" },
        "image": "assets/images/hero/hero-1.jpg",
        "imageSmall": "assets/images/hero/hero-1-mobile.jpg",
        "imageAlt": "CRETECH services — website development, UI/UX design, SEO, content writing, Google Ads and graphics — around a smiling young woman working on a laptop",
        "focus": "84% center"
      },
      {
        "label": "Web · Apps · Marketing",
        "titleLines": ["Our Technology.", "Real Business"],
        "script": "Growth.",
        "intro": "From website and app development to UI/UX design, SEO, digital marketing and content creation — CRETECH helps startups, individuals and businesses turn ideas into powerful online brands.",
        "primary": { "label": "Start Your Project", "href": "contact" },
        "secondary": { "label": "Explore Services", "href": "services" },
        "image": "assets/images/hero/hero-2.jpg",
        "imageSmall": "assets/images/hero/hero-2-mobile.jpg",
        "imageAlt": "Young developer with headphones working at a desk, with glowing panels for website development, app development, UI/UX design, code and growth",
        "focus": "62% center",
        "zoomFrom": "right center"
      },
      {
        "label": "Digital Marketing • SEO • Brand Growth",
        "titleLines": ["Make Your Brand Seen.", "Make Your Business"],
        "script": "Grow.",
        "intro": "From SEO and social media to content creation and paid campaigns — CRETECH helps your business reach the right audience, build online visibility and turn attention into real growth.",
        "primary": { "label": "Grow Your Business", "href": "contact" },
        "secondary": { "label": "Explore Marketing Services", "href": "services" },
        "image": "assets/images/hero/hero-3.jpg",
        "imageSmall": "assets/images/hero/hero-3-mobile.jpg",
        "imageAlt": "Glass globe with a rising orange growth arrow, a target, an SEO magnifying glass and Google, Instagram, Facebook and YouTube icons",
        "focus": "76% center"
      }
    ],
    "servicesSection": {
      "title": "What We Can Do *for You*",
      "text": "From building websites and mobile applications to creating your online presence, we provide technical and digital services under one roof.",
      "button": { "label": "View All Services", "href": "services" },
      "_cardsNote": "Homepage cards, in this order. slug = a service from \"services\". title / text override that service's title and short text on this card (\\n = line break).",
      "cards": [
        { "slug": "website-development", "icon": "code", "image": "assets/images/services/website-development.jpg", "title": "Website\nDevelopment", "text": "Responsive, secure and high-performance websites." },
        { "slug": "app-development", "icon": "phone", "image": "assets/images/services/app-development.jpg", "title": "App\nDevelopment" },
        { "slug": "ui-ux-design", "icon": "layers", "image": "assets/images/services/ui-ux-design.jpg", "title": "UI/UX\nDesign" },
        { "slug": "seo-services", "icon": "search", "image": "assets/images/services/seo-services.jpg", "title": "SEO\nServices" },
        { "slug": "google-ads-services", "icon": "megaphone", "image": "assets/images/services/google-ads-services.jpg", "title": "Google Ads\nServices", "text": "Targeted ad campaigns to reach the right audience." },
        { "slug": "social-media-marketing", "icon": "share", "image": "assets/images/services/social-media-marketing.jpg", "title": "Social Media\nMarketing" },
        { "slug": "content-writing", "icon": "document", "image": "assets/images/services/content-writing.jpg", "title": "Content\nWriting" },
        { "slug": "graphic-design-creative-content", "icon": "image", "image": "assets/images/services/graphic-design-creative-content.jpg", "title": "Graphic Design &\nCreative Content", "text": "Banners, creatives and visuals for your brand." }
      ]
    },
    "journeySection": {
      "_note": "\"For Every Step of Your Journey\". Card and milestone positions are px on the 1672 x 941 desktop canvas (the background image size). photoAt = where the photo starts, in % of the card width. Card icons: graduation, user, rocket, store, building.",
      "background": {
        "image": "assets/images/journey/journey-bg.jpg",
        "imageSmall": "assets/images/journey/journey-bg-mobile.jpg",
        "color": "#FFF4E9",
        "gradientTop": "#FFF4E9"
      },
      "eyebrow": "Services for Everyone",
      "title": "For Every Step\nOf *Your Journey*",
      "paragraphs": [
        "Whether you are starting with an idea, building your career, running a small business or managing an established organisation you can approach CRETECH for the services you need.",
        "We believe good technical and digital services should not be limited to a particular group of people. Our aim is to understand each client’s requirements and suggest suitable services according to their needs and budget."
      ],
      "cards": [
        {
          "icon": "graduation", "title": "For Students &\nGraduates",
          "text": "Build your personal portfolio, showcase your projects, create a professional online identity or discuss your own website and application ideas.",
          "image": "assets/images/journey/students.jpg", "imageAlt": "Smiling student holding an orange notebook",
          "cta": { "label": "Get Started", "href": "contact" },
          "box": { "x": 63, "y": 563, "w": 425, "h": 292 }, "photoAt": 58.6
        },
        {
          "icon": "user", "title": "For Individuals &\nFreelancers",
          "text": "Create a personal website, portfolio, professional email or online presence to present your skills and work.",
          "image": "assets/images/journey/individuals.jpg", "imageAlt": "Freelancer thinking while working on a laptop",
          "cta": { "label": "Get Started", "href": "contact" },
          "box": { "x": 567, "y": 594, "w": 436, "h": 266 }, "photoAt": 52.5
        },
        {
          "icon": "rocket", "title": "For Startups",
          "text": "Turn your ideas into websites, applications and digital platforms that support your business plans.",
          "image": "assets/images/journey/startups.jpg", "imageAlt": "Startup founder smiling at his laptop",
          "cta": { "label": "Get Started", "href": "contact" },
          "box": { "x": 680, "y": 214, "w": 408, "h": 236 }, "photoAt": 48.5
        },
        {
          "icon": "store", "title": "For Small\nBusinesses",
          "text": "Build your online presence, reach potential customers and manage your business through suitable technical and digital services.",
          "image": "assets/images/journey/small-businesses.jpg", "imageAlt": "Small business owner standing in her shop",
          "cta": { "label": "Get Started", "href": "contact" },
          "box": { "x": 1055, "y": 497, "w": 403, "h": 260 }, "photoAt": 57.8
        },
        {
          "icon": "building", "title": "For Companies &\nOrganisations",
          "text": "Get website development, application development, design and digital marketing support according to your project requirements.",
          "image": "assets/images/journey/companies.jpg", "imageAlt": "Modern glass office building",
          "cta": { "label": "Get Started", "href": "contact" },
          "box": { "x": 1221, "y": 139, "w": 399, "h": 267 }, "photoAt": 61
        }
      ],
      "milestones": [
        { "label": "Learn", "x": 547, "y": 606, "side": "right" },
        { "label": "Build", "x": 760, "y": 567, "side": "right" },
        { "label": "Launch", "x": 888, "y": 506, "side": "left" },
        { "label": "Grow", "x": 1239, "y": 457, "side": "left" },
        { "label": "Achieve", "x": 1400, "y": 437, "side": "below" }
      ]
    },
    "buildSection": {
      "_note": "\"What We Build\". Positions are px on the 1671 x 941 desktop canvas (the background image size): box = card, imageBox = the picture inside the card, marker = the numbered circle on the orange path, textWidth (optional) = max width of the description. The path runs from path.start through every marker to path.end.",
      "background": {
        "image": "assets/images/build/build-bg.jpg",
        "imageSmall": "assets/images/build/build-bg-mobile.jpg",
        "color": "#FFF6EE",
        "gradientTop": "#FFF6EE",
        "gradientBottom": "#FFE8D9"
      },
      "eyebrow": "What We Build",
      "title": "Turning Ideas into Working\n*Websites & Applications*",
      "text": "Every idea has a different purpose. We work on different types of websites and applications based on the requirements of each project.",
      "path": {
        "start": [0, 758],
        "end": [1665, 456],
        "colors": ["#FFC93C", "#FF7A00", "#FFB21A", "#FF7A00", "#FFC93C", "#FF7A00"],
        "width": 5,
        "flag": { "x": 1590, "y": 452, "color": "#FF7A00" }
      },
      "cards": [
        {
          "number": "01", "title": "Business &\nCorporate Websites",
          "text": "Professional websites for businesses, companies and service providers.",
          "image": "assets/images/build/business.jpg", "imageAlt": "Modern glass office building",
          "box": { "x": 62, "y": 413, "w": 268, "h": 271 }, "imageBox": { "x": 128, "y": 418, "w": 194, "h": 96 },
          "marker": { "x": 195, "y": 711 }
        },
        {
          "number": "02", "title": "E-commerce\nWebsites",
          "text": "Online shopping platforms where businesses can display and sell their products.",
          "image": "assets/images/build/ecommerce.jpg", "imageAlt": "Shopping cart with product boxes and bags",
          "box": { "x": 370, "y": 340, "w": 263, "h": 262 }, "imageBox": { "x": 436, "y": 341, "w": 162, "h": 81 },
          "marker": { "x": 411, "y": 616 }
        },
        {
          "number": "03", "title": "Personal &\nPortfolio Websites",
          "text": "Websites for individuals, graduates, freelancers and professionals who want to present their work, skills and achievements online.",
          "image": "assets/images/build/portfolio.jpg", "imageAlt": "Laptop showing a portfolio website",
          "box": { "x": 484, "y": 642, "w": 314, "h": 248 }, "imageBox": { "x": 636, "y": 616, "w": 160, "h": 80 },
          "marker": { "x": 584, "y": 636 }
        },
        {
          "number": "04", "title": "Healthcare\nWebsites",
          "text": "Websites for clinics, healthcare providers and medical organisations.",
          "image": "assets/images/build/healthcare.jpg", "imageAlt": "Stethoscope",
          "box": { "x": 686, "y": 253, "w": 265, "h": 279 }, "textWidth": 186, "imageBox": { "x": 752, "y": 255, "w": 172, "h": 92 },
          "marker": { "x": 740, "y": 550 }
        },
        {
          "number": "05", "title": "Education\nWebsites",
          "text": "Websites for educational institutions, training centres and learning platforms.",
          "image": "assets/images/build/education.jpg", "imageAlt": "Graduation cap on a stack of books",
          "box": { "x": 866, "y": 584, "w": 305, "h": 268 }, "imageBox": { "x": 996, "y": 585, "w": 146, "h": 98 },
          "marker": { "x": 922, "y": 587 }
        },
        {
          "number": "06", "title": "Travel &\nReal Estate Websites",
          "text": "Websites for travel businesses, property listings and related services.",
          "image": "assets/images/build/travel.jpg", "imageAlt": "Airplane flying over a modern house",
          "box": { "x": 993, "y": 177, "w": 274, "h": 304 }, "imageBox": { "x": 1062, "y": 186, "w": 194, "h": 106 },
          "marker": { "x": 1061, "y": 499 }
        },
        {
          "number": "07", "title": "Blogs &\nNews Portals",
          "text": "Content-based platforms for publishing articles, news and information.",
          "image": "assets/images/build/blogs.jpg", "imageAlt": "Folded newspaper",
          "box": { "x": 1231, "y": 562, "w": 301, "h": 259 }, "imageBox": { "x": 1322, "y": 576, "w": 172, "h": 87 },
          "marker": { "x": 1284, "y": 543 }
        },
        {
          "number": "08", "title": "Custom Web &\nMobile Applications",
          "text": "Applications developed around specific requirements, features and business needs.",
          "image": "assets/images/build/custom.jpg", "imageAlt": "Laptop showing code",
          "box": { "x": 1318, "y": 132, "w": 273, "h": 301 }, "imageBox": { "x": 1362, "y": 135, "w": 175, "h": 103 },
          "marker": { "x": 1458, "y": 463 }
        }
      ]
    },
    "whySection": {
      "_note": "\"Why Choose CRETECH\". Positions are px on the 1670 x 941 desktop canvas (the background image size): box = glass box, line = SVG path from the box to the centre picture, node = the dot at the box end. titleSize / textSize / textWidth (optional) are px on the same canvas, lineHeight (optional) a multiplier. In box texts \n is a line break on desktop only (phones wrap normally). The checklist words are part of the centre picture; changing them needs a new picture.",
      "background": {
        "image": "assets/images/why/why-bg.jpg",
        "imageSmall": "assets/images/why/why-bg-mobile.jpg",
        "color": "#FFF6EE",
        "gradientTop": "#FFF6EE",
        "gradientBottom": "#FFE8D9"
      },
      "eyebrow": "5. Why Choose CRETECH?",
      "title": "A Practical Approach to *Every Project*",
      "text": "We take time to understand your needs and focus on work that makes sense for your project.\nEvery client has different requirements and we treat each project accordingly.",
      "visual": {
        "image": "assets/images/why/project-folder.jpg",
        "imageAlt": "CRETECH project folder with a Project Approach checklist: Understand, Plan, Develop, Deliver, a growth chart note, a CRETECH mug, a notebook and a pen",
        "checklist": ["Understand", "Plan", "Develop", "Deliver"],
        "box": { "x": 510, "y": 295, "w": 665, "h": 585 }
      },
      "line": { "color": "#FF7A00", "width": 2.4, "node": "#FF8A1E" },
      "boxes": [
        {
          "title": "Direct Communication",
          "text": "Discuss your project directly\nwith our team. Share your ideas,\nask questions and understand\nthe proposed work.",
          "box": { "x": 53, "y": 261, "w": 441, "h": 198 },
          "node": { "x": 497, "y": 352 }, "line": "M497 352C535 352 556 380 566 420C572 446 580 462 596 472"
        },
        {
          "title": "Services Under One Roof",
          "text": "Website development, app\ndevelopment, design, marketing\nand creative services — you can\ndiscuss different requirements\nwith one team.",
          "box": { "x": 53, "y": 477, "w": 441, "h": 194 }, "textSize": 19.4, "lineHeight": 1.1,
          "node": { "x": 497, "y": 553 }, "line": "M497 553C530 553 552 566 570 586C580 597 590 603 604 606"
        },
        {
          "title": "Support for\nDifferent Budgets",
          "text": "Whether you have a small personal\nproject or a larger business requirement,\nwe are open to discussing suitable options.",
          "box": { "x": 53, "y": 686, "w": 441, "h": 190 }, "textSize": 18.2, "lineHeight": 1.22,
          "node": { "x": 497, "y": 757 }, "line": "M497 757C530 757 548 738 560 712C570 690 584 672 612 664"
        },
        {
          "title": "Solutions Based on\nYour Requirements",
          "text": "We do not follow the same approach\nfor every client. Each project is considered\naccording to its purpose, scope and\ntechnical requirements.",
          "box": { "x": 1195, "y": 261, "w": 428, "h": 198 }, "titleSize": 27.5, "textSize": 17.6, "lineHeight": 1.22,
          "node": { "x": 1188, "y": 350 }, "line": "M1188 350C1150 350 1128 372 1114 404C1102 430 1092 446 1076 456"
        },
        {
          "title": "Clear Pricing",
          "text": "We discuss the project cost according\nto the work involved, its complexity\nand your requirements before starting.",
          "box": { "x": 1195, "y": 477, "w": 428, "h": 194 },
          "node": { "x": 1188, "y": 550 }, "line": "M1188 550C1150 550 1120 556 1098 574C1080 589 1062 596 1040 598"
        },
        {
          "title": "Focus on Quality",
          "text": "We aim to deliver work that is\nfunctional, user-friendly and\naligned with the agreed project\nrequirements.",
          "box": { "x": 1195, "y": 686, "w": 428, "h": 190 },
          "node": { "x": 1192, "y": 757 }, "line": "M1192 757C1170 757 1158 744 1152 728C1148 716 1146 712 1142 708"
        }
      ]
    },
    "differentSection": {
      "_note": "\"What Makes CRETECH Different?\". Cards show in this order. box / imageBox are px on the 1774 x 887 desktop canvas (the background image size); canvasHeight = shown height of that canvas (lower = less space under the cards). tint = three glass colours (top, middle, bottom), edge = the coloured glass edge. glass = transparency (0-1) and blur (px) for all cards. titleSize / textSize / lineHeight optional (canvas px). \\n in titles and texts is a line break on desktop only.",
      "background": {
        "image": "assets/images/different/different-bg.jpg",
        "imageSmall": "assets/images/different/different-bg-mobile.jpg",
        "color": "#FFFCFA",
        "gradientTop": "#FFFCFA",
        "gradientBottom": "#FFE5D5"
      },
      "canvasHeight": 845,
      "title": "What Makes CRETECH *Different?*",
      "glass": { "opacity": 0.72, "blur": 20 },
      "cards": [
        {
          "title": "No Third-Party\nInvolvement",
          "text": "You can speak directly with\nour team and discuss your\nproject without involving\nany outside agency or\nsalesperson.",
          "image": "assets/images/different/direct-team.jpg", "imageAlt": "Laptop showing CRETECH next to a glass team symbol",
          "tint": ["#F5F0F4", "#FDE1D0", "#FCD9BC"], "edge": "#FFC9A6",
          "box": { "x": 61, "y": 200, "w": 389, "h": 560 }, "imageBox": { "x": 70, "y": 208, "w": 372, "h": 250 }
        },
        {
          "title": "Flexible\nService Options",
          "text": "Choose individual services or\na complete range of services\naccording to your project\nrequirements and budget.",
          "image": "assets/images/different/flexible-services.jpg", "imageAlt": "Glass blocks with code, design, marketing and layers symbols",
          "tint": ["#DEDFF7", "#E1DEE6", "#EDE2ED"], "edge": "#C9CCF5",
          "box": { "x": 483, "y": 200, "w": 391, "h": 560 }, "imageBox": { "x": 492, "y": 208, "w": 374, "h": 250 }
        },
        {
          "title": "No Fixed\nPackages",
          "text": "Our pricing depends on the\ntype of work, project size and\nrequirements. We offer reasonable\nrates for both small and large\nprojects, keeping our pricing\naffordable without compromising\non quality.",
          "image": "assets/images/different/no-fixed-packages.jpg", "imageAlt": "Glass price tag with a rupee symbol beside gold coin stacks",
          "tint": ["#E0EEEE", "#E0E3E6", "#F1E4DC"], "edge": "#BFE3DF",
          "box": { "x": 906, "y": 200, "w": 399, "h": 560 }, "imageBox": { "x": 915, "y": 208, "w": 382, "h": 250 },
          "textSize": 20, "lineHeight": 1.15
        },
        {
          "title": "Clear Terms\nFrom the Start",
          "text": "We discuss the work, price\nand payment details before\nstarting the project so\neverything is clear from\nthe beginning.",
          "image": "assets/images/different/clear-terms.jpg", "imageAlt": "Clipboard with three orange checkboxes and a black pen",
          "tint": ["#E8DDF7", "#E6D9EF", "#F2DADF"], "edge": "#DCC8F2",
          "box": { "x": 1337, "y": 200, "w": 385, "h": 560 }, "imageBox": { "x": 1346, "y": 208, "w": 368, "h": 250 }
        }
      ]
    },
    "_flowNote": "processFlow = \"Our Working Process\" (zigzag glass layout). box / node are px on the 1752 x 897 desktop canvas (the background image size); canvasHeight = shown height of that canvas (lower = less space under the cards); line = SVG path of the orange connector that starts at the node. tint = three glass colours (top, middle, bottom), edge = coloured glass edge, titleColor optional. glass = transparency (0-1) and blur (px). titleSize / textSize / lineHeight optional (canvas px). \\n is a line break on desktop only. glassImage (optional) = picture of the glass card (transparent PNG) drawn on desktop at glassBox; without it the glass is drawn by CSS from tint / edge. Cards show in list order.",
    "processFlow": {
      "background": {
        "image": "assets/images/process/process-bg.jpg",
        "imageSmall": "assets/images/process/process-bg-mobile.jpg",
        "color": "#FFFAF7",
        "gradientTop": "#FFFAF7",
        "gradientBottom": "#FFE5D5"
      },
      "canvasHeight": 848,
      "eyebrow": "Our Working Process",
      "title": "A Simple Process, *From Start to Finish*",
      "text": "Every project starts with a conversation. We take time to understand your requirements,\ndiscuss the details and keep you informed throughout the work.",
      "glass": { "opacity": 0.85, "blur": 20 },
      "line": { "color": "#FF7A00", "width": 3 },
      "cards": [
        {
          "number": "01.", "title": "Initial\nDiscussion",
          "text": "Get in touch with us and\nshare your ideas, project\nrequirements and\nexpectations. We will\ndiscuss the details with you.",
          "tint": ["#F9DCD6", "#F6D6CE", "#FED2BE"], "edge": "#FFC2A0",
          "box": { "x": 70, "y": 260, "w": 350, "h": 402 },
          "glassImage": "assets/images/process/card-1.png", "glassBox": { "x": 44, "y": 234, "w": 402, "h": 468 },
          "node": { "x": 425, "y": 367 }, "line": "M425 367C462 367 478 392 486 420C490 436 493 450 497 462"
        },
        {
          "number": "02.", "title": "Planning &\nSuggestions",
          "text": "We review your\nrequirements and suggest\nsuitable services, features\nand ideas based on your\nproject needs.",
          "tint": ["#E6D6FB", "#E0D6F5", "#EAD4F8"], "edge": "#CDB8F5", "titleColor": "#1A2268",
          "box": { "x": 500, "y": 385, "w": 343, "h": 385 },
          "glassImage": "assets/images/process/card-2.png", "glassBox": { "x": 474, "y": 359, "w": 395, "h": 451 },
          "node": { "x": 847, "y": 510 }, "line": "M847 510C866 508 870 490 876 474C882 458 890 450 902 450"
        },
        {
          "number": "03.", "title": "Cost & Project\nConfirmation",
          "text": "We share the estimated\ncost, payment details and\nexpected time for the work.\nOnce everything is agreed\nupon, we move ahead.",
          "tint": ["#D6EFF0", "#DAEDEC", "#F4EDDA"], "edge": "#B8E2E2",
          "box": { "x": 902, "y": 262, "w": 354, "h": 402 },
          "glassImage": "assets/images/process/card-3.png", "glassBox": { "x": 876, "y": 236, "w": 406, "h": 468 },
          "node": { "x": 1258, "y": 380 }, "line": "M1258 380C1296 380 1312 410 1320 440C1325 460 1328 476 1331 490"
        },
        {
          "number": "04.", "title": "Work &\nFinal Project",
          "text": "Our team works on the\nproject as planned, keeps\nyou updated, makes the\nagreed changes and\nprovides the completed\nproject to you.",
          "tint": ["#F2D8D0", "#F6D8CC", "#FED6BA"], "edge": "#FFC6A2",
          "box": { "x": 1332, "y": 385, "w": 352, "h": 391 },
          "glassImage": "assets/images/process/card-4.png", "glassBox": { "x": 1306, "y": 359, "w": 404, "h": 457 }
        }
      ]
    },
    "faqSection": {
      "_note": "Homepage \"Frequently Asked Questions\" (glass accordion). Rows show in list order. glassImage = picture of the row's glass (transparent PNG, 16 px glow margin), drawn as a 9-slice so the row can grow; without it the glass is CSS from tint / edge. glass = transparency (0-1) and blur (px) for the CSS glass. button = plus/minus colour and button background. \\n is a line break on desktop only.",
      "background": {
        "image": "assets/images/faq/faq-bg.jpg",
        "imageSmall": "assets/images/faq/faq-bg-mobile.jpg",
        "color": "#FFFCFA",
        "gradientTop": "#FFFCFA",
        "gradientBottom": "#FFE5D5"
      },
      "title": "Frequently Asked\n*Questions*",
      "text": "Have a question? Here are some\nquick answers to help you\nunderstand our services, process\nand how we work.",
      "glass": { "opacity": 0.6, "blur": 20 },
      "button": { "color": "#FF7900", "background": "#FFFFFF" },
      "items": [
        { "number": "01.", "q": "What services does CRETECH provide?", "a": "CRETECH provides website development, app development, UI/UX design, SEO, Google Ads, social media marketing, email creation, content writing, graphic design & many more services.", "tint": ["#FCE3D6", "#FDE0CF"], "edge": "#FFC7A6", "glassImage": "assets/images/faq/faq-row-1.png" },
        { "number": "02.", "q": "Can I request only one service?", "a": "Yes. You can contact us for an individual service without taking all our services together.", "tint": ["#EEDCFB", "#E6D3FA"], "edge": "#CDB4F5", "glassImage": "assets/images/faq/faq-row-2.png" },
        { "number": "03.", "q": "Do you work with students and fresh graduates?", "a": "Yes. We welcome individuals, students and graduates who need personal websites, portfolios, professional email setups or other technical services.", "tint": ["#DDF2F2", "#D6EEEE"], "edge": "#AEE0E0", "glassImage": "assets/images/faq/faq-row-3.png" },
        { "number": "04.", "q": "Do you work with small businesses and startups?", "a": "Yes. We work with individuals, startups, small businesses, companies and organisations based on their project requirements.", "tint": ["#FCE3D6", "#FDE0CF"], "edge": "#FFC7A6", "glassImage": "assets/images/faq/faq-row-4.png" },
        { "number": "05.", "q": "How much do your services cost?", "a": "Pricing depends on the type of service, project requirements, complexity and amount of work involved. We discuss the quotation before starting.", "tint": ["#F7DDF6", "#F0D4F7"], "edge": "#E6B6EE", "glassImage": "assets/images/faq/faq-row-5.png" },
        { "number": "06.", "q": "Can I discuss my idea before starting a project?", "a": "Yes. You can contact us to discuss your idea, requirements and possible approaches.", "tint": ["#DCEAFF", "#DAF0F6"], "edge": "#AFCDF2", "glassImage": "assets/images/faq/faq-row-6.png" },
        { "number": "07.", "q": "How long will my project take?", "a": "The timeline depends on the project scope and requirements. We discuss the estimated delivery time before starting the work.", "tint": ["#FBE6D6", "#F9E3CF"], "edge": "#F5C9A0", "glassImage": "assets/images/faq/faq-row-7.png" },
        { "number": "08.", "q": "How can I get started?", "a": "You can contact us through our website enquiry form, email or phone to discuss your requirements.", "tint": ["#E6DCFB", "#DCE6FA"], "edge": "#C2C4F2", "glassImage": "assets/images/faq/faq-row-8.png" }
      ]
    }
  },

  "cta": {
    "_note": "Bottom CTA on every page. title + script (the orange handwriting word) + text + one button.",
    "title": "Have an Idea? Let’s Make It",
    "script": "Happen.",
    "text": "Whether you need a website, a mobile application, a professional design or support with digital marketing, we are ready to discuss your requirements.",
    "button": { "label": "Let’s Talk", "href": "contact" }
  },

  "process": {
    "hero": { "title": "Our Working *Process*", "text": "From your first idea to final delivery, we keep each stage clear so you know what is happening with your project." },
    "steps": [
      { "icon": "☏", "title": "Share Your Idea", "short": "Share\nYour Idea", "text": "Tell us what you want to build and what you want it to achieve." },
      { "icon": "♧", "title": "Understand & Discuss", "short": "Understand\n& Discuss", "text": "We discuss your requirements, audience and important features." },
      { "icon": "☼", "title": "Plan the Right Approach", "short": "Plan the\nRight Approach", "text": "We suggest a suitable solution and define the project scope." },
      { "icon": "▦", "title": "Confirm Pricing & Timeline", "short": "Confirm Pricing &\nTimeline", "text": "We share the quotation and estimated timeline for approval." },
      { "icon": "〈/〉", "title": "Design & Development", "short": "Design &\nDevelopment", "text": "We work on the agreed design and development tasks." },
      { "icon": "⚙", "title": "Review & Refinement", "short": "Review &\nRefinement", "text": "You review the work and share feedback for agreed refinements." },
      { "icon": "✓", "title": "Final Delivery", "short": "Final\nDelivery", "text": "We complete handover after the agreed work is finished." }
    ]
  },

  "processPage": {
    "_note": "Process page. Pictures are real images (replaceable from the admin). *word* = orange. Stages: tone (orange, pink, mauve, blue, coral, rose, brown) and an optional href.",
    "hero": {
      "eyebrow": "Our Process",
      "title": "Our Project *Journey*",
      "subtitle": "A Clear Process for Every Project",
      "text": "Every project has its own requirements, details and expectations. We keep each stage organised so that the work moves in the right direction and you stay informed about its progress.",
      "image": "assets/images/process-page/process-hero.jpg"
    },
    "stages": [
      { "title": "Getting Started", "text": "Once you contact us, we begin with a discussion about your project. You can share your ideas, available details and any specific requirements you have in mind.", "tone": "orange", "image": "assets/images/process-page/process-01.jpg" },
      { "title": "Project Planning", "text": "After the initial discussion, we organise the project details and prepare a clear plan. The required work, important features and expected outcomes are considered before moving forward.", "tone": "pink", "image": "assets/images/process-page/process-02.jpg" },
      { "title": "Work & Cost Agreement", "text": "We share the estimated cost, payment terms and expected timeline based on the project requirements. Work begins once the details are discussed and confirmed.", "tone": "mauve", "image": "assets/images/process-page/process-03.jpg" },
      { "title": "Project Development", "text": "The agreed work moves into its actual development stage. Our team works on the project while keeping the project requirements and planned details in focus.", "tone": "blue", "image": "assets/images/process-page/process-04.jpg" },
      { "title": "Progress & Coordination", "text": "You can stay connected with our team during the project. We share relevant updates, discuss important points and take your feedback at suitable stages.", "tone": "coral", "image": "assets/images/process-page/process-05.jpg" },
      { "title": "Review & Improvements", "text": "The completed work is checked against the agreed requirements. We discuss feedback and make the agreed changes before preparing the final version.", "tone": "rose", "image": "assets/images/process-page/process-06.jpg" },
      { "title": "Project Completion", "text": "After the final review, we provide the completed work along with the agreed files, details and access. The project is handed over according to the terms discussed earlier.", "tone": "brown", "image": "assets/images/process-page/process-07.jpg" }
    ],
    "clear": {
      "title": "Keeping Every *Stage Clear*",
      "text": "We believe a good project experience depends on clear discussions, proper planning and regular communication. Our focus stays on keeping the work organised and making each stage easy for clients to follow.",
      "points": [
        { "title": "Transparent Process", "text": "Clear updates at every stage." },
        { "title": "Collaborative Approach", "text": "Your input matters throughout the journey." },
        { "title": "Quality Assurance", "text": "Thorough testing for a reliable, high-quality result." }
      ]
    },
    "faq": {
      "eyebrow": "FAQs",
      "title": "Frequently Asked *Questions*",
      "image": "assets/images/process-page/process-faq.jpg",
      "items": [
        { "q": "Can I discuss my project before confirming it?", "a": "Yes. You can contact us and discuss your requirements before making a decision." },
        { "q": "Will I receive updates during the project?", "a": "Yes. We keep you informed about important progress and discuss relevant project details along the way." },
        { "q": "Can I request changes after reviewing the work?", "a": "Yes. Agreed changes can be discussed and handled according to the project scope." },
        { "q": "When do you confirm the project cost?", "a": "The estimated cost and payment terms are discussed before the work begins." },
        { "q": "What happens after the project is completed?", "a": "We provide the agreed final work, files and access as part of the project handover." }
      ]
    },
    "cta": {
      "title": "Have a Project in Mind?",
      "text": "Share your requirements with CRETECH and start a discussion with our team. We will review your project details and help you take the next step.",
      "button": { "label": "Let’s Discuss Your Project", "href": "contact" }
    }
  },

  "about": {
    "_note": "About page, section by section in page order. Icons: team, sprout, chart, bulb, target, laptop, handplant, trust, responsibility, creativity, quality. \\n = line break on desktop, *word* = orange.",
    "banner": {
      "eyebrow": "About CRETECH",
      "title": "Technology, Creativity &\nIdeas That Move Forward.",
      "text": "We bring technical skills, creative thinking and digital solutions together to help individuals and businesses build their online presence and turn their ideas into practical work.",
      "image": "assets/images/about/about-banner.jpg"
    },
    "intro": {
      "title": "A Digital Partner for\nIdeas, Projects and Businesses",
      "text": "Every project begins with an idea. Some people want to build their first website, some want to take their business online, while others need technical support to improve the way they work. CRETECH was created to make these digital requirements easier to approach — with clear communication, practical suggestions and work that is done properly."
    },
    "why": {
      "title": "Why CRETECH Exists",
      "lead": "CRETECH was founded with a simple purpose — to make reliable and practical digital solutions accessible to more people.",
      "text": "We know that individuals, students, startups and businesses often have ideas and goals, but turning them into a working digital platform can feel complicated or out of reach. CRETECH bridges this gap by bringing technical skills, creative thinking and a clear, approachable process together.",
      "image": "assets/images/about/about-why.jpg", "imageAlt": "CRETECH office building at sunset",
      "points": [
        { "icon": "team", "title": "Make technology\neasier to use" },
        { "icon": "sprout", "title": "Support ideas\nat every stage" },
        { "icon": "chart", "title": "Help people and\nbusinesses grow online" }
      ]
    },
    "belief": {
      "eyebrow": "Our Belief",
      "quote": "Technology is most valuable when it solves a *real problem* for a real person.",
      "paragraphs": [
        "We believe good digital work is a balance of technology and creativity. Technology makes things work; creativity makes them clear, attractive and easy to use. When both are done with care, a website, an application or a campaign becomes a useful tool rather than just something that looks good.",
        "We also believe that no two projects are the same. A student building a portfolio, a shop owner going online and a company planning a new platform all need different things. That is why we listen first, ask questions and only then suggest what should be built."
      ]
    },
    "requirements": {
      "title": "Built Around *Real Requirements*",
      "text": "Every client and every project has different needs. Before suggesting any solution, we take time to understand what the work is meant to achieve, who it is for and how it will be used. This helps us recommend only what is genuinely useful — no unnecessary features, no fixed templates forced onto every project.",
      "items": [
        { "title": "The purpose", "text": "What should this project achieve for you, your customers or your organisation?" },
        { "title": "The requirements", "text": "Which features, content and integrations are truly needed — and which can wait?" },
        { "title": "The intended use", "text": "Who will use it, on which devices, and how will it be managed after it goes live?" }
      ]
    },
    "think": {
      "title": "How We Think",
      "text": "A simple, thoughtful approach guides the way we work on every project.",
      "background": "assets/images/about/about-think-bg.jpg",
      "steps": [
        { "icon": "bulb", "title": "Understand\nthe Idea", "text": "We start by listening and understanding what you want to achieve." },
        { "icon": "target", "title": "Plan a\nPractical Approach", "text": "We discuss the possibilities, requirements and the right way forward." },
        { "icon": "laptop", "title": "Build with\nCare", "text": "We work with attention to detail and keep you updated along the way." },
        { "icon": "handplant", "title": "Deliver\nReal Value", "text": "We aim for a result that works for you and supports your long-term goals." }
      ]
    },
    "people": {
      "title": "People Behind the Projects",
      "paragraphs": [
        "Behind every project at CRETECH is a small, dedicated team that genuinely enjoys working with ideas, solving problems and creating useful digital work.",
        "We are developers, designers, writers and digital specialists who work together, share ideas and focus on what each client actually needs. For us, it is not just about completing a project, but about building something that serves a real purpose."
      ],
      "image": "assets/images/about/about-people.jpg", "imageAlt": "CRETECH team working together around a laptop"
    },
    "partner": {
      "title": "More Than a Service Provider",
      "text": "A partner who understands your idea, values your goals and works with you to make them real.",
      "button": { "label": "Let’s Work Together", "href": "contact" }
    }
  },

  "servicesPage": {
    "_note": "Services page. Each card: tone (orange, purple, blue, green, amber, pink, teal) and an optional href. Leave href empty when no detail page exists. Banner and card pictures are real images (replaceable from the admin): banner about 2048x520 with the subject on the right, cards about 900x700.",
    "banner": {
      "eyebrow": "Our Services",
      "title": "Complete Technical and\nDigital Solutions\nfor Your *Business*",
      "text": "From building powerful websites to creating smart apps, we deliver end-to-end technical and digital solutions that help your brand grow, engage and succeed online.",
      "image": "assets/images/services-page/svc-banner.jpg",
      "primary": { "label": "Explore Our Services", "href": "services#all-services" },
      "secondary": { "label": "Get a Free Consultation", "href": "contact" }
    },
    "cards": [
      { "title": "Website Development", "text": "Build responsive, modern and business-focused websites that create a strong online presence.", "tone": "orange", "image": "assets/images/services-page/svc-01.jpg", "href": "services/website-development" },
      { "title": "App Development", "text": "Develop custom, user-friendly mobile applications for your business needs.", "tone": "purple", "image": "assets/images/services-page/svc-02.jpg", "href": "services/app-development" },
      { "title": "UI/UX Design", "text": "Create clean, intuitive and engaging designs for a better user experience.", "tone": "blue", "image": "assets/images/services-page/svc-03.jpg", "href": "services/ui-ux-design" },
      { "title": "SEO Services", "text": "Improve visibility, rank higher and get quality traffic to your website.", "tone": "green", "image": "assets/images/services-page/svc-04.jpg", "href": "services/seo-services" },
      { "title": "Google Ads Services", "text": "Run targeted ad campaigns to reach the right audience and get better results.", "tone": "amber", "image": "assets/images/services-page/svc-05.jpg", "href": "services/google-ads-services" },
      { "title": "Social Media Marketing", "text": "Build brand presence, engage your audience and grow across social media platforms.", "tone": "pink", "image": "assets/images/services-page/svc-06.jpg", "href": "services/social-media-marketing" },
      { "title": "Content Writing", "text": "Create clear, relevant and SEO-friendly content that informs, engages and builds trust with your audience.", "tone": "purple", "image": "assets/images/services-page/svc-07.jpg", "href": "services/content-writing" },
      { "title": "Graphic Design &\nCreative Content", "text": "Design impactful visuals, creatives and brand assets that communicate your message effectively.", "tone": "teal", "image": "assets/images/services-page/svc-08.jpg", "href": "services/graphic-design-creative-content" },
      { "title": "Website Maintenance &\nSupport", "text": "Keep your website updated, secure and running smoothly with reliable technical support.", "tone": "orange", "image": "assets/images/services-page/svc-09.jpg", "href": "" },
      { "title": "Domain & Hosting Setup", "text": "Get your domain, hosting and complete setup done hassle-free.", "tone": "purple", "image": "assets/images/services-page/svc-10.jpg", "href": "" },
      { "title": "Website Speed Optimization", "text": "Improve your website’s loading speed and overall performance.", "tone": "orange", "image": "assets/images/services-page/svc-11.jpg", "href": "" },
      { "title": "Website Security & Backup", "text": "Protect your website with strong security measures and reliable backup solutions.", "tone": "green", "image": "assets/images/services-page/svc-12.jpg", "href": "" },
      { "title": "Landing Page Development", "text": "Create high-converting landing pages for campaigns, products and lead generation.", "tone": "orange", "image": "assets/images/services-page/svc-13.jpg", "href": "" },
      { "title": "Business Automation &\nIntegration", "text": "Automate your processes and integrate the right tools to save time and improve efficiency.", "tone": "purple", "image": "assets/images/services-page/svc-14.jpg", "href": "" }
    ],
    "cta": {
      "title": "Have an Idea?",
      "highlight": "Let’s Make It Happen.",
      "text": "Discuss your requirements and find the right digital solution for your business.",
      "primary": { "label": "Start Your Project", "href": "contact" },
      "secondary": { "label": "Contact Us", "href": "contact" }
    }
  },

  "serviceDetail": {
    "includedTitle": "What’s Included",
    "processTitle": "How We Work",
    "otherTitle": "Other *Services*",
    "button": "Discuss this service"
  },

  "contact": {
    "hero": { "title": "Have an Idea?\n*Let’s Talk.*", "text": "Tell us a little about your requirement. We will review your message and get back to you." },
    "title": "Let’s discuss your project",
    "text": "Share your project idea, the service you need and any important details. You can also contact us by email.",
    "serviceOptions": ["Website Development", "App Development", "UI/UX Design", "SEO Services", "Google Ads", "Social Media Marketing", "Email Setup", "Content Writing", "Graphic Design", "Other"],
    "success": "Thank you! Your message has been submitted.",
    "error": "Your message could not be sent. Please try again or email us directly."
  },

  "legal": {
    "privacy-policy": {
      "title": "Privacy Policy",
      "intro": "Information about using the CRETECH website and services.",
      "body": ["This page should explain what information is collected through the website enquiry form, how it is used, how long it is retained and how visitors can contact CRETECH about their information. Replace this starter text with a policy reviewed for your business and applicable laws."]
    },
    "terms-and-conditions": {
      "title": "Terms & Conditions",
      "intro": "Information about using the CRETECH website and services.",
      "body": ["Use of this website is subject to the terms published by CRETECH. Project scope, pricing, payment schedule, delivery timeline, revisions, ownership and support should be agreed in writing before work begins. Replace this starter text with your final business terms."]
    },
    "disclaimer": {
      "title": "Disclaimer",
      "intro": "Information about using the CRETECH website and services.",
      "body": ["The information on this website is provided for general information about CRETECH services. Project outcomes and timelines depend on the agreed scope and client requirements. Replace this starter text with your final disclaimer."]
    }
  },

  "notFound": {
    "title": "Page *Not Found*",
    "text": "The page you are looking for does not exist or may have moved.",
    "button": { "label": "Back to Home", "href": "" }
  },

  "tracking": {
    "gtmId": "",
    "gaId": "",
    "adsId": "",
    "ahrefsKey": "",
    "searchConsole": ""
  }
};
