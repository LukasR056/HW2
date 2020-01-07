from rest_framework import serializers
from .models import Country, Soccerplayer, Club


class CountryOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name']

    def get_country_name(self, obj):
        return obj.country.name if obj.country else ''



class SoccerplayerFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soccerplayer
        fields = '__all__'

    def get_club_name(self, obj):
        return obj.soccerplayer.name if obj.soccerplayer else ''


class SoccerplayerListSerializer(serializers.ModelSerializer):
    country_name = serializers.SerializerMethodField()
    clubs = serializers.SerializerMethodField()

    class Meta:
        model = Soccerplayer
        fields = ['id', 'first_name', 'last_name', 'goals', 'injured', 'position', 'birth', 'country_name',
                  'clubs']

    def get_country_name(self, obj):
        return obj.country.name if obj.country else ''

    ##ManyToMan Relations
    def get_clubs(self, obj):
        if obj:
            return {' ' + x.name for x in obj.clubs.all()}

class ClubListSerializer(serializers.ModelSerializer):
    clubs = serializers.SerializerMethodField()

    class Meta:
        model = Club
        fields = ['id', 'name', 'active', 'goal_difference', 'points', 'founded', 'clubs']

        ##ManyToMan Relations bezeichnung hier etwas schwammig, funktioniert aber
    def get_clubs(self, obj):
        if obj:
            return { x.first_name + ' ' + x.last_name for x in obj.clubs.all()}

class CLubFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ['id', 'name', 'active', 'goal_difference', 'points', 'founded', 'clubs']




