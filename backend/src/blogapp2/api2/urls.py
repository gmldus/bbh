from django.urls import path


from .views import Blog2ListView, Blog2DetailView,Blog2CreateView,Blog2DeleteView,Blog2UpdateView

urlpatterns = [
    path('', Blog2ListView.as_view()),
    path('create/$', Blog2CreateView.as_view()),
    path('<pk>/detail/$', Blog2DetailView.as_view()),
    path('<pk>/delete/$', Blog2DeleteView.as_view()),
    path('<pk>/update/$', Blog2UpdateView.as_view()),
    
]