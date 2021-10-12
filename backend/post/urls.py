from django.urls import path
from .views import ListCreatePostView, ReadUpdateDeletePost, ListPostbyUser, ListFolloweesPosts, ToggleLikePost, \
    ListUserLikes

urlpatterns = [
    path('social/posts/', ListCreatePostView.as_view()),
    path('social/posts/<int:id>/', ReadUpdateDeletePost.as_view()),
    path('social/posts/<int:id>/', ReadUpdateDeletePost.as_view()),
    path('social/posts/<int:id>/', ReadUpdateDeletePost.as_view()),
    path('social/posts/user/<int:id>/', ListPostbyUser.as_view()),
    #social/posts/user/<int:user_id>/
    path('social/posts/following/', ListFolloweesPosts.as_view()),
    path('social/posts/toggle-like/<int:id>/', ToggleLikePost.as_view()),
    path('userlikes/', ListUserLikes.as_view()),

]
