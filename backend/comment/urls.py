from django.urls import path

from comment.views import ListCreateCommentsView

urlpatterns = [
    path("social/comments/<int:post_id>", ListCreateCommentsView.as_view()),
]
