Rails.application.routes.draw do
  resources :users, only: [:index]
  post '/signup', to: 'registrations#signup'
  post '/signin', to: 'sessions#signin'
  delete '/signout', to: 'sessions#signout'
  get '/logged_in', to: 'sessions#logged_in?'
end
