class RemoveNumberOfSongsFromPlaylist < ActiveRecord::Migration[6.0]
  def change
    remove_column :playlists, :number_of_songs, :integer
  end
end
