from django.urls import path
from .views import ListCreateUsersView, FollowUsersView, FollowersUsersView, FollowingUsersView

urlpatterns = [
    path("users/<int:id>/", ListCreateUsersView.as_view()),
    path("users/", ListCreateUsersView.as_view()),
    path("users/me/", ListUserView.as_view()),
    path('social/followers/toggle-follow/<int:pk>/', FollowUsersView.as_view()),
    path('social/followers/followers/', FollowersUsersView.as_view()),
    path('social/followers/following/', FollowingUsersView.as_view())
]
