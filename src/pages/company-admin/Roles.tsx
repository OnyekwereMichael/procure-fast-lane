import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, Shield, Users } from 'lucide-react';
import CreateRoleForm from '@/components/CreateRoleForm';

const Roles = () => {
  const [roles] = useState([
    {
      id: 1,
      name: 'Company Admin',
      permissions: { canPost: true, canView: true, canDelete: true },
      requiresApproval: true,
      userCount: 1
    },
    {
      id: 2,
      name: 'Senior Developer',
      permissions: { canPost: true, canView: true, canDelete: false },
      requiresApproval: false,
      userCount: 3
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateRole = (roleData: any) => {
    console.log('Creating role:', roleData);
    // Handle role creation logic here
    setShowCreateForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Role Management</h1>
          <p className="text-muted-foreground">Create and manage roles for your team</p>
        </div>
        <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Role
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <CreateRoleForm 
              onClose={() => setShowCreateForm(false)}
              onSubmit={handleCreateRole}
            />
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Company Roles</CardTitle>
          <CardDescription>Manage roles and permissions for your organization</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role Name</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Approval Required</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell className="font-medium">{role.name}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {role.permissions.canPost && <Badge variant="secondary">Post</Badge>}
                      {role.permissions.canView && <Badge variant="secondary">View</Badge>}
                      {role.permissions.canDelete && <Badge variant="secondary">Delete</Badge>}
                    </div>
                  </TableCell>
                  <TableCell>
                    {role.requiresApproval ? (
                      <Badge variant="secondary">Yes</Badge>
                    ) : (
                      <Badge variant="outline">No</Badge>
                    )}
                  </TableCell>
                  <TableCell>{role.userCount}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Roles;