require 'sinatra/base'
require 'sinatra/cross_origin'
require 'json'

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
    elsif email == 'usuario_inexistente@example.com'
      status 404
      '<html><title>404: Not Found</title><body>404: Not Found</body></html>'
    else
      status 200
      '{
          "type": "FeatureCollection",
          "features": [
              {
                  "type": "User",
                  "properties": {
                      "name": "Usuario",
                      "email": "usuario@email.com",
                      "picture": "",
                      "user_id": 1,
                      "username": "usuario",
                      "social_id": "",
                      "created_at": "2023-12-10 00:00:00",
                      "login_date": "2023-12-10T00:00:00.000000",
                      "is_the_admin": false,
                      "terms_agreed": true,
                      "is_email_valid": true,
                      "social_account": "",
                      "receive_notification_by_email": false
                  },
                  {
                      "type": "User",
                      "properties": {
                          "name": "Usuario 2",
                          "email": "usuario2@email.com",
                          "picture": "",
                          "user_id": 2,
                          "username": "usuario",
                          "social_id": "",
                          "created_at": "2023-12-10 00:01:00",
                          "login_date": "2023-12-10T00:00:00.000000",
                          "is_the_admin": true,
                          "terms_agreed": true,
                          "is_email_valid": true,
                          "social_account": "",
                          "receive_notification_by_email": false
                      }
                  }
              ]
          }'
      end
  end

  get '/placeslist' do
    status 200
    '[
      "alameda barao de piracicaba, 34, 1908",
      "alameda barao de piracicaba, 59, 1908",
      "alameda barao de piracicaba, 88, 1908",
      "alameda barao de piracicaba, 46, 1908",
      "alameda barao de piracicaba, 67, 1908",
      "alameda barao de piracicaba, 104, 1908",
      "alameda barao de piracicaba, 2, 1908",
      "alameda barao de piracicaba, 36, 1911"
    ]'
  end

  get '/api/layer/' do
    status 200
    '{
      "type": "FeatureCollection",
      "features": [
          {
              "type": "Layer",
              "properties": {
                  "name": "Streets Pilot Area",
                  "keyword": [
                      1040
                  ],
                  "layer_id": 1,
                  "reference": null,
                  "created_at": "2019-01-30 18:06:39",
                  "description": "",
                  "f_table_name": "streets_pilot_area",
                  "source_description": ""
              }
          }
        ]
      }'
  end

  get '/api/keyword/' do
    status 200
    '{
      "type": "FeatureCollection",
      "features": [
          {
              "type": "Keyword",
              "properties": {
                  "name": "enchente",
                  "created_at": "2019-01-30 21:48:54",
                  "keyword_id": 1,
                  "user_id_creator": 16
              }
          },
          {
              "type": "Keyword",
              "properties": {
                  "name": "fabricas",
                  "created_at": "2019-01-31 00:30:38",
                  "keyword_id": 2,
                  "user_id_creator": 4
              }
          }
      ]
    }'
  end

  get '/api/reference/' do
    status 200
    '{
      "type": "FeatureCollection",
      "features": [
          {
              "type": "Reference",
              "properties": {
                  "description": "Book A",
                  "reference_id": 1,
                  "user_id_creator": 1
              }
          }
      ]
    }'
  end

  get '/api/user_layer/' do
    status 200
    '{
      "type": "FeatureCollection",
      "features": [
          {
              "type": "UserLayer",
              "properties": {
                  "user_id": 1,
                  "layer_id": 2,
                  "created_at": "2019-01-30 18:06:43",
                  "is_the_creator": false
              }
          }
      ]
    }'
  end

  get '/api/notification/' do
    status 200
    '{
      "type": "FeatureCollection",
      "features": [
          {
              "type": "Notification",
              "properties": {
                  "layer_id": 1,
                  "created_at": "2023-12-10 00:05:26",
                  "keyword_id": null,
                  "description": "v",
                  "is_denunciation": true,
                  "notification_id": 1,
                  "user_id_creator": 1,
                  "notification_id_parent": null
              }
          }
        ]
    }'
  end

  get '/geolocation/alameda barao de piracicaba, 34, 1908/json' do
    status 200
    '[
        {
            "createdAt": "01:14:57 10/12/2023",
            "type": "GET"
        },
        [
            {
                "name": "",
                "geom": "POINT(-46.6431266727365 -23.5336389826616)",
                "confidence": 1,
                "status": 1
            }
        ]
    ]'
  end

  get '/geolocation/rua nao encontrada 1000, 1950/json' do
    status 404
    '<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/geocoding/geolocation/rua%20nao%20encontrada%201000,%201950/json</pre>
    </body>
    </html>'
  end
end
