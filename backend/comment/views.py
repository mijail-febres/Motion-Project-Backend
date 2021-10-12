from rest_framework.generics import ListAPIView
from .models import Comment
from comment.serializers import CommentSerializer


class ListCreateCommentsView(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
