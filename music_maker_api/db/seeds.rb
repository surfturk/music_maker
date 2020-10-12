# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  
Playlist.create(name: 'Smooth Jams', description: 'A playlist for chill vibes', number_of_songs: 3)

Song.create(title: 'Them Changes', artist: 'Thundercat', album: 'Drunk', playlist_id: 1)

Song.create(title: 'It was a good day', artist: 'Ice Cube', album: 'The Predator', playlist_id: 1)

Song.create(title: 'Hey! Love', artist: 'The Delfonics', album: 'Tell Me This Is A Dream', playlist_id: 1)