from django.shortcuts import get_object_or_404
from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    salary = serializers.FloatField()
    company_id = serializers.IntegerField(write_only=True)
    company = CompanySerializer(read_only=True)

    def create(self, validated_data):
        company_id = validated_data.pop('company_id')
        company = get_object_or_404(Company, id=company_id)
        vacancy = Vacancy.objects.create(company=company, **validated_data)
        return vacancy

    def update(self, instance, validated_data):
        company_id = validated_data.pop('company_id', None)
        if company_id:
            company = get_object_or_404(Company, id=company_id)
            instance.company = company
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.save()
        return instance



