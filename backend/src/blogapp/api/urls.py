from django.urls import path
from .views import BlogListView, BlogDetailView,BlogCreateView,BlogDeleteView,BlogUpdateView

urlpatterns = [
    path('', BlogListView.as_view()),
    path('create/$', BlogCreateView.as_view()),
    path('<pk>/$', BlogDetailView.as_view()),
    path('<pk>/delete/$', BlogDeleteView.as_view()),
    path('<pk>/update/$', BlogUpdateView.as_view()),
    
]