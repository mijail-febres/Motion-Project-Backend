from django.urls import path
from .views import (
    ListCreateUsersView,
    FollowUsersView,
    FollowersUsersView,
    FollowingUsersView,
    ListUserView, ListFriendsView, FriendRequestView, FriendRequestUserView,
)

urlpatterns = [
    path("users/<int:id>/", ListCreateUsersView.as_view()),
    path("users/", ListCreateUsersView.as_view()),
    path("users/me/", ListUserView.as_view()),
    path("social/followers/toggle-follow/<int:pk>/", FollowUsersView.as_view()),
    path("social/followers/followers/", FollowersUsersView.as_view()),
    path("social/followers/following/", FollowingUsersView.as_view()),
    path("social/friends/request/<int:pk>/", FriendRequestView.as_view()),
    path("social/friends/requests/<int:pk>/", FriendRequestUserView.as_view()),
    # path("social/friends/requests/<int:friend_requests_id>/", FollowingUsersView.as_view()),
    path("social/friends/", ListFriendsView.as_view()),
]
