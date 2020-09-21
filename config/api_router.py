from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from bmh_lims.users.api.views import UserViewSet
from bmh_lims.database.api.views import SampleViewSet, WorkflowBatchViewSet, LabViewSet, ProjectViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register("samples", SampleViewSet, basename='samples')
router.register("workflow_batches", WorkflowBatchViewSet, basename='workflow_batches')
router.register("labs", LabViewSet, basename='labs')
router.register("projects", ProjectViewSet, basename='projects')

app_name = "api"
urlpatterns = router.urls
