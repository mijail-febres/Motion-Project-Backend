from django.db import models
from django.contrib.auth.models import AbstractUser



def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'

# Create your models here.
class User(AbstractUser):
    # Field used for authentication
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)




    def __str__(self):
        return self.email
