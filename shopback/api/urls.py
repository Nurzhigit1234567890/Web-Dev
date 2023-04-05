from django.urls import path
from api import views
from rest_framework.routers import DefaultRouter
urlpatterns = [
    path('api/products/', views.ProductList.as_view()),
        path('api/products/<int:pk>/', views.ProductDetail.as_view()),
    path('api/categories/', views.CategoryList.as_view()),
    path('api/categories/<int:pk>/', views.CategoryDetail.as_view()),
    path('api/categories/<int:pk>/products/', views.CategoryProductList.as_view()),
]
router = DefaultRouter()
