from rest_framework.generics import ListCreateAPIView, ListAPIView, GenericAPIView
from rest_framework.response import Response
from users.serializers import UserSerializer, UserFollowSerializer
from users.models import User


class ListCreateUsersView(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        search = self.request.query_params.get("search")
        if search:
            return User.objects.filter(username__contains=search)
        return User.objects.all()


class ListUserView(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(user=self.request.user)

class FollowUsersView(GenericAPIView):
    serializer_class = UserFollowSerializer
    queryset = User.objects.all()

    def post(self, request, *args, **kwargs):
        current_user = self.request.user
        user_to_be_followed = self.get_object()
        if user_to_be_followed != current_user:
            if user_to_be_followed in current_user.followees.all():
                current_user.followees.remove(user_to_be_followed)
            else:
                current_user.followees.add(user_to_be_followed)
        return Response(self.get_serializer(user_to_be_followed).data)


class FollowersUsersView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        return self.request.user.followees.all()


class FollowingUsersView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        return self.request.user.followers.all()
