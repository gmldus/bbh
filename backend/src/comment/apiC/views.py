'''from django.shortcuts import render, get_object_or_404, redirect
from .serializers import CommentSerializer
from blogapp.models import Blog

def commentcreate(request, post_id):
    blog = get_object_or_404(Blog, pk=post_id)
    if request.method=='POST':
        form = CommentSerializer(request.POST)
        comment = form.save(commit=False)
        comment.blog = blog
        comment.save()'''
        