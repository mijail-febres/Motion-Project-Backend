# Generated by Django 3.2.7 on 2021-10-11 13:26

from django.db import migrations, models
import users.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to=users.models.user_directory_path),
        ),
    ]
