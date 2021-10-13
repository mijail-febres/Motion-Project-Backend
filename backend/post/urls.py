from django.urls import path
from .views import (
    ListCreatePostView,
    ReadUpdateDeletePost,
    ListPostbyUser,
    ListFolloweesPosts,
    ToggleLikePost,
    ListUserLikes,
    CommentPostView,
)

urlpatterns = [
    path("social/posts/", ListCreatePostView.as_view()),
    path("social/posts/<int:id>/", ReadUpdateDeletePost.as_view()),
    path("social/posts/user/<int:id>/", ListPostbyUser.as_view()),
    path("social/posts/following/", ListFolloweesPosts.as_view()),
    path("social/posts/toggle-like/<int:id>/", ToggleLikePost.as_view()),
    path("social/comments/<int:id>/", CommentPostView.as_view()),
    path("social/posts/likes/", ListUserLikes.as_view()),
    path("social/posts/?search=", ListCreatePostView.as_view()),
    # path('social/posts/', SharedPostView.as_view()),
]
