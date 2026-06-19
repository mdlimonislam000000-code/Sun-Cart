# ☀️ SunCart – Summer Essentials Store

SunCart is a modern, responsive and full-stack (Next.js) e-commerce web application. It is specifically designed for Summer Essentials such as sunglasses, skin care products and summer collections. The project features dynamic product filtering, secure authentication and profile management.


## 🔗 Live Links & Repository
- **Live Deployment Link:** [https://sun-cart-flax.vercel.app/]
- **GitHub Repository:** [https://github.com/mdlimonislam000000-code/Sun-Cart]


---


## 📋 Assignment Requirements Met


### ১. Home Page & Architecture
- **Hero Section:** 
An attractive banner has been added to the top of the home page highlighting the “Summer Sale 50% OFF 🔥” offer.

- **Popular Products (3 Cards Limit):** 
filtered from the original data source (JSON) are displayed as cards on the home page. Each card contains an image, name, price, rating, and an action button.

- **Extra Sections:** 
Summer Care Tips** and **Top Brands** sections have been added to the home page to increase user engagement.


### ২.BetterAuth Integration

- **Login Page (`/login`):**
Secure Email/Password login form along with **Google Social Login** button implemented for 1-click login. Redirects to home page on successful login.

- **Register Page (`/register`):** 
Form for new users with Name, Email, Photo-URL and Password input. Redirects to login page on successful registration.


### ৩.Bonus Marks

- **My Profile Route (`profile`):**
 Only logged in users can access this private route. Here the user's name, email, and profile picture are displayed in a beautiful DayGUI card.

- **Update Information:** From the Settings button on the profile page, users can update their **Name** and **Profile Picture URL** via BetterAuth's `updateUser` method by going to a dedicated form.


### ৪.UX Improvements:

- **Interactive Toasts:** The entire application uses `react-toastify` / `react-hot-toast` to display professional success and error notifications, eliminating annoying browser alerts.

- **NPM Animations:** `Animate.css` Modern and smooth animations have been added to the hero banner text and navbar logo using libraries.

---


## 🛠️ Technologies & Packages Used

- **Framework:** Next.js 15 (App Router)
- **Library:** React.js
- **Styling:** Tailwind CSS & DaisyUI
- **Authentication:** BetterAuth (Credentials & Google Provider)
- **Icons:** React Icons (`react-icons`)
- **Animation:** Animate.css
- **Notifications:** React Toastify (`react-toastify`) / React Hot Toast


---


## 💻 Local Setup & Installation


To run the project on your local machine, follow the commands below:

১. **Create a clone of the repository:**
```bash
git clone (https://github.com/mdlimonislam000000-code/Sun-Cart)
