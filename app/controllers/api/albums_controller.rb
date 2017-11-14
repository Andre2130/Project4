class Api::AlbumsController < ApplicationController
    def index
        @artist = Artist.find params[:artist_id]
        @albums = @artist.albums
        render json: @albums
      end
    
      def create
        @album = Album.create!(album_params)
    
        render json: @album
      end
    
      def show
        @album = Album.find(params[:id])
    
        render json: @album
      end
    
      def update
        @album = Album.find(params[:id])
        @album.update!(album_params)
    
        render json: @album
      end
    
      def destroy
        @album = Album.find(params[:id]).delete
    
        render status: :ok
      end
    
      private
    
      def album_params
        params.require(:album).permit(:name, :cover_art_url)
      end
end
