"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from soccer import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('country/options', views.country_option_list),
    path('soccerplayer/list', views.soccerplayer_option_list),
    path('soccerplayer/create', views.soccerplayer_form_create),
    path('soccerplayer/<int:pk>/get', views.soccerplayer_form_get),
    path('soccerplayer/<int:pk>/update', views.soccerplayer_form_update),
    path('soccerplayer/<int:pk>/delete', views.soccerplayer_delete),
    path('club/list', views.club_option_list),
    path('club/create', views.club_form_create),
    path('club/<int:pk>/get', views.club_form_get),
    path('club/<int:pk>/update', views.club_form_update),
    path('club/<int:pk>/delete', views.club_delete),
]
