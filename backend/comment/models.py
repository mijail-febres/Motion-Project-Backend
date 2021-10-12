from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Comment(models.Model):
    content = models.CharField(max_length=200, blank=False, null=False, default='')
    created = models.DateTimeField(auto_now_add=True)
    changed = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='comments')
    objects = models.Manager()

    def __str__(self):
        return f'{self.pk}: {self.content} by {self.user.username}'
