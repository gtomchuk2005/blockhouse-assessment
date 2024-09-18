from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

# Candlestick
def candlestick_data(request):
    data = {
        "dataPoints": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            {"x": "2023-01-03", "open": 40, "high": 50, "low": 35, "close": 45},
            {"x": "2023-01-04", "open": 45, "high": 55, "low": 40, "close": 50}
        ]
    }
    return JsonResponse(data)

# Line Chart
def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "dataPoints": [10, 20, 30, 40]
    }
    return JsonResponse(data)

# Bar Chart
def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "dataPoints": [100, 150, 200]
    }
    return JsonResponse(data)

# Pie Chart 
def pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "dataPoints": [300, 50, 100]
    }
    return JsonResponse(data)
