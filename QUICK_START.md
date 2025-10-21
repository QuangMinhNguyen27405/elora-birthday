# 🎉 Quick Start Guide - Elora's Birthday Website

## 🚀 Getting Started (5 Minutes!)

### Step 1: Add Your Photos

1. Find 3 beautiful photos of Elora (or you together)
2. Rename them to:
   - `image1.jpg`
   - `image2.jpg`
   - `image3.jpg`
3. Place them in the folder: `public/assets/`
4. Replace the existing placeholder files

**Photo Tips:**

- Use high-quality images (1920x1080 recommended)
- Choose photos with good lighting
- Photos should look good with white text on top

### Step 2: Run the Website

Open PowerShell in this project folder and run:

```powershell
npm run dev
```

Then open your browser to: **http://localhost:5173**

### Step 3: Personalize (Optional)

- **Letter Content**: Edit `src/components/LetterSection.tsx`
- **Restaurant Photo**: Add to `public/assets/restaurant.jpg`

## ✨ What You'll See

### 🏠 Home Section

- Beautiful carousel of your 3 photos
- "Happy Birthday, my Love 💖" text overlay
- Auto-slides every 4 seconds
- Manual navigation arrows

### 💌 Letter Section

- Heartfelt birthday letter
- Romantic pink gradient background
- Floating cow decoration
- Smooth scroll animations

### 🍽️ Invitation Section

- Dinner details for Eve on Adams
- Date: October 22, 2025 at 7:00 PM
- Floating cow icons and sparkles
- Beautiful card design

## 📱 Test It Out

1. **Desktop**: Full navigation bar at top
2. **Mobile**: Tap navigation links to jump to sections
3. **Scroll**: Watch animations appear
4. **Carousel**: Auto-advances or use arrows

## 🎨 Want to Customize More?

### Change Letter Text

File: `src/components/LetterSection.tsx` (lines 45-71)

- Write your own personal message
- Add inside jokes or special memories
- Change the signature

### Add Restaurant Background

1. Download a nice photo of Eve on Adams restaurant
2. Save as `public/assets/restaurant.jpg`
3. Open `src/components/InvitationSection.tsx`
4. Go to line 43-47
5. Uncomment line 45 and comment out the gradient

### Adjust Colors

File: `tailwind.config.cjs` and component files

- Replace `pink-` with `purple-`, `blue-`, etc.
- Change `bg-pink-200` to other Tailwind colors

## 🐛 Having Issues?

### Photos Not Showing?

- Check files are in `/public/assets/` folder
- File names must be exactly: `image1.jpg`, `image2.jpg`, `image3.jpg`
- Try refreshing the browser (Ctrl+F5)

### Site Won't Start?

```powershell
# Reinstall dependencies
npm install

# Try starting again
npm run dev
```

### Seeing Errors?

- Check the terminal for error messages
- Make sure all files are saved
- Try closing and reopening VS Code

## 📦 Build for Production

When you're ready to share or deploy:

```powershell
npm run build
```

This creates a `/dist` folder with optimized files.

## 🎯 Deployment Options

### Option 1: Vercel (Recommended - FREE!)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy" - Done!

### Option 2: Netlify (Also FREE!)

1. Drag the `/dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Get instant URL to share

### Option 3: GitHub Pages (FREE!)

1. Push code to GitHub
2. Enable GitHub Pages in settings
3. Use `gh-pages` package for deployment

## ✅ Final Checklist

Before showing to Elora:

- [ ] All 3 photos replaced with real ones
- [ ] Letter content personalized (optional)
- [ ] Tested on phone and computer
- [ ] Date/time/location verified (October 22, 2025, 7:00 PM, Eve on Adams)
- [ ] All navigation links work
- [ ] Carousel auto-advances smoothly

## 💝 You're All Set!

The website is complete and ready to amaze Elora! 🎂✨

Just add your photos and hit `npm run dev` to see it come to life!

---

**Need help?** Check `PROJECT_COMPLETE.md` for detailed documentation.

**Questions?** All component files have helpful comments explaining how they work.

**Happy Birthday to Elora!** 🎉💖🐄
