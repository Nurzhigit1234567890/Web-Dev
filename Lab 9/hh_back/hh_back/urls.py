from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from api.views import CompanyViewSet, VacancyViewSet



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', CompanyViewSet.company_list, name='company-list'),
    path('api/companies/<int:id>/', CompanyViewSet.company_detail, name='company-detail'),
    path('api/companies/<int:id>/vacancies/', VacancyViewSet.company_vacancies, name='company-vacancies'),
    path('api/vacancies/', VacancyViewSet.vacancy_list, name='vacancy-list'),
    path('api/vacancies/<int:id>/', VacancyViewSet.vacancy_detail, name='vacancy-detail'),
    path('api/vacancies/top_ten/', VacancyViewSet.top_ten_vacancies, name='top-ten-vacancies'),
]
