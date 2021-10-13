from django.urls import path
from .views import ListCreateUsersView, ListUserView

urlpatterns = [
    path("users/<int:id>/", ListCreateUsersView.as_view()),
    path("users/", ListCreateUsersView.as_view()),
    path("users/me/", ListUserView.as_view()),
]
