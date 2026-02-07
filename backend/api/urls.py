from django.urls import path
from .views import facts

urlpatterns = [
    path('facts/', facts),
]
