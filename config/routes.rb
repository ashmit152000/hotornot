Rails.application.routes.draw do
  devise_for :users
  get 'compare/index'
  # get 'homes/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "homes#index"
end
