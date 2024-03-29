from django.db import models

class Feedback(models.Model):
    firstQuest = models.CharField(max_length=128)
    secondtQuest = models.CharField(max_length=128)
    name = models.CharField(max_length=128)
    phone = models.CharField(max_length=20)

    class Meta:
        verbose_name = "заявка"
        verbose_name_plural = "Заявки"