from django.contrib import admin

# Register your models here.

from soccer.models import Soccerplayer, Club, Country


@admin.register(Soccerplayer)
class SoccerplayerAdmin(admin.ModelAdmin):
    list_display = ('first_name','last_name','goals','injured','position','birth','country')

@admin.register(Club)
class ClubAdmin(admin.ModelAdmin):
    list_display = ('name','active','goal_difference')

class CountryAdmin(admin.ModelAdmin):
    list_display = ['name']
    pass
admin.site.register(Country,CountryAdmin)
