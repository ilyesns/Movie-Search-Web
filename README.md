# Movie Search Web App

## Description

This is a Movie Search Web Application built using modern web technologies. The app allows users to:

- Browse movies, series, and episodes categorized into tabs.
- Search for movies dynamically with real-time suggestions.
- View detailed information about a selected movie.

---

## Tech Stack

- **ReactJS**: Used for building the user interface.
- **Vite**: Utilized as the development server and build tool for fast performance.
- **TypeScript**: Ensures type safety throughout the project.
- **TailwindCSS**: Provides utility-first CSS for responsive and modern designs.

---

## Project Structure

The project is organized in the following way:

```
src/
├── api/
│   └── omdbapi.ts          # API functions for fetching data from OMDB
├── assets/                 # Static assets (e.g., images, logos, etc.)
├── components/
│   ├── ErrorComponent.tsx  # Error message component
│   ├── Layout.tsx          # Layout with persistent tabs and routing
│   ├── LoadingSpinner.tsx  # Loading spinner for async operations
│   ├── MovieCard.tsx       # Displays individual movie details in a card format
│   ├── MovieList.tsx       # Displays a grid/list of MovieCard components
│   ├── Pagination.tsx      # Pagination component for navigating pages
│   ├── SearchBar.tsx       # Search bar with suggestion dropdown
│   └── Tabs.tsx            # Tabs for switching between categories (movies, series, episodes)
├── models/
│   └── movie.ts            # TypeScript interfaces for movie data
├── pages/
│   ├── Home.tsx            # Home page with tabs and movie list
│   └── MovieDetails.tsx    # Page for displaying detailed movie information
├── App.tsx                 # Root component for routing and app structure
├── main.tsx                # Main entry point for React application
├── index.css               # Global CSS imports
├── vite-env.d.ts           # TypeScript declarations for Vite
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Build for Production

To create a production build:

```bash
npm run build
```

### 5. Preview the Production Build

```bash
npm run preview
```

---

## Environment Variables

This project uses the [OMDB API](https://www.omdbapi.com/). To use the application, you need an API key from OMDB.

1. Create a `.env` file in the root directory.
2. Add the following environment variable:
   ```env
   VITE_OMDB_API_KEY=your_omdb_api_key
   ```

---

## Features

### 1. Tabbed Navigation

- Switch between Movies, Series, and Episodes.
- Resets the search bar and pagination when switching tabs.

### 2. Dynamic Search

- Real-time search suggestions.
- Results update instantly on Enter or suggestion click.

### 3. Movie Details

- Click on a movie card to view detailed information (title, year, plot, cast, director, etc.).

### 4. Pagination

- Navigate through multiple pages of search results.

### 5. Responsive Design

- Optimized for mobile and desktop devices.

---

## Styling

This project uses **TailwindCSS** for styling. You can modify the global styles in the `index.css` file or extend the Tailwind configuration.

---

## Key Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build locally.

---

# Applicazione Web di Ricerca Film

## Descrizione

Questa è un'applicazione web per la ricerca di film, costruita utilizzando tecnologie web moderne. L'app consente agli utenti di:

- Sfogliare film, serie e episodi categorizzati in schede.
- Cercare film dinamicamente con suggerimenti in tempo reale.
- Visualizzare informazioni dettagliate su un film selezionato.

---

## Stack Tecnologico

- **ReactJS**: Utilizzato per costruire l'interfaccia utente.
- **Vite**: Utilizzato come server di sviluppo e strumento di build per prestazioni elevate.
- **TypeScript**: Garantisce la sicurezza dei tipi in tutto il progetto.
- **TailwindCSS**: Fornisce una progettazione CSS moderna e reattiva basata su utility.

---

## Struttura del Progetto

Il progetto è organizzato nel seguente modo:

```
src/
├── api/
│   └── omdbapi.ts          # Funzioni API per ottenere dati da OMDB
├── assets/                 # Risorse statiche (es. immagini, loghi, ecc.)
├── components/
│   ├── ErrorComponent.tsx  # Componente per visualizzare messaggi di errore
│   ├── Layout.tsx          # Layout con schede persistenti e routing
│   ├── LoadingSpinner.tsx  # Spinner di caricamento per operazioni asincrone
│   ├── MovieCard.tsx       # Mostra i dettagli di un film in formato card
│   ├── MovieList.tsx       # Mostra una griglia/elenco di MovieCard
│   ├── Pagination.tsx      # Componente di paginazione per navigare tra le pagine
│   ├── SearchBar.tsx       # Barra di ricerca con menu a discesa dei suggerimenti
│   └── Tabs.tsx            # Schede per cambiare categoria (film, serie, episodi)
├── models/
│   └── movie.ts            # Interfacce TypeScript per i dati dei film
├── pages/
│   ├── Home.tsx            # Pagina principale con schede e elenco film
│   └── MovieDetails.tsx    # Pagina per visualizzare informazioni dettagliate sui film
├── App.tsx                 # Componente principale per il routing e la struttura dell'app
├── main.tsx                # Punto di ingresso principale per l'applicazione React
├── index.css               # Importazioni CSS globali
├── vite-env.d.ts           # Dichiarazioni TypeScript per Vite
```

---

## Italian version

## Istruzioni per l'Installazione

### 1. Clona il Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Installa le Dipendenze

```bash
npm install
```

### 3. Avvia il Server di Sviluppo

```bash
npm run dev
```

### 4. Crea una Build per la Produzione

Per creare una build di produzione:

```bash
npm run build
```

### 5. Visualizza la Build di Produzione

```bash
npm run preview
```

---

## Variabili d'Ambiente

Questo progetto utilizza l'[OMDB API](https://www.omdbapi.com/). Per utilizzare l'applicazione, è necessario un API key di OMDB.

1. Crea un file `.env` nella directory principale.
2. Aggiungi la seguente variabile d'ambiente:
   ```env
   VITE_OMDB_API_KEY=tuo_api_key_omdb
   ```

---

## Funzionalità

### 1. Navigazione a Schede

- Cambia tra Film, Serie ed Episodi.
- Reimposta la barra di ricerca e la paginazione quando cambi scheda.

### 2. Ricerca Dinamica

- Suggerimenti di ricerca in tempo reale.
- I risultati si aggiornano immediatamente premendo Invio o cliccando su un suggerimento.

### 3. Dettagli Film

- Clicca su una card di un film per visualizzare informazioni dettagliate (titolo, anno, trama, cast, regista, ecc.).

### 4. Paginazione

- Naviga tra più pagine di risultati di ricerca.

### 5. Design Reattivo

- Ottimizzato per dispositivi mobili e desktop.

---

## Stile

Questo progetto utilizza **TailwindCSS** per la progettazione. È possibile modificare gli stili globali nel file `index.css` o estendere la configurazione di Tailwind.

---

## Script Principali

- `npm run dev`: Avvia il server di sviluppo.
- `npm run build`: Crea l'applicazione per la produzione.
- `npm run preview`: Anteprima della build di produzione localmente.

---

## Miglioramenti Futuri

1. Aggiungere l'autenticazione utente per raccomandazioni personalizzate sui film.
2. Migliorare il design con animazioni e transizioni.
3. Aggiungere una funzione per salvare i film preferiti in una lista da guardare.

---
