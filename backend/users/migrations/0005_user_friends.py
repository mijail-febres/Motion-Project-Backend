# Generated by Django 3.2.7 on 2021-10-13 15:27

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_alter_user_friend_request'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='friends',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
