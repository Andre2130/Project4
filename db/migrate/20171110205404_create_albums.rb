class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :cover_art_url
      t.references :artist, foreign_key: true

      t.timestamps
    end
  end
end
