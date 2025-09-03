import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Shield } from 'lucide-react';

interface CreateRoleFormProps {
  onClose: () => void;
  onSubmit: (roleData: any) => void;
}

const CreateRoleForm: React.FC<CreateRoleFormProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    roleName: '',
    canPostRequirement: false,
    canViewRequirement: false,
    canDeleteRequirement: false,
    requiresRequirementApproval: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.roleName.trim()) {
      newErrors.roleName = 'Role name is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Create New Role
          </CardTitle>
          <CardDescription>
            Define permissions and settings for the new role
          </CardDescription>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Name */}
          <div className="space-y-2">
            <Label htmlFor="roleName">Role Name *</Label>
            <Input
              id="roleName"
              value={formData.roleName}
              onChange={(e) => handleInputChange('roleName', e.target.value)}
              placeholder="e.g., Senior Developer, Project Manager"
              className={errors.roleName ? 'border-destructive' : ''}
            />
            {errors.roleName && (
              <p className="text-sm text-destructive">{errors.roleName}</p>
            )}
          </div>

          {/* Permissions Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">Permissions</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="canPostRequirement"
                    checked={formData.canPostRequirement}
                    onCheckedChange={(checked) => 
                      handleInputChange('canPostRequirement', checked)
                    }
                  />
                  <Label htmlFor="canPostRequirement" className="text-sm">
                    Can post requirements
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="canViewRequirement"
                    checked={formData.canViewRequirement}
                    onCheckedChange={(checked) => 
                      handleInputChange('canViewRequirement', checked)
                    }
                  />
                  <Label htmlFor="canViewRequirement" className="text-sm">
                    Can view requirements
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="canDeleteRequirement"
                    checked={formData.canDeleteRequirement}
                    onCheckedChange={(checked) => 
                      handleInputChange('canDeleteRequirement', checked)
                    }
                  />
                  <Label htmlFor="canDeleteRequirement" className="text-sm">
                    Can delete requirements
                  </Label>
                </div>
              </div>
            </div>

            {/* Requirement Approval Gate */}
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-medium mb-2">Requirement Approval Gate</h3>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <Label htmlFor="requiresRequirementApproval" className="text-sm font-medium">
                      Role must approve requirements before they are posted
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Users in this role will need to approve requirements from other users
                    </p>
                  </div>
                  <Switch
                    id="requiresRequirementApproval"
                    checked={formData.requiresRequirementApproval}
                    onCheckedChange={(checked) => 
                      handleInputChange('requiresRequirementApproval', checked)
                    }
                  />
                </div>
              </div>

              {formData.requiresRequirementApproval && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> If any role has 'Requirement Approval Gate' enabled, 
                    any requirement submitted by users that needs approval will be held in 
                    Pending Approval and must be approved by all users assigned to the approval roles.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Create Role
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateRoleForm;