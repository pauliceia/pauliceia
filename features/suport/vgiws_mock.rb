require 'sinatra/base'
require 'sinatra/cross_origin'

class VgiwsMock < Sinatra::Base
  set :bind, '0.0.0.0'
  set :allow_origin, :any
  set :allow_methods, [:get, :post, :options]
  set :allow_credentials, true
  set :max_age, "1728000"
  set :expose_headers, ['Content-Type']
  set :logging, false

  configure do
    enable :cross_origin
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end
  
  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end

  get '/api/auth/login' do
    status 200
    content_type :json
    {}.to_json 
  end
  
  get '/api/user/' do
    email = params[:email]
    if email == 'usuario_valido@example.com'
      status 200
      '{
        "type": "FeatureCollection",
        "features": [
          {
            "type": "User",
            "properties": {
              "name": "usuario",
              "email": "usuario@example.com",
              "picture": "",
              "user_id": 1,
              "username": "usuario",
              "social_id": "",
              "created_at": "2023-12-01 22:36:57",
              "login_date": null,
              "is_the_admin": false,
              "terms_agreed": true,
              "is_email_valid": true,
              "social_account": "",
              "receive_notification_by_email": false
            }
          }
        ]
      }'
    else
      status 404
      '<html><title>404: Not Found</title><body>404: Not Found</body></html>'
      end
  end
end
