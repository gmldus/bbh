from rest_framework import serializers
from blogapp2.models import Blog2

class Blog2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Blog2
        fields = ('id','title','content','date')