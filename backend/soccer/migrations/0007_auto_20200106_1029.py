# Generated by Django 3.0 on 2020-01-06 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('soccer', '0006_auto_20200106_1028'),
    ]

    operations = [
        migrations.AlterField(
            model_name='soccerplayer',
            name='clubs',
            field=models.ManyToManyField(blank=True, related_name='clubs', to='soccer.Club'),
        ),
    ]
