# from rest_framework import status
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.generics import (
    ListCreateAPIView,
    GenericAPIView,
    RetrieveUpdateDestroyAPIView,
    ListAPIView,
)
from .models import Post
from .serializers import PostSerializer
from django.contrib.auth import get_user_model
from comment.models import Comment
from django.utils import timezone

User = get_user_model()


class ListCreatePostView(ListCreateAPIView):  # concrete View

    # preparation for API Documentation:
    """
    get:
    GET Post text
    """

    queryset = Post.objects.all().order_by("updated").reverse()
    serializer_class = PostSerializer

    # permission_classes = [IsAuthenticated | ReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_queryset(self):
        search = self.request.query_params.get("search")
        if search:
            return Post.objects.filter(content__icontains=search)
        return Post.objects.all()


class ListUserLikes(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(likes__exact=self.request.user)


class ListFolloweesPosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(author__in=self.request.user.followees.all())


class ListPostbyUser(ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        if self.kwargs:
            queryset = (
                Post.objects.all()
                .filter(author=self.kwargs["id"])
                .order_by("updated")
                .reverse()
            )
        else:
            queryset = (
                Post.objects.all()
                .filter(author=self.request.user)
                .order_by("updated")
                .reverse()
            )
        return queryset


class ReadUpdateDeletePost(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = "id"
    # permission_classes = [IsAuthenticated]


class ToggleLikePost(GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = "id"

    def post(self, request, *args, **kwargs):
        post = self.get_object()
        user = request.user
        # if user in post.likes remove it, else add it
        if user in post.likes.all():
            post.likes.remove(user)
        else:
            post.likes.add(user)
        return Response(self.get_serializer(post).data)


class CommentPostView(GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get(self, request, *args, **kwargs):
        post = self.get_object()
        return Response(self.get_serializer(post).data)

    def post(self, request, *args, **kwargs):
        post = self.get_object()
        user = request.user
        comment_obj, created = Comment.objects.get_or_create(
            user=user, content=request.data["content"]
        )
        post.comment.add(comment_obj)
        return Response(self.get_serializer(post).data)

"""
class SharedPostView(GenericAPIView):
    def post(self, request, pk, *args, **kwargs):
        original_post = Post.objects.get(pk=pk)
        new_post = Post(
            shared_content=self.request.Post.get('content'),
            content=original_post.content,
            author=original_post.author,
            created=original_post.created,
            shared_user=request.user,
            shared_on=timezone.now(),
        )
        new_post.save()

        for img in original_post.images.all():
            new_post.images.add(img)
        new_post.save()

    def get_queryset(self):
        search = self.request.query_params.get('search')
        if search:
            return Post.objects.filter(content__icontains=search)
        return Post.objects.all()
"""
