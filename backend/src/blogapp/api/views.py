from rest_framework.generics import ListAPIView, RetrieveAPIView,CreateAPIView,DestroyAPIView,UpdateAPIView
from blogapp.models import Blog
from .serializers import BlogSerializer

class BlogListView(ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogDetailView(RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogCreateView(CreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogDeleteView(DestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogUpdateView(UpdateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer



