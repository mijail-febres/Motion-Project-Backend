from django.contrib.auth import get_user_model
from rest_framework import serializers
from users.models import User

# User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = User

        fields = ['id', 'email', 'first_name', 'last_name', 'username', 'location', 'about_me', 'job', 'avatar']
        read_only_fields = ['email']
