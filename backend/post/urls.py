from django.urls import path
from .views import ListCreatePostView

urlpatterns = [
    path('social/posts/', ListCreatePostView.as_view()),

]
