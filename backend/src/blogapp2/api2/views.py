from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from blogapp2.models import Blog2
from .serializers import Blog2Serializer

class Blog2ListView(ListAPIView):
    queryset = Blog2.objects.all()
    serializer_class = Blog2Serializer

class Blog2DetailView(RetrieveAPIView):
    queryset = Blog2.objects.all()
    serializer_class = Blog2Serializer

class Blog2CreateView(CreateAPIView):
    queryset = Blog2.objects.all()
    serializer_class = Blog2Serializer

class Blog2DeleteView(DestroyAPIView):
    queryset = Blog2.objects.all()
    serializer_class = Blog2Serializer

class Blog2UpdateView(UpdateAPIView):
    queryset = Blog2.objects.all()
    serializer_class = Blog2Serializer

