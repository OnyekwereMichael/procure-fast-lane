import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, ArrowLeft, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      // Mock different user states for demo
      const mockUserStates = {
        'admin@company.com': 'admin',
        'pending@company.com': 'pending',
        'unverified@company.com': 'unverified',
        'invited@company.com': 'invited'
      };

      const userState = mockUserStates[formData.email as keyof typeof mockUserStates];

      if (!userState) {
        setError('Invalid email or password');
        setIsLoading(false);
        return;
      }

      // Route based on user state
      switch (userState) {
        case 'admin':
          navigate('/company-admin/roles');
          break;
        case 'pending':
          navigate('/auth/pending-approval');
          break;
        case 'unverified':
          setError('Please verify your email address before signing in');
          break;
        case 'invited':
          navigate('/invite/accept?token=sample-token');
          break;
        default:
          navigate('/dashboard');
      }

      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="h-8 w-8"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>Sign in to your account to continue</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="pr-10"
                  placeholder="Enter your password"
                  required
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
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                  }
                />
                <Label htmlFor="rememberMe" className="text-sm">Remember me</Label>
              </div>
              <Link 
                to="/auth/forgot" 
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link to="/auth/register" className="text-primary hover:underline font-medium">
                Create account
              </Link>
            </div>
          </form>

          {/* Demo Helper */}
          <div className="mt-6 p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground mb-2">Demo accounts:</p>
            <div className="space-y-1 text-xs">
              <p><code className="bg-background px-1 rounded">admin@company.com</code> - Company Admin</p>
              <p><code className="bg-background px-1 rounded">pending@company.com</code> - Pending Approval</p>
              <p><code className="bg-background px-1 rounded">unverified@company.com</code> - Unverified</p>
              <p><code className="bg-background px-1 rounded">invited@company.com</code> - Invited User</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;