# Fly Korean - Image Placement Guide

Replace the Unsplash placeholder images with your actual photos for maximum authenticity.

## Story Section (5 Chapters)

| Location | Currently | Replace With |
|----------|-----------|--------------|
| **Hero Background** | Seoul skyline (Unsplash) | Panoramic Seoul view you took, or professional photo of you teaching |
| **Ch.1 "The Rise"** | Generic collaborative learning | You teaching a class in your coaching center, your office setup, or a whiteboard lesson |
| **Ch.2 "The Burnout"** | Person contemplating | You looking tired/stressed (candid), your old office at night, stack of paperwork |
| **Ch.3 "The Journey"** | Nature landscape | Your actual travel photos from Vietnam, meeting locals, candid travel moments |
| **Ch.4 "The Calling"** | Team collaboration | You explaining on a whiteboard, 1:1 lesson screenshot, Preply lesson capture |
| **Ch.5 "The Mission"** | Office meeting | Screenshot of your lesson documentation system, homework examples, web app mockup |

## Philosophy Section

| Location | Currently | Replace With |
|----------|-----------|--------------|
| **Section Background** | Subtle Korean traditional art | Korean calligraphy, hanbok detail, traditional pattern |
| **Pronunciation Card** | No image | Screenshot of you demonstrating mouth positions, jaw/lip positioning capture |
| **Sentence Logic Card** | No image | Whiteboard capture showing sentence structure comparison |
| **Cultural Context Card** | No image | Slide showing honorific levels, or cultural context teaching screenshot |

## System Section

| Location | Currently | Replace With |
|----------|-----------|--------------|
| **Section Background** | Subtle tech pattern | Your actual Notion workspace or lesson management dashboard |
| **AI Documentation Card** | Mockup doc wireframe | Actual screenshot of a lesson summary (anonymized) |
| **3-Doc Homework Card** | List items only | Screenshot of actual homework page (anonymized) |
| **Personal App Card** | Text list | Screenshot of actual sentence builder app in action |
| **Daily Feedback Card** | Chat mockup | Actual message exchange screenshot (anonymized) |

## Reviews Section

| Location | Currently | Replace With |
|----------|-----------|--------------|
| **Section Background** | Subtle abstract gradient | Collage of student screenshots, or warm classroom atmosphere |
| **Review Cards** | Text only | Add student avatars if they consent, or keep initial-based avatars |
| **Trust Badges** | Stats only | Screenshots of your actual Preply Super Tutor badge, rating page |

## Contact Section

| Location | Currently | Replace With |
|----------|-----------|--------------|
| **Section Background** | Subtle warm pattern | You at your workspace, inviting teaching setup, or friendly portrait |

## How to Replace Images

For Unsplash images, replace the URL in the `style="background-image: url('...')"` or `src="..."` attributes.

For your own photos:
1. Upload to the `flykorean/images/` folder
2. Replace the URL with `images/your-photo.jpg`
3. Optimize images: max 1920px wide, JPEG quality 80%, under 500KB each
4. For background images: use wider/landscape aspect ratio
5. For story images: 600x400px is ideal

## Image Effects Already Applied

- **Hero**: Full-screen parallax scroll + warm gradient overlay
- **Story**: Right-side fade mask (`img-fade-left` class)
- **Philosophy/System**: Very subtle background (3-4% opacity) with section color overlay
- **Reviews**: 5% opacity background
- **Contact**: 6% opacity background with gradient overlay
- **All story images**: CSS `border-radius: 16px` + gradient masks

To add more visible background images, increase the `opacity-[0.04]` values (e.g., `opacity-[0.08]` for more visible).
