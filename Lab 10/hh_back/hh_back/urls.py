from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from api.views import CompanyListCreateView, top_ten_vacancies, company_vacancies, vacancies_list, vacancy_detail, \
    CompanyRetrieveUpdateDestroyView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', CompanyListCreateView.as_view() , name='company-list'),
    path('api/companies/<int:pk>/', CompanyRetrieveUpdateDestroyView.as_view() , name='company-detail'),
    path('api/companies/<int:id>/vacancies/', company_vacancies, name='company-vacancies'),
    path('api/vacancies/', vacancies_list, name='vacancy-list'),
    path('api/vacancies/<int:id>/', vacancy_detail, name='vacancy-detail'),
    path('api/vacancies/top_ten/', top_ten_vacancies, name='top-ten-vacancies'),
]
