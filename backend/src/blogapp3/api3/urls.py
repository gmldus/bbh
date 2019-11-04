from django.urls import path


from .views import Blog3ListView, Blog3DetailView,Blog3CreateView,Blog3DeleteView,Blog3UpdateView

urlpatterns = [
    path('', Blog3ListView.as_view()),
    path('create/$', Blog3CreateView.as_view()),
    path('<pk>/detail/$', Blog3DetailView.as_view()),
    path('<pk>/delete/$', Blog3DeleteView.as_view()),
    path('<pk>/update/$', Blog3UpdateView.as_view()),
    
]