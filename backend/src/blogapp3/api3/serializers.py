from rest_framework import serializers
from blogapp3.models import Blog3

class Blog3Serializer(serializers.ModelSerializer):
    class Meta:
        model = Blog3
        fields = ('id','title','content','date')