# Pokemon Universe

Welcome to the "Pokemon Universe" project! This repository houses a web application that enables users to delve into the captivating world of Pokemon. Whether you're a seasoned Pokemon Trainer or just getting started, this project will guide you through the process of building a dynamic web application using React and Vite.

## Introduction

The "Pokemon Universe" project is a captivating web application crafted with React and Vite. The aim of this project is to provide users with an engaging platform to explore and learn about various Pokemon characters. This Readme will walk you through the project's structure, explain how to set it up on your local machine, and offer insights into each component's role in building this dynamic app.

## Folder Structure

Here's an overview of the project's folder structure:

pokedex/
├── public/
│ ├── assets/
│ │ ├── favicon.ico
│ │ ├── vite.svg
├── src/
│ ├── components/
│ │ ├── Pokedex/
│ │ │ ├── Pokedex.js
│ │ │ ├── Pokedex.css
│ │ │ └── ...
│ │ ├── PokemonDetails/
│ │ │ ├── PokemonDetails.js
│ │ │ ├── PokemonDetails.css
│ │ │ └── ...
│ │ ├── PokemonList/
│ │ │ ├── PokemonList.js
│ │ │ ├── PokemonList.css
│ │ │ └── ...
│ │ ├── Pokemon/
│ │ │ ├── Pokemon.js
│ │ │ ├── Pokemon.css
│ │ │ └── ...
│ │ ├── Search/
│ │ │ ├── Search.js
│ │ │ ├── Search.css
│ │ │ └── ...
│ ├── hooks/
│ │ │ ├── useDebounce.jsx
│ │ │ ├── usePokemon.jsx
│ │ │ └── usePoekmonList.jsx
│ ├── utils/
│ │ │ ├── downloadPokemons.jsx
│ │──App.css
│ │──App.jsx
│ │──main.jsx
├── .eslintrc.js
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js


## Getting Started

### Prerequisites

Before you dive into the "Pokemon Universe," ensure you have the following prerequisites:

- Node.js (with npm or yarn)
- Code Editor (e.g., Visual Studio Code)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Rishabh6306/pokedex.git```

2. Navigate to the project directory:
cd pokedex

3. Install project dependencies:
npm install

### Running the Development Server
Start the development server to experience the "Pokemon Universe" in action:
npm run dev

## Project Overview

The "Pokemon Universe" project allows users to interact with a Pokedex that displays information about different Pokemon characters. Users can search for specific Pokemon, view their details, and discover similar Pokemon based on their types.

## App Structure

The core of the application is located in `src/App.js`. This file defines the app's routes using the `<Routes>` component from React Router.

## Pages and Routing

The application consists of two main pages:

- **Pokedex**: Displays a list of Pokemon characters and provides a search functionality.
- **PokemonDetails**: Provides detailed information about a selected Pokemon and suggests similar Pokemon based on type.

## Component Breakdown

Components are organized within the `src/components` directory:

- **Pokedex**: Lists Pokemon characters and integrates the search feature.
- **PokemonDetails**: Offers comprehensive insights into a chosen Pokemon and suggests similar Pokemon.
- **PokemonList**: Renders the list of Pokemon characters.
- **Pokemon**: Represents an individual Pokemon character.
- **Search**: Manages the search input for finding specific Pokemon.

## Styling with CSS

Styling is efficiently managed using `.css` files for each component. The global `App.css` file handles broader styling needs.

## Fetching Pokemon Data

The project employs hooks and utility functions to fetch and manage Pokemon data:

- The `usePokemon` hook retrieves individual Pokemon data.
- The `usePokemonList` hook fetches the list of Pokemon characters.
- The `downloadPokemons` utility function expertly handles fetching related Pokemon data from the [Pokemon API](https://pokeapi.co/) using Axios. When called, it fetches a list of related Pokemon based on the provided type and populates the `pokemonListState` with the fetched data. This enables the application to suggest similar Pokemon when viewing the details of a particular Pokemon.

## What I have Learn

By working on the "Pokemon Universe" project, you'have gain skills in:

1. Setting up a React project using Vite.
2. Mastering React components and effectively using props.
3. Implementing routing with React Router.
4. Fetching data from external APIs using Axios.
5. Designing UI components using CSS.
6. Building reusable elements like custom hooks.

## Screenshots

![Pokedex](/public/Screenshot-1.png)
![PokemonDetails](/public/Screenshot-2.png)
![SimilarPokemon](/public/Screenshot-3.png)


## Issues and Contact

If you encounter any issues or have questions, feel free to contact us via email at rishabhsrivastav722@gmail.com or connect with us on LinkedIn at [linkedin.com/in/rishabh6306](https://www.linkedin.com/in/rishabh6306/).

Pull requests are welcome! If you'd like to contribute to the project, submit a pull request with your enhancements.

---

Happy exploring the Pokemon Universe! 🌟