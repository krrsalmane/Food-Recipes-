# 🍽️ Recipe App – Angular 17 + Tailwind CSS

A modern, responsive web application for browsing, filtering, rating, and commenting on recipes. Built with **Angular 17**, styled using **Tailwind CSS**, and backed by a mock API (JSON Server or Firebase). The app showcases best practices in routing, component modularity, service-driven architecture, and local storage handling.

---

## 📸 Preview

![screenshot-placeholder](#) <!-- Replace with actual image URLs if available -->

---

## 🚀 Features

### ✅ User Capabilities

- Browse a list of curated recipes.
- View detailed recipe information (name, image, category, ingredients, steps).
- Filter recipes by category (e.g., Vegetarian, Vegan, Dessert).
- Search recipes by name or chef.
- Rate recipes with a 1–5 star system.
- Leave comments and opinions on recipes.
- Persist ratings and comments locally (LocalStorage).

### 🔐 Bonus (Authentication)

- Simple login form for user authentication (stored in LocalStorage).

---

## 🧱 Tech Stack

| Layer           | Tools/Technologies                  |
|----------------|--------------------------------------|
| Frontend       | Angular 17, TypeScript, HTML, CSS    |
| UI Framework   | Tailwind CSS                         |
| Backend/API    | JSON Server or Firebase              |
| Auth & Storage | LocalStorage                         |
| Tooling        | Angular CLI, Git, GitHub, Postman    |

---

## 🧩 Angular Architecture

### 📁 Core Components

- `NavbarComponent` – Navigation bar with search and category links
- `HomeComponent` – Landing page with trending or featured recipes
- `RecipeListComponent` – Filterable recipe list
- `RecipeDetailComponent` – Full recipe view with ratings/comments
- `LoginComponent` – Basic authentication form
- `RatingComponent` – Interactive 1–5 star rating system
- `FooterComponent` – Responsive site footer with links

---

## 🧠 Services

- **`RecipeService`** – Handles all API interactions for fetching and filtering recipes.
- **`RatingService`** – Manages local storage of ratings and user comments.

---

## 📦 Installation & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/recipe-app.git
cd recipe-app
