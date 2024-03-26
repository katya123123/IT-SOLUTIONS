from django.shortcuts import render
 
def index(request):
    return render(request, "it-sol2.html")