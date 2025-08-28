import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Building2, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const CompanyRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    userRole: '',
    phone: '',
    industry: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Company address is required.';
    }

    if (!formData.userRole.trim()) {
      newErrors.userRole = 'Your role is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Check for existing company name (mock)
      if (formData.companyName.toLowerCase().includes('existing')) {
        setErrors({ companyName: 'A company with this name already exists. Please contact support.' });
        setIsLoading(false);
        return;
      }

      setIsSuccess(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Company Created Successfully!</CardTitle>
            <CardDescription>
              Congratulations! You are now the Company Administrator for <strong>{formData.companyName}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Building2 className="h-4 w-4" />
              <AlertDescription>
                <strong>What's next:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Create roles for your team members</li>
                  <li>Invite team members to join</li>
                  <li>Manage user approvals and permissions</li>
                  <li>Start managing requirements</li>
                </ul>
              </AlertDescription>
            </Alert>
            
            <Button 
              className="w-full"
              onClick={() => navigate('/company-admin/roles')}
            >
              Go to Admin Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <Card className="w-full max-w-2xl animate-fade-in">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Building2 className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Set Up Your Company</CardTitle>
          <CardDescription>
            As the first user from your domain, you'll become the Company Administrator
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className={cn(errors.companyName && 'border-destructive')}
                  placeholder="Enter your company name"
                />
                {errors.companyName && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="userRole">Your Role *</Label>
                <Input
                  id="userRole"
                  value={formData.userRole}
                  onChange={(e) => setFormData(prev => ({ ...prev, userRole: e.target.value }))}
                  className={cn(errors.userRole && 'border-destructive')}
                  placeholder="e.g. CEO, CTO, Project Manager"
                />
                {errors.userRole && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {errors.userRole}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Company Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                className={cn(errors.address && 'border-destructive')}
                placeholder="Enter your company's full address"
                rows={3}
              />
              {errors.address && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.address}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Company Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Enter company phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                  placeholder="e.g. Technology, Healthcare, Finance"
                />
              </div>
            </div>

            <Alert>
              <Building2 className="h-4 w-4" />
              <AlertDescription>
                <strong>Company Administrator Privileges:</strong> As the Company Admin, you'll be able to create roles, invite team members, manage user approvals, and oversee all requirements management activities.
              </AlertDescription>
            </Alert>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? 'Creating Company...' : 'Create Company & Become Admin'}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By creating a company, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyRegister;