

# 🌟 React Contact List App

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react\&logoColor=white)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/<your-username>/<repo-name>)](https://github.com/<your-username>/<repo-name>/issues)

A **modern and interactive React application** to manage contacts. Users can **view, search, and add contacts** dynamically. Built using **React Hooks** with a responsive and fancy UI.

---

## ✨ Features

* **View Contacts** – Displays contact cards with avatar, name, email, and age.
* **Search Contacts** – Live search by name.
* **Add Contacts** – Add new contacts dynamically with name, email, age, and avatar URL.
* **Toggle Age** – Show or hide age for each contact.
* **Fancy UI & Animations** – Gradient backgrounds, hover effects, and responsive design.

---

## 📸 Demo

![App Demo](demo.gif)
*Replace `demo.gif` with your actual screen recording or GIF.*

---

## 🚀 Technologies Used

* **React 18** – Frontend framework
* **React Hooks** – `useState`, `useEffect`
* **CSS3** – Modern styling, gradients, animations
* **Random User API** – Fetch initial contacts

---

## 🛠 Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Run the app locally:**

```bash
npm start
# or
yarn start
```

Open `http://localhost:3000` in your browser.

---

## 🗂 Project Structure

```
contact-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main component with logic
│   ├── styles.css      # Fancy styling for app
│   └── index.js        # React entry point
├── package.json
└── README.md
```

---

## 💡 Code Highlights

### App.js

* **State Management:**

  * `contacts` – List of contacts.
  * `searchTerm` – Filter contacts by name.
  * `newContact` – Holds new contact info.

* **useEffect Hook:** Fetches 5 initial contacts from Random User API.

* **Functions:**

  * `handleAddContact()` – Adds a new contact to the list.
  * `filteredContacts` – Dynamically filters contacts by search input.

* **Components:**

  * `ContactCard` – Displays contact details with avatar and toggle-age button.

### styles.css

* Gradient backgrounds for the page and buttons.
* Hover animations and card elevation effects.
* Responsive layout for desktop and mobile.
* Smooth focus and transition effects for inputs and buttons.

---

## 🖱 Usage

1. **Search Contact:** Type any part of the name in the search bar.
2. **Add Contact:** Fill out the form and click **Add Contact**.
3. **Toggle Age:** Click **Toggle Age** to show/hide the age on each contact card.

---

## 🌱 Future Improvements

* Edit and delete contacts.
* Persist contacts in local storage or database.
* Pagination for large contact lists.
* Avatar upload instead of using URL.






