require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('./Movies');

mongoose.connect(process.env.DB).then(async () => {
  console.log('Connected to MongoDB');

  await Movie.deleteMany({}); // clear any existing movies

  await Movie.insertMany([
    {
      title: 'Inception',
      releaseDate: 2010,
      genre: 'Science Fiction',
      actors: [
        { actorName: 'Leonardo DiCaprio', characterName: 'Cobb' },
        { actorName: 'Joseph Gordon-Levitt', characterName: 'Arthur' },
        { actorName: 'Elliot Page', characterName: 'Ariadne' }
      ]
    },
    {
      title: 'The Dark Knight',
      releaseDate: 2008,
      genre: 'Action',
      actors: [
        { actorName: 'Christian Bale', characterName: 'Bruce Wayne' },
        { actorName: 'Heath Ledger', characterName: 'The Joker' },
        { actorName: 'Aaron Eckhart', characterName: 'Harvey Dent' }
      ]
    },
    {
      title: 'Get Out',
      releaseDate: 2017,
      genre: 'Horror',
      actors: [
        { actorName: 'Daniel Kaluuya', characterName: 'Chris' },
        { actorName: 'Allison Williams', characterName: 'Rose' },
        { actorName: 'Bradley Whitford', characterName: 'Dean' }
      ]
    },
    {
      title: 'Interstellar',
      releaseDate: 2014,
      genre: 'Science Fiction',
      actors: [
        { actorName: 'Matthew McConaughey', characterName: 'Cooper' },
        { actorName: 'Anne Hathaway', characterName: 'Brand' },
        { actorName: 'Jessica Chastain', characterName: 'Murph' }
      ]
    },
    {
      title: 'Knives Out',
      releaseDate: 2019,
      genre: 'Mystery',
      actors: [
        { actorName: 'Daniel Craig', characterName: 'Blanc' },
        { actorName: 'Ana de Armas', characterName: 'Marta' },
        { actorName: 'Chris Evans', characterName: 'Ransom' }
      ]
    }
  ]);

  console.log('5 movies seeded!');
  mongoose.disconnect();
});