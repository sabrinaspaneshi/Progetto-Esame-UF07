# Ricette 

Ricette  è una web app nata per chi ama cucinare e scoprire nuovi ricette da tutto il mondo.  L'app sfrutta le API pubbliche di TheMealDB e offre un'esperienza utente avanzata e personalizzabile.

Ricette  è un'applicazione sviluppata con React e TypeScript che permette agli utenti di:
- Esplorare centinaia di ricette internazionali
- Cercare ricette per nome o categoria
- Visualizzare dettagli chiari su ingredienti e passaggi per cucinare senza errori.
- Salvare le ricette preferite per consultarle in seguito


## Avvio rapido

```bash
# Clona il repository
git clone <url-repository>

# Entra nella cartella
cd ricette-ovunque

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

 Apri il browser su [http://localhost:5173](http://localhost:5173)
```


## 🌐 API utilizzata
Le ricette sono recuperate tramite le [API pubbliche di TheMealDB](https://www.themealdb.com/api.php).  Tutte le chiamate sono gestite con React Query e Axios. 
Un'API gratuita che fornisce:
- Ricette internazionali con immagini
- Categorie e aree geografiche
- Ingredienti e istruzioni dettagliate
- Video tutorial (YouTube)


## 📁 Struttura delle cartelle

src/
├── components/                   # Componenti riutilizzabili dell'interfaccia (Header, Footer, Card, gestione errori e filtri)
│   ├── ErrorBoundary.tsx       
│   ├── Footer.tsx         
│   └── Header.tsx  
│   ├── RecipeCard.tsx       
│   └── SearchFilters.tsx         
├── contexts/                     # Gestione dello stato globale tramite context API
│   └── AppContext.tsx            # Custom hooks per logiche condivise (es.fetch ricette)
└── hooks/
|   └── useRecipes.ts     
├── pages/                        # Pagine principali del routing dell'app
│   ├── Categpries.tsx        
│   ├── CategoryDetail.tsx 
│   ├── Favorites.tsx   
│   ├── Home.tsx       
│   |── NotFound.tsx   
|   └── RecipeDetail.tsx  
├── services/                    # Funzioni per chiamate API e gestione dati esterni
│   └── api.ts        
└── types/                       # Tipi TypeScript condivisi
    └── recipe.ts       


## ✅ Funzionalità completate

- Struttura del progetto con cartelle dedicate (components, pages, hooks, contexts, services, types)
- Routing con React Router: Home, Categorie, Dettaglio ricetta, Dettaglio categoria, Preferiti, Pagina 404
- Utilizzo di TypeScript: interfacce per i dati delle API e props tipizzate
- Chiamate API con React Query e Axios (GET per ricette, categorie, dettagli)
- Gestione degli errori nelle chiamate API
- Componenti riutilizzabili (Header, Footer, Card ricetta, Filtri di ricerca, ErrorBoundary)
- Stato globale gestito con Context API (preferiti)
- Pagine con parametri dinamici nell’URL (`/recipe/:id`, `/category/:category`)
- Navigazione tra pagine senza passaggio dati via URL
- Pagina 404 personalizzata
- Documentazione del codice (1/4)


## Stack tecnologico
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)

## Routing
- `/` Home
- `/recipe/:id` Dettaglio ricetta
- `/categories` Categorie
- `/category/:category` Dettaglio categoria
- `/favorites` Preferiti
- `*` Pagina 404


## Autore
Sabrina Spaneshi


