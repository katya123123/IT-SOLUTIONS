# Generated by Django 5.0.3 on 2024-03-29 23:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='feedback',
            options={'verbose_name': 'заявка', 'verbose_name_plural': 'Заявки'},
        ),
    ]