from django.urls import path
from .views import ListCreateUsersView

urlpatterns = [
    path('users/<int:pk>/', ListCreateUsersView.as_view()),

]
