# from rest_framework import status
# from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from .models import Post
# from .permissions import IsAdminOrOwnerOrReadOnly, PermissionName
from .serializers import PostSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class ListCreatePostView(ListCreateAPIView):  # concrete View

    # preparation for API Documentation:
    """
    get:
    GET Post text
    """

    queryset = Post.objects.all().order_by('updated').reverse()
    serializer_class = PostSerializer

    # permission_classes = [IsAuthenticated | ReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

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
            queryset = Post.objects.all().filter(author=self.kwargs['id']).order_by('updated').reverse()
        else:
            queryset = Post.objects.all().filter(author=self.request.user).order_by('updated').reverse()
        return queryset


class ReadUpdateDeletePost(RetrieveUpdateDestroyAPIView):  # which view to be used: GenericAPIView or ?
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id'
    # lookup_url_kwarg = 'post_id' #where is this 'xxx_id' coming from?
    # permission_classes = [IsObjectAuthorOrReadOnly]
    # permission_classes = [IsAuthenticatedOrReadOnly]  >>> needs to be customized

    # to be used
    # permission_classes = [IsAdminOrOwnerOrReadOnly]  # work as a NAD here the comma or | will be a OR

    # 2 diffrent types of permissions classes:
    # general permission: isauthenticated, isadmin
    # object level permission, on a specific instance: for ex to the logged in user


class ToggleLikePost(GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id'

    def post(self, request, *args, **kwargs):
        post = self.get_object()
        user = request.user
        # if user in post.likes remove it, else add it
        if user in post.likes.all():
            post.likes.remove(user)
        else:
            post.likes.add(user)
        return Response(self.get_serializer(post).data)

