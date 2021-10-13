from rest_framework import serializers
from comment.serializers import CommentSerializer
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    comment = CommentSerializer(many=True, required=False)

    class Meta:
        model = Post
        # 1 comment might be missing or to be ajusted for the fields:
        fields = [
            "id",
            "author",
            "title",
            "content",
            "images",
            "likes",
            "created",
            "updated",
        ]
        read_only_fields = ["author"]
