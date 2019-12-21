from rest_framework import serializers
from .models import Country, Soccerplayer, Club


class CountryOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name']

    def get_country_name(self, obj):
        return obj.country.name if obj.country else ''


class ClubFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'

    def get_club_name(self, obj):
        return obj.club.name if obj.club else ''


class SoccerplayerFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soccerplayer
        fields = '__all__'

    def get_club_name(self, obj):
        return obj.soccerplayer.name if obj.soccerplayer else ''


class SoccerplayerListSerializer(serializers.ModelSerializer):
    country_name = serializers.SerializerMethodField()


    class Meta:
        model = Soccerplayer
        fields = ['id', 'first_name', 'last_name', 'goals', 'injured', 'position', 'birth', 'country_name',
                  'clubs']

    def get_country_name(self, obj):
        return obj.country.name if obj.country else ''

    def get_clubs_name(self, obj):
        return obj.clubs.name if obj.clubs else ''

class ClubListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Club
        fields = ['id', 'name', 'active', 'goal_difference', 'points', 'founded']




## Zum Listen aller Soccerplayers, deshalb hier auch nicht den Schlüssel genommen sondern die Namen. Was man halt wie wo braucht. Nested Serilazer
# class SoccerplayersListSerializer(serializers.ModelSerializer):
#    country_name = serializers.SerializerMethodField()
#    clubs = ClubFormSerializer(many=True)
#
#    class Meta:
# #        model = Soccerplayer
# #        fields = ['id', 'first_name','last_name','goals','injured','position','birth','country_name','clubs']
#
#
#
#
