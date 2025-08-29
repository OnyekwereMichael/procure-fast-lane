import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, CheckCircle, XCircle, Clock, Mail, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const InviteAccept = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const [inviteData, setInviteData] = useState({
    email: '',
    suggestedRole: '',
    companyName: '',
    inviterName: ''
  });
  
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [tokenStatus, setTokenStatus] = useState<'loading' | 'valid' | 'expired' | 'invalid'>('loading');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!token) {
      setTokenStatus('invalid');
      return;
    }

    // Simulate API call to fetch invitation details
    const fetchInviteDetails = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock invite data based on token
      if (token === 'expired-token') {
        setTokenStatus('expired');
      } else if (token === 'invalid-token') {
        setTokenStatus('invalid');
      } else {
        setInviteData({
          email: 'john.doe@company.com',
          suggestedRole: 'Senior Developer',
          companyName: 'Acme Corporation',
          inviterName: 'Sarah Johnson'
        });
        setTokenStatus('valid');
      }
    };

    fetchInviteDetails();
  }, [token]);

  const calculatePasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };

  const passwordStrength = calculatePasswordStrength(formData.password);
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-destructive', 'bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-500'];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms of service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const handleResendInvite = () => {
    console.log('Requesting new invite...');
  };

  if (tokenStatus === 'loading') {
    return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Welcome Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary text-primary-foreground p-12 flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-6">You're Invited!</h1>
          <p className="text-lg mb-8 opacity-90">
            Join your team's requirements management platform. Complete your 
            profile to start collaborating with your colleagues.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Join your team</h3>
                <p className="text-sm opacity-75">Connect with colleagues already using the platform</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Role-based access</h3>
                <p className="text-sm opacity-75">Your permissions are tailored to your role</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Start immediately</h3>
                <p className="text-sm opacity-75">Begin contributing to projects right away</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md animate-fade-in border-0 shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <CardTitle>Loading Invitation</CardTitle>
            <CardDescription>Please wait while we load your invitation details...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
    );
  }

  if (tokenStatus === 'expired' || tokenStatus === 'invalid') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <CardTitle>
              {tokenStatus === 'expired' ? 'Invitation Expired' : 'Invalid Invitation'}
            </CardTitle>
            <CardDescription>
              {tokenStatus === 'expired' 
                ? 'This invitation has expired. Please request a new one from your company administrator.'
                : 'This invitation link is invalid or has already been used.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Mail className="h-4 w-4" />
              <AlertDescription>
                Contact your Company Administrator to request a new invitation or check if you already have an account.
              </AlertDescription>
            </Alert>
            <Button 
              className="w-full"
              onClick={handleResendInvite}
            >
              Request New Invitation
            </Button>
            <Button 
              variant="ghost" 
              className="w-full"
              onClick={() => navigate('/auth/login')}
            >
              Back to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Welcome to {inviteData.companyName}!</CardTitle>
            <CardDescription>
              Your account has been successfully created. You can now sign in and start collaborating.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full"
              onClick={() => navigate('/auth/login')}
            >
              Continue to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Welcome Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary text-primary-foreground p-12 flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-6">You're Invited!</h1>
          <p className="text-lg mb-8 opacity-90">
            Join your team's requirements management platform. Complete your 
            profile to start collaborating with your colleagues.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Join your team</h3>
                <p className="text-sm opacity-75">Connect with colleagues already using the platform</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Role-based access</h3>
                <p className="text-sm opacity-75">Your permissions are tailored to your role</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Start immediately</h3>
                <p className="text-sm opacity-75">Begin contributing to projects right away</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md animate-fade-in border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Accept Invitation</CardTitle>
          <CardDescription className="text-center">
            You've been invited to join <strong>{inviteData.companyName}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{inviteData.companyName}</p>
                <p className="text-sm text-muted-foreground">
                  Invited by {inviteData.inviterName}
                </p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-medium">{inviteData.email}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-muted-foreground">Suggested Role:</span>
                <span className="font-medium">{inviteData.suggestedRole}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                className={cn(errors.fullName && 'border-destructive')}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className={cn(errors.password && 'border-destructive', 'pr-10')}
                  placeholder="Create a strong password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              
              {/* Password Strength Meter */}
              {formData.password && (
                <div className="space-y-1">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          'h-1 flex-1 rounded-full transition-colors',
                          i < passwordStrength ? strengthColors[passwordStrength - 1] : 'bg-muted'
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Strength: {strengthLabels[passwordStrength - 1] || 'Very Weak'}
                  </p>
                </div>
              )}
              
              {errors.password && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.password}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className={cn(errors.confirmPassword && 'border-destructive', 'pr-10')}
                  placeholder="Confirm your password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, acceptTerms: checked as boolean }))
                  }
                />
                <Label htmlFor="acceptTerms" className="text-sm">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </Label>
              </div>
              {errors.acceptTerms && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.acceptTerms}
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Accept Invitation & Create Account'}
            </Button>
          </form>
        </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InviteAccept;