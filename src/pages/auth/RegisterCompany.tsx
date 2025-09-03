import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const BLOCKED_DOMAINS = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com'];

const RegisterCompany = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    BusinessName: '',
    address: '',
    phone: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' })); // clear error on change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: {[key: string]: string} = {};

    if (!formData.BusinessName) newErrors.BusinessName = "Business name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Navigate or API call here
    }
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Left Side - Welcome Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary text-primary-foreground p-12 flex-col justify-center">
        <div className=" mx-auto">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-lg mb-8 opacity-90">
            Join your team's requirements management platform with personalized access, 
            instant collaboration, and expert guidance.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Create and manage requirements in minutes</h3>
                <p className="text-sm opacity-75">Streamlined workflow for requirement creation</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Secure team collaboration</h3>
                <p className="text-sm opacity-75">Invite team members with role-based access control</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Flexible approval workflows</h3>
                <p className="text-sm opacity-75">Customizable approval processes for your organization</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg">
            <p className="text-sm italic">
              "This platform made it incredibly easy to manage our requirements. 
              The experience was smooth, and everything just worked."
            </p>
            <p className="text-xs mt-2 opacity-75">– Sarah, Product Manager</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full overflow-y-auto lg:w-1/2 flex items-center justify-center px-1 ">
        <Card className="w-full shadow-none  animate-fade-in border-none mt-10">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Button>

            <div>
              <CardTitle className='mb-1 text-[20px] '>Register Company</CardTitle>
              <CardDescription>Register your company to get started</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="BusinessName">Business Name</Label>
              <Input
                id="BusinessName"
                type="text"
                value={formData.BusinessName}
                onChange={(e) => handleInputChange('BusinessName', e.target.value)}
                placeholder="Enter your business name"
              />
              {errors.BusinessName && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.BusinessName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className={cn(errors.address && 'border-destructive')}
                placeholder="Enter your address"
              />
              {errors.address && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.address}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={cn(errors.phone && 'border-destructive')}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Register Company
            </Button>
          </form>
        </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterCompany;
