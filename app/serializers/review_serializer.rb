class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :score, :restaurant_id
end
