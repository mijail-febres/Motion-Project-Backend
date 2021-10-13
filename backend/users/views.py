from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
# from rest_framework.permissions import IsAuthenticated

from users.models import User
# from order.permissions import IsOwnerOrReadOnly, PetersNotAllowed, ReadOnly
from users.serializers import UserSerializer
from users.models import User


class ListCreateUsersView(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        search = self.request.query_params.get('search')
        if search:
            return User.objects.filter(username__contains=search)
        return User.objects.all()

class ListUserView(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(user=self.request.user)
