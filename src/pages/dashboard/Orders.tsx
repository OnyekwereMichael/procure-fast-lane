import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Search,
  Filter,
  MoreHorizontal,
  Package,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  Download,
  MessageSquare,
  MapPin,
} from 'lucide-react';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: "ORD-2024-001",
      title: "Office Supplies Bundle",
      supplier: "Office Express Ltd",
      status: "delivered",
      amount: "$2,450",
      orderDate: "2024-01-10",
      expectedDelivery: "2024-01-15",
      actualDelivery: "2024-01-14",
      items: 15,
      trackingNumber: "OE123456789",
      shippingAddress: "123 Business Ave, Suite 500, New York, NY 10001"
    },
    {
      id: "ORD-2024-002",
      title: "Software Licenses - Adobe Suite",
      supplier: "TechCorp Solutions",
      status: "in_transit",
      amount: "$12,000",
      orderDate: "2024-01-12",
      expectedDelivery: "2024-01-18",
      actualDelivery: null,
      items: 50,
      trackingNumber: "TC987654321",
      shippingAddress: "Digital delivery to admin@company.com"
    },
    {
      id: "ORD-2024-003",
      title: "Marketing Materials Package",
      supplier: "Creative Services Inc",
      status: "processing",
      amount: "$3,200",
      orderDate: "2024-01-14",
      expectedDelivery: "2024-01-20",
      actualDelivery: null,
      items: 8,
      trackingNumber: "CS456789123",
      shippingAddress: "123 Business Ave, Marketing Dept, New York, NY 10001"
    },
    {
      id: "ORD-2024-004",
      title: "IT Equipment - Laptops",
      supplier: "TechCorp Solutions",
      status: "confirmed",
      amount: "$15,600",
      orderDate: "2024-01-15",
      expectedDelivery: "2024-01-25",
      actualDelivery: null,
      items: 4,
      trackingNumber: "TC789123456",
      shippingAddress: "123 Business Ave, IT Storage, New York, NY 10001"
    },
    {
      id: "ORD-2024-005",
      title: "Cleaning Supplies",
      supplier: "Office Express Ltd",
      status: "cancelled",
      amount: "$850",
      orderDate: "2024-01-08",
      expectedDelivery: "2024-01-12",
      actualDelivery: null,
      items: 12,
      trackingNumber: null,
      shippingAddress: "123 Business Ave, Facilities, New York, NY 10001"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Confirmed</Badge>;
      case 'processing':
        return <Badge variant="default"><Package className="w-3 h-3 mr-1" />Processing</Badge>;
      case 'in_transit':
        return <Badge variant="default"><Truck className="w-3 h-3 mr-1" />In Transit</Badge>;
      case 'delivered':
        return <Badge variant="success"><CheckCircle className="w-3 h-3 mr-1" />Delivered</Badge>;
      case 'cancelled':
        return <Badge variant="destructive"><AlertCircle className="w-3 h-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'processing':
        return <Package className="w-4 h-4 text-yellow-500" />;
      case 'in_transit':
        return <Truck className="w-4 h-4 text-orange-500" />;
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'cancelled':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getOrdersByStatus = (status: string) => {
    if (status === 'all') return orders;
    return orders.filter(order => order.status === status);
  };

  const orderStats = [
    {
      title: "Total Orders",
      value: orders.length,
      color: "text-blue-600"
    },
    {
      title: "In Transit",
      value: getOrdersByStatus('in_transit').length,
      color: "text-orange-600"
    },
    {
      title: "Delivered",
      value: getOrdersByStatus('delivered').length,
      color: "text-green-600"
    },
    {
      title: "Total Value",
      value: "$34,100",
      color: "text-purple-600"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">
            Track and manage your purchase orders
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Orders
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {orderStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-48">
              <label className="text-sm font-medium mb-2 block">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="in_transit">In Transit</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Orders ({orders.length})</TabsTrigger>
          <TabsTrigger value="active">Active ({getOrdersByStatus('in_transit').length + getOrdersByStatus('processing').length + getOrdersByStatus('confirmed').length})</TabsTrigger>
          <TabsTrigger value="delivered">Delivered ({getOrdersByStatus('delivered').length})</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled ({getOrdersByStatus('cancelled').length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Order Date</TableHead>
                  <TableHead>Expected Delivery</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.items} items
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{order.supplier}</TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell className="font-medium">{order.amount}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>
                      <div>
                        <p>{order.expectedDelivery}</p>
                        {order.actualDelivery && (
                          <p className="text-sm text-green-600">
                            Delivered: {order.actualDelivery}
                          </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          {order.trackingNumber && (
                            <DropdownMenuItem>
                              <Truck className="mr-2 h-4 w-4" />
                              Track Package
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download Invoice
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Contact Supplier
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <div className="grid gap-6">
            {filteredOrders
              .filter(order => ['confirmed', 'processing', 'in_transit'].includes(order.status))
              .map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(order.status)}
                        <div>
                          <CardTitle className="text-lg">{order.title}</CardTitle>
                          <CardDescription>
                            Order {order.id} • {order.supplier}
                          </CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(order.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-semibold">{order.amount}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Items</p>
                        <p className="font-semibold">{order.items}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Order Date</p>
                        <p className="font-semibold">{order.orderDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expected Delivery</p>
                        <p className="font-semibold">{order.expectedDelivery}</p>
                      </div>
                    </div>

                    {order.trackingNumber && (
                      <div className="border rounded-lg p-3 bg-muted/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Truck className="w-4 h-4" />
                          <span className="font-medium">Tracking Information</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Tracking Number: <span className="font-mono">{order.trackingNumber}</span>
                        </p>
                      </div>
                    )}

                    <div className="border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">Delivery Address</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {order.shippingAddress}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {order.trackingNumber && (
                        <Button variant="outline" size="sm">
                          <Truck className="w-4 h-4 mr-2" />
                          Track Package
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Supplier
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="delivered">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Showing delivered orders... (Similar structure to active orders)
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cancelled">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Showing cancelled orders... (Similar structure)
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Orders;