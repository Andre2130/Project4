# require_relative './song_data.rb'
# require_relative './artist_data.rb'
# require_relative './album_data'

# Song.destroy_all
# Artist.destroy_all
# Album.destroy_all

# song_data = get_song_data
# artist_data = get_artist_data
# album_data = get_album_data

# song_data.each_pair do |artist_name, songs|
#     info  = artist_data[artist_name]
#     current_artist = Artist.create!({
#         name:       info[:name],
#         photo_url:  info[:photo_url]
#     })

#     album_data.each do |album_name|
#         puts album_name[:name]
#         # album = album_data[album_name]
#         current_album = Album.create!({
#             name:  album_name[:name],
#             cover_art_url:  album_name[:cover_art_url],
#             artist: current_artist

#         })
#     end

#     songs.each do |song|
#         Songs.create!({
#             name:      songs[:name],
#             cover_art_url:  songs[:cover_art_url],
#             album: current_album

#         })
#     end
# end
Artist.destroy_all


kanye = Artist.new(name: 'Kanye West',
photo_url: 'http://images.deccanchronicle.com/dc-Cover-8kh9nivuhlg71q1gda44u6ku16-20170415225140.Medi.jpeg')

pablo = Album.new(
    name: 'The Life of Pablo',
    cover_art_url: 'http://wethesauce.com/wp-content/uploads/2016/08/kanye-west-the-life-of-pablo-album-cover_olzhwf.jpg')

father = Song.new(
    name: 'Father Strech My Hands',
    song_url: 'http://wethesauce.com/wp-content/uploads/2016/07/02.-Father-Stretch-My-Hands-Pt.-1.mp3')

father.save

pablo.songs.push father
pablo.save

kanye.albums.push pablo

kanye.save

fifty_cent = Artist.new(name: '50 Cent',
photo_url: 'http://img.wennermedia.com/featured-promo-782/rs-12-50-cent.jpg')

get_rich_or_die_trying = Album.new(
    name: 'Get Rick Or Die Trying',
    cover_art_url: 'http://wethesauce.com/wp-content/uploads/2016/08/09-Blood-Hound-Musicfire-in_-mp3-image.jpg')

many_men = Song.new(
    name: 'Many Men',
    song_url: 'http://wethesauce.com/wp-content/uploads/2016/07/04-Many-Men-Wish-Death-Musicfire.in_.mp3')

many_men.save

get_rich_or_die_trying.songs.push many_men
get_rich_or_die_trying.save

fifty_cent.albums.push get_rich_or_die_trying

fifty_cent.save

drake = Artist.new(name: 'Drake',
photo_url: 'http://wethesauce.com/wp-content/uploads/2016/08/Drake-Profile.jpg')

take_care = Album.new(
    name: 'Take Care',
    cover_art_url: 'http://wethesauce.com/wp-content/uploads/2016/08/Marvins-Room-mp3-image.jpg')

headlines = Song.new(
    name: 'Headlines',
    song_url: 'http://wethesauce.com/wp-content/uploads/2016/08/Headlines.mp3')

headlines.save

take_care.songs.push headlines
take_care.save

drake.albums.push take_care

drake.save

absoul = Artist.new(name: 'Ab-Soul',
photo_url: 'http://wethesauce.com/wp-content/uploads/2016/08/ab-soul.jpeg')

dwtw = Album.new(
    name: 'Do What Thou Wilt',
    cover_art_url: 'http://wethesauce.com/wp-content/uploads/2016/12/12-D-R-U-G-S-mp3-image.jpg')

now_you_know = Song.new(
    name: 'Now You Know',
    song_url: 'http://wethesauce.com/wp-content/uploads/2016/12/11.-Now-You-Know.mp3')

now_you_know.save

dwtw.songs.push now_you_know
dwtw.save

absoul.albums.push dwtw

absoul.save

kendricklamar = Artist.new(name: 'Kendrick Lamar',
photo_url: 'http://cache.umusic.com/_sites/kendricklamar.com/images/og.jpg')

damn = Album.new(
    name: 'DAMN.',
    cover_art_url: 'http://wethesauce.com/wp-content/uploads/2017/04/KDotDamn.jpg')

duckworth = Song.new(
    name: 'DUCKWORTH.',
    song_url: 'http://wethesauce.com/wp-content/uploads/2017/04/14-Kendrick-Lamar-DUCKWORTH..mp3')

duckworth.save

damn.songs.push duckworth
damn.save

kendricklamar.albums.push damn

kendricklamar.save