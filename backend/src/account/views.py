from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth

def join(request):
    if request.method == 'POST':
        if request.POST['password1'] == request.POST['password2']:
            user = User.objects.create_user(
                request.POST['username'], password=request.POST['password1'])
            auth.login(request, user)
            return redirect('http://localhost:3000/')
    return render(request, 'http://localhost:3000/')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('http://localhost:3000/LoginSuccess')
            '''return redirect(request,'http://localhost:3000/LoginSuccess',{'is': 'yes'})'''
        else:
            return render(request, 'http://localhost:3000/', {'error': 'username or password is incorrect.'})
    else:
        return render(request, 'http://localhost:3000/')
    

def logout(request):
    return render(request, 'http://localhost:3000/')