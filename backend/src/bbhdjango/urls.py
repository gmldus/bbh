from django.contrib import admin
from django.urls import path, include
import account.views

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('blogapp.api.urls')),
    path('api2/', include('blogapp2.api2.urls')),
    path('api3/', include('blogapp3.api3.urls')),
    path('login/', account.views.login, name="login"),
    path('logout/', account.views.logout, name="logout"),
    path('join/', account.views.join, name="join"),
    path('join/account.html', account.views.join, name="join"),
    path('login/account.html', account.views.login, name="login"),
    
]
