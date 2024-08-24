from rest_framework.response import Response
from rest_framework import viewsets
from .models import ToDo
from .serializers import ToDoSerializer
from django.http import JsonResponse

def about_me(request):
    return JsonResponse({"message": "Let me tell you about myself!"})

class ToDoViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer