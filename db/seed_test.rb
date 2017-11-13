Artist.destroy_all


kanye = Artist.new(name: 'Kanye West',
photo_url: 'http://images.deccanchronicle.com/dc-Cover-8kh9nivuhlg71q1gda44u6ku16-20170415225140.Medi.jpeg')

kanye.albums = [
    Album.new(name: 'The Life of Pablo',
    photo_url: 'http://wethesauce.com/wp-content/uploads/2016/08/kanye-west-the-life-of-pablo-album-cover_olzhwf.jpg')
    songs = [
        Song.new(name: 'Father Strech My Hands',
        song_url: 'http://wethesauce.com/wp-content/uploads/2016/07/02.-Father-Stretch-My-Hands-Pt.-1.mp3')
    ]
]

kanye.save