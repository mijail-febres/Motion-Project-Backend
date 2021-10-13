from django.contrib.auth import get_user_model
from django.db import models
from comment.models import Comment

User = get_user_model()


class Post(models.Model):
    author = models.ForeignKey(
        verbose_name="author",
        to=User,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="posts",
    )
    title = models.TextField(verbose_name="title", max_length=100)
    content = models.TextField(verbose_name="content", max_length=300)
    images = models.ImageField(
        verbose_name="images", upload_to="post_media", blank=True, null=True
    )
    comment = models.ManyToManyField(
        verbose_name="comments", to=Comment, blank=True, related_name="commented_posts"
    )
    likes = models.ManyToManyField(
        verbose_name="likes", to=User, blank=True, related_name="liked_posts"
    )
    created = models.DateTimeField(verbose_name="created", auto_now_add=True)
    updated = models.DateTimeField(verbose_name="updated", auto_now=True)

    def __str__(self):
        return (
            f"#{self.id} - {self.title[:30]} - {self.content[:30]} from: {self.author}"
        )
