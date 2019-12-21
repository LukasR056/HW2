from django.shortcuts import render
from rest_framework import status

from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from soccer.models import Country, Soccerplayer, Club
from soccer.serializers import CountryOptionSerializer, ClubFormSerializer, SoccerplayerFormSerializer, \
    SoccerplayerListSerializer, ClubListSerializer


# Create your views here.

##Country
#@swagger_auto_schema(method='GET', responses={200: CountryOptionSerializer(many=True)})
@api_view(['GET'])
def country_option_list(request):
    countries = Country.objects.all()
    serializer = CountryOptionSerializer(countries, many=True)
    return Response(serializer.data)

##Club--------------------------------------------------------------------------------------------------------
#@swagger_auto_schema(method='GET', responses={200: ActorsOptionSerializer(many=True)})
@api_view(['GET'])
def club_option_list(request):
    club = Club.objects.all()
    serializer = ClubListSerializer(club, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def club_form_create(request):
    serializer = ClubFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['PUT'])
def club_form_update(request,pk):
    try:
        club = Club.objects.get(pk=pk)
    except Club.DoesNotExist:
        return Response({'error': 'Club does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = ClubFormSerializer(club, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def club_form_get(request):
    club = Club.objects.all()
    serializer = ClubFormSerializer(club, many=True)
    return Response(serializer.data)

@api_view(['GET','DELETE'])
def club_delete(request,pk):
    try:
        club = Club.objects.get(pk=pk)
    except Club.DoesNotExist:
        return Response({'error': 'club does not exist.'}, status=404)

    if request.method == 'GET':
        serializer = ClubFormSerializer(club)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        club.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

##soccerplayer----------------------------------------------------------------------------------
@api_view(['GET'])
def soccerplayer_option_list(request):
    soccerplayer = Soccerplayer.objects.all()
    serializer = SoccerplayerListSerializer(soccerplayer, many=True)
    return Response(serializer.data)

#@swagger_auto_schema(method='GET', responses={200: MovieFormSerializer()})
@api_view(['GET'])
def soccerplayer_form_get(request, pk):
    try:
        soccerplayer = Soccerplayer.objects.get(pk=pk)
    except Soccerplayer.DoesNotExist:
        return Response({'error': 'Soccerplayer does not exist.'}, status=404)
    serializer = SoccerplayerFormSerializer(soccerplayer)
    return Response(serializer.data)

#@swagger_auto_schema(method='POST', request_body=MovieFormSerializer, responses={200: MovieFormSerializer()})
@api_view(['POST'])
def soccerplayer_form_create(request):
    serializer = SoccerplayerFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

#@swagger_auto_schema(method='PUT', request_body=MovieFormSerializer, responses={200: MovieFormSerializer()})
@api_view(['PUT'])
def soccerplayer_form_update(request, pk):
    try:
        soccerplayer = Soccerplayer.objects.get(pk=pk)
    except Soccerplayer.DoesNotExist:
        return Response({'error': 'Soccerplayer does not exist.'}, status=404)

    serializer = SoccerplayerFormSerializer(soccerplayer, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['GET','DELETE'])
def soccerplayer_delete(request, pk):
    try:
        soccerplayer = Soccerplayer.objects.get(pk=pk)
    except Soccerplayer.DoesNotExist:
        return Response({'error': 'Soccerplayer does not exist.'}, status=404)

    if request.method == 'GET':
        serializer = SoccerplayerFormSerializer(soccerplayer)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        soccerplayer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

