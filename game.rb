require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/instructions' do
	erb :instructions
end

get '/1' do
	erb :level1
end

get '/2' do
	erb :level2
end

get '/3' do
	erb :level3
end

get '/4' do
	erb :level4
end

get '/scoreboard' do
	erb :scoreboard
end