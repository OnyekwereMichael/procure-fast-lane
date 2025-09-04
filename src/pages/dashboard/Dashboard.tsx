import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  FileText,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  ArrowUpRight,
  Package,
  CreditCard,
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "Active Requests",
      value: "12",
      change: "+2 from last week",
      icon: FileText,
      trend: "up",
    },
    {
      title: "Total Suppliers",
      value: "48",
      change: "+5 this month",
      icon: Users,
      trend: "up",
    },
    {
      title: "Monthly Spend",
      value: "$45,230",
      change: "-12% from last month",
      icon: DollarSign,
      trend: "down",
    },
    {
      title: "Savings",
      value: "$8,540",
      change: "+18% this quarter",
      icon: TrendingUp,
      trend: "up",
    },
  ];

  const recentRequests = [
    {
      id: "REQ-001",
      title: "Office Supplies - Q1 2024",
      status: "pending_approval",
      amount: "$2,450",
      department: "HR",
      date: "2024-01-15",
    },
    {
      id: "REQ-002",
      title: "Software Licenses",
      status: "approved",
      amount: "$12,000",
      department: "IT",
      date: "2024-01-14",
    },
    {
      id: "REQ-003",
      title: "Marketing Materials",
      status: "in_progress",
      amount: "$3,200",
      department: "Marketing",
      date: "2024-01-13",
    },
    {
      id: "REQ-004",
      title: "Equipment Maintenance",
      status: "completed",
      amount: "$5,800",
      department: "Operations",
      date: "2024-01-12",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending_approval':
        return <Badge variant="secondary">Pending Approval</Badge>;
      case 'approved':
        return <Badge variant="success">Approved</Badge>;
      case 'in_progress':
        return <Badge variant="default">In Progress</Badge>;
      case 'completed':
        return <Badge variant="success">Completed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending_approval':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in_progress':
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, John. Here's what's happening with your procurement activities.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Request
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Requests */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Requests</CardTitle>
                <CardDescription>Your latest procurement requests</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(request.status)}
                    <div>
                      <p className="font-medium">{request.title}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{request.id}</span>
                        <span>•</span>
                        <span>{request.department}</span>
                        <span>•</span>
                        <span>{request.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{request.amount}</span>
                    {getStatusBadge(request.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Create New Request
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Find Suppliers
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Package className="mr-2 h-4 w-4" />
              Track Orders
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <CreditCard className="mr-2 h-4 w-4" />
              View Invoices
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Progress */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Budget Usage</CardTitle>
            <CardDescription>$32,450 of $50,000 used this month</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={65} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>$32,450 used</span>
              <span>$17,550 remaining</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Request Approval Rate</CardTitle>
            <CardDescription>This month's approval statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={88} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>88% approved</span>
              <span>22 of 25 requests</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;