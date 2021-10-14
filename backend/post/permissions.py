from rest_framework.permissions import BasePermission, SAFE_METHODS

# code for an object level permission: check the author


class IsAdminOrOwnerOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True      # readonly: reading always allowed
        return obj.author == request.user or request.user.is_superuser

# code for a general permission: general rule like if admin or check some rules/roles
# (manager...), or used by some thrid parties libraries to block some IP addresses


class PermissionName(BasePermission):
    def has_permission(self, request, view):
        return 'targetname_user' not in request.user.first_name.lower()
        # first_name could be username or email or ...


class ReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.method == 'GET'
