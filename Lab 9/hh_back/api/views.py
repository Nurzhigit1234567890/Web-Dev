from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework import viewsets


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


    @api_view(['GET'])
    def company_list(request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)


    @api_view(['GET'])
    def company_detail(request, id):
        company = get_object_or_404(Company, id=id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    @api_view(['GET'])
    def company_vacancies(request, id):
        vacancies = Vacancy.objects.filter(company_id=id)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


    @api_view(['GET'])
    def vacancy_list(request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


    @api_view(['GET'])
    def vacancy_detail(request, id):
        vacancy = get_object_or_404(Vacancy, id=id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)


    @api_view(['GET'])
    def top_ten_vacancies(request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
