import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';

const Forgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  if (isSubmitted) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Welcome Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary text-primary-foreground p-12 flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-6">Reset Your Password</h1>
          <p className="text-lg mb-8 opacity-90">
            Don't worry, it happens to the best of us. Enter your email address 
            and we'll send you a link to reset your password.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Secure reset process</h3>
                <p className="text-sm opacity-75">We'll send a secure link to your registered email</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Quick recovery</h3>
                <p className="text-sm opacity-75">Get back to your work in just a few minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md animate-fade-in border-0 shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle>Reset Link Sent</CardTitle>
            <CardDescription>
              We've sent password reset instructions to your email address
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Mail className="h-4 w-4" />
              <AlertDescription>
                Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.
              </AlertDescription>
            </Alert>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Email
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
    </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/auth/login')}
              className="h-8 w-8"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <CardTitle>Forgot Password?</CardTitle>
              <CardDescription>Enter your email to receive reset instructions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>

            <Alert>
              <Mail className="h-4 w-4" />
              <AlertDescription>
                We'll send you a secure link to reset your password. The link will expire in 1 hour.
              </AlertDescription>
            </Alert>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading || !email}
            >
              {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
            </Button>

            <div className="text-center">
              <Link 
                to="/auth/login" 
                className="text-sm text-primary hover:underline"
              >
                Remember your password? Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forgot;