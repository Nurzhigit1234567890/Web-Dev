from rest_framework import generics
from .models import Product, Category
from .serializers import Product, CategorySerializer
from django.http import JsonResponse
from rest_framework import status
from django.core.serializers import serialize


class ProductList(generics.ListAPIView):
    def get(self, request):
        queryset = Product.objects.all()
        response = list(queryset.values())
        return JsonResponse(response,safe=False,status=status.HTTP_200_OK)




class ProductDetail(generics.RetrieveAPIView):
    def get(self, request, pk):
        response = serialize("json",[Product.objects.get(id=pk),])
        return JsonResponse(response,safe=False,status=status.HTTP_200_OK)



class CategoryList(generics.ListAPIView):
    def get(self, request):
        response = list(Category.objects.all().values())
        return JsonResponse(response,safe=False,status=status.HTTP_200_OK)


class CategoryDetail(generics.RetrieveAPIView):
    def get(self, request, pk):
        response =serialize("json", [Category.objects.get(id=pk), ])
        return JsonResponse(response,safe=False,status=status.HTTP_200_OK)


class CategoryProductList(generics.ListAPIView):

    def get(self, request, pk):
        response = list(Product.objects.filter(category_id=pk).all().values())

        return JsonResponse(response, safe=False, status=status.HTTP_200_OK)


