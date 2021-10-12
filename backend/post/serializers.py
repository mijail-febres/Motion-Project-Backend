from rest_framework import serializers

# from comment.serializers import CommentSerializer
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        # 1 comment might be missing or to be ajusted for the fields:
        fields = ['id', 'author', 'title', 'content', 'images', 'likes', 'created', 'updated']
        #fields = ['id', 'author', 'title', 'content', 'images', 'likes', 'comment', 'created', 'updated']
        # fields = ['id', 'author', 'title', 'content', 'images', 'likes', 'created', 'updated']
        read_only_fields = ['author']

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['comment'] = CommentSerializer(instance.comment).data
    #     return representation
