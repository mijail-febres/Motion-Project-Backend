import random

from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


User = get_user_model()


# Create your models here.
class RegistrationProfile(models.Model):
    code = models.IntegerField(default=code_generator)
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='registration_profile')

    def __str__(self):
        return f'ID {self.id}: Registration profile from {self.user.username}'

    @receiver(post_save, sender=User)
    def create_registration_profile(sender, instance, **kwargs):
        profile, created = RegistrationProfile.objects.get_or_create(user=instance)
        if created:
            profile.save()
