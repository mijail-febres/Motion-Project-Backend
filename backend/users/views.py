from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
# from rest_framework.permissions import IsAuthenticated

from users.models import User
# from order.permissions import IsOwnerOrReadOnly, PetersNotAllowed, ReadOnly
from users.serializers import UserSerializer
from users.models import User


class ListCreateUsersView(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
