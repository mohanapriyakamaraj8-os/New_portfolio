export const profile = {
  name: 'Mohanapriya Kamaraj',
  email: 'mohanapriyaks837@gmail.com',
  linkedin: 'https://linkedin.com/in/mohanapriyakamaraj-669518218',
  portfolio: 'https://mohanapriyakamaraj8-os.github.io/Portfolio/',
}
export const nav = ['About', 'Experience', 'Work', 'Skills', 'Contact']

export const experience = [
  { org: 'Login360, Chennai', role: 'Java Full Stack Developer cum Technical Trainer', when: 'January 2026 to Present', wide: true,
    dev: ['Working on the Login360 CRM web application.', 'Developing and improving application features.', 'Working across frontend and backend workflows.', 'Database connectivity and application functionality.', 'Implementing student-related workflows.'],
    featured: 'Developed a student certificate download portal integrated with the CRM application, enabling students to automatically access and download their certificates.',
    mentor: ['Mentored 100+ students in Java and web application development.', 'Main focus on JavaScript, React.js, Java Full Stack development and web application development.', 'Guided students through practical coding exercises and application development.'] },
  { org: 'Rasa.AI Labs, Chennai', role: 'Junior Software Engineer', when: 'March 2025 to November 2025',
    points: ['Built the Fuel Cell Laboratory Management System with Java, Spring Boot and MySQL.',
      'Implemented Spring Security with JWT and Redis-backed session and token handling.',
      'Connected Angular web and Flutter mobile clients to REST APIs.',
      'Shipped booking, equipment, dashboards, PDF reports and Groq AI document summaries and chatbot.'] },
  { org: 'Nithra Apps India Pvt. Ltd.', role: 'Web Developer Intern', when: 'June 2024 to August 2024',
    points: ['Built responsive pages with HTML, CSS, Bootstrap and JavaScript, backed by MySQL.'] },
]

export const projects = [
  { name: 'Fuel Cell Laboratory Management System', mark: 'Fuel Cell Lab', kind: 'lab', image: null,
    desc: 'A web and mobile platform for booking and running a research laboratory.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Angular', 'Flutter', 'JWT', 'Redis', 'Groq AI'],
    features: ['Laboratory booking', 'Equipment and facility management', 'Role-based access control', 'Dashboard and reports', 'AI-powered document summarization', 'Customer support workflows'], github: null },
  { name: 'E-Commerce Web Applications', mark: 'Book Store', kind: 'shop', image: null,
    desc: 'Storefronts including an online book-selling platform, built on a Spring Boot API.',
    tech: ['React.js', 'Java', 'Spring Boot', 'REST APIs', 'MySQL'],
    features: ['Product catalogue', 'Inventory management', 'Order processing', 'Customer management', 'Frontend-backend integration'], github: null },
  { name: 'Web4Ex Solutions Website', mark: 'Web4Ex', kind: 'web', image: null,
    desc: 'A responsive training and services site with dynamic listings and forms.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
    features: ['Dynamic program and service listings', 'Forms and CRUD workflows', 'Backend API integration'], github: null },
  { name: 'C.A. Foods Website', mark: 'C.A. Foods', kind: 'caf', image: null,
    desc: 'A catering and party-hall booking platform with live search.',
    tech: ['JavaScript', 'Java', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
    features: ['Asynchronous search without page reloads', 'Dynamic hall and service retrieval', 'Booking business logic'], github: null },
]

export const skills = [
  { group: 'Backend Development', big: ['Java', 'Spring Boot'], items: ['Core Java', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'JWT Authentication'] },
  { group: 'Frontend Development', items: ['React.js', 'Angular', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'] },
  { group: 'Database Management', items: ['MySQL', 'PostgreSQL', 'Redis'] },
  { group: 'Tools & Integrations', items: ['Git and GitHub', 'Maven', 'Postman', 'Groq AI', 'iTextPDF', 'SMTP', 'Agile/Scrum'] },
]
