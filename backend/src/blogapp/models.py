from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length = 120)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add = True, null=True) # 작성 날짜

    def __str__(self):
        return self.title

