from rest_framework.generics import ListAPIView
from .models import Comment
from comment.serializers import CommentSerializer


class ListCreateCommentsView(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class ListCommentsView(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        return self.request.user.followees.all()
