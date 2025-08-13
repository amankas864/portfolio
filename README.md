# Aman Kashyap - Portfolio Website

A modern, responsive portfolio website showcasing both Full-Stack Development and Data Science skills. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Dark Theme Design** - Modern dark mode with orange accent colors
- **Responsive Layout** - Mobile, tablet, and desktop friendly
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Multi-Page Sections** - Home, About, Skills, Projects, Experience, Education, Contact
- **Interactive Elements** - Hover effects, animated skill bars, and smooth scrolling
- **Contact Form** - EmailJS integration for direct email delivery
- **Resume Downloads** - Separate Full-Stack and Data Science resume downloads
- **Social Integration** - Links to LinkedIn, GitHub, Instagram, Naukri.com, LeetCode

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- EmailJS account (free)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd aman-kashyap-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure EmailJS

The contact form uses EmailJS to send emails directly to your Gmail. Follow these steps:

#### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

#### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" and connect your Gmail account
4. Note down the **Service ID**

#### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Message: {{message}}

This message was sent from your portfolio website contact form.
```

4. Note down the **Template ID**

#### Step 4: Get User ID
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (User ID)

#### Step 5: Update Configuration
Update the Contact component with your EmailJS credentials:

```typescript
// In components/Contact.tsx, replace:
init('YOUR_USER_ID') // Your EmailJS Public Key
'YOUR_TEMPLATE_ID'   // Your Email Template ID
'YOUR_SERVICE_ID'    // Your Gmail Service ID
```

### 4. Customize Content

Update the following files with your information:

- **Personal Details**: Update name, email, location in components
- **Social Links**: Update social media URLs in Hero and Footer components
- **Projects**: Replace placeholder projects with your actual projects
- **Experience**: Update work experience details
- **Education**: Update academic background
- **Skills**: Adjust skill levels and technologies
- **Resumes**: Add your actual resume PDF files to the public folder

### 5. Add Resume Files

Place your resume files in the `public` folder:
- `resume-fs.pdf` - Full-Stack Developer Resume
- `resume-ds.pdf` - Data Science Resume

### 6. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain or use the free subdomain (e.g., `aman-portfolio.vercel.app`)

### Alternative Deployment Options

- **Netlify**: Similar to Vercel, supports custom domains
- **GitHub Pages**: Free hosting for static sites
- **AWS S3 + CloudFront**: For advanced users

## 📱 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your preferred accent color
    500: '#f2750a', // Main orange
  },
  dark: {
    // Your preferred dark theme colors
    950: '#020617', // Background
  }
}
```

### Animations
Modify animations in `tailwind.config.js` and component files.

### Content
Update all placeholder content with your actual information, projects, and experience.

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Skills.tsx           # Skills section
│   ├── ProjectsOverview.tsx # Projects showcase
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Work experience
│   ├── Education.tsx        # Education & certifications
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
│   ├── resume-fs.pdf        # Full-Stack resume
│   └── resume-ds.pdf        # Data Science resume
└── README.md                # This file
```

## 🎨 Design Features

- **Dark Theme**: Professional dark mode with accent colors
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: Framer Motion powered transitions
- **Interactive Elements**: Hover effects and micro-interactions
- **Modern Typography**: Clean, readable fonts
- **Consistent Spacing**: Tailwind CSS utility classes

## 📧 Contact Form Setup

The contact form automatically sends emails to `devaman0110@gmail.com` when someone submits a message. Make sure to:

1. Complete EmailJS setup (see Configuration section)
2. Test the form in development
3. Verify emails are received in your Gmail

## 🚀 Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components load as needed
- **CSS Optimization**: Tailwind CSS purging in production

## 🔒 Security

- **Form Validation**: Client-side and server-side validation
- **Email Sanitization**: EmailJS handles email security
- **HTTPS**: Automatic HTTPS on Vercel deployment

## 📈 SEO

- **Meta Tags**: Open Graph and Twitter Card support
- **Structured Data**: Semantic HTML structure
- **Performance**: Fast loading times for better SEO
- **Mobile-Friendly**: Responsive design for mobile SEO

## 🐛 Troubleshooting

### Common Issues

1. **EmailJS Not Working**
   - Verify all IDs are correct
   - Check EmailJS service status
   - Test with EmailJS dashboard

2. **Build Errors**
   - Clear `.next` folder
   - Update dependencies
   - Check TypeScript errors

3. **Styling Issues**
   - Verify Tailwind CSS is working
   - Check CSS import order
   - Clear browser cache

### Support

For issues or questions:
- Check EmailJS documentation
- Review Next.js documentation
- Check Tailwind CSS documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **EmailJS** for easy email integration
- **Vercel** for seamless deployment

---

**Built with ❤️ by Aman Kashyap**

Ready to showcase your skills? Deploy this portfolio and start impressing potential clients and employers!
