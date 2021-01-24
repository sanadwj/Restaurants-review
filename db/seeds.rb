# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
restaurants = Restaurant.create([
                                  {
                                      name: "Levant Restaurant",
                                      image_url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                                  },
                              {
                                  name: "Barcelos Flame",
                                  image_url: "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
                              },
                              {
                                  name: "Vinaigrette",
                                  image_url: "https://images.unsplash.com/photo-1514537099923-4c0fc7c73161?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                              },
                              {
                                  name: "Rodeo Grill Steakhouse",
                                  image_url: "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=632&q=80"
                              },
                              {
                                  name: "La Capitale",
                                  image_url: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                              },
                              {
                                  name: "Romero",
                                  image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                              }
                                ])


Review.create([
                {
                    title: 'Great restaurant',
                    description: 'I had a lovely meal.',
                    score: 5,
                    restaurant: restaurants.first
                },
                  {
                      title: 'Bad restaurant',
                      description: 'I had a bad time.',
                      score: 1,
                      restaurant: restaurants.first
                  },
              ])
