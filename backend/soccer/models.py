from django.db import models

# Create your models here.

class Country(models.Model):

    name = models.TextField()
    capital = models.TextField(null=True)

    def __str__(self):
        return self.name

class Soccerplayer(models.Model):

    POSITION = (
        ('GK', 'Goalkeeper'),
        ('DEF', 'Defender'),
        ('DMF','Definsive_midfielder'),
        ('OMF', 'Offensive_midfielder'),
        ('STR', 'Striker')
    )

    first_name = models.TextField()
    last_name = models.TextField()
    goals = models.PositiveIntegerField()
    injured = models.BooleanField()
    position = models.CharField(max_length=3, choices=POSITION, null=True)
    birth = models.DateField()
    country = models.ForeignKey(Country, on_delete=models.CASCADE, null=True)
    clubs = models.ManyToManyField('Club', related_name='soccerplayer', blank=True)

    def __str__(self):
        return self.last_name

class Club(models.Model):
    name = models.TextField()
    active = models.BooleanField()
    goal_difference = models.IntegerField()
    points = models.IntegerField()
    founded = models.DateField()


    def __str__(self):
        return self.name