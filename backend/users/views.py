from rest_framework.generics import ListCreateAPIView, ListAPIView, GenericAPIView
from rest_framework.response import Response

from users.serializers import UserSerializer, UserFollowSerializer, \
    UserRequestFriendSerializer, UserFriendsSerializer
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


class ListFriendsView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserRequestFriendSerializer

    def get_queryset(self):
        return self.request.user.friends_with.all()


class FriendRequestView(GenericAPIView):
    serializer_class = UserFriendsSerializer
    queryset = User.objects.all()

    def post(self, request, *args, **kwargs):
        current_user = self.request.user
        user_to_be_friend = self.get_object()
        if user_to_be_friend != current_user:
            if not(user_to_be_friend in current_user.friends_with.all()):
                if user_to_be_friend in current_user.friend_request.all():
                    current_user.friend_request.remove(user_to_be_friend)
                else:
                    current_user.friend_request.add(user_to_be_friend)
                return Response(self.get_serializer(current_user).data)
            else:
                return Response(data={"error": "you are already a friend"}, status=404)


class FriendRequestUserView(GenericAPIView):
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return UserSerializer
        return UserFriendsSerializer

    queryset = User.objects.all()

    def get(self, request, *args, **kwargs):
        candidate_user = self.get_object()
        current_user = self.request.user

        if candidate_user in current_user.requested_from.all():
            return Response(self.get_serializer(candidate_user).data)

        return Response(data={"error": "no such friend request"}, status=404)

    def patch(self, request, *args, **kwargs):
        candidate_user = self.get_object()
        current_user = self.request.user
        if candidate_user in current_user.requested_from.all():
            current_user.requested_from.remove(candidate_user)
            if not(candidate_user in current_user.friends_with.all()):
                current_user.friends_with.add(candidate_user)
            if not(current_user in candidate_user.friends_with.all()):
                candidate_user.friends_with.add(current_user)
            if current_user in candidate_user.requested_from.all():
                candidate_user.requested_from.remove(current_user)
            if candidate_user in current_user.friend_request.all():
                current_user.friend_request.remove(candidate_user)
            if current_user in candidate_user.friend_request.all():
                candidate_user.friend_request.remove(current_user)
            return Response(self.get_serializer(current_user).data)

        return Response(data={"error": "no such friend request"}, status=404)

    def delete(self, request, *args, **kwargs):
        candidate_user = self.get_object()
        current_user = self.request.user
        if current_user in candidate_user.friend_request.all():
            candidate_user.friend_request.remove(current_user)
        if candidate_user in current_user.requested_from.all():
            current_user.requested_from.remove(candidate_user)
            return Response(self.get_serializer(current_user).data)

        return Response(data={"error": "no such friend request"}, status=404)
