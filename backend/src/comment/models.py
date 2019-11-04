'''from django.db import models

class Comment(models.Model):
    post = models.ForeignKey(Blog, on_delete=models.CASCADE)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add = True, null=True) # 작성 날짜

    def __str__(self):
        return self.content'''