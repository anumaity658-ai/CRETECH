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
    { "label": "Work Process", "href": "process", "page": "process" },
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
      "features": [
        "Business and corporate websites",
        "Personal and portfolio websites",
        "Landing pages for campaigns and launches",
        "Responsive layouts for mobile, tablet and desktop",
        "Custom web solutions for specific requirements"
      ],
      "page": {
        "_note": "Own design for this service (recreated from the 1024 px reference). *word* = orange. Images in assets/images/webdev/.",
        "hero": {
          "eyebrow": "Website Development",
          "title": "Website Development\nServices for\n*Your Business*",
          "text": "Custom, scalable and user-friendly websites that build your brand, engage your audience and support your business goals.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Website%20Development"
          },
          "image": "assets/images/webdev/wd-hero.jpg",
          "imageAlt": "Desktop monitor showing a website design and code editor on a desk"
        },
        "intro": {
          "title": "Build a Powerful *Online Presence*",
          "paragraphs": [
            "A website is often the first place where people learn about a business, explore its services and decide whether they want to connect. A well-developed website helps present your work clearly, builds trust and gives visitors an easy way to understand what you offer.",
            "Every business has different requirements. Some need a simple website to introduce their services, while others require a detailed platform with multiple pages, enquiry forms, product listings or additional functionality.",
            "Our focus is to create websites that are visually appealing, easy to navigate and practical to use. From the initial discussion to the final handover, we keep the development process organised so that you understand what is being created and how it will support your goals."
          ],
          "image": "assets/images/webdev/wd-intro.jpg",
          "imageAlt": "Overlapping website interface mockups"
        },
        "types": {
          "title": "Custom Website Development for *Different Requirements*",
          "items": [
            { "icon": "cart", "title": "E-commerce\nWebsites" },
            { "icon": "business", "title": "Business\nWebsites" },
            { "icon": "corporate", "title": "Corporate\nWebsites" },
            { "icon": "education", "title": "Educational\nWebsites" },
            { "icon": "blog", "title": "Blog &\nContent Websites" },
            { "icon": "portfolio", "title": "Portfolio\nWebsites" },
            { "icon": "rocket", "title": "Landing\nPages" },
            { "icon": "gear", "title": "Service-Based\nWebsites" }
          ]
        },
        "brand": {
          "title": "A Website Designed Around *Your Brand*",
          "text": "Your website should communicate the identity and purpose of your business. Its layout, colours, typography, images and written content all contribute to the overall experience.",
          "image": "assets/images/webdev/wd-brand.jpg",
          "imageAlt": "Website design workspace with a monitor, pen holder and plants"
        },
        "responsive": {
          "title": "Responsive\n*Website Development*",
          "text": "People access websites through different devices, including desktop computers, laptops, tablets and smartphones. A website that works well on all screen sizes creates a better and more comfortable experience for your visitors.",
          "image": "assets/images/webdev/wd-devices.jpg",
          "imageAlt": "The same website shown on a desktop, laptop and smartphone"
        },
        "features": {
          "title": "Website Features and Functionality",
          "items": [
            "Contact and enquiry forms.",
            "Service and product pages.",
            "Image galleries and portfolios.",
            "Blog and article sections.",
            "Navigation menus and dropdowns.",
            "Social media links.",
            "WhatsApp or other integrations.",
            "Search functionality.",
            "Admin panel and content management.",
            "Suitable third-party integrations."
          ]
        },
        "ux": {
          "title": "User Experience and\n*Website Performance*",
          "text": "A good website should not only look attractive but should also be comfortable to use. Visitors should be able to understand the page structure, locate important information and complete actions such as submitting an enquiry.",
          "score": "98%",
          "scoreLabel": "Website Performance"
        },
        "process": {
          "title": "Our Website Development Process",
          "steps": ["Initial\nDiscussion", "Requirement\nPlanning", "Design &\nDevelopment", "Review &\nTesting", "Final\nHandover"]
        },
        "audience": {
          "title": "Website Development for\nIndividuals, Startups and Businesses",
          "text": "You do not need to be a large company to have a professional website. Individuals may need a portfolio, students may want to present their projects, startups may need an online introduction, and established businesses may want to improve their existing website.",
          "icon": "assets/images/webdev/wd-people.png"
        },
        "cost": {
          "title": "Project Cost and Timeline",
          "text": "Website development cost depends on the number of pages, design requirements, functionality, integrations, content requirements and overall complexity. A simple informational website and a feature-rich e-commerce platform involve different levels of work and timeline.",
          "icon": "assets/images/webdev/wd-coins.png"
        },
        "cta": {
          "title": "Build Your Website with",
          "highlight": "CRETECH",
          "text": "Your website should give visitors a clear understanding of who you are, what you offer and how they can connect with you. CRETECH helps turn your requirements into a practical website that supports your online presence.",
          "button": { "label": "Get Started Today", "href": "contact?service=Website%20Development" }
        },
        "faq": {
          "title": "Frequently *Asked Questions*",
          "items": [
            {
              "q": "What types of websites does CRETECH develop?",
              "a": "We develop business, corporate, e-commerce, educational, blog and content, portfolio, landing page and service-based websites, planned around what your project needs."
            },
            {
              "q": "Can I request a website for my small business or startup?",
              "a": "Yes. You do not need to be a large company. We build websites for individuals, students, startups, small businesses and established companies."
            },
            {
              "q": "Can you develop a website according to my design reference?",
              "a": "Yes. Share your reference, and we will discuss the layout, colours and features with you before development begins."
            },
            {
              "q": "Will my website work on mobile phones?",
              "a": "Yes. Every website is built to be responsive, so it works on desktop computers, laptops, tablets and smartphones."
            },
            {
              "q": "Can I update website content after development?",
              "a": "Yes. If your website includes an admin panel or content management, you can update text and images yourself. We can also help with updates."
            },
            {
              "q": "Do you provide website domain and hosting?",
              "a": "We can guide you in choosing a domain and hosting and help set them up for your website. Their cost depends on the provider and plan you choose."
            },
            {
              "q": "How much does website development cost?",
              "a": "The cost depends on the number of pages, design requirements, functionality, integrations, content requirements and overall complexity. We share an estimate after understanding your requirements."
            },
            {
              "q": "How long does it take to develop a website?",
              "a": "The timeline depends on the size and complexity of the website. A simple informational website takes less time than a feature-rich e-commerce platform. We confirm the timeline before work begins."
            },
            {
              "q": "Can I request changes during development?",
              "a": "Yes. We share the work with you during the process so you can review it, and agreed changes are made before the final handover."
            },
            {
              "q": "How can I start my website development project?",
              "a": "Contact us through the enquiry form, email or phone with your requirements. We will discuss your project and suggest the best way forward."
            }
          ]
        }
      }
    },
    {
      "slug": "app-development",
      "title": "App Development",
      "icon": "▯",
      "short": "Mobile applications with useful features and smooth performance.",
      "summary": "Mobile-friendly application experiences and custom application development.",
      "image": "photo-1512941937669-90a1b58e7e9c",
      "intro": "We plan and develop applications around the features your users actually need, keeping the experience simple and the performance smooth.",
      "features": [
        "Requirement discussion and feature planning",
        "Mobile-friendly application screens",
        "Custom application development",
        "Testing before delivery",
        "Support for agreed refinements"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/app-development/",
        "theme": "",
        "hero": {
          "eyebrow": "App Development Services",
          "title": "App Development\nServices for\n*Your Ideas*",
          "text": "Turn your app idea into a functional, user-friendly and reliable application for your business, startup or organisation.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=App%20Development"
          },
          "image": "assets/images/svc/app-development/hero.jpg",
          "imageAlt": "Two smartphones showing a mobile app with services, booking, products and profile screens"
        },
        "body": {
          "y": [330, 1474],
          "items": [
            { "t": "txt", "tag": "h2", "box": [69, 345, 438], "f": [22, 700, 28, "O"], "text": "Build a Mobile Presence for *Your Business*" },
            {
              "t": "txt",
              "tag": "p",
              "box": [69, 376, 417],
              "f": [12, 400, 14.5, "L"],
              "text": "Mobile applications have become an important way for businesses and\norganisations to connect with their users. At CRETECH, we offer app\ndevelopment services for individuals, startups, small businesses and\norganisations that want to turn an idea into a practical application."
            },
            { "t": "rect", "box": [69, 443, 42, 1.5], "bg": "#ff6a1a", "m": 0 },
            {
              "t": "txt",
              "tag": "p",
              "box": [69, 450, 438],
              "f": [12, 400, 14.5, "L"],
              "text": "Every app starts with a purpose. We take time to understand your\nrequirements, plan the solution and develop a user-friendly and functional\napplication that matches the agreed project scope."
            },
            {
              "t": "img",
              "box": [553, 349, 418, 209],
              "src": "assets/images/svc/app-development/intro.jpg",
              "alt": "A phone showing a welcome screen between two app screen mockups",
              "cls": "rd"
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 566, 1024],
              "lines": [66, 28, 552],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "text": "Custom App Development Based on *Your Requirements*"
            },
            {
              "t": "txt",
              "tag": "p",
              "box": [264, 593, 492],
              "al": "c",
              "f": [12, 400, 15, "L"],
              "text": "Our app development services can cover different application concepts, including:"
            },
            {
              "t": "grp",
              "box": [36, 615, 954, 94],
              "tiles": { "icons": ["briefcase", "cart", "calendar", "education", "user", "users", "layers"], "mx": 5, "my": 1, "g": 4.5, "r": 12, "iy": 10, "is": 32 },
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [68, 663, 76],
                  "al": "c",
                  "f": [12, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Business\nApplications"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [205, 663, 76],
                  "al": "c",
                  "f": [12, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "E-commerce\nApplications"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [337, 663, 84],
                  "al": "c",
                  "f": [12, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Service\nBooking Apps"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [473, 663, 76],
                  "al": "c",
                  "f": [12, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Educational\nApplications"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [591, 663, 107],
                  "al": "c",
                  "f": [12, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Personal &\nProfessional Apps"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [730, 663, 103],
                  "al": "c",
                  "f": [12, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Customer-Facing\nApplications"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [867, 663, 102],
                  "al": "c",
                  "f": [12, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Internal Business\nApplications"
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 718, 480, 136],
              "src": "assets/images/svc/app-development/c1.jpg",
              "alt": "Notebook with app screen sketches",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [46, 737, 234], "f": [16, 700, 20, "O"], "text": "Understanding *Your App Idea*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [46, 759, 248],
                  "f": [10.5, 400, 13, "L"],
                  "text": "A successful application begins with a clear\nunderstanding of the problem it is expected\nto address. We discuss the main purpose of\nthe apps, the target users and the activities\nthey should be able to complete."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 718, 480, 136],
              "src": "assets/images/svc/app-development/c2.jpg",
              "alt": "App screen layouts",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [536, 733, 185], "f": [14, 700, 16.5, "O"], "text": "User-Friendly App Design\n*and Navigation*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [536, 769, 248],
                  "f": [10.5, 400, 13, "L"],
                  "text": "An application should be easy to understand\nfrom the moment someone opens it. We plan\nthe screen structure, navigation flow, button\nplacement and overall visual presentation to\nensure a smooth user experience."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 862, 480, 136],
              "src": "assets/images/svc/app-development/c3.jpg",
              "alt": "Phone showing app feature icons",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [47, 875.5, 141], "f": [15, 700, 17.5, "O"], "text": "App Features and\n*Integrations*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [47, 914.5, 251],
                  "f": [10.5, 400, 12.9, "L"],
                  "text": "Depending on the project, app development\nmay include user registration, profiles,\nproduct or service listings, search, booking,\nnotifications, admin panel, payment gateway\nand API integration."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 862, 480, 136],
              "src": "assets/images/svc/app-development/c4.jpg",
              "alt": "A phone and a tablet showing the same app",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [536, 875.5, 175], "f": [15, 700, 17.5, "O"], "text": "App Development for\n*Different Devices*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [536, 914.5, 242],
                  "f": [10.5, 400, 12.9, "L"],
                  "text": "An application can be planned for Android,\niOS or a suitable cross-platform approach.\nThe choice of technology depends on the\nproject requirements, expected users and\nfuture development plans."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1006, 480, 136],
              "src": "assets/images/svc/app-development/c5.jpg",
              "alt": "Performance gauge showing 98%",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [50, 1022, 216], "f": [15, 700, 17, "O"], "text": "Performance, Functionality\n*and Testing*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [50, 1059, 239],
                  "f": [10.5, 400, 12.7, "L"],
                  "text": "An application needs to work consistently\nacross its intended screens. We review the\nmain features, navigation and functionality\nto identify and resolve issues before final\nhandover."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1006, 480, 136],
              "src": "assets/images/svc/app-development/c6.jpg",
              "alt": "Laptop showing a growth chart",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [536, 1021, 190],
                  "f": [14, 700, 16.5, "O"],
                  "text": "App Development for\n*Startups and Businesses*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [536, 1055, 258],
                  "f": [10, 400, 12.1, "L"],
                  "text": "Startups may need an application to introduce\na new service or test a business idea. Established\nbusinesses may want to make their services\naccessible through a dedicated mobile platform.\nWe work with different types of clients and\nproject requirements."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1150, 480, 136],
              "src": "assets/images/svc/app-development/c7.jpg",
              "alt": "Calendar and calculator",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [50, 1160, 147], "f": [15, 700, 17, "O"], "text": "App Development\n*Cost and Timeline*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [50, 1197, 236],
                  "f": [10.3, 400, 12.5, "L"],
                  "text": "The cost of app development depends on\nseveral factors, including the number of\nscreens, platform, design, integrations and\ncustom functionality. The estimated cost,\npayment terms and project timeline are\ndiscussed before work begins."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1150, 480, 136],
              "src": "assets/images/svc/app-development/c8.jpg",
              "alt": "Phone showing a rocket launch",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [536, 1159, 189], "f": [15, 700, 17, "O"], "text": "Turn Your App Idea into\na *Working Product*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [536, 1197, 255],
                  "f": [10.3, 400, 12.5, "L"],
                  "text": "CRETECH helps you organise your idea,\nunderstand the required features and plan\nthe development process. Whether you are\nstarting with an initial concept or already have\na detailed requirement document, you can\nshare it with us."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 1289, 1024],
              "lines": [62, 46, 263],
              "al": "c",
              "f": [18, 700, 22, "O"],
              "text": "Our App Development Process"
            },
            {
              "t": "grp",
              "box": [36, 1312, 955, 78],
              "src": "assets/images/svc/app-development/proc.jpg",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [75, 1343, 72],
                  "al": "c",
                  "f": [10.5, 600, 12, "O"],
                  "c": "#1e1a22",
                  "text": "Idea &\nRequirement\nDiscussion"
                },
                { "t": "txt", "tag": "h3", "box": [249, 1348, 48], "al": "c", "f": [11, 600, 13, "O"], "c": "#1e1a22", "text": "Project\nPlanning" },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [398, 1348, 70],
                  "al": "c",
                  "f": [11, 600, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Interface &\nDevelopment"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [557, 1348, 74],
                  "al": "c",
                  "f": [11, 600, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Integration &\nTesting"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [715, 1348, 80],
                  "al": "c",
                  "f": [11, 600, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Review &\nImprovements"
                },
                { "t": "txt", "tag": "h3", "box": [893, 1348, 54], "al": "c", "f": [11, 600, 13, "O"], "c": "#1e1a22", "text": "Final\nHandover" }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1400, 968, 74],
              "kids": [
                { "t": "txt", "tag": "h2", "box": [90, 1410, 197], "f": [19, 700, 23, "O"], "c": "#fff", "text": "Build Your App with" },
                { "t": "txt", "tag": "p", "box": [90, 1431, 146], "f": [29, 800, 34, "O"], "c": "#ff7a1c", "text": "CRETECH" },
                { "t": "rect", "box": [345, 1421, 1, 32], "bg": "rgba(255,255,255,.45)", "m": 0 },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [380, 1419, 351],
                  "f": [11.5, 400, 17, "L"],
                  "c": "#fff",
                  "text": "Share your app idea with us and get a clear development plan,\nfeature list, estimated cost and timeline."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [787, 1420, 170, 34],
                  "r": 9,
                  "f": [13.4, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=App%20Development"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1474, 1664],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1477, 1024],
            "lines": [60, 40, 263],
            "al": "c",
            "f": [18, 700, 24, "O"],
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1505,
          "rowH": 18.8,
          "rowGap": 2.4,
          "bottom": 22,
          "f": [11.3, 700, 13, "O"],
          "cols": [[57, 440], [534, 434]],
          "items": [
            {
              "q": "What types of applications can CRETECH develop?",
              "a": "We develop business, e-commerce, service booking, educational, personal and professional, customer-facing and internal business applications, planned around your requirements."
            },
            {
              "q": "Can I develop an app for my startup?",
              "a": "Yes. Startups can use an application to introduce a new service or test a business idea. We help you plan the features and scope for your first version."
            },
            {
              "q": "Can you develop Android and iOS applications?",
              "a": "Yes. An application can be planned for Android, iOS or a suitable cross-platform approach, depending on your requirements, expected users and future plans."
            },
            {
              "q": "Do I need to have a complete app idea before contacting you?",
              "a": "No. You can start with an initial concept. We discuss the main purpose, the target users and the activities the app should support, and help you organise your idea."
            },
            {
              "q": "Can my app include login and user registration?",
              "a": "Yes. Depending on the project, the app can include user registration, login and profiles, along with other features you need."
            },
            {
              "q": "Can you connect my app with a database?",
              "a": "Yes. Apps can be connected with a database, an admin panel and other services through API integration, based on the project requirements."
            },
            {
              "q": "Can you integrate payment gateways and notifications?",
              "a": "Yes. Payment gateway integration and notifications can be included in the app if they are part of the agreed project scope."
            },
            {
              "q": "Will my app be tested before handover?",
              "a": "Yes. We review the main features, navigation and functionality to identify and resolve issues before the final handover."
            },
            {
              "q": "How much does app development cost?",
              "a": "The cost depends on the number of screens, platform, design, integrations and custom functionality. The estimated cost and payment terms are discussed before work begins."
            },
            {
              "q": "How long does it take to develop an application?",
              "a": "The timeline depends on the size and complexity of the application. We share the expected project timeline after understanding your requirements."
            },
            {
              "q": "Can I add more features to my app later?",
              "a": "Yes. New features can be planned and added later. We consider future development plans while choosing the technology for your app."
            },
            {
              "q": "How can I get started with CRETECH?",
              "a": "Share your app idea or requirement document with us through the contact form, email or phone. We will discuss your project and suggest a clear development plan."
            }
          ]
        }
      }
    },
    {
      "slug": "ui-ux-design",
      "title": "UI/UX Design",
      "icon": "⚒",
      "short": "Clean, attractive and easy-to-use interfaces.",
      "summary": "User-friendly layouts, wireframes and visual interface design.",
      "image": "photo-1586717791821-3f44a563fa4c",
      "intro": "Good design helps people find what they need without effort. We design layouts and interfaces that look clean and are easy to use.",
      "features": [
        "User flows and page structure",
        "Wireframes",
        "Visual interface design",
        "Design for mobile and desktop screens",
        "Design handover for development"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/ui-ux-design/",
        "theme": "",
        "hero": {
          "eyebrow": "UI/UX Design Services",
          "title": "UI/UX Design Services\nfor Better Digital\n*Experiences*",
          "text": "Create clear, attractive and user-friendly interfaces for websites and applications that your users will enjoy and use with ease.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=UI%2FUX%20Design"
          },
          "image": "assets/images/svc/ui-ux-design/hero.jpg",
          "imageAlt": "Laptop showing a UI design layout with floating UI and UX icons"
        },
        "body": {
          "y": [340, 1308.2],
          "items": [
            {
              "t": "txt",
              "tag": "h2",
              "box": [70, 348, 311],
              "f": [23, 700, 23, "O"],
              "text": "UI/UX Design Services for\n*Better Digital Experiences*"
            },
            {
              "t": "txt",
              "tag": "p",
              "box": [70, 409, 416],
              "f": [12, 400, 14.6, "L"],
              "text": "A good digital product should not only look attractive but also be\neasy to understand and comfortable to use. At CRETECH, we provide\nUI/UX design services for individuals, startups, businesses and\norganisations that want to create clear, attractive and user-friendly\ndigital experiences."
            },
            { "t": "rect", "box": [70, 493, 38, 1.6], "bg": "#ff6a1a", "m": 0 },
            {
              "t": "txt",
              "tag": "p",
              "box": [70, 501, 429],
              "f": [12, 400, 14.8, "L"],
              "text": "Every project has different requirements. We consider the purpose of\nthe product, its target audience and the expected user journey before\nplanning the design. Our approach combines visual presentation with\npractical usability."
            },
            {
              "t": "img",
              "box": [556, 342, 420, 210],
              "src": "assets/images/svc/ui-ux-design/intro.jpg",
              "alt": "A phone showing a welcome screen between two app screen mockups",
              "cls": "rd"
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 567.2, 1024],
              "lines": [78, 24, 546],
              "al": "c",
              "f": [23, 700, 26, "O"],
              "text": "Custom UI/UX Design for *Websites and Applications*"
            },
            {
              "t": "grp",
              "box": [38, 604.2, 950, 112],
              "tiles": { "icons": ["monitor", "phone", "grid", "browser", "cart", "layers", "browserPen"], "mx": 6, "my": 4, "g": 6, "r": 13, "iy": 13, "is": 33 },
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [87, 662.2, 58],
                  "al": "c",
                  "f": [11.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Website\nUI Design"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [221, 662.2, 67],
                  "al": "c",
                  "f": [11.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Mobile App\nUI Design"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [356, 662.2, 63],
                  "al": "c",
                  "f": [11.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Dashboard\nDesign"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [485, 662.2, 72],
                  "al": "c",
                  "f": [11.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Landing\nPage Design"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [618, 662.2, 75],
                  "al": "c",
                  "f": [11.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "E-commerce\nUI Design"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [755, 656.2, 67],
                  "al": "c",
                  "f": [11.5, 600, 14.3, "O"],
                  "c": "#1e1a22",
                  "text": "Web\nApplication\nDesign"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [895, 662.2, 53],
                  "al": "c",
                  "f": [11.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Website\nRedesign"
                }
              ]
            },
            {
              "t": "img",
              "box": [30, 726.2, 480, 136],
              "src": "assets/images/svc/ui-ux-design/wire.jpg",
              "alt": "Notebook with wireframe sketches and a pen on a desk"
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 726.2, 480, 136],
              "src": "assets/images/svc/ui-ux-design/und.jpg",
              "alt": "",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [538, 737.2, 300], "f": [20, 700, 22, "O"], "text": "Understanding *UI and UX Design*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [581, 769.2, 403],
                  "f": [11, 400, 15, "L"],
                  "bold": "User Interface (UI) Design",
                  "text": "focuses on the visual elements users\nsee and interact with, such as layouts, colours, typography, buttons and icons."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [581, 812.2, 406],
                  "f": [11, 400, 15, "L"],
                  "bold": "User Experience (UX) Design",
                  "text": "focuses on how users interact with the product,\nincluding navigation, information flow and the ease of completing tasks."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 864.2, 480, 136],
              "src": "assets/images/svc/ui-ux-design/c1.jpg",
              "alt": "Web page layout mockup",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [54, 886.2, 187], "f": [17, 700, 19, "O"], "text": "Creating Clear and\n*User-Friendly Layouts*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [54, 930.2, 242],
                  "f": [12, 400, 14.5, "L"],
                  "text": "We plan layouts that guide users naturally,\nwith well-placed content, easy navigation\nand a clean, organised interface."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 864.2, 480, 136],
              "src": "assets/images/svc/ui-ux-design/c2.jpg",
              "alt": "Wireframe and prototype screens",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [535, 889.2, 240], "f": [17, 700, 19, "O"], "text": "Wireframes and *Prototypes*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [535, 916.2, 255],
                  "f": [12, 400, 14, "L"],
                  "text": "We prepare wireframes to plan the structure\nand create interactive prototypes to\nvisualise the user flow before development."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 976.2, 480, 136],
              "src": "assets/images/svc/ui-ux-design/c3.jpg",
              "alt": "A laptop, monitor, tablet and phone showing the same design",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [54, 997.2, 238],
                  "f": [17, 700, 19, "O"],
                  "text": "Responsive and\n*Consistent Interface Design*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [54, 1041.2, 237],
                  "f": [12, 400, 14.5, "L"],
                  "text": "We design interfaces that work well across\ndesktop, tablet and mobile devices, with a\nconsistent visual style and user experience."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 976.2, 480, 136],
              "src": "assets/images/svc/ui-ux-design/c4.jpg",
              "alt": "Growth bar chart with a rising arrow",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [537, 997.2, 219], "f": [17, 700, 19, "O"], "text": "UI/UX Design for\n*Startups and Businesses*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [537, 1042.2, 252],
                  "f": [12, 400, 14.5, "L"],
                  "text": "We work with startups, established\nbusinesses and individuals to create\ninterfaces that match their goals and users."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 1116.2, 1024],
              "lines": [80, 45, 240],
              "al": "c",
              "f": [20, 700, 24, "O"],
              "text": "Our UI/UX Design Process"
            },
            {
              "t": "grp",
              "box": [36, 1140.2, 954, 86],
              "src": "assets/images/svc/ui-ux-design/proc.jpg",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [97, 1178.2, 72],
                  "al": "c",
                  "f": [11.5, 600, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Requirement\nDiscussion"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [262, 1178.2, 72],
                  "al": "c",
                  "f": [11.5, 600, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Structure\nand Planning"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [422, 1179.2, 75],
                  "al": "c",
                  "f": [11.5, 600, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Wireframe\nDevelopment"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [585, 1179.2, 54],
                  "al": "c",
                  "f": [11.5, 600, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Visual\nUI Design"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [737, 1179.2, 65],
                  "al": "c",
                  "f": [11.5, 600, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Prototype\nand Review"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [899, 1179.2, 69],
                  "al": "c",
                  "f": [11.5, 600, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Final Design\nHandover"
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1236.2, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [85, 1247.7, 256],
                  "f": [20, 600, 23, "P", 0],
                  "c": "#fff",
                  "em": "#ff7a1c",
                  "text": "Create a Better Digital\nExperience with *CRETECH*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [405, 1249.2, 325],
                  "f": [11.5, 400, 14.3, "L"],
                  "c": "#fff",
                  "text": "Share your design requirements, project idea or existing\ninterface with us. We will understand your expectations and\ndiscuss a suitable design approach."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [790, 1256.2, 167, 34],
                  "r": 9,
                  "f": [13.4, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=UI%2FUX%20Design"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1308.2, 1546.2],
          "waves": true,
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1314.2, 1024],
            "lines": [74, 30, 272],
            "al": "c",
            "f": [20, 700, 24, "O"],
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1349.2,
          "rowH": 20,
          "rowGap": 3.9,
          "bottom": 45,
          "f": [11.2, 700, 13, "O"],
          "cols": [[62, 437], [531, 429]],
          "items": [
            {
              "q": "What is the difference between UI and UX design?",
              "a": "UI (User Interface) design focuses on the visual elements users see and interact with, such as layouts, colours, typography, buttons and icons. UX (User Experience) design focuses on how users interact with the product, including navigation, information flow and the ease of completing tasks."
            },
            {
              "q": "Does CRETECH provide UI/UX design for websites and mobile applications?",
              "a": "Yes. We provide UI/UX design for websites, mobile apps, dashboards, landing pages, e-commerce stores and web applications, as well as website redesigns."
            },
            {
              "q": "What is a wireframe?",
              "a": "A wireframe is a simple layout we prepare to plan the structure of a screen or page before the visual design and development begin."
            },
            {
              "q": "What is a prototype in UI/UX design?",
              "a": "A prototype is an interactive version of the design that helps visualise the user flow before development."
            },
            {
              "q": "Can you redesign my existing website interface?",
              "a": "Yes. Website redesign is one of our UI/UX design services. Share your existing interface with us and we will discuss a suitable design approach."
            },
            {
              "q": "Will my design be responsive?",
              "a": "Yes. We design interfaces that work well across desktop, tablet and mobile devices, with a consistent visual style and user experience."
            },
            {
              "q": "Can I share my own design references?",
              "a": "Yes. You can share your design requirements, project idea or references with us, and we will consider them while planning the design."
            },
            {
              "q": "Do you provide design files after completion?",
              "a": "Yes. Final design handover is the last step of our process, once the design has been reviewed."
            },
            {
              "q": "Can I request changes to the design?",
              "a": "Yes. Prototype and review is a step in our process, so you can review the design and request changes before the final handover."
            },
            {
              "q": "How much does UI/UX design cost?",
              "a": "The cost depends on your project and its requirements. It is discussed with you after we understand your design needs."
            },
            {
              "q": "Can you design an admin dashboard?",
              "a": "Yes. Dashboard design is one of the UI/UX design services we offer, planned around the users and the tasks they need to complete."
            },
            {
              "q": "How can I start a UI/UX design project?",
              "a": "Share your design requirements, project idea or existing interface with us through the contact form. We will understand your expectations and discuss a suitable design approach."
            }
          ]
        }
      }
    },
    {
      "slug": "seo-services",
      "title": "SEO Services",
      "icon": "⌕",
      "short": "Improve visibility and get quality traffic.",
      "summary": "On-page SEO, technical basics, content optimisation and website visibility support.",
      "image": "photo-1460925895917-afdab827c52f",
      "intro": "SEO helps the right people find your website. We work on the on-page and technical basics that support better visibility in search results.",
      "features": [
        "On-page SEO for titles, headings and descriptions",
        "Technical SEO basics",
        "Content optimisation",
        "Keyword research for your services",
        "Website visibility support"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/seo-services/",
        "theme": "",
        "hero": {
          "eyebrow": "SEO Services",
          "title": "SEO Services to Improve\nYour Website’s\n*Search Visibility*",
          "text": "Improve your website’s search presence, reach the right audience and build a stronger online foundation with CRETECH’s SEO services.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=SEO%20Services"
          },
          "image": "assets/images/svc/seo-services/hero.jpg",
          "imageAlt": "Laptop showing a search page with a magnifying glass, a target and a growth chart"
        },
        "body": {
          "y": [330, 1350],
          "items": [
            { "t": "txt", "tag": "h2", "box": [66, 350, 446], "f": [21.5, 700, 24, "O"], "text": "Understanding *Search Engine Optimisation*" },
            {
              "t": "txt",
              "tag": "p",
              "box": [66, 385, 443],
              "f": [14, 400, 17.8, "L"],
              "text": "Search Engine Optimisation (SEO) helps improve a website so\nthat search engines can better discover, understand and\nevaluate its pages for relevant searches. It involves content,\nstructure, technical checks and a better overall user experience."
            },
            {
              "t": "img",
              "box": [528, 356.5, 258, 129],
              "src": "assets/images/svc/seo-services/intro.jpg",
              "alt": "Website with an SEO label, a magnifying glass, a bar chart and a target",
              "cls": "rd"
            },
            {
              "t": "card",
              "cls": "flat ckb fr",
              "box": [796, 344, 182, 154],
              "v": { "il": 0, "it": 15, "ir": 18, "ib": 19, "fl": -30, "ft": 4, "fr": 7, "fb": 4, "tw": 14.5, "th": 11, "tg": 10 },
              "kids": [
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [830, 371, 83],
                  "f": [12.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Better Visibility",
                  "cls": "ck"
                },
                { "t": "txt", "tag": "p", "box": [830, 398, 87], "f": [12.5, 600, 15, "O"], "c": "#1e1a22", "text": "Relevant Traffic", "cls": "ck" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [830, 423, 106],
                  "f": [12.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Organised Content",
                  "cls": "ck"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [830, 447, 117.5],
                  "f": [12.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Improved Experience",
                  "cls": "ck"
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 501, 1024],
              "lines": [122, 29, 182],
              "al": "c",
              "f": [21.5, 700, 24, "O"],
              "text": "Our SEO Services"
            },
            {
              "t": "grp",
              "box": [38, 532, 948, 100],
              "tiles": { "icons": ["search", "docSearch", "gear", "docPen", "link", "pin", "growth", "target"], "mx": 5, "my": 5, "g": 6, "r": 12, "iy": 12, "is": 33 },
              "kids": [
                { "t": "txt", "tag": "h3", "box": [72, 585, 54], "al": "c", "f": [12.5, 600, 15, "O"], "c": "#1e1a22", "text": "Keyword\nResearch" },
                { "t": "txt", "tag": "h3", "box": [195.5, 585, 53], "al": "c", "f": [12.5, 600, 15, "O"], "c": "#1e1a22", "text": "On-Page\nSEO" },
                { "t": "txt", "tag": "h3", "box": [318, 585, 55.5], "al": "c", "f": [12.5, 600, 15, "O"], "c": "#1e1a22", "text": "Technical\nSEO" },
                { "t": "txt", "tag": "h3", "box": [443, 585, 52], "al": "c", "f": [12.5, 600, 15, "O"], "c": "#1e1a22", "text": "Content\nStrategy" },
                { "t": "txt", "tag": "h3", "box": [555, 585, 55.5], "al": "c", "f": [12.5, 600, 15, "O"], "c": "#1e1a22", "text": "Off-Page\nSEO" },
                { "t": "txt", "tag": "h3", "box": [673.5, 585, 31.5], "al": "c", "f": [12.5, 600, 15, "O"], "c": "#1e1a22", "text": "Local\nSEO" },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [776, 585, 56],
                  "al": "c",
                  "f": [12.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "SEO Audit\n& Review"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [891, 585, 79],
                  "al": "c",
                  "f": [12.5, 600, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Ongoing\nOptimisation"
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 638, 480, 136],
              "src": "assets/images/svc/seo-services/k1.jpg",
              "alt": "Tablet showing keyword research with search volume, relevance and user intent",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [58, 654, 164], "f": [19, 700, 20, "O"], "text": "Keyword Research\n*and Search Intent*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [58, 701, 251],
                  "f": [13, 400, 15.5, "L"],
                  "text": "Identify the right keywords, understand\nuser intent and find relevant opportunities\nfor your website."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 638, 480, 136],
              "src": "assets/images/svc/seo-services/k2.jpg",
              "alt": "Web page showing title, meta description and H1 heading with a check mark",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [544, 655, 196], "f": [19, 700, 20, "O"], "text": "On-Page *SEO Services*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [544, 684, 210.5],
                  "f": [13, 400, 15, "L"],
                  "text": "Optimise titles, meta descriptions,\nheadings, content, images, URLs\nand internal links for better\nsearch understanding."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 774, 480, 136],
              "src": "assets/images/svc/seo-services/k3.jpg",
              "alt": "Laptop with a code symbol and a checklist for sitemap, robots.txt, indexing and performance",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [58, 794, 129], "f": [19, 700, 20, "O"], "text": "Technical *SEO*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [58, 821, 218.5],
                  "f": [12.5, 400, 14, "L"],
                  "text": "Review and improve technical factors\nsuch as crawlability, indexing, sitemaps,\nredirects, canonical tags and\nmobile usability."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 774, 480, 136],
              "src": "assets/images/svc/seo-services/k4.jpg",
              "alt": "Content plan notepad with topics, keywords, service pages and blog ideas",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [544, 794, 231.5], "f": [19, 700, 20, "O"], "text": "Content and *SEO Strategy*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [544, 821, 213],
                  "f": [12.5, 400, 14, "L"],
                  "text": "Plan and organise useful, relevant\ncontent such as service pages, blog\narticles and FAQs to support\nsearch visibility and user needs."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 910, 480, 136],
              "src": "assets/images/svc/seo-services/k5.jpg",
              "alt": "Web page with a chain link and a globe",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [59, 932, 128], "f": [19, 700, 20, "O"], "text": "Off-Page *SEO*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 957, 204],
                  "f": [12.5, 400, 14.7, "L"],
                  "text": "Work on relevant online activities\nsuch as quality references, brand\nmentions and suitable backlink\nopportunities."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 910, 480, 136],
              "src": "assets/images/svc/seo-services/k6.jpg",
              "alt": "Map pin, map and a shop with a G sign",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [545, 932, 219], "f": [19, 700, 20, "O"], "text": "Local *SEO for Businesses*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545, 957, 216],
                  "f": [12.5, 400, 14.7, "L"],
                  "text": "Improve your local presence with\nGoogle Business Profile optimisation,\nlocal keywords, business information\nand location-focused content."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 1049, 1024],
              "lines": [115, 33, 171],
              "al": "c",
              "f": [21.5, 700, 24, "O"],
              "text": "Our SEO Process"
            },
            {
              "t": "grp",
              "box": [34, 1080, 956, 76],
              "src": "assets/images/svc/seo-services/proc.jpg",
              "kids": [
                { "t": "txt", "tag": "h3", "box": [110, 1113, 45], "al": "c", "f": [12, 600, 13.5, "O"], "c": "#1e1a22", "text": "Website\nReview" },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [271, 1113, 48],
                  "al": "c",
                  "f": [12, 600, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Keyword\nResearch"
                },
                { "t": "txt", "tag": "h3", "box": [435, 1113, 47], "al": "c", "f": [12, 600, 13.5, "O"], "c": "#1e1a22", "text": "SEO\nPlanning" },
                { "t": "txt", "tag": "h3", "box": [574, 1117.5, 81], "al": "c", "f": [12, 600, 13.5, "O"], "c": "#1e1a22", "text": "Implementation" },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [747.5, 1113, 66.5],
                  "al": "c",
                  "f": [12, 600, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Performance\nReview"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [901.5, 1113, 68.5],
                  "al": "c",
                  "f": [12, 600, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Ongoing\nOptimisation"
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1162, 480, 110],
              "src": "assets/images/svc/seo-services/b1.jpg",
              "alt": "Rising bar chart with an arrow",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [193, 1167, 173], "f": [18, 700, 19, "O"], "text": "SEO Services for\n*Different Businesses*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [193, 1208, 247.5],
                  "f": [12.5, 400, 13.8, "L"],
                  "text": "We work with startups, small businesses,\ncorporates, e-commerce websites and\nservice-based platforms, with a strategy\nthat suits their goals and audience."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1162, 480, 110],
              "src": "assets/images/svc/seo-services/b2.jpg",
              "alt": "Stacks of gold coins",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [658.5, 1169, 192], "f": [18, 700, 20, "O"], "text": "SEO *Cost and Timeline*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [658.5, 1195.5, 320],
                  "f": [12.5, 400, 14.3, "L"],
                  "text": "The cost depends on the website size, number of\npages, competition, technical work and content needs.\nWe discuss the expected work, cost and a practical\ntimeline before starting."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1278, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [88, 1289.5, 313],
                  "f": [20, 600, 23, "P", 0],
                  "c": "#fff",
                  "em": "#ff8a1c",
                  "text": "Improve Your Website’s\nSearch Foundation with *CRETECH*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [474.5, 1290.5, 271.5],
                  "f": [11.5, 400, 15, "L"],
                  "c": "#fff",
                  "text": "Share your website and business details with us.\nWe will review your requirements and suggest a\nsuitable SEO approach."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [791, 1297, 166, 34],
                  "r": 9,
                  "f": [13.4, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=SEO%20Services"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1350, 1576],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1356, 1024],
            "lines": [90, 23, 282],
            "al": "c",
            "f": [20, 700, 24, "O"],
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1389,
          "rowH": 18,
          "rowGap": 4.8,
          "bottom": 43,
          "f": [12.4, 700, 13, "O"],
          "cols": [[55, 440], [530, 440]],
          "items": [
            {
              "q": "What are SEO services?",
              "a": "SEO services help improve a website so that search engines can better discover, understand and evaluate its pages for relevant searches. They cover content, structure, technical checks and the overall user experience."
            },
            {
              "q": "Why does my business website need SEO?",
              "a": "SEO helps improve your website’s search presence, reach the right audience and build a stronger online foundation for your business."
            },
            {
              "q": "What is the difference between on-page and off-page SEO?",
              "a": "On-page SEO optimises your own pages, such as titles, meta descriptions, headings, content, images, URLs and internal links. Off-page SEO works on relevant online activities outside your website, such as quality references, brand mentions and suitable backlink opportunities."
            },
            {
              "q": "What is technical SEO?",
              "a": "Technical SEO reviews and improves technical factors such as crawlability, indexing, sitemaps, redirects, canonical tags and mobile usability."
            },
            {
              "q": "Do you provide local SEO services?",
              "a": "Yes. Local SEO can include Google Business Profile optimisation, local keywords, business information and location-focused content."
            },
            {
              "q": "Can you optimise an existing website?",
              "a": "Yes. Our process starts with a website review, followed by keyword research, SEO planning and implementation on your existing website."
            },
            {
              "q": "How long does SEO take to show results?",
              "a": "It depends on the website and its competition. We discuss the expected work and a practical timeline before starting."
            },
            {
              "q": "Can SEO guarantee the first position on Google?",
              "a": "No. SEO helps search engines better understand and evaluate your pages, but rankings are decided by the search engines themselves."
            },
            {
              "q": "Do you provide keyword research?",
              "a": "Yes. We identify the right keywords, understand user intent and find relevant opportunities for your website."
            },
            {
              "q": "Do I need SEO for a new website?",
              "a": "SEO helps a new website build a stronger online foundation, with organised content, a clear structure and technical checks from the start."
            },
            {
              "q": "Can SEO improve website traffic?",
              "a": "SEO aims to bring better visibility and more relevant traffic by helping search engines discover and understand your pages."
            },
            {
              "q": "How can I start SEO services with CRETECH?",
              "a": "Share your website and business details with us through the contact form. We will review your requirements and suggest a suitable SEO approach."
            }
          ]
        }
      }
    },
    {
      "slug": "google-ads-services",
      "title": "Google Ads Services",
      "icon": "◉",
      "short": "Targeted campaigns to reach the right audience.",
      "summary": "Campaign setup and audience-focused advertising support.",
      "image": "photo-1551288049-bebda4e38f71",
      "intro": "Google Ads can put your business in front of people who are already searching for what you offer. We help set up campaigns around your goals and budget.",
      "features": [
        "Campaign planning based on your goals",
        "Campaign and ad setup",
        "Audience and keyword targeting",
        "Budget-focused approach",
        "Ongoing advertising support"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/google-ads-services/",
        "theme": "",
        "hero": {
          "eyebrow": "Google Ads Services",
          "title": "Grow Your Business\nwith *Google Ads*",
          "text": "Reach the right audience, generate quality enquiries and promote your products or services with targeted Google Ads campaigns.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Google%20Ads%20Services"
          },
          "image": "assets/images/svc/google-ads-services/hero.jpg",
          "imageAlt": "Google Ads search screen with a rising bar chart, a target and a note listing Target Audience, Quality Leads, More Enquiries and Business Growth"
        },
        "body": {
          "y": [328, 1278],
          "items": [
            {
              "t": "txt",
              "tag": "h2",
              "box": [54, 334, 221],
              "f": [24, 700, 26.5, "O"],
              "c": "#4a0838",
              "text": "Get Real Visibility\nfor *Your Business*"
            },
            {
              "t": "txt",
              "tag": "p",
              "box": [54, 396, 271.5],
              "f": [13, 500, 16.3, "L"],
              "text": "We plan, set up and manage Google Ads\ncampaigns that bring your products or\nservices in front of people who are\nactually looking for them."
            },
            {
              "t": "grp",
              "box": [350, 340, 650, 128],
              "tiles": { "icons": ["gSearch", "gImage", "youtube", "gCart", "gLayers", "gPhone"], "cls": "gl", "mx": 11, "my": 11, "h": 92, "g": 15, "r": 10, "iy": 16, "is": 35, "shelf": [110, 12] },
              "alt": "Icons for Search, Display, Video, Shopping, Performance Max and App campaigns",
              "kids": [
                { "t": "txt", "tag": "h3", "box": [386.5, 411, 41], "al": "c", "f": [12.5, 700, 15, "O"], "c": "#1e1a22", "text": "Search" },
                { "t": "txt", "tag": "h3", "box": [491.5, 411, 42.5], "al": "c", "f": [12.5, 700, 15, "O"], "c": "#1e1a22", "text": "Display" },
                { "t": "txt", "tag": "h3", "box": [599.5, 411, 36], "al": "c", "f": [12.5, 700, 15, "O"], "c": "#1e1a22", "text": "Video" },
                { "t": "txt", "tag": "h3", "box": [695, 411, 57.5], "al": "c", "f": [12.5, 700, 15, "O"], "c": "#1e1a22", "text": "Shopping" },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [792.5, 405, 75.5],
                  "al": "c",
                  "f": [12.5, 700, 14.3, "O"],
                  "c": "#1e1a22",
                  "text": "Performance\nMax"
                },
                { "t": "txt", "tag": "h3", "box": [925, 411, 25], "al": "c", "f": [12.5, 700, 15, "O"], "c": "#1e1a22", "text": "App" }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 470, 1024],
              "lines": [120, 46, 288],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "c": "#4a0838",
              "text": "Our Google Ads Services"
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 508, 480, 136],
              "src": "assets/images/svc/google-ads-services/c1.jpg",
              "alt": "Notebook titled Ad Strategy with Goal, Audience, Budget and Campaign Type ticked",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [58, 519, 101], "f": [19, 700, 20.5, "O"], "c": "#4a0838", "text": "Campaign\n*Planning*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [58, 567, 169],
                  "f": [13, 500, 16, "L"],
                  "text": "Understand your business\ngoal and plan the right\nGoogle Ads strategy."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 508, 480, 136],
              "src": "assets/images/svc/google-ads-services/c2.jpg",
              "alt": "Magnifying glass over keywords such as website development, digital marketing and business website",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [542, 519, 93], "f": [19, 700, 20.5, "O"], "c": "#4a0838", "text": "Keyword\n*Research*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [542, 567, 171],
                  "f": [13, 500, 16, "L"],
                  "text": "Find relevant and\nhigh-intent keywords to\nreach the right customers."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 652, 480, 136],
              "src": "assets/images/svc/google-ads-services/c3.jpg",
              "alt": "Ad mockup with an image and colour tiles",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [58, 662, 129.5], "f": [19, 700, 20.5, "O"], "c": "#4a0838", "text": "Ad Copy and\n*Creative*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [58, 709.5, 168.5],
                  "f": [13, 500, 16, "L"],
                  "text": "Create clear, relevant and\nattention-grabbing ads\nthat communicate your\nbusiness offering."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 652, 480, 136],
              "src": "assets/images/svc/google-ads-services/c4.jpg",
              "alt": "Location pin on a map",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [542, 662, 191],
                  "f": [19, 700, 20.5, "O"],
                  "c": "#4a0838",
                  "text": "Audience and\n*Location Targeting*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [542, 709.5, 182.5],
                  "f": [13, 500, 16, "L"],
                  "text": "Reach the right people\nbased on location, interests,\ndemographics and business\ngoals."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 796, 480, 136],
              "src": "assets/images/svc/google-ads-services/c5.jpg",
              "alt": "Landing page with an Enquire Now button and a growth chart",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [59, 803, 206.5],
                  "f": [19, 700, 20.5, "O"],
                  "c": "#4a0838",
                  "text": "Landing Page and\n*Conversion Tracking*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 850, 183],
                  "f": [13, 500, 16, "L"],
                  "text": "Use a relevant landing page\nand tracking setup to\nmeasure important actions\nlike enquiries or purchases."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 796, 480, 136],
              "src": "assets/images/svc/google-ads-services/c6.jpg",
              "alt": "Performance dashboard with a bar chart and a refresh icon",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [542, 802, 209.5],
                  "f": [19, 700, 20.5, "O"],
                  "c": "#4a0838",
                  "text": "Campaign Monitoring\n*and Optimisation*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [542, 848.5, 190],
                  "f": [13, 500, 16, "L"],
                  "text": "Review performance, identify\nimprovements and make\nnecessary changes for\nbetter results."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 933, 1024],
              "lines": [128, 26, 275],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "c": "#4a0838",
              "text": "Our Google Ads Process"
            },
            {
              "t": "grp",
              "box": [30, 966, 966, 112],
              "src": "assets/images/svc/google-ads-services/proc.jpg",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [78, 991, 66],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Initial\nDiscussion"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [241, 991, 63],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Campaign\nPlanning"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [392, 991, 83],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Setup and\nConfiguration"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [554, 991, 78],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Tracking and\nReview"
                },
                { "t": "txt", "tag": "h3", "box": [724, 991, 63], "al": "c", "f": [13, 700, 13.5, "O"], "c": "#1e1a22", "text": "Campaign\nLaunch" },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [872, 991, 94],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Monitoring and\nOptimisation"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [55, 1024, 112],
                  "al": "c",
                  "f": [11, 500, 13, "L"],
                  "text": "Understand your\nbusiness, goals\nand target audience."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [216, 1024, 113],
                  "al": "c",
                  "f": [11, 500, 13, "L"],
                  "text": "Select campaign\ntype, keywords,\nlocations and budget."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [374, 1024, 120],
                  "al": "c",
                  "f": [11, 500, 13, "L"],
                  "text": "Create ads, set up\ntargeting and configure\nthe campaign."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545, 1024, 97],
                  "al": "c",
                  "f": [11, 500, 13, "L"],
                  "text": "Set up conversion\ntracking and review\nthe campaign."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [688, 1024, 134],
                  "al": "c",
                  "f": [11, 500, 13, "L"],
                  "text": "Submit for Google\nreview and start the\ncampaign (after approval)."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [866, 1024, 106],
                  "al": "c",
                  "f": [11, 500, 13, "L"],
                  "text": "Regularly review\nperformance and\nmake improvements."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1086, 480, 110],
              "src": "assets/images/svc/google-ads-services/types2.jpg",
              "alt": "Megaphone",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [187.5, 1103, 280],
                  "f": [18, 700, 20, "O"],
                  "c": "#4a0838",
                  "text": "Types of *Google Ads Campaigns*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [187.5, 1129, 251.5],
                  "f": [12.5, 500, 14.8, "L"],
                  "text": "Search, Display, Video (YouTube), Shopping,\nPerformance Max and App campaigns,\nbased on your business objectives."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1086, 480, 110],
              "src": "assets/images/svc/google-ads-services/who.jpg",
              "alt": "Target with an arrow in the centre",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [682.5, 1101, 165], "f": [19, 700, 21, "O"], "c": "#4a0838", "text": "Who Can *Benefit?*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [682.5, 1128, 284],
                  "f": [12.5, 500, 15.3, "L"],
                  "text": "Startups, small businesses, e-commerce stores,\nlocal service providers, educational institutions,\nreal estate, consultants and more."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1204, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [74, 1216, 292],
                  "f": [21, 700, 25, "O"],
                  "c": "#fff",
                  "em": "#ff9a1c",
                  "text": "Promote Your Business with\nGoogle Ads and *CRETECH*"
                },
                { "t": "rect", "box": [396, 1221, 1, 40], "bg": "rgba(255,255,255,.45)", "m": 0 },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [424.5, 1217.5, 329],
                  "f": [12.5, 400, 15.3, "L"],
                  "c": "#fff",
                  "text": "Share your business details, target locations and goals\nwith us. We will plan and manage a Google Ads campaign\nthat suits your business."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [789, 1224, 180, 37],
                  "f": [14.5, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=Google%20Ads%20Services"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1278, 1562],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1282, 1024],
            "lines": [130, 28, 292],
            "al": "c",
            "f": [21, 700, 26, "O"],
            "c": "#4a0838",
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1316,
          "rowH": 21,
          "rowGap": 2,
          "bottom": 82,
          "f": [13, 800, 13, "O"],
          "cols": [[72, 420], [531, 423]],
          "items": [
            {
              "q": "What are Google Ads services?",
              "a": "We plan, set up and manage Google Ads campaigns that bring your products or services in front of people who are actually looking for them."
            },
            {
              "q": "Which types of Google Ads campaigns can you work on?",
              "a": "We work on Search, Display, Video (YouTube), Shopping, Performance Max and App campaigns, based on your business objectives."
            },
            {
              "q": "How much budget is required for Google Ads?",
              "a": "The budget depends on your goals and target locations. We discuss it with you and select the budget while planning the campaign."
            },
            {
              "q": "Is Google Ads payment included in your service charges?",
              "a": "Your Google Ads budget and our service charges are discussed separately during planning, so you know what each part covers."
            },
            {
              "q": "Can Google Ads help my local business get enquiries?",
              "a": "Yes. Campaigns can target specific locations and audiences to reach the right people and help generate quality enquiries."
            },
            {
              "q": "Do I need a website to run Google Ads?",
              "a": "A relevant landing page helps with tracking and measuring important actions like enquiries or purchases. We discuss the best setup for your business."
            },
            {
              "q": "Can you help with keyword research?",
              "a": "Yes. We find relevant and high-intent keywords to reach the right customers for your campaigns."
            },
            {
              "q": "What is conversion tracking?",
              "a": "Conversion tracking measures important actions such as enquiries or purchases, so campaign results can be reviewed and improved."
            },
            {
              "q": "How soon will my advertisements start showing?",
              "a": "After setup, the campaign is submitted for Google review and starts once it is approved."
            },
            {
              "q": "Can I target specific cities or locations?",
              "a": "Yes. We can target people based on location, interests, demographics and business goals."
            },
            {
              "q": "Do you provide ongoing Google Ads management?",
              "a": "Yes. We regularly review performance, identify improvements and make necessary changes for better results."
            },
            {
              "q": "Can you guarantee leads or sales through Google Ads?",
              "a": "No. Results depend on many factors, but we plan, track and optimise your campaigns to work towards your business goals."
            },
            {
              "q": "Can I use my existing Google Ads account?",
              "a": "Yes. Share your account details with us and we will review your current campaigns and discuss the next steps."
            },
            {
              "q": "How can I start Google Ads services with CRETECH?",
              "a": "Share your business details, target locations and goals with us. We will plan and manage a Google Ads campaign that suits your business."
            }
          ]
        }
      }
    },
    {
      "slug": "social-media-marketing",
      "title": "Social Media Marketing",
      "icon": "◈",
      "short": "Build your brand and engage your audience.",
      "summary": "Social media content planning, creative posts and brand communication.",
      "image": "photo-1611162617474-5b21e879e113",
      "intro": "Social media is where many people meet your brand. We help you plan content and communicate consistently with your audience.",
      "features": ["Social media content planning", "Creative posts", "Brand communication", "Profile setup support", "Consistent posting approach"],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/social-media-marketing/",
        "theme": "",
        "hero": {
          "eyebrow": "Social Media Marketing Services",
          "title": "Social Media Marketing\nServices to Build Your\n*Online Presence*",
          "text": "Plan, create and manage your social media presence with the right content, visuals and communication that reflects your brand and reaches the right audience.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Social%20Media%20Marketing"
          },
          "image": "assets/images/svc/social-media-marketing/hero.jpg",
          "imageAlt": "Laptop showing a social media marketing dashboard with a phone and social media icons"
        },
        "body": {
          "y": [306, 1296],
          "items": [
            {
              "t": "txt",
              "tag": "h2",
              "box": [66, 317, 317.5],
              "f": [25, 800, 25.5, "O"],
              "c": "#45063c",
              "text": "Social Media Marketing for\n*Your Business*"
            },
            {
              "t": "txt",
              "tag": "p",
              "box": [66, 373.5, 390],
              "f": [13, 400, 14.5, "L"],
              "text": "Social media helps businesses communicate with customers,\nshare updates, promote services and build long-term\nrelationships. At CRETECH, we provide social media marketing\nservices for startups, small businesses, individuals and\norganisations that want a consistent and professional\nonline presence."
            },
            {
              "t": "img",
              "box": [482, 319, 250, 125],
              "src": "assets/images/svc/social-media-marketing/intro.jpg",
              "alt": "Hands holding a phone showing a social media profile",
              "cls": "rd"
            },
            {
              "t": "card",
              "cls": "flat ckb tb",
              "box": [740, 320, 232, 148],
              "v": { "il": 5, "it": 6.5, "ir": 6, "ib": 7, "tw": 15.5, "th": 11.5, "tg": 15 },
              "alt": "",
              "kids": [
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [797.5, 340.5, 133.5],
                  "f": [13, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Build Brand Presence",
                  "cls": "ck"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [797.5, 369.5, 142.5],
                  "f": [13, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Engage Your Audience",
                  "cls": "ck"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [797.5, 398.5, 143.5],
                  "f": [13, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Promote Your Services",
                  "cls": "ck"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [797.5, 427.5, 143.5],
                  "f": [13, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Stay Consistent Online",
                  "cls": "ck"
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 473.5, 1024],
              "lines": [75, 19.5, 422.5],
              "al": "c",
              "f": [23, 800, 26, "O"],
              "c": "#45063c",
              "text": "Our Social Media Platform Management"
            },
            {
              "t": "grp",
              "box": [46, 500, 930, 92],
              "tiles": { "icons": ["instagram", "facebook", "linkedin", "youtube", "socialMore"], "mx": 6, "my": 5, "g": 14.5, "r": 14, "iy": 7, "is": 33 },
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [106, 546.5, 65],
                  "al": "c",
                  "f": [13.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Instagram\nMarketing"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [293.5, 546.5, 64],
                  "al": "c",
                  "f": [13.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Facebook\nMarketing"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [480, 546.5, 64],
                  "al": "c",
                  "f": [13.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "LinkedIn\nMarketing"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [667.5, 546.5, 63.5],
                  "al": "c",
                  "f": [13.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "YouTube\nMarketing"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [834, 546.5, 105],
                  "al": "c",
                  "f": [13.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Other Platforms\nMarketing"
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 598, 480, 136],
              "src": "assets/images/svc/social-media-marketing/s1.jpg",
              "alt": "Laptop showing a social media strategy with goals, audience, platforms and content",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [56, 606, 205],
                  "f": [18, 800, 18.5, "O"],
                  "c": "#45063c",
                  "text": "Social Media Strategy\n*Based on Your Business*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [56, 648.5, 181],
                  "f": [13, 400, 14.1, "L"],
                  "text": "We understand your business,\naudience and goals to plan a\nsocial media approach that\nmatches your brand and\ncommunication style."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 598, 480, 136],
              "src": "assets/images/svc/social-media-marketing/s2.jpg",
              "alt": "Content plan notepad with post ideas, visuals, captions and schedule",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [543, 606, 183.5],
                  "f": [18, 800, 18.5, "O"],
                  "c": "#45063c",
                  "text": "Social Media *Content*\n*Planning*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [543, 646, 212],
                  "f": [13, 400, 13, "L"],
                  "text": "We plan different types of content\nsuch as service posts, product\nhighlights, informative content,\nfestival posts, engagement posts\nand more, based on your business\nrequirements."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 734, 480, 136],
              "src": "assets/images/svc/social-media-marketing/s3.jpg",
              "alt": "Tablet showing a design editor and colourful post templates",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [56, 747, 170.5],
                  "f": [18, 800, 18.5, "O"],
                  "c": "#45063c",
                  "text": "Graphic Design and\n*Creative Posts*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [56, 790, 198.5],
                  "f": [13, 400, 13.75, "L"],
                  "text": "We create professional and\nbrand-focused visuals, including\npost designs, banners, carousel\nposts, story creatives and\ncampaign graphics."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 734, 480, 136],
              "src": "assets/images/svc/social-media-marketing/s4.jpg",
              "alt": "Phone showing a caption with hashtags",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [543, 747, 196],
                  "f": [18, 800, 18.5, "O"],
                  "c": "#45063c",
                  "text": "Social Media Captions\n*and Hashtag Research*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [543, 790, 220.5],
                  "f": [13, 400, 14.5, "L"],
                  "text": "We write clear and relevant captions\nand suggest suitable hashtags to\nimprove the reach and visibility of\nyour posts."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 870, 480, 136],
              "src": "assets/images/svc/social-media-marketing/s5.jpg",
              "alt": "Phone with like and comment notifications",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [56, 880, 231.5],
                  "f": [18, 800, 18.5, "O"],
                  "c": "#45063c",
                  "text": "Brand Awareness\n*and Audience Engagement*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [56, 922, 214],
                  "f": [13, 400, 14, "L"],
                  "text": "We help you stay connected with\nyour audience through meaningful\nand relevant content, including\nquestions, polls, updates and\nother engagement formats."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 870, 480, 136],
              "src": "assets/images/svc/social-media-marketing/s6.jpg",
              "alt": "Content calendar with a pen",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [543, 880, 167],
                  "f": [18, 800, 18.5, "O"],
                  "c": "#45063c",
                  "text": "Content Calendar\n*and Publishing Plan*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [543, 922, 208],
                  "f": [13, 400, 14, "L"],
                  "text": "We organise a monthly or project-\nbased content calendar with post\ntopics, platforms, publishing dates\nand creative requirements to\nmaintain consistency and planning."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 1010.5, 1024],
              "lines": [88, 21.5, 339.5],
              "al": "c",
              "f": [23, 800, 26, "O"],
              "c": "#45063c",
              "text": "Our Social Media Marketing Process"
            },
            {
              "t": "grp",
              "box": [42, 1036, 936, 72],
              "src": "assets/images/svc/social-media-marketing/proc.jpg",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [94, 1067.5, 62.5],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Business\nDiscussion"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [253.5, 1067.5, 55],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Platform\nSelection"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [409, 1067.5, 52],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Content\nPlanning"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [550, 1067.5, 80],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Creative\nDevelopment"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [705, 1067.5, 77.5],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Review &\nCoordination"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [865, 1067.5, 74],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Publishing &\nMonitoring"
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1110, 480, 110],
              "src": "assets/images/svc/social-media-marketing/b1.jpg",
              "alt": "Laptop showing a rising bar chart",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [201, 1124.5, 188],
                  "f": [16, 800, 17.5, "O"],
                  "c": "#45063c",
                  "text": "Social Media Marketing for\n*Startups and Businesses*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [201, 1164.5, 288],
                  "f": [12, 400, 13.2, "L"],
                  "text": "We work with startups, small businesses,\nindividuals and established organisations to\nbuild and maintain a strong social media presence."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1110, 480, 110],
              "src": "assets/images/svc/social-media-marketing/b2.jpg",
              "alt": "Stacks of gold coins",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [681, 1124.5, 174],
                  "f": [16, 800, 17.5, "O"],
                  "c": "#45063c",
                  "text": "Social Media Marketing\n*Cost and Timeline*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [681, 1164.5, 286.5],
                  "f": [12, 400, 13.2, "L"],
                  "text": "The cost depends on the number of platforms,\nmonthly content requirements, creative complexity,\nposting frequency and management activities."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1223, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [84.5, 1237, 320],
                  "f": [18.5, 600, 21.5, "P", 0],
                  "c": "#fff",
                  "em": "#ffa21c",
                  "text": "Build a Consistent\nSocial Media Presence with *CRETECH*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [462, 1238.5, 292.5],
                  "f": [11, 400, 13, "L"],
                  "c": "#fff",
                  "text": "Share your business details, preferred platforms and\ncontent requirements with us. We will review your needs\nand discuss a suitable social media marketing plan."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [789, 1244, 163, 33],
                  "r": 9,
                  "f": [13.4, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=Social%20Media%20Marketing"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1296, 1542],
          "waves": true,
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1299.5, 1024],
            "lines": [100, 25, 264],
            "al": "c",
            "f": [20, 800, 24, "O"],
            "c": "#45063c",
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1332,
          "rowH": 17,
          "rowGap": 4.7,
          "bottom": 49,
          "f": [12.2, 700, 13, "O"],
          "cols": [[58, 438], [526, 441]],
          "items": [
            {
              "q": "Which social media platforms do you support?",
              "a": "We manage Instagram, Facebook, LinkedIn and YouTube marketing, as well as other platforms, depending on your business."
            },
            {
              "q": "Can you manage multiple social media accounts?",
              "a": "Yes. Platform selection is part of our process, and we can plan and manage content across the platforms that suit your business."
            },
            {
              "q": "Do you create social media posts and graphics?",
              "a": "Yes. We create professional, brand-focused visuals, including post designs, banners, carousel posts, story creatives and campaign graphics."
            },
            {
              "q": "Do you write captions for social media posts?",
              "a": "Yes. We write clear and relevant captions and suggest suitable hashtags to improve the reach and visibility of your posts."
            },
            {
              "q": "Can you prepare a monthly content calendar?",
              "a": "Yes. We organise a monthly or project-based content calendar with post topics, platforms, publishing dates and creative requirements."
            },
            {
              "q": "Do you create reels and short-video content?",
              "a": "Content types are planned around your business requirements and the platforms you use. Share your needs with us and we will discuss what can be included."
            },
            {
              "q": "Can you help improve my business’s social media presence?",
              "a": "Yes. We help you build brand presence, engage your audience, promote your services and stay consistent online."
            },
            {
              "q": "Will you guarantee followers or engagement?",
              "a": "No. We focus on meaningful, relevant content and consistent planning to help you stay connected with your audience, but we do not guarantee specific results."
            },
            {
              "q": "Do I need to provide my social media account passwords?",
              "a": "Account access is discussed with you when we plan the work, based on the platforms and tasks involved."
            },
            {
              "q": "Is paid advertising included in social media marketing?",
              "a": "The scope of work is agreed for each project. Share your requirements with us and we will discuss what is included in your plan."
            },
            {
              "q": "Can you create content according to my brand colours and logo?",
              "a": "Yes. We create brand-focused visuals and plan an approach that matches your brand and communication style."
            },
            {
              "q": "How much does social media marketing cost?",
              "a": "The cost depends on the number of platforms, monthly content requirements, creative complexity, posting frequency and management activities."
            },
            {
              "q": "What kind of results can I expect?",
              "a": "Social media marketing helps you build brand presence, engage your audience and stay consistent online. Results depend on your business, audience and platforms."
            },
            {
              "q": "How can I start social media marketing with CRETECH?",
              "a": "Share your business details, preferred platforms and content requirements with us. We will review your needs and discuss a suitable social media marketing plan."
            }
          ]
        }
      }
    },
    {
      "slug": "email-creation-setup",
      "title": "Email Creation & Setup",
      "hideFromMenu": true,
      "icon": "✉",
      "short": "Create professional email accounts and manage business communication.",
      "summary": "Professional business email creation and setup assistance.",
      "image": "photo-1557200134-90327ee9fafa",
      "intro": "A professional email address on your own domain builds trust. We help you create and set up business email accounts.",
      "features": [
        "Business email on your own domain",
        "Account creation and setup",
        "Setup on phone and computer",
        "Basic email configuration",
        "Setup assistance and guidance"
      ]
    },
    {
      "slug": "content-writing",
      "title": "Content Writing",
      "icon": "▤",
      "short": "Clear, engaging and SEO-friendly content.",
      "summary": "Website pages, service descriptions, blogs and SEO-friendly content.",
      "image": "photo-1455390582262-044cdead277a",
      "intro": "Clear words help visitors understand what you do. We write content for your website and marketing that is easy to read and search-friendly.",
      "features": ["Website page content", "Service descriptions", "Blog articles", "SEO-friendly writing", "Editing and proofreading"],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/content-writing/",
        "theme": "",
        "hero": {
          "eyebrow": "Content Writing Services",
          "title": "Content Writing Services\nfor Websites and\n*Digital Platforms*",
          "text": "Well-structured, clear and relevant content that explains your business, engages your audience and supports your online goals.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Content%20Writing"
          },
          "image": "assets/images/svc/content-writing/hero.jpg",
          "imageAlt": "Notebook titled Content Writing with ticked items, a pen, a plant and a stack of books"
        },
        "body": {
          "y": [302, 1320],
          "items": [
            {
              "t": "txt",
              "tag": "h2",
              "box": [65, 314, 361],
              "f": [24, 700, 25, "O"],
              "c": "#4a0838",
              "text": "Professional Content Writing for\n*Your Business*"
            },
            {
              "t": "txt",
              "tag": "p",
              "box": [65, 370, 377],
              "f": [13, 500, 15.4, "L"],
              "text": "Content helps people understand a business, its services\nand the information it wants to communicate. At CRETECH,\nwe provide content writing services for websites, blogs,\nsocial media and other digital platforms, with a focus on\nclarity, relevance and your brand's communication style."
            },
            {
              "t": "img",
              "box": [452, 312, 266, 133],
              "src": "assets/images/svc/content-writing/intro.jpg",
              "alt": "Stack of books and a pen holder with pens",
              "cls": "rd"
            },
            {
              "t": "card",
              "cls": "flat ckb",
              "box": [726, 318, 252, 140],
              "v": { "il": 8, "it": 5, "ir": 8, "ib": 8 },
              "kids": [
                {
                  "t": "list",
                  "box": [753, 331, 200],
                  "row": 27.3,
                  "ck": 17,
                  "cg": 12,
                  "f": [14, 700, 16, "O"],
                  "c": "#1e1a22",
                  "items": ["Clear and Engaging Writing", "SEO-Friendly Content", "Relevant to Your Audience", "Aligned with Your Brand"]
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 457, 1024],
              "lines": [77, 25, 315],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "c": "#4a0838",
              "text": "Our Content Writing Services"
            },
            {
              "t": "grp",
              "box": [46, 492, 936, 68],
              "tiles": { "n": 6, "cls": "pl", "mx": 8, "my": 5, "g": 12.4, "r": 15 },
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [80, 508, 94],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Website\nContent Writing"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [234, 508, 93],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "SEO\nContent Writing"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [393, 508, 87],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Blog and\nArticle Writing"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [548, 508, 88],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Business and\nBrand Content"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [691, 508, 113],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Social Media\nContent & Captions"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [860, 508, 85],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Other Content\nWriting"
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 572, 480, 136],
              "src": "assets/images/svc/content-writing/c1.jpg",
              "alt": "Notebook checklist with Homepage, About Us, Services and FAQ",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [54, 586, 212], "f": [19, 700, 22, "O"], "c": "#4a0838", "text": "Website *Content Writing*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [54, 615, 224],
                  "f": [13, 500, 15.5, "L"],
                  "text": "We write clear and purpose-driven\nwebsite content, including homepage,\nAbout Us, service pages, contact\npages, landing pages and FAQs."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 572, 480, 136],
              "src": "assets/images/svc/content-writing/c2.jpg",
              "alt": "Magnifying glass over the words SEO Content",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [539, 586, 178], "f": [19, 700, 22, "O"], "c": "#4a0838", "text": "SEO *Content Writing*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [539, 615, 219],
                  "f": [13, 500, 15.8, "L"],
                  "text": "We create SEO-friendly content with\nrelevant keywords, proper headings\nand a structured format to improve\nsearch visibility and page relevance."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 710, 480, 136],
              "src": "assets/images/svc/content-writing/c3.jpg",
              "alt": "Books labelled Blog and Article",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [54, 731, 205], "f": [19, 700, 22, "O"], "c": "#4a0838", "text": "Blog and Article *Writing*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [54, 760, 237],
                  "f": [13, 500, 14.8, "L"],
                  "text": "We write informative, educational\nand industry-related blog articles\nthat share useful information, answer\nqueries and add value for your readers."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 710, 480, 136],
              "src": "assets/images/svc/content-writing/c4.jpg",
              "alt": "Card titled Brand Content",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [539, 731, 236], "f": [19, 700, 22, "O"], "c": "#4a0838", "text": "Business and *Brand Content*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [539, 760, 207],
                  "f": [13, 500, 14.8, "L"],
                  "text": "We create business profiles, brand\nmessages, service introductions,\nproduct descriptions, promotional\ncontent and other business copy."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 848, 480, 136],
              "src": "assets/images/svc/content-writing/c5.jpg",
              "alt": "Phone showing a post caption with a like icon",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [54, 853, 184],
                  "f": [19.5, 700, 21, "O"],
                  "c": "#4a0838",
                  "text": "Social Media Content\n*and Captions*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [54, 899.5, 233],
                  "f": [13, 500, 14.75, "L"],
                  "text": "We write short, clear and engaging\ncaptions for Instagram, Facebook,\nLinkedIn and other platforms, including\npromotional, informational and\ncampaign-based content."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 848, 480, 136],
              "src": "assets/images/svc/content-writing/c6.jpg",
              "alt": "Checklist with Clear Headings, Simple Language, Logical Flow and Readable Format",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [539, 853, 165],
                  "f": [19.5, 700, 21, "O"],
                  "c": "#4a0838",
                  "text": "Content Structure\n*and Readability*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [539, 899.5, 232],
                  "f": [13, 500, 15.5, "L"],
                  "text": "We organise content with clear\nheadings, short paragraphs, logical\nflow and consistent language to\nmake it easy to read and understand."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 987, 1024],
              "lines": [102, 42, 274],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "c": "#4a0838",
              "text": "Our Content Writing Process"
            },
            {
              "t": "grp",
              "box": [36, 1018, 952, 114],
              "src": "assets/images/svc/content-writing/proc.jpg",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [81, 1043.5, 75],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Requirement\nDiscussion"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [253, 1043.5, 51],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Content\nPlanning"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [399, 1043.5, 75],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Research and\nPreparation"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [571, 1043.5, 46],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Content\nWriting"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [720, 1043.5, 58],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Review and\nEditing"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [882, 1043.5, 49],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Final\nDelivery"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [57, 1078.5, 112],
                  "f": [10.5, 500, 12.3, "L"],
                  "text": "We understand your\nbusiness, topic, target"
                },
                { "t": "txt", "tag": "p", "box": [56, 1103.1, 135], "f": [9.6, 500, 12.3, "L"], "text": "audience and content purpose." },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [225, 1078.5, 107],
                  "al": "c",
                  "f": [10.5, 500, 12.3, "L"],
                  "text": "We identify the pages,\ntopics, headings and\ninformation required."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [376, 1078.5, 120],
                  "al": "c",
                  "f": [10.5, 500, 12.3, "L"],
                  "text": "We review the information\nand prepare a suitable\ncontent structure."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [536, 1078.5, 116],
                  "al": "c",
                  "f": [10.5, 500, 12.3, "L"],
                  "text": "We write the content\naccording to the agreed\ntone, length and format."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [700, 1078.5, 98],
                  "al": "c",
                  "f": [10.5, 500, 12.3, "L"],
                  "text": "We check readability,\ngrammar, structure\nand consistency."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [845, 1078.5, 123],
                  "al": "c",
                  "f": [10.5, 500, 12.3, "L"],
                  "text": "We provide the completed\ncontent in the agreed\nformat for publishing."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1134, 480, 110],
              "src": "assets/images/svc/content-writing/ind.jpg",
              "alt": "Stacked books with reading glasses",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [227, 1146, 151],
                  "f": [17, 700, 18.5, "O"],
                  "c": "#4a0838",
                  "text": "Content Writing for\n*Different Industries*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [227, 1187, 248],
                  "f": [12, 500, 14, "L"],
                  "text": "We prepare content for various industries,\nincluding technology, education, e-commerce,\nservice-based businesses and more."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1134, 480, 110],
              "src": "assets/images/svc/content-writing/cost.jpg",
              "alt": "Hourglass",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [662, 1146, 273],
                  "f": [18, 700, 21, "O"],
                  "c": "#4a0838",
                  "text": "Content Writing *Cost and Timeline*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [662, 1174.5, 308],
                  "f": [12, 500, 13.5, "L"],
                  "text": "The cost depends on the type of content, word count,\nresearch needs, subject complexity and number of pages.\nThe expected cost, deliverables and timeline are discussed\nbefore the project begins."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1246, 968, 74],
              "kids": [
                { "t": "txt", "tag": "h2", "box": [89, 1255, 270], "f": [22, 700, 24, "O"], "c": "#fff", "text": "Communicate Your Business" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [89, 1279, 239],
                  "f": [23, 700, 24, "O", -0.03],
                  "c": "#fff",
                  "em": "#ff7a1c",
                  "text": "Clearly with *CRETECH*"
                },
                { "t": "rect", "box": [398, 1263, 1, 40], "bg": "rgba(255,255,255,.45)", "m": 0 },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [437, 1259.5, 291],
                  "f": [12.5, 400, 14.5, "L"],
                  "c": "#fff",
                  "text": "Share your website, topic or content brief with us.\nWe will understand what you need and discuss\na suitable content writing approach."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [784, 1264, 173, 36],
                  "f": [14.5, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=Content%20Writing"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1320, 1558],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1321.5, 1024],
            "lines": [72, 28, 272],
            "al": "c",
            "f": [21, 700, 26, "O"],
            "c": "#4a0838",
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1355,
          "rowH": 22,
          "rowGap": 1.66,
          "bottom": 51,
          "f": [12.4, 800, 13, "O"],
          "cols": [[70, 420], [532, 420]],
          "items": [
            {
              "q": "What types of content does CRETECH write?",
              "a": "We write website content, SEO content, blogs and articles, business and brand content, social media content and captions, and other content for digital platforms."
            },
            {
              "q": "Do you provide SEO-friendly content writing?",
              "a": "Yes. We create SEO-friendly content with relevant keywords, proper headings and a structured format to improve search visibility and page relevance."
            },
            {
              "q": "Can you write individual content for every service page?",
              "a": "Yes. Our website content writing covers the homepage, About Us, service pages, contact pages, landing pages and FAQs."
            },
            {
              "q": "Can I request a specific word count?",
              "a": "Yes. Word count is one of the details we discuss before writing, and it is also one of the factors that affects the cost."
            },
            {
              "q": "Do you write blogs and articles?",
              "a": "Yes. We write informative, educational and industry-related blog articles that share useful information, answer queries and add value for your readers."
            },
            {
              "q": "Can you rewrite my existing website content?",
              "a": "Yes. Share your existing content with us and we will discuss how to make it clearer, better structured and more relevant to your audience."
            },
            {
              "q": "Can you follow my brand's writing style?",
              "a": "Yes. We focus on clarity, relevance and your brand's communication style so the content stays aligned with your brand."
            },
            {
              "q": "Do you include FAQs in website content?",
              "a": "Yes. FAQs can be included as part of our website content writing, along with the homepage, service pages and landing pages."
            },
            {
              "q": "Do you provide meta titles and meta descriptions?",
              "a": "Meta titles and descriptions can be discussed as part of SEO content writing when they are included in the agreed scope of your project."
            },
            {
              "q": "How many revisions are included?",
              "a": "Revisions are discussed and agreed before the project begins, along with the expected cost, deliverables and timeline."
            },
            {
              "q": "Do I need to provide all the information before writing?",
              "a": "No. Share your website, topic or content brief, and we review the information and prepare a suitable content structure before writing."
            },
            {
              "q": "How can I start a content writing project?",
              "a": "Share your website, topic or content brief with us. We will understand what you need and discuss a suitable content writing approach."
            }
          ]
        }
      }
    },
    {
      "slug": "graphic-design-creative-content",
      "title": "Graphic Design & Creative Content",
      "icon": "▧",
      "short": "Banners, social media creatives and website visuals for your brand.",
      "summary": "Website banners, social media creatives and digital visual assets.",
      "image": "photo-1558655146-d09347e92766",
      "intro": "Visuals shape how people remember your brand. We create graphics that fit your brand and work across your website and social media.",
      "features": [
        "Website banners",
        "Social media creatives",
        "Digital visual assets",
        "Graphics that match your brand style",
        "Files ready for web and social use"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/graphic-design-creative-content/",
        "theme": "",
        "hero": {
          "eyebrow": "Graphic Design & Creative Content Services",
          "title": "Graphic Design and\nCreative Content\n*for Your Brand*",
          "text": "Visual designs that communicate your message clearly, strengthen your brand identity and create a lasting impression across digital platforms.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Graphic%20Design%20%26%20Creative%20Content"
          },
          "image": "assets/images/svc/graphic-design-creative-content/hero.jpg",
          "imageAlt": "Tablet showing a design app, paint brushes in a jar and colour swatches on a desk"
        },
        "body": {
          "y": [296, 1325],
          "items": [
            {
              "t": "txt",
              "tag": "h2",
              "box": [63.5, 307.6, 375],
              "f": [24, 700, 24.5, "O"],
              "c": "#4a0838",
              "text": "Professional Design Solutions for\n*Your Business*"
            },
            {
              "t": "txt",
              "tag": "p",
              "box": [63.5, 363, 387],
              "f": [13, 500, 16, "L"],
              "text": "We create purpose-driven and brand-aligned visual\ncontent for websites, social media, marketing campaigns\nand other digital platforms. At CRETECH, we focus on\ndesigns that are clear, visually appealing and aligned\nwith your business goals."
            },
            {
              "t": "img",
              "box": [474, 308, 242, 121],
              "src": "assets/images/svc/graphic-design-creative-content/intro.jpg",
              "alt": "Hand drawing on a tablet with a stylus",
              "cls": "rd"
            },
            {
              "t": "card",
              "cls": "flat ckb",
              "box": [724, 306, 254, 142],
              "v": { "il": 6, "it": 5, "ir": 6, "ib": 6 },
              "kids": [
                {
                  "t": "list",
                  "box": [752, 319.6, 200],
                  "row": 28.7,
                  "ck": 17,
                  "cg": 13,
                  "f": [14, 700, 16, "O"],
                  "c": "#1e1a22",
                  "items": ["Brand-Aligned Designs", "Platform-Ready Creatives", "Clear & Impactful Visuals", "Consistent Brand Look"]
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 450.5, 1024],
              "lines": [100, 40, 314],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "c": "#4a0838",
              "text": "Our Graphic Design Services"
            },
            {
              "t": "grp",
              "box": [42, 482, 940, 68],
              "tiles": { "n": 6, "cls": "pl", "mx": 6, "my": 4, "g": 7, "r": 15 },
              "kids": [
                { "t": "txt", "tag": "h3", "box": [99.5, 499, 51], "al": "c", "f": [12.5, 700, 15, "O"], "c": "#1e1a22", "text": "Website\nBanners" },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [243, 499, 78],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Social Media\nGraphics"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [400, 499, 76],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Promotional\nCreatives"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [566, 499, 54],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Business\nGraphics"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [699, 499, 98.5],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Digital\nAdvertisements"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [865, 499, 78],
                  "al": "c",
                  "f": [12.5, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Presentation\nDesigns"
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 566, 480, 136],
              "src": "assets/images/svc/graphic-design-creative-content/c1.jpg",
              "alt": "Website banner mockups",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [59, 578, 159],
                  "f": [18.5, 700, 20, "O"],
                  "c": "#4a0838",
                  "text": "Website Graphics\n*and Banner Design*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 621.6, 216],
                  "f": [12.5, 500, 14.5, "L"],
                  "text": "Eye-catching and relevant banners,\nsection visuals and website graphics\nthat support your content and\nimprove the overall look of your site."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 566, 480, 136],
              "src": "assets/images/svc/graphic-design-creative-content/c2.jpg",
              "alt": "Phone showing a social media post",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [545, 574, 141],
                  "f": [18.5, 700, 19, "O"],
                  "c": "#4a0838",
                  "text": "Social Media\n*Creative Design*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545, 619, 196],
                  "f": [12.5, 500, 15, "L"],
                  "text": "Platform-specific designs for\nInstagram, Facebook, Linkedin\nand more, including posts,\ncarousels, stories and\ncampaign creatives."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 710, 480, 136],
              "src": "assets/images/svc/graphic-design-creative-content/c3.jpg",
              "alt": "Special Offer sign with shopping bags",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [59, 713, 173.6],
                  "f": [18.5, 700, 19, "O"],
                  "c": "#4a0838",
                  "text": "Promotional and\n*Marketing Graphics*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 757.5, 176],
                  "f": [12.5, 500, 15.1, "L"],
                  "text": "Visuals for offers, product\nhighlights, service promotion,\nevents and special campaigns\nto help you communicate\nmore effectively."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 710, 480, 136],
              "src": "assets/images/svc/graphic-design-creative-content/c4.jpg",
              "alt": "Photo cards with a glowing light bulb",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [545, 713, 180.5],
                  "f": [18.5, 700, 19, "O"],
                  "c": "#4a0838",
                  "text": "Creative Content\n*for Digital Platforms*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545, 757.5, 215],
                  "f": [12.5, 500, 15.1, "L"],
                  "text": "A mix of visuals and short, clear\nmessaging for business updates,\nservice explanations, festival\nposts, announcements and\ncampaigns."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 854, 480, 136],
              "src": "assets/images/svc/graphic-design-creative-content/c5.jpg",
              "alt": "Business card with the CRETECH logo and colour swatches",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [59, 861, 201.5],
                  "f": [18.5, 700, 19.5, "O"],
                  "c": "#4a0838",
                  "text": "Brand Identity\n*and Visual Consistency*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 905.5, 202.6],
                  "f": [12.5, 500, 14.9, "L"],
                  "text": "Designs that follow your logo,\ncolours, typography and brand\nstyle to maintain a consistent\nand professional look\nacross all platforms."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 854, 480, 136],
              "src": "assets/images/svc/graphic-design-creative-content/c6.jpg",
              "alt": "Typography card with Aa and colour swatches",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [545, 861, 207],
                  "f": [18.5, 700, 19.5, "O"],
                  "c": "#4a0838",
                  "text": "Design Layout,\n*Typography and Colour*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545, 905.5, 213],
                  "f": [12.5, 500, 14.9, "L"],
                  "text": "Well-structured layouts, readable\ntypography and balanced colour\ncombinations that make your\nmessage easy to understand\nand visually appealing."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 996, 1024],
              "lines": [120, 24, 283.5],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "c": "#4a0838",
              "text": "Our Graphic Design Process"
            },
            {
              "t": "grp",
              "box": [34, 1024, 958, 102],
              "src": "assets/images/svc/graphic-design-creative-content/proc.jpg",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [81.5, 1047, 62.5],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Design\nDiscussion"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [235, 1047, 78],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Reference\nand Planning"
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [401, 1047, 79],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Creative\nDevelopment"
                },
                { "t": "txt", "tag": "h3", "box": [586, 1047, 40.5], "al": "c", "f": [13, 700, 13.5, "O"], "c": "#1e1a22", "text": "Design\nReview" },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [728.5, 1050.5, 65.5],
                  "al": "c",
                  "f": [13, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Finalisation"
                },
                { "t": "txt", "tag": "h3", "box": [892.5, 1050.5, 48.5], "al": "c", "f": [13, 700, 13.5, "O"], "c": "#1e1a22", "text": "Delivery" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [56, 1078.8, 114],
                  "al": "c",
                  "f": [10.5, 500, 12.25, "L"],
                  "text": "We understand your\nrequirements, purpose\nand design expectations."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [222, 1078.8, 103.5],
                  "al": "c",
                  "f": [10.5, 500, 12.25, "L"],
                  "text": "We review your brand\nidentity, references\nand required formats."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [393, 1078.8, 95.5],
                  "al": "c",
                  "f": [10.5, 500, 12.25, "L"],
                  "text": "We create the visual\nlayout, colours and\ndesign elements."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [558, 1078.8, 97],
                  "al": "c",
                  "f": [10.5, 500, 12.25, "L"],
                  "text": "We share the design\nfor your feedback\nand changes."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [712.5, 1078.8, 97.5],
                  "al": "c",
                  "f": [10.5, 500, 12.25, "L"],
                  "text": "We refine the design\nand prepare the\nfinal version."
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [867.5, 1075.5, 96.5],
                  "al": "c",
                  "f": [10.5, 500, 12.25, "L"],
                  "text": "You receive the\nfinal graphics in the\nagreed formats."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1132, 480, 110],
              "src": "assets/images/svc/graphic-design-creative-content/biz.jpg",
              "alt": "Tablet showing a gallery of graphic designs",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [249, 1144.5, 165],
                  "f": [17.5, 700, 18, "O"],
                  "c": "#4a0838",
                  "text": "Graphic Design for\n*Different Businesses*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [249, 1184.5, 197],
                  "f": [12, 500, 13.75, "L"],
                  "text": "We create visuals for startups, small\nbusinesses, established companies\nand individual professionals."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1132, 480, 110],
              "src": "assets/images/svc/graphic-design-creative-content/cost.jpg",
              "alt": "Hourglass",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [656.5, 1142.5, 267.5],
                  "f": [18, 700, 21, "O"],
                  "c": "#4a0838",
                  "text": "Graphic Design *Cost and Timeline*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [656.5, 1170.5, 313.5],
                  "f": [12, 500, 13.8, "L"],
                  "text": "The cost depends on the type of design, number\nof creatives, complexity, dimensions and revision scope.\nThe estimated cost and delivery timeline are discussed\nbefore the project begins."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1251, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [78.5, 1262, 278.5],
                  "f": [21, 700, 21, "O"],
                  "c": "#fff",
                  "em": "#ff7a1c",
                  "text": "Give Your Brand a Clear\nVisual Identity with *CRETECH*"
                },
                { "t": "rect", "box": [393, 1269, 1, 37], "bg": "rgba(255,255,255,.45)", "m": 0 },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [428, 1264, 325],
                  "f": [12, 400, 14, "L"],
                  "c": "#fff",
                  "text": "Share your design idea, brand references and requirements\nwith us. We will understand your needs and discuss\na suitable creative direction."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [785, 1268, 177, 36],
                  "f": [14.5, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=Graphic%20Design%20%26%20Creative%20Content"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1325, 1532],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1324, 1024],
            "lines": [80, 28, 281.5],
            "al": "c",
            "f": [21, 700, 26, "O"],
            "c": "#4a0838",
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1359,
          "rowH": 18,
          "rowGap": 1.6,
          "bottom": 45,
          "f": [11.7, 800, 13, "O"],
          "cols": [[52, 438], [537, 435]],
          "items": [
            {
              "q": "What types of graphic design services does CRETECH provide?",
              "a": "We design website banners, social media graphics, promotional creatives, business graphics, digital advertisements and presentation designs."
            },
            {
              "q": "Can you design graphics according to my brand colours?",
              "a": "Yes. We create designs that follow your logo, colours, typography and brand style to maintain a consistent and professional look."
            },
            {
              "q": "Do you create website banners?",
              "a": "Yes. We create eye-catching banners, section visuals and website graphics that support your content and improve the overall look of your site."
            },
            {
              "q": "Can you create Instagram and Facebook post designs?",
              "a": "Yes. We create platform-specific designs for Instagram, Facebook, LinkedIn and more, including posts, carousels, stories and campaign creatives."
            },
            {
              "q": "Can I provide my own reference design?",
              "a": "Yes. You can share your design idea, brand references and requirements, and we review them before planning the design."
            },
            {
              "q": "Do you provide content along with graphic designs?",
              "a": "Yes. Our creative content combines visuals with short, clear messaging for business updates, service explanations, festival posts, announcements and campaigns."
            },
            {
              "q": "Which file formats will I receive?",
              "a": "The required formats are discussed during planning, and you receive the final graphics in the agreed formats."
            },
            {
              "q": "Can you create graphics in specific dimensions?",
              "a": "Yes. Dimensions are part of the requirements we discuss, and they are also one of the factors that affect the cost."
            },
            {
              "q": "Can I request changes after reviewing the design?",
              "a": "Yes. We share the design for your feedback and changes, then refine it and prepare the final version."
            },
            {
              "q": "Do you create designs for digital advertisements?",
              "a": "Yes. Digital advertisements are one of our graphic design services, along with promotional and marketing graphics for offers and campaigns."
            },
            {
              "q": "Can you redesign my existing graphics?",
              "a": "Yes. Share your existing graphics and requirements with us, and we will discuss a suitable creative direction for the redesign."
            },
            {
              "q": "How can I start a graphic design project with CRETECH?",
              "a": "Share your design idea, brand references and requirements with us. We will understand your needs and discuss a suitable creative direction."
            }
          ]
        }
      }
    },
    {
      "slug": "website-security-backup",
      "title": "Website Security & Backup",
      "icon": "",
      "short": "Protect your website with strong security measures and reliable backup solutions.",
      "summary": "Protect your website with strong security measures and reliable backup solutions.",
      "image": "assets/images/services-page/svc-12.jpg",
      "intro": "Keep your website secure, up to date and recoverable with reliable security and backup solutions.",
      "features": [
        "Website security assessment",
        "Malware detection and removal",
        "SSL certificate setup",
        "Software and plugin updates",
        "Website backup configuration",
        "Website recovery support"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/website-security-backup/",
        "theme": "",
        "hero": {
          "eyebrow": "Website Security & Backup Services",
          "title": "Protect Your Website,\nData and *Digital Business*",
          "text": "Keep your website secure, up to date and recoverable with reliable security and backup solutions.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Website%20Security%20%26%20Backup"
          },
          "image": "assets/images/svc/website-security-backup/hero.jpg",
          "imageAlt": "Glowing security shield with a padlock in front of servers and a cloud backup icon"
        },
        "body": {
          "y": [284, 1340],
          "items": [
            { "t": "txt", "tag": "h2", "box": [57, 291, 287], "f": [28, 700, 28, "O"], "text": "A Safer and\nMore *Reliable Website*" },
            {
              "t": "txt",
              "tag": "p",
              "box": [57, 359, 288],
              "f": [13.5, 400, 16.8, "L"],
              "text": "We help you protect your website from\nsecurity risks, keep it updated and maintain\nregular backups so your business can run\nsmoothly without data loss or interruptions."
            },
            {
              "t": "img",
              "box": [382, 288, 320, 160],
              "src": "assets/images/svc/website-security-backup/intro.jpg",
              "alt": "Laptop showing a shield with Secure, Updated and Backed Up checks",
              "cls": "rd"
            },
            {
              "t": "card",
              "cls": "flat ckb",
              "box": [722, 288, 280, 152],
              "v": { "il": 6, "it": 7.5, "ir": 6, "ib": 10, "tw": 17.5, "th": 12, "tg": 14.5 },
              "kids": [
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [778.5, 310.7, 181],
                  "f": [13.5, 700, 16, "O"],
                  "c": "#1e1a22",
                  "text": "Stronger Website Protection",
                  "cls": "ck"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [778.5, 341.2, 105],
                  "f": [13.5, 700, 16, "O"],
                  "c": "#1e1a22",
                  "text": "Regular Backups",
                  "cls": "ck"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [778.5, 370.2, 144],
                  "f": [13.5, 700, 16, "O"],
                  "c": "#1e1a22",
                  "text": "Quick Issue Resolution",
                  "cls": "ck"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [778.5, 399.2, 202.5],
                  "f": [13.5, 700, 16, "O"],
                  "c": "#1e1a22",
                  "text": "Peace of Mind for Your Business",
                  "cls": "ck"
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 453, 1024],
              "lines": [86, 40, 310],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "text": "Our Website Security Services"
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 484, 480, 136],
              "src": "assets/images/svc/website-security-backup/c1.jpg",
              "alt": "Website checklist under a magnifying glass",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [61.5, 496.4, 154], "f": [19, 700, 20.5, "O"], "text": "Website Security\n*Assessment*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [61.5, 542.8, 201],
                  "f": [13, 400, 15.7, "L"],
                  "text": "Review your website, identify\npotential risks and suggest\nsuitable security improvements."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 484, 480, 136],
              "src": "assets/images/svc/website-security-backup/c2.jpg",
              "alt": "Laptop screen with a crossed-out bug icon",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [540.5, 496.4, 171], "f": [19, 700, 20.5, "O"], "text": "Malware Detection\n*and Removal*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [540.5, 542.8, 187.5],
                  "f": [13, 400, 15.7, "L"],
                  "text": "Check for malware, remove\naffected files and secure your\nwebsite from similar threats."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 624, 480, 136],
              "src": "assets/images/svc/website-security-backup/c3.jpg",
              "alt": "Browser address bar with a padlock and https next to a shield",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [61.5, 636, 136], "f": [19, 700, 20.5, "O"], "text": "SSL Certificate\n*Setup*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [61.5, 680.3, 168],
                  "f": [13, 400, 15.7, "L"],
                  "text": "Install SSL and configure\nHTTPS to create a secure\nand encrypted connection\nfor your website."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 624, 480, 136],
              "src": "assets/images/svc/website-security-backup/c4.jpg",
              "alt": "Login form window with a padlock shield",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [545.5, 636, 167.5], "f": [19, 700, 20.5, "O"], "text": "Login and\n*Access Protection*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545.5, 680.3, 186],
                  "f": [13, 400, 15.7, "L"],
                  "text": "Strengthen website access\nwith secure login settings,\nuser permissions and\nadditional protection options."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 762, 480, 136],
              "src": "assets/images/svc/website-security-backup/c5.jpg",
              "alt": "Screen showing an update in progress with a gear",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [61.5, 774.4, 141], "f": [19, 700, 20.3, "O"], "text": "Software and\n*Plugin Updates*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [61.5, 818.2, 186],
                  "f": [13, 400, 16, "L"],
                  "text": "Review and apply important\nupdates for your website\nplatform, themes and plugins\nto keep it secure and stable."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 762, 480, 136],
              "src": "assets/images/svc/website-security-backup/c6.jpg",
              "alt": "Cloud with an upload arrow above a backup server",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [545.5, 774.4, 147.5], "f": [19, 700, 20.3, "O"], "text": "Website Backup\n*Configuration*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545.5, 818.2, 179],
                  "f": [13, 400, 16, "L"],
                  "text": "Set up regular backups of\nwebsite files, database and\nimportant content based on\nyour requirements."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [26, 900, 972, 110],
              "src": "assets/images/svc/website-security-backup/c7.jpg",
              "alt": "Browser windows with a restore icon",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [80, 907.7, 274], "f": [22, 700, 26, "O"], "text": "Website *Recovery Support*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [80, 939.8, 234],
                  "f": [13, 400, 15.8, "L"],
                  "text": "Help you restore your website from a\nbackup if it faces data loss, update\nissues or technical problems."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 1017, 1024],
              "lines": [84, 34, 331],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "text": "Our Security and Backup Process"
            },
            {
              "t": "grp",
              "box": [28, 1046, 970, 108],
              "src": "assets/images/svc/website-security-backup/proc.jpg",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [84, 1070.5, 50],
                  "al": "c",
                  "f": [13.5, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Website\nReview"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [64, 1103.5, 92],
                  "al": "c",
                  "f": [11, 400, 12.3, "L"],
                  "text": "Understand your\nwebsite, platform\nand current setup."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [229, 1070.5, 84.5],
                  "al": "c",
                  "f": [13.5, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Identify\nRequirements"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [220, 1103.5, 103],
                  "al": "c",
                  "f": [11, 400, 12.3, "L"],
                  "text": "Review security risks\nand backup needs\nfor your website."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [392.5, 1070.5, 84],
                  "al": "c",
                  "f": [13.5, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Security\nConfiguration"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [377.5, 1103.5, 113.5],
                  "al": "c",
                  "f": [11, 400, 12.3, "L"],
                  "text": "Apply suitable security\nmeasures and access\ncontrols."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [576, 1070.5, 45],
                  "al": "c",
                  "f": [13.5, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Backup\nSetup"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [550, 1103.5, 98],
                  "al": "c",
                  "f": [11, 400, 12.3, "L"],
                  "text": "Configure a reliable\nbackup system as\nper your needs."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [726, 1070.5, 71],
                  "al": "c",
                  "f": [13.5, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Testing &\nVerification"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [702.5, 1103.5, 116.5],
                  "al": "c",
                  "f": [11, 400, 12.3, "L"],
                  "text": "Check security, backup\nand key website\nfunctions."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [896.5, 1070.5, 51],
                  "al": "c",
                  "f": [13.5, 700, 13.5, "O"],
                  "c": "#1e1a22",
                  "text": "Ongoing\nSupport"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [862.5, 1103.5, 118.5],
                  "al": "c",
                  "f": [11, 400, 12.3, "L"],
                  "text": "Provide periodic checks\nand update assistance\nas per the plan."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1155, 480, 110],
              "src": "assets/images/svc/website-security-backup/i1.jpg",
              "alt": "Glowing shield with a check mark",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [193, 1173, 233.5], "f": [17, 700, 20, "O"], "text": "Suitable for *Different Websites*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [193, 1196.2, 253.5],
                  "f": [12, 400, 14.3, "L"],
                  "text": "For business websites, e-commerce platforms,\ncompany portals, educational sites, blogs\nand custom web applications."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1155, 480, 110],
              "src": "assets/images/svc/website-security-backup/i2.jpg",
              "alt": "Calendar and a stopwatch",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [687, 1173, 198.5], "f": [17, 700, 20, "O"], "text": "Service Scope and *Pricing*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [687, 1196.2, 286],
                  "f": [12, 400, 14.3, "L"],
                  "text": "The cost depends on your website platform,\ncomplexity and required security and backup setup.\nWe discuss the scope and quotation before starting."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1268, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [77.5, 1281, 295],
                  "f": [21, 700, 21.5, "O"],
                  "c": "#fff",
                  "em": "#ffb22a",
                  "text": "Keep Your Website Secure\nand Recoverable with *CRETECH*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [435, 1282.8, 288],
                  "f": [12, 400, 14, "L"],
                  "c": "#fff",
                  "text": "Share your website URL and requirements with us.\nWe will review your needs and discuss a suitable\nsecurity and backup plan."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [787, 1285, 184, 36],
                  "r": 18,
                  "f": [14.5, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=Website%20Security%20%26%20Backup"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1340, 1576],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1342, 1024],
            "lines": [86, 33, 278],
            "al": "c",
            "f": [22, 700, 26, "O"],
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1373.5,
          "rowH": 18,
          "rowGap": 1.8,
          "bottom": 51.5,
          "waves": true,
          "f": [12.7, 700, 13, "O"],
          "cols": [[62, 428], [537, 430]],
          "items": [
            {
              "q": "Why does my website need security services?",
              "a": "Security services help protect your website from risks such as malware and unauthorised access, and keep it updated and backed up so it can run without data loss or interruptions."
            },
            {
              "q": "What is a website backup?",
              "a": "A website backup is a saved copy of your website files, database and important content that can be used to restore the website if something goes wrong."
            },
            {
              "q": "How often should I back up my website?",
              "a": "It depends on how often your website changes. We set up regular backups based on your requirements."
            },
            {
              "q": "Can you secure an existing website?",
              "a": "Yes. We review your existing website, identify potential risks and suggest and apply suitable security improvements."
            },
            {
              "q": "Can you remove malware from my website?",
              "a": "Yes. We check for malware, remove affected files and help secure your website from similar threats."
            },
            {
              "q": "Do you provide SSL certificate installation?",
              "a": "Yes. We install SSL and configure HTTPS to create a secure and encrypted connection for your website."
            },
            {
              "q": "Will a backup protect my website from every problem?",
              "a": "A backup does not prevent problems, but it allows your website to be restored if it faces data loss, update issues or technical problems."
            },
            {
              "q": "Can you restore my website if it stops working?",
              "a": "We can help restore your website from a backup if it faces data loss, update issues or technical problems."
            },
            {
              "q": "Do you provide regular security updates?",
              "a": "Yes. We review and apply important updates for your website platform, themes and plugins, and provide periodic checks as per the agreed plan."
            },
            {
              "q": "Can you secure an e-commerce website?",
              "a": "Yes. Our security and backup services are suitable for business websites, e-commerce platforms, company portals, educational sites, blogs and custom web applications."
            },
            {
              "q": "Will website security affect website speed?",
              "a": "During testing and verification we check security, backups and key website functions so the website keeps working as expected."
            },
            {
              "q": "Do I need to change my hosting provider?",
              "a": "We first review your website, platform and current setup, and then discuss the security and backup setup that suits it."
            },
            {
              "q": "Can you set up automatic backups?",
              "a": "Yes. We configure a reliable backup system with regular backups of your website files, database and important content as per your needs."
            },
            {
              "q": "How can I get started?",
              "a": "Share your website URL and requirements with us. We will review your needs and discuss a suitable security and backup plan."
            }
          ]
        }
      }
    },
    {
      "slug": "website-maintenance-support",
      "title": "Website Maintenance & Support",
      "icon": "",
      "short": "Keep your website updated, secure and running smoothly with reliable technical support.",
      "summary": "Keep your website updated, secure and running smoothly with reliable technical support.",
      "image": "assets/images/services-page/svc-09.jpg",
      "intro": "Keep your website updated, secure and running smoothly with reliable maintenance and ongoing support.",
      "features": [
        "Website content updates",
        "Technical website maintenance",
        "Backup and recovery support",
        "Website security and checks",
        "WordPress and other website support",
        "Performance and function review"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/website-maintenance-support/",
        "theme": "",
        "hero": {
          "eyebrow": "Website Maintenance & Support",
          "title": "Website Maintenance\nand *Support Services*",
          "text": "Keep your website updated, secure and running smoothly with reliable maintenance and ongoing support.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Website%20Maintenance%20%26%20Support"
          },
          "image": "assets/images/svc/website-maintenance-support/hero.jpg",
          "imageAlt": "Laptop showing a website health check with updates, security, performance and backup ticked, next to a coffee mug"
        },
        "body": {
          "y": [288, 1263],
          "items": [
            { "t": "txt", "tag": "h2", "box": [63, 295, 274], "f": [25, 700, 27, "O", -0.01], "text": "Keep Your Website\nAlways in *Good Shape*" },
            {
              "t": "txt",
              "tag": "p",
              "box": [63, 356, 295],
              "f": [12.5, 400, 15.5, "L"],
              "text": "A website needs regular care to stay updated,\nsecure and fully functional. At CRETECH, we\nhandle content updates, technical checks and\nongoing support so your website continues\nto work properly and represent your business\naccurately."
            },
            {
              "t": "img",
              "box": [388, 295, 320, 160],
              "src": "assets/images/svc/website-maintenance-support/intro.jpg",
              "alt": "Notebook checklist: update content, check functions, ensure security, keep backup",
              "cls": "rd"
            },
            {
              "t": "card",
              "cls": "flat ckb",
              "box": [726, 300, 246, 158],
              "v": { "il": 8, "it": 7, "ir": 13, "ib": 10 },
              "kids": [
                {
                  "t": "list",
                  "box": [752, 313, 210],
                  "row": 31.5,
                  "ck": 23,
                  "cg": 14,
                  "f": [15.4, 700, 0, "O"],
                  "items": ["Regular Updates", "Technical Support", "Better Performance", "Long-Term Reliability"]
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 467, 1024],
              "lines": [88, 19, 353],
              "al": "c",
              "f": [22, 700, 26, "O"],
              "text": "Our Website Maintenance Services"
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 502, 480, 136],
              "src": "assets/images/svc/website-maintenance-support/c1.jpg",
              "alt": "Books and a pen holder on a desk",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [60, 507.5, 146], "f": [19, 700, 21, "O"], "text": "Website Content\n*Updates*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [60, 556, 181],
                  "f": [12.3, 400, 15.2, "L"],
                  "text": "Update text, images, banners,\nservices, contact details and\nother website content as per\nyour business needs."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 502, 480, 136],
              "src": "assets/images/svc/website-maintenance-support/c2.jpg",
              "alt": "Laptop showing website code",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [545, 507.5, 156], "f": [19, 700, 21, "O"], "text": "Technical Website\n*Maintenance*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545, 556, 185.5],
                  "f": [12.3, 400, 15.2, "L"],
                  "text": "Check and update plugins,\nthemes and key website\nfunctions to keep the site\nstable and working properly."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 637, 480, 136],
              "src": "assets/images/svc/website-maintenance-support/c3.jpg",
              "alt": "Glass cloud with a sync symbol",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [61, 644.5, 170.5], "f": [19, 700, 21, "O"], "text": "Backup and\n*Recovery Support*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [61, 693, 190],
                  "f": [12.3, 400, 15.2, "L"],
                  "text": "Create and maintain regular\nbackups and provide support\nfor restoration from available\nbackups when required."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 637, 480, 136],
              "src": "assets/images/svc/website-maintenance-support/c4.jpg",
              "alt": "Glass shield with a padlock",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [545, 644.5, 157], "f": [19, 700, 21, "O"], "text": "Website Security\n*and Checks*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545, 691.1, 192],
                  "f": [12.3, 400, 14.8, "L"],
                  "text": "Review security settings,\nmanage supported updates\nand check for potential issues\nto help keep your website\nmore secure."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 777, 480, 136],
              "src": "assets/images/svc/website-maintenance-support/c5.jpg",
              "alt": "Wooden block with the WordPress logo",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [61, 783.5, 222], "f": [19, 700, 21, "O"], "text": "WordPress and\n*Other Website Support*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [61, 829.7, 206],
                  "f": [12.3, 400, 14.4, "L"],
                  "text": "Maintenance and support for\nWordPress and other websites,\nincluding content changes,\nfunction checks and basic\nissue resolution."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 777, 480, 136],
              "src": "assets/images/svc/website-maintenance-support/c6.jpg",
              "alt": "Glass speed gauge",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [545, 783.5, 167], "f": [19, 700, 21, "O"], "text": "Performance and\n*Function Review*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545, 830, 209],
                  "f": [12.3, 400, 14.85, "L"],
                  "text": "Review key website functions,\ncheck for errors, fix broken links\nand ensure a smooth browsing\nexperience."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 918, 1024],
              "lines": [116, 26, 326],
              "al": "c",
              "f": [22, 700, 26, "O"],
              "text": "Our Website Maintenance Process"
            },
            {
              "t": "grp",
              "box": [36, 949, 954, 118],
              "src": "assets/images/svc/website-maintenance-support/proc.jpg",
              "kids": [
                { "t": "txt", "tag": "h3", "box": [94, 978, 46], "al": "c", "f": [12.5, 700, 13, "O"], "c": "#1e1a22", "text": "Website\nReview" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [66.7, 1010, 102],
                  "al": "c",
                  "f": [10.2, 400, 12.5, "L"],
                  "text": "We understand your\nwebsite, platform and\ncurrent needs."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [239.7, 978, 66],
                  "al": "c",
                  "f": [12.5, 700, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Scope\nDiscussion"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [234, 1007, 83.5],
                  "al": "c",
                  "f": [10.2, 400, 12, "L"],
                  "text": "We identify the\nrequired updates\nand maintenance\ntasks."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [398.7, 978, 72],
                  "al": "c",
                  "f": [12.5, 700, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Maintenance\nPlanning"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [386, 1010, 97],
                  "al": "c",
                  "f": [10.2, 400, 12.5, "L"],
                  "text": "We discuss the work\nscope, access and\nschedule."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [560, 978, 72.5],
                  "al": "c",
                  "f": [12.5, 700, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Maintenance\nWork"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [541, 1010, 111.5],
                  "al": "c",
                  "f": [10.2, 400, 12.5, "L"],
                  "text": "We complete the\nagreed content updates\nand technical tasks."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [726.7, 978, 53.3],
                  "al": "c",
                  "f": [12.5, 700, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Review &\nTesting"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [702.5, 1010, 105],
                  "al": "c",
                  "f": [10.2, 400, 12.5, "L"],
                  "text": "We check the updated\nsections and key\nfunctions."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [873.75, 978, 75],
                  "al": "c",
                  "f": [12.5, 700, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Updates &\nCoordination"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [858, 1010, 106.6],
                  "al": "c",
                  "f": [10.2, 400, 12.5, "L"],
                  "text": "We share the work\ndetails and any further\nrecommendations."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1075, 480, 110],
              "src": "assets/images/svc/website-maintenance-support/i1.jpg",
              "alt": "Desk calendar",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [224.75, 1085.5, 193.5],
                  "f": [15, 700, 17, "O"],
                  "text": "Website Maintenance for\n*Different Businesses*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [224.75, 1124.5, 259.5],
                  "f": [11.3, 400, 15, "L"],
                  "text": "We support startups, small businesses,\ne-commerce websites and established\norganisations with suitable maintenance plans."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1075, 480, 110],
              "src": "assets/images/svc/website-maintenance-support/i2.jpg",
              "alt": "Stacked stones with a green leaf",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [689.5, 1085.5, 154], "f": [15, 700, 17, "O"], "text": "Maintenance Cost\n*and Support Plans*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [689.5, 1124.5, 277.5],
                  "f": [11.3, 400, 15, "L"],
                  "text": "The cost depends on the website size, platform,\nupdate frequency and technical requirements.\nCustom plans can be discussed as per your needs."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1191, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [84, 1199.7, 273],
                  "f": [21.5, 700, 23.7, "O", -0.01],
                  "c": "#fff",
                  "em": "#ff9a1a",
                  "text": "Keep Your Website Updated\nand Reliable with *CRETECH*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [438.6, 1206, 304],
                  "f": [11.5, 400, 13.75, "L"],
                  "c": "#fff",
                  "text": "Share your website URL and maintenance requirements\nwith us. We will review your website and discuss a\nsuitable maintenance approach."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [784, 1210, 168, 35],
                  "f": [13.4, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=Website%20Maintenance%20%26%20Support"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1263, 1515],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1268, 1024],
            "lines": [81, 27, 276],
            "al": "c",
            "f": [21, 700, 24, "O"],
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1301.5,
          "rowH": 19,
          "rowGap": 3,
          "bottom": 72,
          "f": [13.1, 700, 13, "O"],
          "cols": [[70, 424], [528, 425]],
          "items": [
            {
              "q": "What is website maintenance?",
              "a": "Website maintenance is the regular care a website needs to stay updated, secure and fully functional, including content updates, technical checks and ongoing support."
            },
            {
              "q": "Why does my website need regular maintenance?",
              "a": "Regular maintenance keeps your website updated and secure, and helps it continue to work properly and represent your business accurately."
            },
            {
              "q": "Do you provide monthly website maintenance?",
              "a": "Yes. We offer suitable maintenance plans, and the update frequency is discussed based on your website and requirements."
            },
            {
              "q": "Can you update content on my existing website?",
              "a": "Yes. We can update text, images, banners, services, contact details and other website content as per your business needs."
            },
            {
              "q": "Do you provide WordPress maintenance?",
              "a": "Yes. We provide maintenance and support for WordPress and other websites, including content changes, function checks and basic issue resolution."
            },
            {
              "q": "Can you fix website errors?",
              "a": "Yes. We review key website functions, check for errors and fix broken links, along with basic issue resolution."
            },
            {
              "q": "Do you provide website backup services?",
              "a": "Yes. We create and maintain regular backups so your website can be restored when required."
            },
            {
              "q": "Can you restore my website from a backup?",
              "a": "Yes. We provide support for restoration from available backups when required."
            },
            {
              "q": "Will website maintenance include redesigning my website?",
              "a": "Maintenance focuses on keeping your existing website updated, secure and working properly. If you need further changes, share your requirements and we will discuss a suitable approach."
            },
            {
              "q": "Do I need to provide website access?",
              "a": "Yes. During scope discussion and planning we discuss the work scope, the access needed and the schedule."
            },
            {
              "q": "How much does website maintenance cost?",
              "a": "The cost depends on the website size, platform, update frequency and technical requirements. Custom plans can be discussed as per your needs."
            },
            {
              "q": "How can I request website maintenance from CRETECH?",
              "a": "Share your website URL and maintenance requirements with us. We will review your website and discuss a suitable maintenance approach."
            }
          ]
        }
      }
    },
    {
      "slug": "landing-page-development",
      "title": "Landing Page Development",
      "icon": "",
      "short": "Create high-converting landing pages for campaigns, products and lead generation.",
      "summary": "Create high-converting landing pages for campaigns, products and lead generation.",
      "image": "assets/images/services-page/svc-13.jpg",
      "intro": "Create focused landing pages that turn visitors into enquiries, registrations and real business opportunities.",
      "features": [
        "Landing page planning",
        "Custom landing page design",
        "Content structure for conversion",
        "Enquiry form integration",
        "Mobile-responsive pages",
        "Tracking and analytics setup"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/landing-page-development/",
        "theme": "",
        "hero": {
          "eyebrow": "Landing Page Development",
          "title": "Landing Page\nDevelopment *Services*",
          "text": "Create focused landing pages that turn visitors into enquiries, registrations and real business opportunities.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Landing%20Page%20Development"
          },
          "image": "assets/images/svc/landing-page-development/hero.jpg",
          "imageAlt": "Landing page with a Get a Free Consultation form next to a target and a rising growth chart"
        },
        "body": {
          "y": [292, 1266],
          "items": [
            { "t": "txt", "tag": "h2", "box": [62.5, 299.5, 301], "f": [30, 700, 30, "O"], "text": "Build High-Converting\n*Landing Pages*" },
            {
              "t": "txt",
              "tag": "p",
              "box": [62.5, 369.7, 280],
              "f": [14, 400, 17.5, "L"],
              "text": "We design and develop landing pages\nwith a clear purpose, the right message\nand a smooth user journey to help you\ngenerate enquiries, registrations or\nbusiness leads."
            },
            {
              "t": "img",
              "box": [382, 300, 320, 160],
              "src": "assets/images/svc/landing-page-development/intro.jpg",
              "alt": "Stacked landing page layouts with a mountain banner",
              "cls": "rd"
            },
            {
              "t": "card",
              "cls": "flat ckb",
              "box": [716, 302, 266, 166],
              "v": { "il": 8, "it": 4, "ir": 7, "ib": 7, "tw": 16.5, "th": 12.5, "tg": 14.5 },
              "kids": [
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [774, 322, 138.75],
                  "f": [14.5, 700, 17, "O"],
                  "c": "#1e1a22",
                  "text": "Focused Page Design",
                  "cls": "ck"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [774, 355.4, 182.5],
                  "f": [14.5, 700, 17, "O"],
                  "c": "#1e1a22",
                  "text": "Conversion-Oriented Layout",
                  "cls": "ck"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [774, 389.4, 121],
                  "f": [14.5, 700, 17, "O"],
                  "c": "#1e1a22",
                  "text": "Mobile Responsive",
                  "cls": "ck"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [774, 423, 182.5],
                  "f": [14.5, 700, 17, "O"],
                  "c": "#1e1a22",
                  "text": "Form & Tracking Integration",
                  "cls": "ck"
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 478, 1024],
              "lines": [82, 15, 424.5],
              "al": "c",
              "f": [22, 700, 26, "O"],
              "text": "Our Landing Page Development Services"
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 507, 480, 136],
              "src": "assets/images/svc/landing-page-development/c1.jpg",
              "alt": "Landing page plan notebook with goal, audience, sections and CTA ticked",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [59, 517.7, 129], "f": [20, 700, 21, "O"], "text": "Landing Page\n*Planning*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 563, 197.5],
                  "f": [13.5, 400, 15.2, "L"],
                  "text": "Understand your campaign\ngoal and plan a focused page\nstructure that supports the\ndesired action."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 507, 480, 136],
              "src": "assets/images/svc/landing-page-development/c2.jpg",
              "alt": "Page design layout with typography and colour swatches",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [542.5, 516.7, 154], "f": [20, 700, 21, "O"], "text": "Custom Landing\n*Page Design*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [542.5, 562, 165.5],
                  "f": [13.5, 400, 15.2, "L"],
                  "text": "Create a clean, attractive\nand brand-aligned design\nwith a clear visual flow\nand message."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 645, 480, 136],
              "src": "assets/images/svc/landing-page-development/c3.jpg",
              "alt": "Content blocks for benefits, features and FAQs",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [59, 658.2, 173.5], "f": [20, 700, 21, "O"], "text": "Content Structure\n*for Conversion*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 701.9, 186.5],
                  "f": [13.5, 400, 15.3, "L"],
                  "text": "Organise key information\nsuch as benefits, features,\nFAQs and calls to action for\nbetter engagement."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 645, 480, 136],
              "src": "assets/images/svc/landing-page-development/c4.jpg",
              "alt": "Enquiry form with name, email and requirement fields",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [542.5, 656.7, 131.5], "f": [20, 700, 21, "O"], "text": "Enquiry Form\n*Integration*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [542.5, 700.9, 205],
                  "f": [13.5, 400, 15.5, "L"],
                  "text": "Add easy-to-use forms with\nrelevant fields and enquiry\nnotifications for your business."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 780, 480, 136],
              "src": "assets/images/svc/landing-page-development/c5.jpg",
              "alt": "Smartphone showing a landing page",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [59, 788.9, 184.5], "f": [20, 700, 20.5, "O"], "text": "Mobile-Responsive\n*Pages*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 833.9, 187.5],
                  "f": [13.5, 400, 15.5, "L"],
                  "text": "Develop landing pages that\nwork smoothly on desktops,\ntablets and smartphones."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 780, 480, 136],
              "src": "assets/images/svc/landing-page-development/c6.jpg",
              "alt": "Analytics dashboard with a line chart",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [544, 788.9, 155], "f": [20, 700, 20.5, "O"], "text": "Tracking and\n*Analytics Setup*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [544, 833.9, 203],
                  "f": [13.5, 400, 15.5, "L"],
                  "text": "Integrate supported analytics\nand campaign tracking to\nmeasure page visits, enquiries\nand user actions."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 925, 1024],
              "lines": [82, 16.5, 429.5],
              "al": "c",
              "f": [22, 700, 26, "O"],
              "text": "Our Landing Page Development Process"
            },
            {
              "t": "grp",
              "box": [32, 952, 962, 120],
              "src": "assets/images/svc/landing-page-development/proc.jpg",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [68.5, 979, 89.5],
                  "al": "c",
                  "f": [14, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Understand\nthe Campaign"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [62.5, 1018.6, 100],
                  "al": "c",
                  "f": [11.5, 400, 13, "L"],
                  "text": "Learn about your\ngoal, audience and\nrequirements."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [244, 979, 59.5],
                  "al": "c",
                  "f": [14, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Plan the\nStructure"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [222.5, 1018.6, 105],
                  "al": "c",
                  "f": [11.5, 400, 13, "L"],
                  "text": "Decide the sections,\ncontent and\npage flow."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [398.5, 979, 67.5],
                  "al": "c",
                  "f": [14, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Design\nthe Layout"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [385, 1018.6, 96],
                  "al": "c",
                  "f": [11.5, 400, 13, "L"],
                  "text": "Create a focused\nand brand-aligned\npage design."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [561.5, 979, 56.5],
                  "al": "c",
                  "f": [14, 700, 15, "O"],
                  "c": "#1e1a22",
                  "text": "Develop\nthe Page"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [541.5, 1018.6, 97],
                  "al": "c",
                  "f": [11.5, 400, 13, "L"],
                  "text": "Build the landing\npage with required\nfeatures."
                },
                { "t": "txt", "tag": "h3", "box": [719, 979, 58.5], "al": "c", "f": [14, 700, 15, "O"], "c": "#1e1a22", "text": "Test &\nIntegrate" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [692.5, 1018.6, 112.5],
                  "al": "c",
                  "f": [11.5, 400, 13, "L"],
                  "text": "Check design, forms\nand add tracking\nor other integrations."
                },
                { "t": "txt", "tag": "h3", "box": [885, 979, 53.5], "al": "c", "f": [14, 700, 15, "O"], "c": "#1e1a22", "text": "Final\nDelivery" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [860.5, 1018.6, 104],
                  "al": "c",
                  "f": [11.5, 400, 13, "L"],
                  "text": "Share the live page\nafter testing\nand approval."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1079, 480, 110],
              "src": "assets/images/svc/landing-page-development/i1.jpg",
              "alt": "Stacked landing page templates",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [203, 1088.5, 218.5], "f": [19, 700, 20, "O"], "text": "Types of Landing Pages\n*We Develop*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [203, 1131, 247.5],
                  "f": [13, 400, 15.5, "L"],
                  "text": "Lead generation, product, service, event\nregistration, campaign and app/software\nlanding pages."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1079, 480, 110],
              "src": "assets/images/svc/landing-page-development/i2.jpg",
              "alt": "Group of three people icons",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [688, 1093.5, 166.5], "f": [20, 700, 24, "O"], "text": "Who Can Benefit?" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [688, 1121.7, 285],
                  "f": [13, 400, 16, "L"],
                  "text": "Startups, small businesses, consultants,\neducational institutes, real estate, e-commerce\nand event organisers."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1196, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [76, 1208.7, 290.5],
                  "f": [21, 700, 21, "O"],
                  "c": "#fff",
                  "em": "#ffb22a",
                  "text": "Launch Your Campaign with a\nHigh-Performing *Landing Page*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [428.5, 1210.6, 306],
                  "f": [12, 400, 14.5, "L"],
                  "c": "#fff",
                  "text": "Share your campaign idea and requirements with us.\nWe will plan and develop a landing page that matches\nyour goal and audience."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [776, 1214, 182, 38],
                  "r": 19,
                  "f": [14.5, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=Landing%20Page%20Development"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1266, 1540],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1271, 1024],
            "lines": [80, 27.5, 283],
            "al": "c",
            "f": [22, 700, 26, "O"],
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1303,
          "rowH": 20,
          "rowGap": 2.5,
          "bottom": 68,
          "waves": true,
          "f": [14.3, 700, 13, "O"],
          "cols": [[59, 431], [526.5, 430]],
          "items": [
            {
              "q": "What is a landing page?",
              "a": "A landing page is a focused page with a clear purpose, the right message and a smooth user journey, built to help you generate enquiries, registrations or business leads."
            },
            {
              "q": "How is it different from a normal website page?",
              "a": "A landing page is planned around one campaign goal and a single desired action, while a normal website page usually covers broader information about your business."
            },
            {
              "q": "Can you create a landing page for Google Ads?",
              "a": "Yes. We create campaign landing pages and can add supported analytics and campaign tracking to measure page visits, enquiries and user actions."
            },
            {
              "q": "Will my landing page work on mobile devices?",
              "a": "Yes. We develop landing pages that work smoothly on desktops, tablets and smartphones."
            },
            {
              "q": "Can you add an enquiry form?",
              "a": "Yes. We add easy-to-use forms with relevant fields and enquiry notifications for your business."
            },
            {
              "q": "Can I use my existing domain?",
              "a": "Share your current setup with us when you discuss your requirements, and we will plan the landing page around it."
            },
            {
              "q": "Can you create multiple landing pages?",
              "a": "Yes. We develop different types of landing pages, including lead generation, product, service, event registration, campaign and app/software landing pages."
            },
            {
              "q": "Can you integrate Google Analytics?",
              "a": "Yes. We integrate supported analytics and campaign tracking to measure page visits, enquiries and user actions."
            },
            {
              "q": "Can you add WhatsApp or call buttons?",
              "a": "Calls to action are part of the content structure we plan, and buttons like these can be added if they suit your campaign goal."
            },
            {
              "q": "Do you provide landing page content?",
              "a": "We help organise key information such as benefits, features, FAQs and calls to action to make the page clear and engaging."
            },
            {
              "q": "Can I edit the landing page later?",
              "a": "Yes. Let us know the changes you need after delivery and we will discuss how they can be made."
            },
            {
              "q": "Will a landing page guarantee more leads?",
              "a": "No page can guarantee results. A focused landing page is designed to help you generate enquiries, registrations or business leads."
            },
            {
              "q": "Can you redesign an existing landing page?",
              "a": "Yes. We can review your existing page and create a clean, brand-aligned design with a clear visual flow and message."
            },
            {
              "q": "How do I start a landing page project?",
              "a": "Share your campaign idea and requirements with us. We will plan and develop a landing page that matches your goal and audience."
            }
          ]
        }
      }
    },
    {
      "slug": "domain-hosting-setup",
      "title": "Domain & Hosting Setup",
      "icon": "",
      "short": "Get your domain, hosting and complete setup done hassle-free.",
      "summary": "Get your domain, hosting and complete setup done hassle-free.",
      "image": "assets/images/services-page/svc-10.jpg",
      "intro": "Get your website online with the right domain, reliable hosting and proper configuration.",
      "features": [
        "Domain registration assistance",
        "Web hosting selection and setup",
        "Domain and hosting connection",
        "Website deployment and configuration",
        "SSL and HTTPS setup",
        "Business email and domain setup"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/domain-hosting-setup/",
        "theme": "",
        "hero": {
          "eyebrow": "Domain & Hosting Setup",
          "title": "Domain and Hosting\nSetup *Services*",
          "text": "Get your website online with the right domain, reliable hosting and proper configuration.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Domain%20%26%20Hosting%20Setup"
          },
          "image": "assets/images/svc/domain-hosting-setup/hero.jpg",
          "imageAlt": "Glass cloud with a domain search bar showing www.yourdomain.com next to a stack of server units"
        },
        "body": {
          "y": [282, 1260],
          "items": [
            { "t": "txt", "tag": "h2", "box": [62.7, 290, 212], "f": [25, 700, 27, "O", -0.01], "text": "Build a Stronger\n*Online Presence*" },
            {
              "t": "txt",
              "tag": "p",
              "box": [62.7, 348, 294],
              "f": [12.5, 400, 16, "L"],
              "text": "A domain gives your website its online\naddress, and hosting provides the server\nenvironment to run it. At CRETECH, we help\nyou choose, set up and configure both for\na smooth and reliable website experience."
            },
            {
              "t": "img",
              "box": [376, 284, 316, 158],
              "src": "assets/images/svc/domain-hosting-setup/intro.jpg",
              "alt": "Tablet on a stand showing a website, next to a potted plant",
              "cls": "rd"
            },
            {
              "t": "card",
              "cls": "flat ckb",
              "box": [700, 284, 280, 156],
              "v": { "il": 5, "it": 5, "ir": 6, "ib": 5 },
              "kids": [
                {
                  "t": "list",
                  "box": [722.6, 297, 250],
                  "row": 31.8,
                  "ck": 22,
                  "cg": 14.4,
                  "f": [13.6, 700, 0, "O"],
                  "items": ["Domain Registration & Setup", "Hosting Selection & Configuration", "DNS & SSL Setup", "Deployment & Ongoing Support"]
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 450, 1024],
              "lines": [90, 25, 355],
              "al": "c",
              "f": [22, 700, 26, "O"],
              "text": "Our Domain and Hosting Services"
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 485, 480, 136],
              "src": "assets/images/svc/domain-hosting-setup/c1.jpg",
              "alt": "Glass search bar with www and a mouse pointer",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [59, 494.5, 189.5], "f": [19, 700, 21, "O"], "text": "Domain Registration\n*Assistance*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 544.3, 214.5],
                  "f": [12.3, 400, 14.7, "L"],
                  "text": "Help you choose a suitable domain\nname, check availability and\ncomplete the registration process\nwith the preferred extension."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 485, 480, 136],
              "src": "assets/images/svc/domain-hosting-setup/c2.jpg",
              "alt": "Rows of server racks",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [544.8, 494.5, 167.3], "f": [19, 700, 21, "O"], "text": "Web Hosting\n*Selection & Setup*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [544.8, 544.3, 216],
                  "f": [12.3, 400, 14.7, "L"],
                  "text": "Recommend and set up a suitable\nhosting plan based on your website\ntechnology, resources and\nbusiness needs."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 628, 480, 136],
              "src": "assets/images/svc/domain-hosting-setup/c3.jpg",
              "alt": "Glass globe with a connection network",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [59, 638.5, 194], "f": [19, 700, 21, "O"], "text": "Domain and\n*Hosting Connection*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 689, 207.6],
                  "f": [12.3, 400, 14.85, "L"],
                  "text": "Configure nameservers and DNS\nrecords, map your domain to the\nhosting and ensure the website\nis accessible online."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 628, 480, 136],
              "src": "assets/images/svc/domain-hosting-setup/c4.jpg",
              "alt": "Laptop showing code next to a plant",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [544.8, 638.5, 195.5], "f": [19, 700, 21, "O"], "text": "Website Deployment\n*and Configuration*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [544.8, 689, 208],
                  "f": [12.3, 400, 14.85, "L"],
                  "text": "Upload website files, configure\ndatabases and set up the website\non the hosting environment\naccording to the project."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 771, 480, 136],
              "src": "assets/images/svc/domain-hosting-setup/c5.jpg",
              "alt": "Glass shield with a padlock and HTTPS",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [59, 781, 131.8], "f": [19, 700, 21, "O"], "text": "SSL and\n*HTTPS Setup*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 830.5, 193.6],
                  "f": [12.3, 400, 15.45, "L"],
                  "text": "Install and configure an SSL\ncertificate to enable a secure\nHTTPS connection for your\nwebsite."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 771, 480, 136],
              "src": "assets/images/svc/domain-hosting-setup/c6.jpg",
              "alt": "Glass envelope with an at sign",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [545.7, 780, 178.6], "f": [19, 700, 21, "O"], "text": "Business Email\n*and Domain Setup*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [545.7, 830.5, 204.5],
                  "f": [12.3, 400, 15.45, "L"],
                  "text": "Set up domain-based email\naccounts, configure MX records\nand review basic email delivery\nsettings."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 912, 1024],
              "lines": [89, 22, 407],
              "al": "c",
              "f": [22, 700, 26, "O"],
              "text": "Our Domain and Hosting Setup Process"
            },
            {
              "t": "grp",
              "box": [34, 943, 958, 126],
              "src": "assets/images/svc/domain-hosting-setup/proc.jpg",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [72.9, 970, 85.4],
                  "al": "c",
                  "f": [12.5, 700, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Requirement\nDiscussion"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [54.2, 1004, 124],
                  "al": "c",
                  "f": [10.2, 400, 13.5, "L"],
                  "text": "Understand your website\ntype, domain and\nhosting needs."
                },
                { "t": "txt", "tag": "h3", "box": [253.75, 968, 50], "al": "c", "f": [12.5, 700, 14, "O"], "c": "#1e1a22", "text": "Domain\nReview" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [237.5, 1001, 83],
                  "al": "c",
                  "f": [10.2, 400, 13.3, "L"],
                  "text": "Discuss suitable\ndomain options\nand registration\nrequirements."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [404, 968, 60.4],
                  "al": "c",
                  "f": [12.5, 700, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Hosting\nSelection"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [379, 1001, 111],
                  "al": "c",
                  "f": [10.2, 400, 13.3, "L"],
                  "text": "Review and choose\nthe right hosting plan\nbased on your\nrequirements."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [545.4, 973.5, 89.6],
                  "al": "c",
                  "f": [12.5, 700, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Configuration"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [551.7, 1000, 78.3],
                  "al": "c",
                  "f": [10.2, 400, 13.6, "L"],
                  "text": "Set up domain,\nhosting and\nrelevant DNS\nsettings."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [710.8, 968, 75],
                  "al": "c",
                  "f": [12.5, 700, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Website\nConnection"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [694.6, 1002, 109],
                  "al": "c",
                  "f": [10.2, 400, 13.3, "L"],
                  "text": "Connect the domain,\ndeploy the website\nand configure\nrequired settings."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [874, 968, 73.3],
                  "al": "c",
                  "f": [12.5, 700, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Final\nVerification"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [860.8, 1002, 103.3],
                  "al": "c",
                  "f": [10.2, 400, 13.3, "L"],
                  "text": "Check website\naccessibility, HTTPS\nsetup and other\nagreed details."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1072, 480, 110],
              "src": "assets/images/svc/domain-hosting-setup/i1.jpg",
              "alt": "Laptop showing a website next to a plant",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [236.3, 1082.7, 180.4],
                  "f": [15, 700, 17.5, "O"],
                  "text": "Domain and Hosting for\n*Different Websites*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [236.3, 1120, 250],
                  "f": [11.3, 400, 14.2, "L"],
                  "text": "Support for new websites, existing websites,\ndomain connections, hosting migration and\nconfiguration updates."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1072, 480, 110],
              "src": "assets/images/svc/domain-hosting-setup/i2.jpg",
              "alt": "Glass bar chart",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [711.3, 1081, 172], "f": [15, 700, 17.5, "O"], "text": "Domain and Hosting\n*Cost and Plans*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [711.3, 1118, 258.3],
                  "f": [11.3, 400, 14.6, "L"],
                  "text": "The cost depends on the domain extension,\nhosting plan, website technology and\nconfiguration requirements. We discuss the\nscope and estimated charges before starting."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1186, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [82.7, 1196, 243],
                  "f": [21.5, 700, 23, "O", -0.01],
                  "c": "#fff",
                  "em": "#ff9a1a",
                  "text": "Get Your Website Online\nwith *CRETECH*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [417, 1200.4, 299],
                  "f": [11.5, 400, 14, "L"],
                  "c": "#fff",
                  "text": "Share your domain and hosting requirements with us.\nWe will review your needs and suggest a suitable\nsetup plan for your website."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [785, 1204, 175, 37],
                  "f": [13.4, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=Domain%20%26%20Hosting%20Setup"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1260, 1533],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1262.3, 1024],
            "lines": [90, 14, 280],
            "al": "c",
            "f": [21, 700, 24, "O"],
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1295.4,
          "rowH": 21,
          "rowGap": 2,
          "bottom": 64,
          "split": 7,
          "f": [12.2, 700, 13, "O"],
          "cols": [[63, 455], [533, 421]],
          "items": [
            {
              "q": "What is the difference between a domain and hosting?",
              "a": "A domain gives your website its online address, and hosting provides the server environment to run it."
            },
            {
              "q": "Do I need both a domain and hosting for my website?",
              "a": "Yes. A website needs a domain as its online address and hosting to run it. We help you choose, set up and configure both."
            },
            {
              "q": "Can I purchase my domain from one provider and hosting from another?",
              "a": "Yes. The domain can be connected to the hosting by configuring nameservers and DNS records, so your website is accessible online."
            },
            {
              "q": "Can you help me choose a domain name?",
              "a": "Yes. We help you choose a suitable domain name, check availability and complete the registration process with the preferred extension."
            },
            {
              "q": "Can you connect my existing domain to new hosting?",
              "a": "Yes. We configure nameservers and DNS records, map your domain to the hosting and ensure the website is accessible online."
            },
            {
              "q": "What is DNS configuration?",
              "a": "DNS configuration means setting up the nameservers and records that map your domain to your hosting, so your website can be reached online."
            },
            {
              "q": "What is an SSL certificate?",
              "a": "An SSL certificate enables a secure HTTPS connection for your website. We install and configure it as part of the setup."
            },
            {
              "q": "How long does domain connection take?",
              "a": "It depends on your domain, hosting and configuration requirements. We discuss the scope and plan the setup after reviewing your needs."
            },
            {
              "q": "Can you set up business email using my domain?",
              "a": "Yes. We set up domain-based email accounts, configure MX records and review basic email delivery settings."
            },
            {
              "q": "Can you migrate my existing website to new hosting?",
              "a": "Yes. We support existing websites and hosting migration, including uploading website files and configuring databases on the new hosting environment."
            },
            {
              "q": "Who should own the domain and hosting account?",
              "a": "The domain and hosting are set up for your website. Account details are discussed with you as part of the setup plan before work starts."
            },
            {
              "q": "Are domain and hosting charges included in your setup fee?",
              "a": "The cost depends on the domain extension, hosting plan, website technology and configuration requirements. We discuss the scope and estimated charges before starting."
            },
            {
              "q": "How can I get started with domain and hosting setup?",
              "a": "Share your domain and hosting requirements with us. We will review your needs and suggest a suitable setup plan for your website."
            }
          ]
        }
      }
    },
    {
      "slug": "business-automation-integration",
      "title": "Business Automation & Integration",
      "icon": "",
      "short": "Automate your processes and integrate the right tools to save time and improve efficiency.",
      "summary": "Automate your processes and integrate the right tools to save time and improve efficiency.",
      "image": "assets/images/services-page/svc-14.jpg",
      "intro": "Automate daily tasks, integrate your business applications and keep your workflow organised and efficient.",
      "features": [
        "Website form automation",
        "Email automation",
        "CRM integration",
        "Application integration",
        "Spreadsheet and data automation",
        "Custom workflow automation"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/business-automation-integration/",
        "theme": "",
        "hero": {
          "eyebrow": "Business Automation & Integration",
          "title": "Simplify Repetitive Work\nand Connect Your\n*Business Tools*",
          "text": "Automate daily tasks, integrate your business applications and keep your workflow organised and efficient.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Business%20Automation%20%26%20Integration"
          },
          "image": "assets/images/svc/business-automation-integration/hero.jpg",
          "imageAlt": "Business Automation notepad with ticked tasks next to connected app icons for email, team, data, calendar and reports"
        },
        "body": {
          "y": [290, 1394],
          "items": [
            { "t": "txt", "tag": "h2", "box": [57, 295, 250], "f": [27, 700, 26.5, "O"], "text": "Make Your Business\nWork *Smarter*" },
            {
              "t": "txt",
              "tag": "p",
              "box": [57, 357, 262],
              "f": [13, 400, 15.2, "L"],
              "text": "We help you automate routine processes,\nconnect your business tools and create\nefficient workflows that save time,\nreduce manual work and keep your\noperations running smoothly."
            },
            {
              "t": "img",
              "box": [574, 286, 420, 210],
              "src": "assets/images/svc/business-automation-integration/intro.jpg",
              "alt": "Connected icons for forms, email, CRM, calendar and reports along a flowing line with a paper plane",
              "cls": "rd"
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 500, 1024],
              "lines": [108, 24, 354],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "text": "Our Business Automation Services"
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 532, 480, 136],
              "src": "assets/images/svc/business-automation-integration/c1.jpg",
              "alt": "Enquiry form sending data to email, CRM and a spreadsheet",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [64, 545.5, 123], "f": [19, 700, 20, "O"], "text": "Website Form\n*Automation*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [64, 588.5, 200],
                  "f": [12.5, 400, 15.5, "L"],
                  "text": "Connect your website forms with\nemail, CRM, spreadsheets and\nother tools to manage leads\nautomatically."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 532, 480, 136],
              "src": "assets/images/svc/business-automation-integration/c2.jpg",
              "alt": "Open envelope with a notification bell",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [547, 545.5, 107], "f": [19, 700, 20, "O"], "text": "Email\n*Automation*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [547, 588.5, 185],
                  "f": [12.5, 400, 15.5, "L"],
                  "text": "Send automatic emails such as\nconfirmations, reminders and\nnotifications based on\nspecific actions."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 668, 480, 136],
              "src": "assets/images/svc/business-automation-integration/c3.jpg",
              "alt": "CRM contact records",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [64, 679.5, 113], "f": [19, 700, 20, "O"], "text": "CRM\n*Integration*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [64, 724.5, 189],
                  "f": [12.5, 400, 15.5, "L"],
                  "text": "Automatically transfer enquiry\nor customer details to your\nCRM for better lead and\ncustomer management."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 668, 480, 136],
              "src": "assets/images/svc/business-automation-integration/c4.jpg",
              "alt": "Puzzle pieces joined by a link icon",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [547, 679.5, 108], "f": [19, 700, 20, "O"], "text": "Application\n*Integration*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [547, 724.5, 183],
                  "f": [12.5, 400, 15.5, "L"],
                  "text": "Connect different applications\nsuch as CRM, email, project\nmanagement, payment and\nother business tools."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 804, 480, 136],
              "src": "assets/images/svc/business-automation-integration/c5.jpg",
              "alt": "Spreadsheet with an arrow pointing to a chart",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [64, 816, 155], "f": [19, 700, 20, "O"], "text": "Spreadsheet and\n*Data Automation*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [64, 860, 191],
                  "f": [12.5, 400, 15.5, "L"],
                  "text": "Automate data transfer, record\nupdates and notifications in\nspreadsheets based on your\nbusiness workflow."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 804, 480, 136],
              "src": "assets/images/svc/business-automation-integration/c6.jpg",
              "alt": "Desk calendar with ticked days and a bell",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [547, 816, 180], "f": [19, 700, 20, "O"], "text": "Appointment and\n*Booking Automation*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [547, 860, 180],
                  "f": [12.5, 400, 15.5, "L"],
                  "text": "Set up automated booking\nworkflows with confirmations,\ncalendar integration and\nreminder messages."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 940, 480, 136],
              "src": "assets/images/svc/business-automation-integration/c7.jpg",
              "alt": "Shopping cart with a payment card and an order confirmation",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [64, 952, 159], "f": [19, 700, 20, "O"], "text": "Payment and\n*Order Workflow*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [64, 994, 189],
                  "f": [12.5, 400, 15.5, "L"],
                  "text": "Connect your e-commerce or\nservice platform with payment\nupdates, order notifications\nand related workflows."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 940, 480, 136],
              "src": "assets/images/svc/business-automation-integration/c8.jpg",
              "alt": "Workflow diagram with connected blocks",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [547, 952, 193], "f": [19, 700, 20, "O"], "text": "Custom\n*Workflow Automation*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [547, 994, 210],
                  "f": [12.5, 400, 15.5, "L"],
                  "text": "Create tailor-made automation\nworkflows based on your specific\nbusiness process and tool\nrequirements."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 1076, 1024],
              "lines": [108, 22, 332],
              "al": "c",
              "f": [21, 700, 26, "O"],
              "text": "Our Business Automation Process"
            },
            {
              "t": "grp",
              "box": [28, 1100, 968, 110],
              "src": "assets/images/svc/business-automation-integration/proc.jpg",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [69, 1120, 86],
                  "al": "c",
                  "f": [13, 700, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Understand\nYour Workflow"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [65, 1153.5, 95],
                  "al": "c",
                  "f": [11, 400, 12.5, "L"],
                  "text": "Learn about your\nexisting process\nand requirements."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [222, 1120, 101],
                  "al": "c",
                  "f": [13, 700, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Identify\nAutomation Areas"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [224, 1153.5, 96],
                  "al": "c",
                  "f": [11, 400, 12.5, "L"],
                  "text": "Find tasks that can\nbe automated for\nbetter efficiency."
                },
                { "t": "txt", "tag": "h3", "box": [395, 1120, 76], "al": "c", "f": [13, 700, 14, "O"], "c": "#1e1a22", "text": "Plan\nthe Workflow" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [384, 1153.5, 97],
                  "al": "c",
                  "f": [11, 400, 12.5, "L"],
                  "text": "Define the steps,\ntools and expected\noutcomes."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [559, 1123, 77],
                  "al": "c",
                  "f": [13, 700, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Configure\nand Integrate"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [538, 1155, 119],
                  "al": "c",
                  "f": [11, 400, 12.5, "L"],
                  "text": "Set up the automation\nusing suitable tools\nand integrations."
                },
                { "t": "txt", "tag": "h3", "box": [735, 1122, 47], "al": "c", "f": [13, 700, 14, "O"], "c": "#1e1a22", "text": "Test and\nVerify" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [700, 1152, 117],
                  "al": "c",
                  "f": [11, 400, 12.5, "L"],
                  "text": "Check the workflow\nwith relevant scenarios\nto ensure it works\nproperly."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [883, 1120, 71],
                  "al": "c",
                  "f": [13, 700, 14, "O"],
                  "c": "#1e1a22",
                  "text": "Handover\nand Support"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [859, 1152, 118],
                  "al": "c",
                  "f": [11, 400, 12.5, "L"],
                  "text": "Provide the final setup,\nexplain the workflow\nand offer support\nas agreed."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1212, 480, 110],
              "src": "assets/images/svc/business-automation-integration/i1.jpg",
              "alt": "Target with arrows in the bullseye",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [192, 1227, 172], "f": [17, 700, 16.5, "O"], "text": "Examples of\n*Business Automation*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [192, 1265, 259],
                  "f": [11.5, 400, 13, "L"],
                  "text": "Enquiry management, appointment booking,\norder notifications and internal task assignment\nare some common use cases."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1212, 480, 110],
              "src": "assets/images/svc/business-automation-integration/i2.jpg",
              "alt": "Rising bar chart with an arrow",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [684, 1228, 136], "f": [17, 700, 20, "O"], "text": "Who Can *Benefit?*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [684, 1254, 294],
                  "f": [11.5, 400, 14, "L"],
                  "text": "Startups, small businesses, agencies,\ne-commerce stores, educational institutions,\nreal estate companies, consultants and growing teams."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1322, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [73, 1334, 288],
                  "f": [20, 700, 22, "O"],
                  "c": "#fff",
                  "em": "#ffb22a",
                  "text": "Automate, Integrate and Grow\nYour Business with *CRETECH*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [425, 1335.5, 312],
                  "f": [11, 400, 13, "L"],
                  "c": "#fff",
                  "text": "Share your business process and tool requirements with us.\nWe will review your workflow and suggest a suitable\nautomation solution."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [785, 1341, 179, 34],
                  "r": 17,
                  "f": [14, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=Business%20Automation%20%26%20Integration"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1394, 1632],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1393, 1024],
            "lines": [88, 28, 283],
            "al": "c",
            "f": [22, 700, 26, "O"],
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1424,
          "rowH": 18.5,
          "rowGap": 2.5,
          "bottom": 48,
          "waves": true,
          "f": [13, 700, 13, "O"],
          "cols": [[65, 425], [532, 427]],
          "items": [
            {
              "q": "What is business automation?",
              "a": "Business automation means using connected tools and workflows to handle routine tasks, so you can save time, reduce manual work and keep your operations running smoothly."
            },
            {
              "q": "Which business tasks can be automated?",
              "a": "Common examples include enquiry management, appointment booking, order notifications and internal task assignment, as well as emails, CRM updates and spreadsheet records."
            },
            {
              "q": "Can you connect my website with a CRM?",
              "a": "Yes. We can connect your website forms with a CRM so enquiry or customer details are transferred automatically for better lead and customer management."
            },
            {
              "q": "Can you automate website enquiry forms?",
              "a": "Yes. We connect your website forms with email, CRM, spreadsheets and other tools to manage leads automatically."
            },
            {
              "q": "Do I need to replace my existing software?",
              "a": "We first learn about your existing process and tools, then plan an automation that connects suitable tools and integrations to fit your workflow."
            },
            {
              "q": "Can you connect two different applications?",
              "a": "Yes. We connect different applications such as CRM, email, project management, payment and other business tools."
            },
            {
              "q": "Do you provide custom automation?",
              "a": "Yes. We create tailor-made automation workflows based on your specific business process and tool requirements."
            },
            {
              "q": "Can automation send emails automatically?",
              "a": "Yes. We set up automatic emails such as confirmations, reminders and notifications based on specific actions."
            },
            {
              "q": "Is business automation suitable for small businesses?",
              "a": "Yes. Automation can help startups, small businesses, agencies, e-commerce stores, educational institutions, real estate companies, consultants and growing teams."
            },
            {
              "q": "Will automation completely remove manual work?",
              "a": "Automation is meant to reduce manual work on routine tasks. We identify the tasks that can be automated for better efficiency."
            },
            {
              "q": "Is my business data secure during integration?",
              "a": "We plan each workflow around suitable tools and integrations, and test it with relevant scenarios to ensure it works properly before handover."
            },
            {
              "q": "Do I need to pay for third-party automation tools?",
              "a": "This depends on the tools your workflow needs. We discuss the suitable tools and integrations with you while planning the workflow."
            },
            {
              "q": "Can you modify an existing automation workflow?",
              "a": "Yes. Share your current workflow with us and we will review it and suggest suitable changes."
            },
            {
              "q": "How can I get started?",
              "a": "Share your business process and tool requirements with us. We will review your workflow and suggest a suitable automation solution."
            }
          ]
        }
      }
    },
    {
      "slug": "website-speed-optimization",
      "title": "Website Speed Optimization",
      "icon": "",
      "short": "Improve your website’s loading speed and overall performance.",
      "summary": "Improve your website’s loading speed and overall performance.",
      "image": "assets/images/services-page/svc-11.jpg",
      "intro": "Make your website faster, smoother and more efficient for a better user experience.",
      "features": [
        "Performance analysis and review",
        "Image optimization",
        "CSS and JavaScript optimization",
        "Browser caching and resource delivery",
        "Server and database performance",
        "Mobile speed optimization"
      ],
      "page": {
        "layout": "canvas",
        "_note": "Own design recreated from its 1024 px reference. Box = [x, y, w, h] in reference px. Pictures: assets/images/svc/website-speed-optimization/",
        "theme": "",
        "hero": {
          "eyebrow": "Website Speed Optimization",
          "title": "Website Speed\nOptimization *Services*",
          "text": "Make your website faster, smoother and more efficient for a better user experience.",
          "primary": {
            "label": "Get Started",
            "href": "contact?service=Website%20Speed%20Optimization"
          },
          "image": "assets/images/svc/website-speed-optimization/hero.jpg",
          "imageAlt": "Glass screen with a speed gauge reading Fast Loading and a rocket"
        },
        "body": {
          "y": [278, 1259],
          "items": [
            {
              "t": "txt",
              "tag": "h2",
              "box": [58.2, 290, 301],
              "f": [25, 700, 27.3, "O", -0.01],
              "text": "A Faster Website\nfor a *Better Experience*"
            },
            {
              "t": "txt",
              "tag": "p",
              "box": [58.2, 350.5, 308],
              "f": [12.5, 400, 17, "L"],
              "text": "We analyse, optimise and improve your\nwebsite’s loading speed by working on images,\ncode, caching, server performance and other\nkey factors to deliver a smoother and more\nreliable browsing experience."
            },
            {
              "t": "img",
              "box": [388, 286, 320, 160],
              "src": "assets/images/svc/website-speed-optimization/intro.jpg",
              "alt": "Two browser windows showing a fast loading web page, next to plants",
              "cls": "rd"
            },
            {
              "t": "card",
              "cls": "flat ckb",
              "box": [734, 285, 248, 152],
              "v": { "il": 6, "it": 7, "ir": 6, "ib": 6 },
              "kids": [
                {
                  "t": "list",
                  "box": [756.6, 301.2, 215],
                  "row": 31.1,
                  "ck": 22,
                  "cg": 19.4,
                  "f": [14.6, 700, 0, "O"],
                  "items": ["Faster Loading", "Smoother Navigation", "Better Performance", "Improved User Experience"]
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 452, 1024],
              "lines": [75, 22, 440.6],
              "al": "c",
              "f": [22, 700, 26, "O"],
              "text": "Our Website Speed Optimization Services"
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 490, 480, 136],
              "src": "assets/images/svc/website-speed-optimization/c1.jpg",
              "alt": "Browser window with a performance chart, score 72 and a magnifying glass",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [57.5, 500, 172.8], "f": [19, 700, 21, "O"], "text": "Performance\n*Analysis & Review*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [57.5, 548.2, 194.5],
                  "f": [12.3, 400, 16.2, "L"],
                  "text": "Check your website’s current\nspeed, find the issues and\nidentify the areas that need\nimprovement."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 490, 480, 136],
              "src": "assets/images/svc/website-speed-optimization/c2.jpg",
              "alt": "Image frames with a WebP label",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [542, 500, 123.6], "f": [19, 700, 21, "O"], "text": "Image\n*Optimization*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [542, 548.2, 176],
                  "f": [12.3, 400, 16, "L"],
                  "text": "Resize, compress and use\nmodern formats to reduce\nfile size while keeping\ngood visual quality."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 632, 480, 136],
              "src": "assets/images/svc/website-speed-optimization/c3.jpg",
              "alt": "Code editor window with a gear icon",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [57.5, 641.5, 186.4], "f": [19, 700, 21, "O"], "text": "CSS and JavaScript\n*Optimization*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [57.5, 689.7, 177.3],
                  "f": [12.3, 400, 15.9, "L"],
                  "text": "Clean unnecessary code,\nminify files and optimize\nresource loading for\nfaster performance."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 632, 480, 136],
              "src": "assets/images/svc/website-speed-optimization/c4.jpg",
              "alt": "Stacked glowing layers with a lightning bolt",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [542, 640.5, 186.3], "f": [19, 700, 21, "O"], "text": "Browser Caching\n*& Resource Delivery*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [542, 687.2, 188],
                  "f": [12.3, 400, 16.2, "L"],
                  "text": "Configure caching and\nresource delivery to reduce\nrepeated loading and\nimprove site speed."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 774, 480, 136],
              "src": "assets/images/svc/website-speed-optimization/c5.jpg",
              "alt": "Server units under a glass cloud",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [59, 783.5, 221.3], "f": [19, 700, 21, "O"], "text": "Server and\n*Database Performance*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [59, 830.1, 228],
                  "f": [12.3, 400, 15.9, "L"],
                  "text": "Review server response, database\nactivity and resource usage to\nmake the website more efficient\nand stable."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 774, 480, 136],
              "src": "assets/images/svc/website-speed-optimization/c6.jpg",
              "alt": "Phone showing a speed gauge",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [542, 783.5, 128], "f": [19, 700, 21, "O"], "text": "Mobile Speed\n*Optimization*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [542, 830.1, 172],
                  "f": [12.3, 400, 16.4, "L"],
                  "text": "Improve loading, layout\nand resource delivery\nfor a smoother and faster\nmobile experience."
                }
              ]
            },
            {
              "t": "txt",
              "tag": "h2",
              "box": [0, 919, 1024],
              "lines": [93, 16.5, 447.5],
              "al": "c",
              "f": [22, 700, 26, "O"],
              "text": "Our Website Speed Optimization Process"
            },
            {
              "t": "grp",
              "box": [32, 949, 960, 114],
              "src": "assets/images/svc/website-speed-optimization/proc.jpg",
              "kids": [
                { "t": "txt", "tag": "h3", "box": [77, 976.6, 85.4], "al": "c", "f": [12.5, 700, 13, "O"], "c": "#1e1a22", "text": "Initial Review" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [54.2, 1008, 133],
                  "al": "c",
                  "f": [10.2, 400, 13.75, "L"],
                  "text": "Understand your website,\nplatform and\nperformance concerns."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [250, 972.4, 77],
                  "al": "c",
                  "f": [12.5, 700, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Performance\nTesting"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [239.6, 1008, 98.7],
                  "al": "c",
                  "f": [10.2, 400, 13.75, "L"],
                  "text": "Analyse key pages\nusing relevant\nperformance tools."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [404, 972.4, 82],
                  "al": "c",
                  "f": [12.5, 700, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Issue\nIdentification"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [391.7, 1008, 108.3],
                  "al": "c",
                  "f": [10.2, 400, 13.75, "L"],
                  "text": "Find the main causes\nof slow loading and\nprioritise fixes."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [568.3, 972.4, 78.3],
                  "al": "c",
                  "f": [12.5, 700, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Optimization\nWork"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [543.3, 1008, 129],
                  "al": "c",
                  "f": [10.2, 400, 13.75, "L"],
                  "text": "Apply agreed\nimprovements to images,\ncode, caching and more."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [733, 972.4, 70],
                  "al": "c",
                  "f": [12.5, 700, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Testing &\nVerification"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [714, 1008, 109.6],
                  "al": "c",
                  "f": [10.2, 400, 13.75, "L"],
                  "text": "Check website\nfunctionality and\nloading performance."
                },
                {
                  "t": "txt",
                  "tag": "h3",
                  "box": [880.8, 972.4, 78],
                  "al": "c",
                  "f": [12.5, 700, 13, "O"],
                  "c": "#1e1a22",
                  "text": "Performance\nReview"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [876.7, 1008, 85.4],
                  "al": "c",
                  "f": [10.2, 400, 13.75, "L"],
                  "text": "Share the results\nand relevant\nobservations."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [30, 1071, 480, 110],
              "src": "assets/images/svc/website-speed-optimization/i1.jpg",
              "alt": "Laptop showing a speed gauge",
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [241.3, 1083.7, 172],
                  "f": [15, 700, 16.7, "O"],
                  "text": "Speed Optimization for\n*Different Platforms*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [241.3, 1121.5, 225],
                  "f": [11.3, 400, 14.6, "L"],
                  "text": "Optimisation for WordPress, e-commerce\nand custom websites based on their\nspecific requirements."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat",
              "box": [514, 1071, 480, 110],
              "src": "assets/images/svc/website-speed-optimization/i2.jpg",
              "alt": "Glass bar chart with a rising arrow",
              "kids": [
                { "t": "txt", "tag": "h2", "box": [717.3, 1083.7, 147], "f": [15, 700, 16.7, "O"], "text": "Optimization *Cost*\n*and Timeline*" },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [717.3, 1121.5, 250],
                  "f": [11.3, 400, 14.6, "L"],
                  "text": "The cost and timeline depend on the website\nsize, platform, current performance and\nrequired changes."
                }
              ]
            },
            {
              "t": "card",
              "cls": "flat dk",
              "box": [28, 1185, 968, 74],
              "kids": [
                {
                  "t": "txt",
                  "tag": "h2",
                  "box": [77.7, 1195.1, 288.6],
                  "f": [21.5, 700, 23.4, "O", -0.01],
                  "c": "#fff",
                  "em": "#ff9a1a",
                  "text": "Improve Your Website\nPerformance with *CRETECH*"
                },
                {
                  "t": "txt",
                  "tag": "p",
                  "box": [431.3, 1198.1, 285.7],
                  "f": [11.5, 400, 14.5, "L"],
                  "c": "#fff",
                  "text": "Share your website URL and performance concerns\nwith us. We will review your website and discuss\na suitable optimization plan."
                },
                {
                  "t": "btn",
                  "kind": "cream",
                  "box": [783, 1202.5, 176, 37],
                  "f": [13.4, 700, 0, "O"],
                  "label": "Get Started Today",
                  "href": "contact?service=Website%20Speed%20Optimization"
                }
              ]
            }
          ]
        },
        "faq": {
          "y": [1259, 1539],
          "title": {
            "t": "txt",
            "tag": "h2",
            "box": [0, 1264.3, 1024],
            "lines": [100, 23, 303.6],
            "al": "c",
            "f": [21, 700, 24, "O"],
            "text": "Frequently *Asked Questions*"
          },
          "rowsY": 1298.8,
          "rowH": 21,
          "rowGap": 2,
          "bottom": 67,
          "split": 7,
          "f": [12.4, 700, 13, "O"],
          "cols": [[65, 421], [540, 418]],
          "items": [
            {
              "q": "What is website speed optimization?",
              "a": "It is the work of analysing, optimising and improving your website’s loading speed through images, code, caching, server performance and other key factors."
            },
            {
              "q": "Why is my website loading slowly?",
              "a": "Common causes include large images, unnecessary code, caching and resource delivery settings, or server and database performance. We check your website to find the main causes."
            },
            {
              "q": "Can you improve my existing website speed?",
              "a": "Yes. We review your website’s current speed, identify the main causes of slow loading and apply agreed improvements to images, code, caching and more."
            },
            {
              "q": "What is Google PageSpeed Insights?",
              "a": "Google PageSpeed Insights is a performance tool that tests how a page loads. We use relevant performance tools like this to analyse key pages."
            },
            {
              "q": "What are Core Web Vitals?",
              "a": "Core Web Vitals are Google’s measures of a page’s loading, responsiveness and visual stability. They are part of the performance testing we do on key pages."
            },
            {
              "q": "Will speed optimization affect my website design?",
              "a": "The work focuses on loading speed. Images are compressed while keeping good visual quality, and we check the website’s functionality and loading performance after the changes."
            },
            {
              "q": "Can you optimize images on my website?",
              "a": "Yes. We resize, compress and use modern formats to reduce file size while keeping good visual quality."
            },
            {
              "q": "Does website hosting affect speed?",
              "a": "Yes. Server response and resource usage affect loading speed, so we review server and database performance as part of the work."
            },
            {
              "q": "What is browser caching?",
              "a": "Browser caching stores website resources so repeat visits do not need to load them again. We configure caching and resource delivery to reduce repeated loading."
            },
            {
              "q": "What is a CDN?",
              "a": "A CDN (content delivery network) delivers website files from servers closer to your visitors. It is one of the resource delivery options we can review for your website."
            },
            {
              "q": "Can speed optimization improve Google rankings?",
              "a": "A faster website gives visitors a smoother experience, and speed is one of the factors search engines consider. We do not promise specific rankings."
            },
            {
              "q": "How long does website speed optimization take?",
              "a": "The timeline depends on the website size, platform, current performance and required changes."
            },
            {
              "q": "Can you guarantee a 100/100 PageSpeed score?",
              "a": "No. Scores depend on the website, platform and many other factors. We apply agreed improvements and share the results and relevant observations."
            },
            {
              "q": "How can I request website speed optimization?",
              "a": "Share your website URL and performance concerns with us. We will review your website and discuss a suitable optimization plan."
            }
          ]
        }
      }
    }
  ],

  "home": {
    "_heroNote": "Optional numbers under the buttons: add \"heroStats\" here (all slides) or \"stats\" on a slide. Only use real numbers. textTone \"light\" = white text, for dark photos.",
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
    "workSection": {
      "_note": "Our Work section (after What We Can Do for You). Each project: image, url (shown in the browser bar), href, kind, title, text, done (chips), button. Leave href empty for no link.",
      "eyebrow": "Our Work",
      "title": "Real Projects, *Built End to End*",
      "text": "Websites we planned, designed, wrote and developed from start to finish.",
      "button": { "label": "Start Your Project →", "href": "contact" },
      "doneLabel": "What we did",
      "projects": [
        {
          "kind": "Detective Agency Website",
          "title": "National Detectives",
          "text": "A complete website for a private detective agency in India. The purpose of the website is to provide people with investigation services from corporate and personal investigations to surveillance services, with complete confidentiality. We handled the entire project, including website design and development, admin panel, SEO optimisation and social media management.",
          "image": "assets/images/work/national-detectives.jpg",
          "url": "nationaldetectives.in",
          "link": { "label": "View Live Website ↗", "href": "https://nationaldetectives.in/" },
          "done": ["UI/UX Design", "Website Development", "Admin Panel", "Testing", "SEO: On-page · Off-page · Technical", "Social Media Marketing", "Content Writing", "Images & Graphics"]
        },
        {
          "kind": "Online Puja & Pandit Booking",
          "title": "Hindu.International",
          "text": "Hindu.International is a digital spiritual website that connects people with Hindu traditions, religious practices and spiritual services. It providing Hindu rituals and religious services virtually while also promoting donation initiatives and spiritual awareness. We handled the project end to end, including website design and development, admin panel, content writing, SEO, digital promotion and social media marketing.",
          "image": "assets/images/work/hindu-international.jpg",
          "url": "hindu.international",
          "link": { "label": "View Live Website ↗", "href": "https://hindu.international/" },
          "done": ["UI/UX Design", "Website Development", "Admin Panel", "Testing", "SEO: On-page · Off-page · Technical", "Social Media Marketing", "Content Writing", "Images & Graphics"]
        },
        {
          "kind": "Our Own Website",
          "title": "CRETECH",
          "text": "The website you are on right now is our own brand, CRETECH. Every part of it from the UI/UX design and page layouts to the admin panel structure, content, images and graphics was planned and create by us. CRETECH reflects creativity, technology and thoughtful digital solutions all in one platform. We bring the same vision, commitment and responsibility to every project we create for our clients.",
          "image": "assets/images/work/cretech.jpg",
          "url": "cretech.in",
          "link": { "label": "You Are Here ✓", "href": "" },
          "done": ["UI/UX Design", "Website Development", "Admin Panel", "Testing", "SEO: On-page · Off-page · Technical", "Social Media Marketing", "Content Writing", "Images & Graphics"]
        }
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
      "spread": 1.15,
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
      "subtitle": "A Clear Process for Every Project.",
      "text": "From understanding your idea to final delivery, we follow a simple, transparent and collaborative process that keeps you involved at every step and ensures a high-quality result.",
      "image": "assets/images/process-page/process-hero.jpg"
    },
    "stages": [
      { "title": "Getting Started", "text": "We connect with you to understand your idea, goals and requirements.", "tone": "orange", "image": "assets/images/process-page/stage-01.jpg" },
      { "title": "Planning & Strategy", "text": "We analyse your needs, suggest the right approach and finalise the project plan with clear timelines.", "tone": "pink", "image": "assets/images/process-page/stage-02.jpg" },
      { "title": "Design & Prototype", "text": "We create the design, layout and prototype to give you a clear vision of the final solution.", "tone": "mauve", "image": "assets/images/process-page/stage-03.jpg" },
      { "title": "Development", "text": "We build your solution with clean, secure and performance-focused development.", "tone": "blue", "image": "assets/images/process-page/stage-04.jpg" },
      { "title": "Testing & Review", "text": "We thoroughly test the project, fix any issues and share it with you for review and feedback.", "tone": "coral", "image": "assets/images/process-page/stage-05.jpg" },
      { "title": "Finalization & Launch", "text": "We make the final updates, set everything live and ensure a smooth and successful launch.", "tone": "rose", "image": "assets/images/process-page/stage-06.jpg" },
      { "title": "Project Completion", "text": "We deliver the final project, share all the essentials and stay connected for future support.", "tone": "brown", "image": "assets/images/process-page/stage-07.jpg" }
    ],
    "clear": {
      "title": "Keeping Every *Stage Clear*",
      "text": "Our process is built on transparency, collaboration and quality, so you always know what’s happening and what comes next.",
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
      "text": "Let’s turn your idea into a real and impactful digital solution.",
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
      { "title": "Website Maintenance &\nSupport", "text": "Keep your website updated, secure and running smoothly with reliable technical support.", "tone": "orange", "image": "assets/images/services-page/svc-09.jpg", "href": "services/website-maintenance-support" },
      { "title": "Domain & Hosting Setup", "text": "Get your domain, hosting and complete setup done hassle-free.", "tone": "purple", "image": "assets/images/services-page/svc-10.jpg", "href": "services/domain-hosting-setup" },
      { "title": "Website Speed Optimization", "text": "Improve your website’s loading speed and overall performance.", "tone": "orange", "image": "assets/images/services-page/svc-11.jpg", "href": "services/website-speed-optimization" },
      { "title": "Website Security & Backup", "text": "Protect your website with strong security measures and reliable backup solutions.", "tone": "green", "image": "assets/images/services-page/svc-12.jpg", "href": "services/website-security-backup" },
      { "title": "Landing Page Development", "text": "Create high-converting landing pages for campaigns, products and lead generation.", "tone": "orange", "image": "assets/images/services-page/svc-13.jpg", "href": "services/landing-page-development" },
      { "title": "Business Automation &\nIntegration", "text": "Automate your processes and integrate the right tools to save time and improve efficiency.", "tone": "purple", "image": "assets/images/services-page/svc-14.jpg", "href": "services/business-automation-integration" }
    ],
    "others": { "eyebrow": "Our Services", "title": "Explore Our *Other Services*", "text": "Everything your business needs to grow online, from one trusted team." },
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

  "contactPage": {
    "_note": "Contact page. Pictures are real images (replaceable from the admin). *word* = orange. The form posts to admin/public.php?action=enquiry; its messages come from \"contact\" below.",
    "hero": {
      "eyebrow": "Contact Us",
      "title": "Let’s Discuss\n*Your Project*",
      "text": "Have an idea, a new requirement or a project in mind?\nShare the details with us and our team will get back\nto you with the best possible way forward.",
      "image": "assets/images/contact-page/contact-hero.jpg",
      "highlights": [
        { "title": "Website & App\nDevelopment", "icon": "assets/images/contact-page/ic-code.png" },
        { "title": "Design & Content\nSolutions", "icon": "assets/images/contact-page/ic-pen.png" },
        { "title": "SEO & Digital\nGrowth", "icon": "assets/images/contact-page/ic-chart.png" }
      ]
    },
    "form": {
      "title": "Send Us Your *Project Details*",
      "text": "Fill in the form below and we’ll get in touch with you soon.",
      "name": "Your Name",
      "email": "Your Email",
      "phone": "Your Phone Number",
      "message": "Project Details",
      "messageHelp": "(Tell us about your idea, requirements or any specific details.)",
      "button": "Submit Request"
    },
    "features": [
      { "title": "Quick Response", "text": "We usually get back\nwithin 24 hours.", "icon": "assets/images/contact-page/ic-bolt.png" },
      { "title": "Expert Support", "text": "Get guidance from our\nexperienced team.", "icon": "assets/images/contact-page/ic-team.png" },
      { "title": "Project Assistance", "text": "From idea to launch, we’re\nwith you at every step.", "icon": "assets/images/contact-page/ic-layers.png" }
    ],
    "touch": {
      "title": "Get in Touch",
      "text": "We’re here to help you turn\nyour ideas into a powerful\ndigital solution.",
      "image": "assets/images/contact-page/contact-touch.jpg"
    },
    "details": [
      { "title": "Call Us", "text": "+91 8800462341", "href": "tel:+918800462341", "icon": "assets/images/contact-page/ic-phone.png" },
      { "title": "Email Us", "text": "hello@cretech.in", "href": "mailto:hello@cretech.in", "icon": "assets/images/contact-page/ic-mail.png" },
      { "title": "Our Location", "text": "Noida, Uttar Pradesh, India", "href": "", "icon": "assets/images/contact-page/ic-pin.png" },
      { "title": "Our Availability", "text": "Monday – Saturday\n10:00 AM – 7:00 PM (IST)", "href": "", "icon": "assets/images/contact-page/ic-cal.png" }
    ],
    "ribbon": "assets/images/contact-page/contact-ribbon.jpg"
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
