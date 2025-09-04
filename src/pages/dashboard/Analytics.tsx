import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Package,
  Clock,
  Download,
  Filter,
} from 'lucide-react';

const Analytics = () => {
  // Sample data for charts
  const monthlySpendData = [
    { month: 'Jan', spend: 45000, savings: 8500 },
    { month: 'Feb', spend: 52000, savings: 9200 },
    { month: 'Mar', spend: 48000, savings: 7800 },
    { month: 'Apr', spend: 61000, savings: 11200 },
    { month: 'May', spend: 55000, savings: 10100 },
    { month: 'Jun', spend: 67000, savings: 12800 },
  ];

  const categorySpendData = [
    { name: 'Software & IT', value: 180000, color: '#8884d8' },
    { name: 'Office Supplies', value: 85000, color: '#82ca9d' },
    { name: 'Manufacturing', value: 320000, color: '#ffc658' },
    { name: 'Marketing', value: 95000, color: '#ff7300' },
    { name: 'Facilities', value: 140000, color: '#00c49f' },
  ];

  const supplierPerformanceData = [
    { supplier: 'TechCorp', onTime: 95, quality: 92, cost: 88 },
    { supplier: 'Office Express', onTime: 88, quality: 90, cost: 95 },
    { supplier: 'Global Manuf', onTime: 82, quality: 95, cost: 78 },
    { supplier: 'Creative Svc', onTime: 93, quality: 96, cost: 85 },
  ];

  const kpiCards = [
    {
      title: "Total Spend",
      value: "$1.2M",
      change: "+8.2%",
      trend: "up",
      icon: DollarSign,
      period: "vs last quarter"
    },
    {
      title: "Cost Savings",
      value: "$156K",
      change: "+15.3%",
      trend: "up",
      icon: TrendingUp,
      period: "this quarter"
    },
    {
      title: "Active Suppliers",
      value: "48",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      period: "vs last quarter"
    },
    {
      title: "Avg Processing Time",
      value: "3.2 days",
      change: "-18.7%",
      trend: "up",
      icon: Clock,
      period: "improvement"
    },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00c49f'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics & Reports</h1>
          <p className="text-muted-foreground">
            Gain insights into your procurement performance and spending patterns
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="quarter">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiCards.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center gap-1">
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <p className={`text-xs ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {kpi.change} {kpi.period}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Monthly Spend Trend */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Monthly Spend & Savings Trend</CardTitle>
                <CardDescription>Track your spending and cost savings over time</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlySpendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="spend" fill="#8884d8" name="Total Spend" />
                <Bar dataKey="savings" fill="#82ca9d" name="Cost Savings" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Spend by Category</CardTitle>
            <CardDescription>Distribution of spending across categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categorySpendData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categorySpendData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {categorySpendData.map((item, index) => (
                <div key={item.name} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">${item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Supplier Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Top Supplier Performance</CardTitle>
            <CardDescription>Performance metrics across key suppliers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {supplierPerformanceData.map((supplier) => (
                <div key={supplier.supplier} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{supplier.supplier}</span>
                    <Badge variant="secondary">Overall: {Math.round((supplier.onTime + supplier.quality + supplier.cost) / 3)}%</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">On-time</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${supplier.onTime}%` }}
                          />
                        </div>
                        <span className="text-xs">{supplier.onTime}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Quality</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${supplier.quality}%` }}
                          />
                        </div>
                        <span className="text-xs">{supplier.quality}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Cost Eff.</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-yellow-500 h-2 rounded-full" 
                            style={{ width: `${supplier.cost}%` }}
                          />
                        </div>
                        <span className="text-xs">{supplier.cost}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Analytics Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Request Processing</CardTitle>
            <CardDescription>Average time to process requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2 days</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <p className="text-xs text-green-600">18% improvement</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Approval Rate</CardTitle>
            <CardDescription>Percentage of requests approved</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <p className="text-xs text-green-600">+2.1% this month</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contract Compliance</CardTitle>
            <CardDescription>Adherence to contract terms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.7%</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <p className="text-xs text-green-600">+0.5% this quarter</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;