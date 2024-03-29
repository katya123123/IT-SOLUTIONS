from django import forms
from django.forms import ModelForm
from .models import *

 
def GetQuestValue():
    firstQuest = (('Одностраичный сайт','Одностраичный сайт'), ("Многостраничный сайт", "Многостраничный сайт"), ("Интернет-магазин", "Интернет-магазин"), ("Другое", "Другое"))
    secQuest = (('Да, хочу переделать','Да, хочу переделать'), ("Да, хочу дополнить", "Да, хочу дополнить"), ("Нет", "Нет"))

    return (firstQuest, secQuest)


class MotherForm(forms.Form):
    name = forms.CharField(label='Ваше имя')
    phone = forms.CharField(label='Ваш номер телефона')

class BrandingForm(MotherForm):
    
    fstchoises, secchoises = GetQuestValue()
    firstQuest = forms.ChoiceField(widget=forms.RadioSelect, choices=fstchoises)
    secQuest = forms.ChoiceField(widget=forms.RadioSelect, choices=secchoises)

    field_order = ["firstQuest", "secQuest", "name", "phone"]

class BrandFeedbackForm(ModelForm):
    class Meta:
        model = Feedback
        fields = ["firstQuest", "secondtQuest", "name", "phone"]

        fstchoises, secchoises = GetQuestValue()
        widgets = {
            "firstQuest": forms.RadioSelect(choices=fstchoises, attrs={
                'class': 'heading-style-h6'}),
            "secondtQuest": forms.RadioSelect(choices=secchoises),
            "name": forms.TextInput(attrs={
                    'class': 'heading-style-h6',
                    'placeholder': 'Введите имя',
                    'required': 'true',
                }),
            "phone": forms.TextInput(attrs={
                    'class': 'heading-style-h6',
                    'placeholder': '+7',
                    'id': 'fb_phone',
                    'required': 'true',
                }),
        }


class WebDesign(forms.Form):
    pass

class ProductDesign(forms.Form):
    pass

class Other(forms.Form):
    pass
