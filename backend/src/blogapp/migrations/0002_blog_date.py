# Generated by Django 2.2 on 2019-08-23 03:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]