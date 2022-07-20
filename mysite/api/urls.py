from django.urls import path

from .views import character_list, character_details

urlpatterns = [
    path('characters/', character_list),
    path('characters/<int:id_ch>/',character_details),
]

