from rest_framework import serializers
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User

        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "username",
            "location",
            "about_me",
            "job",
            "avatar",
        ]
        read_only_fields = ["email"]

class UserFollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'followers', 'followees']
