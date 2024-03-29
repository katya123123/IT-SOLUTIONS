from django.http import JsonResponse
from django.shortcuts import render
from .forms import *
 
def index(request):
    if request.method == "GET":
        brandForm = BrandFeedbackForm()
        return render(request, "it-sol2.html", {"form":brandForm})
    
    elif request.method == "POST":
        form = BrandFeedbackForm(request.POST)
        if form.is_valid():
            form.save()
            print(form.cleaned_data)
            return JsonResponse({'success':True})

        