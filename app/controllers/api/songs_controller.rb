class Api::SongsController < ApplicationController
    def index
        @album = Album.find params[:album_id]
        @songs = @albums.songs
        render json: @songs
      end
    
      def create
        @song = Song.create!(song_params)
    
        render json: @song
      end
    
      def show
        @song = Song.find(params[:id])
    
        render json: @song
      end
    
      def update
        @song = Song.find(params[:id])
        @song.update!(song_params)
    
        render json: @song
      end
    
      def destroy
        @song = Song.find(params[:id]).delete
    
        render status: :ok
      end
    
      private
    
      def song_params
        params.require(:song).permit(:name, :song_url)
      end
end
