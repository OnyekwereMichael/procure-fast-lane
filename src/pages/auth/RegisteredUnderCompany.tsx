import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const RegisterUnderCompany = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: '',
    customRole: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' })); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.role) newErrors.role = "Please select a role";
    if (!formData.customRole) newErrors.customRole = "Please enter your role";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Call Complete Company User Registration Endpoint
    }
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Left Side - Keep as is */}
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
                <CardTitle className='mb-1 text-[20px] '>Register Under Registered Company</CardTitle>
                <CardDescription>Complete Company User Registration</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Role */}
              <div className="space-y-2">
                <Label htmlFor="role">Select Role</Label>
                <Select onValueChange={(val) => handleInputChange('role', val)}>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Choose a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {errors.role}
                  </p>
                )}
              </div>

              {/* Enter Role */}
              <div className="space-y-2">
                <Label htmlFor="customRole">Enter Role</Label>
                <Input
                  id="customRole"
                  type="text"
                  value={formData.customRole}
                  onChange={(e) => handleInputChange('customRole', e.target.value)}
                  placeholder="Enter your role"
                />
                {errors.customRole && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {errors.customRole}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Complete Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterUnderCompany;
