"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt import views as jwt_views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
   openapi.Info(
      title="Motion_BackEnd API - Group David, Mijail & JM",
      default_version="vBatch 17 - Aug-Nov 2021",
      description="Endpoints of our Apps with Demo",
      terms_of_service="https://motion-backend-team-dmj.propulsion-learn.ch/home",
      contact=openapi.Contact(email="learn@propulsionacademy.com"),
      license=openapi.License(name="2021 David-Mijail-JM License"),
   ),
   public=True, # Set to False restrict access to protected endpoints
   permission_classes=(permissions.AllowAny,), # Permissions for docs access
)


urlpatterns = [
    path("backend/admin/", admin.site.urls),
    path("backend/api/", include("post.urls")),
    path("backend/api/", include("users.urls")),
    path(
        "backend/api/auth/token/",
        jwt_views.TokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path(
        "backend/api/auth/token/refresh/",
        jwt_views.TokenRefreshView.as_view(),
        name="token_refresh",
    ),
    path(
        "backend/api/auth/token/verify/",
        jwt_views.TokenVerifyView.as_view(),
        name="token_refresh",
    ),
    #path('backend/api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('backend/api/docs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-swagger-ui'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
