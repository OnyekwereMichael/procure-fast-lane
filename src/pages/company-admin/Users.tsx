import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Check, X, Mail } from 'lucide-react';

const Users = () => {
  const [pendingUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      requestedRole: 'Senior Developer',
      requestedAt: '2024-01-15'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage user approvals and invitations</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Invite Users
        </Button>
      </div>

      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
          <TabsTrigger value="all">All Users</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending User Approvals</CardTitle>
              <CardDescription>Review and approve new user registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Requested Role</TableHead>
                    <TableHead>Requested At</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.requestedRole}</Badge>
                      </TableCell>
                      <TableCell>{user.requestedAt}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Check className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <X className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Users</CardTitle>
              <CardDescription>View and manage all company users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">User list would be displayed here...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Users;