// Movie class represents a movie with title, genre, and stock information
class Movie {
  constructor(title, genre, stock) {
    this.title = title;
    this.genre = genre;
    this.stock = stock;
  }

  // Method to rent a movie if it's in stock
  rent() {
    if (this.stock > 0) {
      this.stock--;
      return true;
    } else {
      console.log(`Sorry, "${this.title}" is out of stock.`);
      return false;
    }
  }

  // Method to return a rented movie and increment stock
  returnMovie() {
    this.stock++;
    console.log(`"${this.title}" has been returned.`);
  }
}

// Customer class represents a customer with a name and a list of rented movies
class Customer {
  constructor(name) {
    this.name = name;
    this.rentedMovies = [];
  }

  // Method to rent a movie and add it to the list of rented movies
  rentMovie(movie) {
    if (movie.rent()) {
      this.rentedMovies.push(movie);
      console.log(`${this.name} has rented "${movie.title}".`);
    } else {
      console.log(`${this.name} couldn't rent "${movie.title}".`);
    }
  }

  // Method to return a rented movie and remove it from the list of rented movies
  returnMovie(movie) {
    const index = this.rentedMovies.indexOf(movie);
    if (index !== -1) {
      this.rentedMovies.splice(index, 1);
      movie.returnMovie();
      console.log(`${this.name} has returned "${movie.title}".`);
    } else {
      console.log(`${this.name} did not rent "${movie.title}".`);
    }
  }
}

// MovieStore class represents a movie store with a list of available movies
class MovieStore {
  constructor() {
    this.movies = [];
  }

  // Method to add a movie to the store
  addMovie(movie) {
    this.movies.push(movie);
    console.log(`"${movie.title}" has been added to the store.`);
  }

  // Method to list available movies in the store
  listMovies() {
    console.log('Available Movies:');
    this.movies.forEach(movie => {
      console.log(`- ${movie.title} (${movie.genre}), Stock: ${movie.stock}`);
    });
  }
}

// Example Usage:
const movieStore = new MovieStore();

// Creating movie instances
const movie1 = new Movie('Inception', 'Sci-Fi', 5);
const movie2 = new Movie('The Shawshank Redemption', 'Drama', 3);
const movie3 = new Movie('The Dark Knight', 'Action', 7);

// Adding movies to the store
movieStore.addMovie(movie1);
movieStore.addMovie(movie2);
movieStore.addMovie(movie3);

// Creating customer instances
const customer1 = new Customer('Alice');
const customer2 = new Customer('Bob');

// Renting movies
customer1.rentMovie(movie1);
customer1.rentMovie(movie2);

customer2.rentMovie(movie2);
customer2.rentMovie(movie3);

// Listing available movies in the store
movieStore.listMovies();

// Returning movies
customer1.returnMovie(movie1);
customer2.returnMovie(movie2);

// Listing available movies after returns
movieStore.listMovies();
