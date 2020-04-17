json.albums @albums.each do |album|
  json.id album.id
  json.title album.title
  json.artist_name album.artist.name
  json.cover_url url_for(album.cover)
end
