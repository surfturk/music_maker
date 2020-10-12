class CreatePlaylists < ActiveRecord::Migration[6.0]
  def change
    create_table :playlists do |t|
      t.string :name
      t.string :description
      t.integer :number_of_songs

      t.timestamps
    end
  end
end
