from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from blogapp3.models import Blog3
from .serializers import Blog3Serializer

class Blog3ListView(ListAPIView):
    queryset = Blog3.objects.all()
    serializer_class = Blog3Serializer

class Blog3DetailView(RetrieveAPIView):
    queryset = Blog3.objects.all()
    serializer_class = Blog3Serializer

class Blog3CreateView(CreateAPIView):
    queryset = Blog3.objects.all()
    serializer_class = Blog3Serializer

class Blog3DeleteView(DestroyAPIView):
    queryset = Blog3.objects.all()
    serializer_class = Blog3Serializer

class Blog3UpdateView(UpdateAPIView):
    queryset = Blog3.objects.all()
    serializer_class = Blog3Serializer

