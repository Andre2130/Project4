Rails.application.routes.draw do
  namespace :api do
    resources :artists do
      resources :albums do
        resources :songs
      end
    end
  end
end
