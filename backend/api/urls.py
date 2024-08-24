from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import about_me, ToDoViewSet

router = DefaultRouter()
router.register(r'todos', ToDoViewSet, basename='todo')

urlpatterns = [
    path('about/', about_me, name='about_me'),
    path('', include(router.urls)),
]