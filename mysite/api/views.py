from django.shortcuts import render, HttpResponse
from .models import Characters
from .serializers import CharacterSerializer
from rest_framework import views, status
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@csrf_exempt
def character_list(request):
    if request.method == 'GET':
        character = Characters.objects.all()
        serializer = CharacterSerializer(character, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CharacterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def character_details(request, id_ch):
    try:
        character = Characters.objects.get(id_ch=id_ch)

    except Characters.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = CharacterSerializer(character)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = CharacterSerializer(character, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        character.delete()
        return HttpResponse(status=204)

'''
class CharacterizeView(views.APIView):
    def post(self, request, id_ch, format=None):

        try:
여기에 AI 모델 연동
'''
